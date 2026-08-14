import { readFileSync } from 'fs';
import { dirname, join, relative, resolve, sep } from 'path';
import { DocumentLink, Range } from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { URI, Utils } from 'vscode-uri';
import { uriToFsPath } from '../../util/functions';
import { fileIsInFolder, walk } from '../../util/functions-node';
import { MivaManagedTemplatesConfig, MivaMangedTemplatesProviderCompletionType, MivaTemplateLanguageParsedFragment, MivaTemplateLanguageParsedItem, Workspace } from '../../util/interfaces';

const buildFlexComponentPropertyPaths = (properties: any[], prefix: string, previousParent: string[] = []): string[] => {
	let parent = previousParent;
	let paths = [];

	for (let property of properties) {
		if (property.type === 'group') {
			paths = paths.concat(buildFlexComponentPropertyPaths(property.properties, prefix, [...parent, property.code]));

		}
		else if (property.type === 'list' && property.list_type === 'group') {
			paths = paths.concat(finalizeFlexComponentPropertyPath([...parent, `${property.code}:children`], prefix, property.type), buildFlexComponentPropertyPaths(property.properties, prefix, [...parent, `${property.code}:children[1]`]));
		}
		else {
			paths = paths.concat(finalizeFlexComponentPropertyPath([...parent, property.code], prefix, property.type));
		}
	}

	return paths;
};

const finalizeFlexComponentPropertyPathSuffix = (type: string): string[] => {
	switch (type) {
		case 'link':
			return [
				'url',
				'new_tab',
				'type',
				'value'
			];

		case 'list':
			return [''];

		default:
			return ['value'];
	}
};

const finalizeFlexComponentPropertyPath = (propertyPath: string[], prefix: string, type: string): string[] => {
	const suffixes = finalizeFlexComponentPropertyPathSuffix(type);

	return suffixes.map(suffix => `${prefix}:${propertyPath.join(':')}${suffix.length ? `:${suffix}` : ''}`);
};

export class MivaMangedTemplatesProvider {
	private mmtPaths: Set<string> = new Set();

	/**
	 * Attempt to find the "base path" that contains the mmt folder within the workspace
	 */
	async setPaths (workspace: Workspace) {
		this.mmtPaths = new Set();

		for (let workspaceFolder of workspace?.folders) {
			const workspaceFolderPath = uriToFsPath(workspaceFolder.uri);
			const foundPaths = (await walk(workspaceFolderPath, '.mmt/config.json')) ?? [];

			for (let foundPath of foundPaths) {
				this.mmtPaths.add(resolve(dirname(foundPath), '..'))
			}
		}
	}

	getPath (documentPath: string): string {
		for (let mmtPath of this.mmtPaths) {
			if (fileIsInFolder(documentPath, mmtPath)) {
				return mmtPath;
			}
		}
	}

	getFileContents (mmtPath: string, documentPath: string): string {
		const fullPath = join(mmtPath, documentPath);

		return readFileSync(fullPath, 'utf-8');
	}

	getConfig (document: TextDocument): MivaManagedTemplatesConfig {
		const documentPath = uriToFsPath(document.uri);
		const mmtPath = this.getPath(documentPath);
		if (!mmtPath) {
			return void 0;
		}

		const configFileContents = this.getFileContents(mmtPath, '.mmt/config.json');
		if (!configFileContents) {
			return void 0;
		}

		return JSON.parse(configFileContents);
	}

	private getTargetFromRelativePath (relativePath: string, mmtPath: string): string {
		return URI.parse(resolve(mmtPath, relativePath)).toString();
	}

	private getMmtPathParts (documentPath: string, mmtPath: string): string[] {
		const relativePath = relative(mmtPath, documentPath);

		return relativePath
			?.split(new RegExp(sep, 'g'))
			?.map(split => split?.toLowerCase());
	}

	async provideLinks (parsedItems: MivaTemplateLanguageParsedItem[], parsedFragments: MivaTemplateLanguageParsedFragment[], document: TextDocument): Promise<DocumentLink[]> {
		const documentPath = uriToFsPath(document.uri);
		const mmtPath = this.getPath(documentPath);
		if (!mmtPath) {
			return [];
		}

		const fileName = Utils.basename(URI.parse(document.uri))?.replace('.mvt', '');
		const reservedFirstParts = [
			'cssui',
			'email'
		];
		const foundDashIndex = fileName.indexOf('-');
		const fileNameFirstPart = fileName.slice(0, foundDashIndex === -1 ? undefined : foundDashIndex);
		const fileNameRoot = (fileNameFirstPart === fileName || !reservedFirstParts.every(firstPart => fileNameFirstPart === firstPart))
			? fileName
			: fileNameFirstPart;

		const [firstFolder] = this.getMmtPathParts(documentPath, mmtPath) ?? [];

		const links: DocumentLink[] = [];

		for (let parsedItem of parsedItems) {
			const nameLower = parsedItem.name?.toLowerCase();
			const paramNameLower = parsedItem?.param?.toLowerCase();

			switch (nameLower) {
				case 'templatefeed': {
					if (parsedItem.range) {
						const fileNameLower = fileName?.toLowerCase();
						const relativePaths = [
							{
								tooltip: 'Follow link to iterator template',
								path: `./templates/TEMPLATEFEED_iterator-${fileNameLower}-templatefeed.mvt`
							},
							{
								tooltip: 'Follow link to footer template',
								path: `./templates/TEMPLATEFEED_footer-${fileNameLower}-templatefeed.mvt`
							},
							{
								tooltip: 'Follow link to settings template',
								path: `./templates/TEMPLATEFEED_settings-${fileNameLower}-templatefeed.mvt`
							}
						];

						for (let relativePath of relativePaths) {
							const target = this.getTargetFromRelativePath(relativePath.path, mmtPath);

							links.push({
								tooltip: relativePath.tooltip,
								range: parsedItem.range,
								target
							});
						}
					}

					break;
				}
				case 'product_display_imagemachine': {
					const param = paramNameLower?.replace('_deferred', '');

					if (param === 'head') {
						const relativePath = `./templates/${fileNameRoot}-${nameLower}-${param}.mvt`;
						const target = this.getTargetFromRelativePath(relativePath, mmtPath);

						links.push({
							range: Range.create(document.positionAt(parsedItem.expression.start), document.positionAt(parsedItem.expression.end)),
							target
						});
					}

					break;
				}
				// <mvt:item name="hdft" param="global_header" /> | <mvt:item name="hdft" param="global_footer" /> | <mvt:item name="hdft" param="header" /> | <mvt:item name="hdft" param="footer" />
				case 'hdft': {
					switch (paramNameLower) {
						case 'global_header':
						case 'global_footer': {
							const relativePath = `./templates/cssui-${paramNameLower.replace(/_/g, '-')}.mvt`;
							const target = this.getTargetFromRelativePath(relativePath, mmtPath);

							links.push({
								range: Range.create(document.positionAt(parsedItem.expression.start), document.positionAt(parsedItem.expression.end)),
								target
							});

							break;
						}
						case 'header':
						case 'footer': {
							const relativePath = `./templates/${fileNameRoot}-${paramNameLower}.mvt`;
							const target = this.getTargetFromRelativePath(relativePath, mmtPath);

							links.push({
								range: Range.create(document.positionAt(parsedItem.expression.start), document.positionAt(parsedItem.expression.end)),
								target
							});

							break;
						}
						default:
							break;
					}

					break;
				}
				// <mvt:item name="head" param="head_tag" />
				case 'head': {
					if (paramNameLower === 'head_tag') {
						const relativePath = `./templates/cssui-global-head.mvt`;
						const target = this.getTargetFromRelativePath(relativePath, mmtPath);

						links.push({
							range: Range.create(document.positionAt(parsedItem.expression.start), document.positionAt(parsedItem.expression.end)),
							target
						});
					}
					// <mvt:item name="head" param="css:mmx-text" />
					else {
						const firstColonIndex = paramNameLower.indexOf(':');
						if (firstColonIndex !== -1) {
							const resourceType = paramNameLower.slice(0, firstColonIndex);
							const resourceName = paramNameLower.slice(firstColonIndex + 1);

							const relativePath = `./${resourceType}/${resourceName}.json`;
							const target = this.getTargetFromRelativePath(relativePath, mmtPath);

							links.push({
								range: Range.create(document.positionAt(parsedItem.expression.start), document.positionAt(parsedItem.expression.end)),
								target
							});
						}
					}

					break;
				}
				// <mvt:item name="html_profile" />
				case 'html_profile': {
					if (parsedItem.range) {
						const relativePath = `./templates/cssui-${nameLower.replace(/_/g, '-')}.mvt`;
						const target = this.getTargetFromRelativePath(relativePath, mmtPath);

						links.push({
							range: parsedItem.range,
							target
						});
					}

					break;
				}
				case 'buttons': {
					const relativePath = `./properties/cssui_button/${paramNameLower}.mvt`;
					const target = this.getTargetFromRelativePath(relativePath, mmtPath);

					links.push({
						range: Range.create(document.positionAt(parsedItem.expression.start), document.positionAt(parsedItem.expression.end)),
						target
					});

					break;
				}
				case 'breadcrumbs': {
					if (parsedItem.range) {
						const relativePath = `./templates/cssui-${nameLower}.mvt`;
						const target = this.getTargetFromRelativePath(relativePath, mmtPath);

						links.push({
							range: parsedItem.range,
							target
						});
					}

					break;
				}
				case 'readytheme': {
					for (let fn of parsedItem?.expression?.functions) {
						const fnTextLower = fn.text?.toLowerCase();

						switch (fnTextLower) {
							case 'load_navigationset':
							case 'navigationset':
							case 'load_contentsection':
							case 'contentsection': {
								const firstParameterString = fn?.parameters?.[0]?.strings?.[0];

								if (firstParameterString) {
									const relativePath = `./properties/readytheme_${fnTextLower?.replace('load_', '')}/${firstParameterString?.text}.mvt`;
									const target = this.getTargetFromRelativePath(relativePath, mmtPath);

									links.push({
										range: Range.create(document.positionAt(firstParameterString.start), document.positionAt(firstParameterString.end)),
										target
									});
								}

								break;
							}
							case 'load_banner':
							case 'banner':
							case 'load_image':
							case 'image': {
								const firstParameterString = fn?.parameters?.[0]?.strings?.[0];

								if (firstParameterString) {
									const relativePath = `./properties/readytheme_${fnTextLower?.replace('load_', '')}/${firstParameterString?.text}.json`;
									const target = this.getTargetFromRelativePath(relativePath, mmtPath);

									links.push({
										range: Range.create(document.positionAt(firstParameterString.start), document.positionAt(firstParameterString.end)),
										target
									});
								}

								break;
							}
							default:
								break;
						}
					}

					break;
				}
				case 'facets': {
					if (parsedItem.range) {
						const relativePath = `./templates/cssui-prodlist-facets.mvt`;
						const target = this.getTargetFromRelativePath(relativePath, mmtPath);

						links.push({
							range: parsedItem.range,
							target
						});
					}

					break;
				}
				case 'navbar': {
					if (parsedItem.range) {
						const relativePath = `./templates/cssui-navbar.mvt`;
						const target = this.getTargetFromRelativePath(relativePath, mmtPath);

						links.push({
							range: parsedItem.range,
							target
						});
					}

					break;
				}
				case 'category_tree': {
					if (parsedItem.range) {
						const relativePath = `./templates/cattree.mvt`;
						const target = this.getTargetFromRelativePath(relativePath, mmtPath);

						links.push({
							range: parsedItem.range,
							target
						});
					}

					break;
				}
				default: {
					if (!paramNameLower && firstFolder === 'templates' && fileNameFirstPart !== 'cssui') {
						const relativePath = `./templates/${fileNameRoot}-${nameLower}.mvt`;
						const target = this.getTargetFromRelativePath(relativePath, mmtPath);

						links.push({
							range: parsedItem.range,
							target
						});
					}

					break;
				}
		}
		}

		for (let parsedFragment of parsedFragments) {
			const codeLower = parsedFragment.code.toLowerCase();

			const relativePath = `./templates/${codeLower}.mvt`;
			const target = this.getTargetFromRelativePath(relativePath, mmtPath);

			links.push({
				range: parsedFragment.range,
				target
			});
		}

		return links;
	}

	provideCompletions (document: TextDocument, type: MivaMangedTemplatesProviderCompletionType): string[] {
		const documentPath = uriToFsPath(document.uri);
		const mmtPath = this.getPath(documentPath);
		if (!mmtPath) {
			return [];
		}

		const fileName = Utils.basename(URI.parse(document.uri))?.replace('.mvt', '')?.toLowerCase();
		const [firstFolder] = this.getMmtPathParts(documentPath, mmtPath) ?? [];

		const completions: string[] = [];

		switch (type) {
			case MivaMangedTemplatesProviderCompletionType.Variable: {
				// Flex Components
				if (firstFolder === 'templates') {
					const flexComponentInstanceTemplatePrefix = 'flex-instance-template-';

					if (fileName.startsWith(flexComponentInstanceTemplatePrefix)) {
						// Isolate the flex component code
						const flexComponentCode = fileName.replace(flexComponentInstanceTemplatePrefix, '');

						if (flexComponentCode) {
							const flexComponentJson = this.getFileContents(mmtPath, `properties/flex/${flexComponentCode}.json`);

							if (flexComponentJson) {
								const parsedFlexComponentJson = JSON.parse(flexComponentJson);

								if (parsedFlexComponentJson) {
									const propertyPaths = buildFlexComponentPropertyPaths(parsedFlexComponentJson.properties, 'l.settings:instance');
									const advancedPropertyPaths = buildFlexComponentPropertyPaths(parsedFlexComponentJson.advanced_properties, 'l.settings:instance:advanced');

									return [
										...propertyPaths,
										...advancedPropertyPaths
									];
								}
							}
						}
					}
				}

				return completions;
			}

			default:
				return completions;
		}
	}
}
