import _get from 'lodash.get';
import { MivaExpressionParser } from 'miva-expression-parser/dist/esm';
import {
	getCSSLanguageService
} from 'vscode-css-languageservice/lib/esm/cssLanguageService';
import {
	TokenType,
	getLanguageService
} from 'vscode-html-languageservice/lib/esm/htmlLanguageService';
import {
	ClientCapabilities,
	CodeAction,
	CodeActionKind,
	CompletionItem,
	CompletionList,
	Diagnostic,
	DiagnosticSeverity,
	DocumentLink,
	Location,
	MarkupContent,
	Position,
	Range,
	SymbolKind,
	TextEdit
} from 'vscode-languageserver';
import {
	TextDocument
} from 'vscode-languageserver-textdocument';
import { URI, Utils } from 'vscode-uri';
import builtinFunctionData from './data/functions-builtin.json';
import merchantFunctionFiles from './data/functions-merchant.json';
import globalVariableData from './mv/global-variables';
import mvOperatorData from './mv/operators';
import systemVariableData from './mv/system-variables';
import { mvSnippetData, mvTagData } from './mv/tags';
import mvtEntityData from './mvt/entities';
import mvtItemData from './mvt/items';
import { generateMvtSnippets, generateMvtTags } from './mvt/tags';
import validationTests from './mvt/validation.json';
import {
	filterTagData,
	findOpenTag,
	formatDoValueCompletion,
	formatGenericDocumentation,
	formatItemParamDocumentation,
	formatTagAttributeDocumentation,
	formatTagAttributeValueDocumentation,
	formatTagDocumentation,
	getDoValueCompletions,
	getEntityAtOffset,
	getHoverMapFromCompletionFile,
	getNodeAtOffset,
	getVariableAtOffset,
	getWordAtOffset,
	isTagSelfClosing,
	parseCompletion,
	parseCompletionFile,
	safeMatch,
	tokenize,
	unique
} from './util/functions';
import {
	ActivationProviders,
	LanguageFeatures,
	MivaMangedTemplatesProviderCompletionType,
	MivaScriptFunction,
	MivaTemplateLanguageParsedFragment,
	MivaTemplateLanguageParsedItem,
	MvLanguageModel,
	MvtLanguageModel,
	Settings,
	SymbolInformationWithDocumentation,
	TagData,
	TagSnippet,
	ValidationData,
	ValidationDataType,
	Workspace
} from './util/interfaces';
import { getLanguageModelCache } from './util/language-model-cache';
import patterns from './util/patterns';

export function activateFeatures({workspaceSymbolProvider, mivaScriptCompilerProvider, mivaManagedTemplatesProvider}: ActivationProviders) {

	// Define HTML Language Service helper
	const htmlLanguageService = getLanguageService();

	// Constants
	const BOUNDARY_AMOUNT = 200;
	const MAX_LINE_LENGTH = 9999;

	// Completion data
	const doValueCompletions: CompletionList = getDoValueCompletions( merchantFunctionFiles );
	const doValueHoverMap: Map<string, MarkupContent> = getHoverMapFromCompletionFile( doValueCompletions.items, true );
	const builtinFunctionCompletions: CompletionList = CompletionList.create( parseCompletionFile( builtinFunctionData ) );
	const builtinFunctionHoverMap: Map<string, MarkupContent> = getHoverMapFromCompletionFile( builtinFunctionData, false );
	const systemVariableCompletions: CompletionList = CompletionList.create( parseCompletionFile( Object.values( systemVariableData ) ) );
	const globalVariableCompletions: CompletionList = CompletionList.create( parseCompletionFile( Object.values( globalVariableData ) ) );
	const operatorCompletions: CompletionList = CompletionList.create( parseCompletionFile( Object.values( mvOperatorData ) ) );

	// Document cache for Miva Script (this is globally defined since we use .mv documents in MVT for LSK lookups)
	const mvDocumentFunctions: Map<string, {functionCompletionItems: CompletionItem[], functionCompletionMap: Map<string, MarkupContent>}> = new Map();
	const mvDocuments = getLanguageModelCache<MvLanguageModel>( 500, 60, (document: TextDocument) => {
		const {symbols, links, functions, functionCompletionItems, functionCompletionMap} = _mvFindDocumentSymbols(document);

		return {
			links,
			symbols,
			functions,
			functionCompletionItems,
			functionCompletionMap,
			document
		};
	});

	// Lsk Symbols array
	let mivaScriptWorkspaceSymbols: SymbolInformationWithDocumentation[] = [];
	let mivaScriptWorkspaceSymbolsLoading: boolean = false;

	// Helper function for "variable" completion target list
	const getVariableCompletions = (left: string, mivaDocument: TextDocument): CompletionList | null => {
		const providerCompletionsAllTypes = mivaManagedTemplatesProvider?.provideCompletions(mivaDocument, MivaMangedTemplatesProviderCompletionType.Variable) || [];

		// system variables
		if ( patterns.SHARED.LEFT_VARIABLE_S.test( left ) ) {
			return systemVariableCompletions;
		}

		// get full text
		const mivaDocumentText = mivaDocument.getText();

		// global variables
		if ( patterns.SHARED.LEFT_VARIABLE_G.test( left ) ) {

			const variableMatches = left.match(patterns.SHARED.LEFT_VARIABLE_G) || [];
			const _foundVariable = variableMatches[0] || '';
			const foundVariable = _foundVariable.slice(0, _foundVariable.lastIndexOf(':') + 1);
			const foundVariableRegex = new RegExp(`^${foundVariable.replace(/(?<=\[)[0-9]+(?=\])/g, '[0-9]+')}`);

			const foundVariables = [].concat(
				mivaDocumentText.match( patterns.SHARED.VARIABLES_G ) || [],
				mivaDocumentText.match( patterns.MVT.ENTITIES_G ) || [],
				providerCompletionsAllTypes
					.map(completion => {
						const matchedCompletion = completion.match(patterns.SHARED.LEFT_VARIABLE_G) || [];

						if (matchedCompletion) {
							return matchedCompletion[0] || '';
						}
					})
			)
				?.filter( unique )
				?.filter(_variable => foundVariableRegex.test(_variable))
				?.map(_variable => _variable.replace(foundVariableRegex, ''));

			return CompletionList.create(
				[
					...globalVariableCompletions.items,
					...foundVariables.map((variable) => {
						return parseCompletion({
							"label": variable,
							"kind": "Variable",
							"detail": variable,
							"documentation": "",
							"commitCharacters": []
						});
					})
				]
			);

		}

		// local variables
		if ( patterns.SHARED.LEFT_VARIABLE_L.test( left ) ) {

			const variableMatches = left.match(patterns.SHARED.LEFT_VARIABLE_L) || [];
			const _foundVariable = variableMatches[0] || '';
			const foundVariable = _foundVariable.slice(0, _foundVariable.lastIndexOf(':') + 1);
			const foundVariableRegex = new RegExp(`^${foundVariable.replace(/(?<=\[)[0-9]+(?=\])/g, '[0-9]+')}`);

			const foundVariables = [].concat(
				mivaDocumentText.match( patterns.SHARED.VARIABLES_L ) || [],
				foundVariable.startsWith('settings')
					? (mivaDocumentText.match( patterns.SHARED.VARIABLES_LSETTINGS ) || []).map(_variable => 'settings:' + _variable)
					: [],
				providerCompletionsAllTypes
					.map(completion => {
						const matchedCompletion = completion.match(patterns.SHARED.LEFT_VARIABLE_L) || [];

						if (matchedCompletion) {
							return matchedCompletion[0] || '';
						}
					})
			)
				?.filter( unique )
				?.filter(_variable => foundVariableRegex.test(_variable))
				?.map(_variable => _variable.replace(foundVariableRegex, ''));

			return CompletionList.create(
				foundVariables.map((variable) => {
					return parseCompletion({
						"label": variable,
						"kind": "Variable",
						"detail": variable,
						"documentation": "",
						"commitCharacters": []
					});
				})
			);

		}

		return null;
	};

	function baseMVTFeatures(workspace: Workspace, clientCapabilities: ClientCapabilities): LanguageFeatures {

		const parseMvtDocument = ( document: TextDocument ) => {
			const symbols: SymbolInformationWithDocumentation[] = [];
			const parsedItems: MivaTemplateLanguageParsedItem[] = [];
			const parsedFragments: MivaTemplateLanguageParsedFragment[] = [];

			const scanner = htmlLanguageService.createScanner( document.getText(), 0 );
			let token = scanner.scan();
			let lastTagName: string | undefined = undefined;
			let lastAttributeName: string | undefined = undefined;
			let lastItemValue: string | undefined = undefined;
			let lastItemValueRange: Range | undefined = undefined;
			let lastItemParam: string | undefined = undefined;

			while ( token !== TokenType.EOS ) {

				switch ( token ) {

					case TokenType.StartTag:
						lastTagName = scanner.getTokenText().toLowerCase();
						lastItemValue = undefined;
						lastItemValueRange = undefined;
						lastItemParam = undefined;
						break;

					case TokenType.AttributeName:
						lastAttributeName = scanner.getTokenText().toLowerCase();
						break;

					case TokenType.AttributeValue:
						// Get attributeValue
						let attributeValue = scanner.getTokenText().replace( /"/g, '' );

						// Create range
						const range = Range.create(
							document.positionAt( scanner.getTokenOffset() + 1 ),
							document.positionAt( scanner.getTokenOffset() + scanner.getTokenLength() - 1 )
						);

						if ( ( lastTagName === 'mvt:assign' || lastTagName === 'mvt:capture' || lastTagName === 'mvt:do' || lastTagName === 'mvt:foreach' ) && ( lastAttributeName === 'name' || lastAttributeName === 'variable' || lastAttributeName === 'iterator' ) ) {
							// Only push if attributeValue is truthy
							if (attributeValue) {

								// Add l.settings to iterator value
								if (lastAttributeName === 'iterator') {
									attributeValue = `l.settings:${attributeValue}`;
								}

								const selfClosing = isTagSelfClosing(lastTagName);

								// Create references to variable symbols
								symbols.push(
									{
										documentation: {
											kind: 'markdown',
											value: [
												'',
												`Defined on Ln ${range.start.line + 1}, Col ${range.start.character + 1}`,
												'',
												'```mvt',
												selfClosing
													? `<${lastTagName} ${lastAttributeName}="${attributeValue}" />`
													: `<${lastTagName} ${lastAttributeName}="${attributeValue}">\n\t...\n</${lastTagName}>`,
												'```',
												''
											].join('\n')
										},
										kind: SymbolKind.Variable,
										name: attributeValue,
										location: Location.create(
											document.uri,
											range
										)
									}
								);
							}

						}
						else if ( lastTagName === 'mvt:item' ) {
							if (lastAttributeName === 'name') {
								lastItemValue = attributeValue;
								lastItemValueRange = range;
							}
							else if (lastItemValue && lastAttributeName === 'param') {
								lastItemParam = attributeValue;

								const parser = new MivaExpressionParser();
								const parsedExpression = parser.parse(attributeValue, scanner.getTokenOffset() + 1);

								parsedItems.push({
									name: lastItemValue,
									param: attributeValue,
									expression: parsedExpression
								});
							}
						}
						else if ( lastTagName === 'mvt:fragment' ) {
							if (lastAttributeName === 'code') {
								parsedFragments.push({
									code: attributeValue,
									range: range
								});
							}
						}
						break;

					case TokenType.StartTagSelfClose:
						if (lastTagName === 'mvt:item' && lastItemValue && !lastItemParam) {
							parsedItems.push({
								name: lastItemValue,
								range: lastItemValueRange
							});

							lastItemValue = undefined;
							lastItemValueRange = undefined;
							lastItemParam = undefined;
						}
						break;
				}

				token = scanner.scan();

			}

			return {
				symbols,
				parsedItems,
				parsedFragments
			};
		};

		const buildTagCompletionData = (settings: Settings, languageId: string) => {
			mvtSnippetData = generateMvtSnippets(settings, languageId);

			if (settingsChanged) {
				mvtTagData = generateMvtTags(settings);
			}

			mvtTagAndSnippetData = {
				...mvtSnippetData,
				...mvtTagData
			};

			mvtTagCompletions = CompletionList.create( parseCompletionFile( Object.values( mvtTagAndSnippetData ) ) );

			settingsChanged = false;
		};

		const mvtDocuments = getLanguageModelCache<MvtLanguageModel>( 10, 60, (document: TextDocument) => {
			const {symbols, parsedItems, parsedFragments} = parseMvtDocument( document );

			return {
				symbols,
				document,
				parsedItems,
				parsedFragments
			};
		});

		// Variable to determine if settings have changed
		let settingsChanged = true;

		// MVT-specific completion data
		let mvtTagData: Record<string, TagData>;
		let mvtSnippetData: Record<string, TagSnippet>;
		let mvtTagAndSnippetData: Record<string, TagData | TagSnippet>;
		let mvtTagCompletions: CompletionList;
		const entityCompletions: CompletionList = CompletionList.create( parseCompletionFile( Object.values( mvtEntityData ) ) );

		_createMivaScriptWorkspaceSymbols(workspace, workspace.settings);

		return {

			onWorkspaceChange () {
				mivaManagedTemplatesProvider?.setPaths(workspace);

				mivaScriptWorkspaceSymbolsLoading = false;
			},

			onConfigurationChange () {
				settingsChanged = true;
				mivaScriptWorkspaceSymbolsLoading = false;
			},

			doValidation( document: TextDocument, settings: Settings ) {

				buildTagCompletionData( settings, document.languageId );

				const {document: mvtDocument} = mvtDocuments.get( document );

				// get full text of the document
				const text = mvtDocument.getText();

				// Check if any mvt tags are mismatched
				const mismatchedTags: Diagnostic[] = [];
				const parsedDocument = htmlLanguageService.parseHTMLDocument(document);
				const blockTagList = Object.values(mvtTagData).filter(td => !td?.selfClosing).map(td => td?.label?.toLowerCase());
				const openTag = findOpenTag(parsedDocument.roots, blockTagList);
				if (openTag) {
					mismatchedTags.push({
						range: Range.create(document.positionAt(openTag.start), document.positionAt(openTag.startTagEnd)),
						severity: DiagnosticSeverity.Error,
						message: `Missing closing ${openTag.tag} tag.`,
						source: 'Miva IDE'
					});
				}

				// build diagnostics array
				const validationJsonDiagnostics = validationTests.reduce(( diagnostics: Diagnostic[], validation: any ) => {

					// validate configured setting to check - exit if not valid
					if ( validation.checkSetting != null && !_get( settings, validation.checkSetting ) ) {
						return diagnostics;
					}

					// create the pattern to match
					const pattern = new RegExp( validation.match, 'igm' );
					let match: RegExpExecArray;
					let count = 0;
					while ( (match = pattern.exec( text )) && count < 1000 ) {
						count++;
						diagnostics.push(
							{
								range: Range.create( mvtDocument.positionAt( match.index ), mvtDocument.positionAt( match.index + match[ validation.matchIndex ].length ) ),
								message: `[${ validation.problem.type.toLowerCase() }] - ${ tokenize( validation.problem.message, match ) }`,
								severity: DiagnosticSeverity[ validation.problem.type ],
								source: 'Miva IDE',
								data: validation.data,
								code: validation.code,
							}
						);
					}

					return diagnostics;

				}, []);

				return [
					...validationJsonDiagnostics,
					...mismatchedTags
				];
			},

			doCodeAction( document, codeActionRange, context ) {

				const actions: CodeAction[] = [];

				const {document: mvtDocument} = mvtDocuments.get( document );

				// Loop through diagnostics and do something
				for (let diagnostic of context?.diagnostics) {
					const diagnosticData: ValidationData = diagnostic.data;

					// If data exists then handle it
					if (diagnosticData) {

						// Get text from diagnostic range
						const range = diagnostic.range;
						const text = mvtDocument.getText(range);

						// Handle replacements
						if (diagnosticData.type === ValidationDataType.REPLACEMENT) {
							for (let replacement of diagnosticData?.replacements) {

								// Push action for each replacement
								actions.push({
									title: replacement.message,
									diagnostics: [diagnostic],
									isPreferred: replacement.isPreferred || false,
									edit: {
										changes: {
											[document.uri]: [
												{
													newText: replacement.text.replace( '$0', text ),
													range: range
												}
											]
										}
									},
									kind: CodeActionKind.QuickFix
								});
							}
						}
					}
				}

				return actions;
			},

			doCompletion( document: TextDocument, position: Position, settings: Settings ): CompletionList {

				buildTagCompletionData( settings, document.languageId );

				const {document: mvtDocument} = mvtDocuments.get( document );
				const parsedDocument = htmlLanguageService.parseHTMLDocument(document);

				// determine left side text range
				const cursorPositionOffset = mvtDocument.offsetAt( position );
				const leftOffset = cursorPositionOffset - BOUNDARY_AMOUNT;
				const leftRange = Range.create(
					mvtDocument.positionAt( leftOffset ),
					position
				);
				const left = mvtDocument.getText( leftRange ) || '';

				// determine right side text range
				const rightOffset = cursorPositionOffset + BOUNDARY_AMOUNT;
				const rightRange = Range.create(
					position,
					mvtDocument.positionAt( rightOffset )
				);
				const right = mvtDocument.getText( rightRange ) || '';

				// mvt:do tag value attribute completions
				if (
					patterns.MVT.LEFT_IN_MVTDO_TAG.test( left ) &&
					patterns.SHARED.RIGHT_IN_TAG.test( right ) &&
					patterns.SHARED.LEFT_IN_VALUE_ATTR.test( left )
				) {
					return doValueCompletions;
				}

				// document-specific entity completions
				if (
					patterns.MVT.LEFT_AFTER_AMP.test( left )
				) {
					return entityCompletions;
				}

				// After an entity (&mv**)
				if ( patterns.MVT.LEFT_AFTER_ENTITY_COLON.test( left ) ) {

					// get full text
					const mvtDocumentText = mvtDocument.getText();

					const variableMatches = left.match(patterns.MVT.LEFT_AFTER_ENTITY_COLON) || [];
					const _foundVariable = variableMatches[0] || '';
					const foundVariable = _foundVariable.slice(0, _foundVariable.lastIndexOf(':') + 1);
					const foundVariableRegex = new RegExp(`^${foundVariable.replace(/(?<=\[)[0-9]+(?=\])/g, '[0-9]+')}`);

					const foundVariables = [].concat(
						mvtDocumentText.match( patterns.SHARED.VARIABLES_LSETTINGS ) || [],
						mvtDocumentText.match( patterns.SHARED.VARIABLES_G )?.map(_variable => 'global:' + _variable) || [],
						mvtDocumentText.match( patterns.MVT.ENTITIES ) || [],
					)
						?.filter( unique )
						?.filter(_variable => foundVariableRegex.test(_variable))
						?.map(_variable => _variable.replace(foundVariableRegex, ''));

					return CompletionList.create(
						foundVariables.map((variable) => {
							return parseCompletion({
								"label": variable,
								"kind": "Variable",
								"detail": variable,
								"documentation": "",
								"commitCharacters": [],
								"insertText": `${ variable };`
							});
						})
					);

				}

				// tag-specific
				if ( patterns.MVT.LEFT_IN_MVT_TAG.test( left ) ) {

					// Determine which tag we are in
					const [, tagName] = safeMatch(left, patterns.MVT.LEFT_TAG_NAME);
					const tagNameLower = tagName?.toLowerCase();

					// Attempt to get tag from name
					const foundTag = mvtTagData[tagNameLower];
					if (foundTag) {
						const currentNode = getNodeAtOffset(cursorPositionOffset, parsedDocument) || parsedDocument.findNodeAt(cursorPositionOffset);

						const foundTagAttributes = foundTag.attributes;
						if (foundTagAttributes) {

							// Tag attribute value completions
							if (patterns.SHARED.LEFT_IN_ATTR.test( left )) {
								const [, attributeName] = safeMatch(left, patterns.SHARED.LEFT_ATTR_NAME);
								const attributeNameLower = attributeName?.toLowerCase();

								const foundAttribute = foundTag.attributes[attributeNameLower];
								if (foundAttribute) {
									switch (foundAttribute.valueType) {
										case 'variable':
											return getVariableCompletions(left, mvtDocument);
										default:
										case 'expression': {
											const variableCompletions = getVariableCompletions(left, mvtDocument);
											if (variableCompletions) {
												return variableCompletions;
											}

											return CompletionList.create([
												...operatorCompletions.items,
												...builtinFunctionCompletions.items
											]);
										}
										case 'function': {
											if (tagNameLower === 'item') {
												// Get item name
												const [,, itemName] = left.match(patterns.MVT.LEFT_ITEM_NAME) || right.match(patterns.MVT.RIGHT_ITEM_NAME) || [];
												const foundItem = mvtItemData[itemName];

												// Create completion list from params object
												if (foundItem && foundItem.params) {
													if (patterns.SHARED.LEFT_IN_FUNCTION.test( left )) {
														const variableCompletions = getVariableCompletions(left, mvtDocument);
														if (variableCompletions) {
															return variableCompletions;
														}
													}

													return CompletionList.create( parseCompletionFile( Object.values( foundItem.params ) ) );
												}
											}

											return null;
										}
										case 'string':
											return CompletionList.create( parseCompletionFile( Object.values( foundAttribute.values || {} ) ) );
									}
								}
							}

							// Get list of available attributes
							const availableAttributes = Object.values( foundTagAttributes )
								.filter(attr => Object.keys(currentNode?.attributes)?.filter(_attr => _attr.toLowerCase() === attr.label.toLowerCase())?.length === 0);

							// Tag attribute completions
							return availableAttributes.length > 0
								? CompletionList.create( parseCompletionFile( availableAttributes ) )
								: CompletionList.create([]);
						}
					}

					return null;
				}

				/**
				 * Used to determine if the tag starts with either <mvt: mvt: or < and removes that portion with an additionalTextEdit after completion
				 */
				const determineAdditionalTextEdits = (): TextEdit[] => {
					const foundMatch = [
						'<mvt:',
						'mvt:',
						'<'
					].find(match => left.endsWith(match));

					return foundMatch
						? [
							TextEdit.del(Range.create(
								mvtDocument.positionAt( cursorPositionOffset - foundMatch.length ),
								position
							))
						]
						: [];
				};

				// Define additional text edits and add them to the completions items via a map
				const additionalTextEdits = determineAdditionalTextEdits();

				return CompletionList.create([
					...additionalTextEdits.length > 0
						? mvtTagCompletions.items.map(mvtTagCompletion => {
							return {
								...mvtTagCompletion,
								additionalTextEdits
							};
						})
						: mvtTagCompletions.items,
					{
						label: '@@@LANGUAGESESRVICE@@@' // To be replaced by that language's native service result
					}
				]);
			},

			async findDefinition( document: TextDocument, position: Position, settings: Settings ) {

				const {document: mvtDocument, symbols: documentSymbols} = mvtDocuments.get( document );

				const line = mvtDocument.getText( Range.create( position.line, 0, position.line, MAX_LINE_LENGTH ) );
				const word = getWordAtOffset( line, position.character )?.toLowerCase();
				const variable = getVariableAtOffset( line, position.character )?.toLowerCase();
				const entity = getEntityAtOffset( line, position.character )?.toLowerCase();

				await _createMivaScriptWorkspaceSymbols(workspace, settings);

				return [
					...documentSymbols,
					...mivaScriptWorkspaceSymbols
				]
					?.filter(( symbol ) => {
						const nameLower: string = symbol?.name?.toLowerCase();
						return nameLower === entity || nameLower === variable || nameLower === word;
					})
					?.map( symbol => symbol.location );
			},

			async onHover ( document: TextDocument, position: Position, settings: Settings ) {
				const defaultReturnValue = {
					contents: '@@@LANGUAGESESRVICE@@@'
				};

				// Check if hover has been disabled
				if (settings.MVT?.disableHoverDocumentation) {
					return defaultReturnValue;
				}

				buildTagCompletionData( settings, document.languageId );

				await _createMivaScriptWorkspaceSymbols(workspace, settings);

				const {document: mvtDocument, symbols: documentSymbols} = mvtDocuments.get( document );

				// Get word
				const line = mvtDocument.getText( Range.create( position.line, 0, position.line, MAX_LINE_LENGTH ) );
				const word = getWordAtOffset( line, position.character );

				// Exit if word is null
				if (!word) {
					return null;
				}

				// Get lowercase version of word
				const wordLower = word.toLowerCase();

				// determine left side text range
				const cursorPositionOffset = mvtDocument.offsetAt( position );
				const leftOffset = cursorPositionOffset - BOUNDARY_AMOUNT;
				const leftRange = Range.create(
					mvtDocument.positionAt( leftOffset ),
					position
				);
				const left = mvtDocument.getText( leftRange ) || '';

				// determine right side text range
				const rightOffset = cursorPositionOffset + BOUNDARY_AMOUNT;
				const rightRange = Range.create(
					position,
					mvtDocument.positionAt( rightOffset )
				);
				const right = mvtDocument.getText( rightRange ) || '';

				// Check for various hover scenarios

				// System variable hover
				if (patterns.SHARED.LEFT_VARIABLE_S.test(left)) {
					const foundSystemVariable = systemVariableData[wordLower];
					if (foundSystemVariable) {
						return {
							contents: foundSystemVariable.documentation
						};
					}
				}

				// System variable hover
				if (patterns.SHARED.LEFT_VARIABLE_G.test(left)) {
					const foundGlobalVariable = globalVariableData[wordLower];
					if (foundGlobalVariable) {
						return {
							contents: foundGlobalVariable.documentation
						};
					}
				}

				// Tag name hover
				if (patterns.MVT.LEFT_IN_MVT_TAG.test(left)) {
					// Determine which tag we are in
					const [, tagName] = safeMatch(left, patterns.MVT.LEFT_TAG_NAME);
					const tagNameLower = tagName?.toLowerCase();

					// Attempt to get tag from name
					const foundTagRegex = mvtTagData[tagNameLower];

					// Do stuff with found tag (via regex)
					if (foundTagRegex) {

						// Item functions
						if (tagNameLower === 'item') {
							// Get item name
							const [,, itemName] = left.match(patterns.MVT.LEFT_ITEM_NAME) || right.match(patterns.MVT.RIGHT_ITEM_NAME) || [];
							const foundItem = mvtItemData[itemName];

							// Get matching param
							if (foundItem) {
								const foundParam = foundItem?.params[wordLower];
								if (foundParam) {
									return {
										contents: formatItemParamDocumentation(foundItem, foundParam)
									};
								}
							}
						}

						// Do functions
						if (tagNameLower === 'do') {
							// Get item name
							const [,, doFile] = left.match(patterns.SHARED.LEFT_DO_FILE) || right.match(patterns.SHARED.RIGHT_DO_FILE) || [];
							const key = `${doFile?.trim()?.toLowerCase()}@${wordLower}`;

							const foundDoHover = doValueHoverMap.get(key);
							if (foundDoHover) {
								return {
									contents: foundDoHover
								};
							}
						}

						// Function Hover
						if (patterns.SHARED.RIGHT_IS_OPEN_PAREN.test(right)) {

							// Builtin function lookup
							const foundBuiltinHover = builtinFunctionHoverMap.get(wordLower);
							if (foundBuiltinHover) {
								return {
									contents: foundBuiltinHover
								};
							}
						}

						// Find attribute data on found tag name
						const foundAttributes = foundTagRegex.attributes;
						if (foundAttributes) {
							// Find attribute data with word
							const foundAttribute = foundAttributes[wordLower];

							// Return hover for attribute if found
							if (foundAttribute) {
								return {
									contents: formatTagAttributeDocumentation(foundTagRegex, foundAttribute)
								};
							}

							// Return hover for attribute value if found
							if (patterns.SHARED.LEFT_IN_ATTR.test(left)) {
								// Find attribute data with word
								const [, attributeName] = safeMatch(left, patterns.SHARED.LEFT_ATTR_NAME);
								const foundAttribute = foundAttributes[attributeName];
								const foundAttributeValue = foundAttribute?.values?.[wordLower];

								if (foundAttributeValue && foundAttributeValue.documentation) {
									return {
										contents: formatTagAttributeValueDocumentation(foundTagRegex, foundAttribute, foundAttributeValue)
									};
								}

								// Operator lookup
								const foundOperator = mvOperatorData[wordLower];
								if (foundOperator) {
									return {
										contents: formatGenericDocumentation(foundOperator)
									};
								}
							}
						}
					}

					// Do stuff with found tag (via word)
					const foundTag = mvtTagData[wordLower];
					if (foundTag) {
						return {
							contents: formatTagDocumentation(foundTag)
						};
					}
				}

				// Entity Encoding hover
				if (patterns.MVT.LEFT_AFTER_AMP_HOVER.test(left)) {
					const foundEntity = mvtEntityData[wordLower];
					if (foundEntity) {
						return {
							contents: formatGenericDocumentation(foundEntity)
						};
					}
				}

				// Variable / Entity Symbol Hover Documentation
				const symbols = [].concat( mivaScriptWorkspaceSymbols, documentSymbols );
				const variable = getVariableAtOffset( line, position.character )?.toLowerCase();
				const entity = getEntityAtOffset( line, position.character )?.toLowerCase();
				let symbolDocumentation = '';

				for (let symbol of symbols) {
					const nameLower = symbol?.name?.toLowerCase();
					const trimmedValue = symbol?.documentation?.value?.trim();

					// Show variable hover docs
					if (trimmedValue?.length > 0 && symbol.kind === SymbolKind.Variable && (nameLower === entity || nameLower === variable || nameLower === word)) {
						symbolDocumentation += symbol.documentation.value + '\n---\n';
					}
				}

				if (symbolDocumentation.length > 0) {
					return {
						contents: {
							kind: 'markdown',
							value: symbolDocumentation
						}
					};
				}

				return defaultReturnValue;
			},

			findDocumentSymbols ( document: TextDocument ) {
				const {symbols} = mvtDocuments.get( document );

				return symbols;
			},

			async onDocumentLinks ( document: TextDocument ) {
				if (!mivaManagedTemplatesProvider) {
					return [];
				}

				const {parsedItems, parsedFragments} = mvtDocuments.get( document );

				const links = (await mivaManagedTemplatesProvider.provideLinks(parsedItems, parsedFragments, document)) ?? [];

				return links;
			}

		};

	}

	function getMVTFeatures(mvtFeatures: LanguageFeatures): LanguageFeatures {
		return {
			...mvtFeatures,
			doCompletion(document: TextDocument, position: Position, settings: Settings): CompletionList {
				const completionList = mvtFeatures.doCompletion(document, position, settings);

				return CompletionList.create(completionList?.items.flatMap(completionItem => {
					if (completionItem.label === '@@@LANGUAGESESRVICE@@@') {
						return htmlLanguageService.doComplete(document, position, htmlLanguageService.parseHTMLDocument(document))?.items || [];
					}

					return completionItem;
				}))
			},
			async onHover(document: TextDocument, position: Position, settings: Settings) {
				const hover = await mvtFeatures.onHover(document, position, settings);

				if (hover?.contents === '@@@LANGUAGESESRVICE@@@') {
					return htmlLanguageService.doHover(document, position, htmlLanguageService.parseHTMLDocument(document));
				}

				return hover;
			}
		}
	};

	function getMVTCSSFeatures(mvtFeatures: LanguageFeatures): LanguageFeatures {
		const cssLanguageService = getCSSLanguageService();

		return {
			...mvtFeatures,
			doCompletion(document: TextDocument, position: Position, settings: Settings): CompletionList {
				const completionList = mvtFeatures.doCompletion(document, position, settings);

				return CompletionList.create(completionList?.items.flatMap(completionItem => {
					if (completionItem.label === '@@@LANGUAGESESRVICE@@@') {
						return cssLanguageService.doComplete(document, position, cssLanguageService.parseStylesheet(document))?.items || [];
					}

					return completionItem;
				}));
			},
			async onHover(document: TextDocument, position: Position, settings: Settings) {
				const hover = await mvtFeatures.onHover(document, position, settings);

				if (hover?.contents === '@@@LANGUAGESESRVICE@@@') {
					return cssLanguageService.doHover(document, position, cssLanguageService.parseStylesheet(document));
				}

				return hover;
			}
		}
	}

	// ======================================================================================================================== //

	async function _createMivaScriptWorkspaceSymbols (workspace: Workspace, settings: Settings, force: boolean = false) {
		// Exit if provider is missing
		if (!workspaceSymbolProvider) {
			return false;
		}

		if (mivaScriptWorkspaceSymbolsLoading === false || force) {
			mivaScriptWorkspaceSymbolsLoading = true;

			workspaceSymbolProvider.setWorkspace({
				folders: [
					...workspace.folders,
					...settings?.LSK?.path
						? [
							{
								name: 'settings.LSK.path',
								uri: settings.LSK.path
							}
						]
						: []
				],
				settings: settings
			});

			mivaScriptWorkspaceSymbols = await workspaceSymbolProvider.provideSymbols((document, lsk) => {
				const {symbols} = _mvFindDocumentSymbols(document, lsk);

				return symbols;
			});
		}

		return true;
	}

	function _mvFindDocumentSymbols( document: TextDocument, lsk?: boolean ): {
		symbols: SymbolInformationWithDocumentation[],
		links: DocumentLink[],
		functions?: MivaScriptFunction[],
		functionCompletionItems?: CompletionItem[],
		functionCompletionMap?: Map<string, MarkupContent>
	} {

		const symbols: SymbolInformationWithDocumentation[] = [];
		const links: DocumentLink[] = [];
		const functions: Map<string, MivaScriptFunction> = new Map();
		let functionsArray = void 0;
		let functionCompletionItems = void 0;
		let functionCompletionMap = void 0;

		const scanner = htmlLanguageService.createScanner( document.getText(), 0 );
		let token = scanner.scan();
		let lastTagName: string | undefined = undefined;
		let originalLastTagName: string | undefined = undefined;
		let lastAttributeName: string | undefined = undefined;
		let originalLastAttributeName: string | undefined = undefined;
		let lastFunctionName: string | undefined = undefined;
		let lastFunctionParameters: string[] | undefined = undefined;

		while ( token !== TokenType.EOS ) {

			switch ( token ) {

				case TokenType.StartTag:
					lastFunctionName = undefined;
					lastFunctionParameters = undefined;
					originalLastTagName = scanner.getTokenText();
					lastTagName = originalLastTagName.toLowerCase();
					break;

				case TokenType.AttributeName:
					originalLastAttributeName = scanner.getTokenText();
					lastAttributeName = originalLastAttributeName.toLowerCase();
					break;

				case TokenType.AttributeValue:

					const attributeValue = scanner.getTokenText().replace( /"/g, '' );

					if (attributeValue) {
						const range = Range.create(
							document.positionAt( scanner.getTokenOffset() + 1 ),
							document.positionAt( scanner.getTokenOffset() + scanner.getTokenLength() - 1 )
						);

						if ( (lastTagName === 'mvassign' || lastTagName === 'mvassignarray') && lastAttributeName === 'name' ) {
							const basename = Utils.basename(URI.parse(document.uri));

							symbols.push({
								documentation: {
									kind: 'markdown',
									value: [
										'',
										`Defined in [${basename}](${document.uri}#L${range.start.line + 1},${range.start.character + 1}) on Ln ${range.start.line + 1}, Col ${range.start.character + 1}`,
										'',
										'```mv',
										lastTagName === 'mvassign'
											? `<${originalLastTagName} ${originalLastAttributeName} = "${attributeValue}" />`
											: `<${originalLastTagName} ${originalLastAttributeName} = "${attributeValue}">\n\t...\n</${originalLastTagName}>`,
										'```',
										''
									].join('\n')
								},
								kind: SymbolKind.Variable,
								name: attributeValue,
								location: Location.create(
									document.uri,
									range
								)
							});

						}
						else if ( lastTagName === 'mvfunction' && lastAttributeName === 'name' ) {
							lastFunctionName = attributeValue;

							symbols.push({
								documentation: {
									kind: 'markdown',
									value: ''
								},
								kind: SymbolKind.Function,
								name: attributeValue,
								location: Location.create(
									document.uri,
									range
								)
							});

							// Push into functions object

							// Check if function already exists
							if (!functions.has(attributeValue)) {
								functions.set(attributeValue, {
									name: attributeValue,
									parameters: lastFunctionParameters ?? [],
									uri: document.uri
								});
							}
						}
						else if ( lastTagName === 'mvfunction' && lastAttributeName === 'parameters' ) {
							lastFunctionParameters = attributeValue?.split(',')?.map(parameter => parameter.trim());

							const lastFunction = functions.get(lastFunctionName);
							if (lastFunction) {
								lastFunction.parameters = lastFunctionParameters;
							}
						}
						else if ( lastTagName === 'mvinclude' && lastAttributeName === 'file' ) {
							// Get dirname to be joined with the attribute value
							const dirnameUri = Utils.dirname(URI.parse(document.uri));

							links.push({
								range,
								target: Utils.joinPath(dirnameUri, attributeValue).toString(),
								data: document.uri
							});
						}
					}

					break;

			}

			token = scanner.scan();

		}

		// Assign to global map
		if (!lsk) {
			functionsArray = Array.from(functions.values());
			functionCompletionItems = functionsArray?.map(fn => formatDoValueCompletion(fn));
			functionCompletionMap = getHoverMapFromCompletionFile( functionCompletionItems, true, false );

			mvDocumentFunctions.set(URI.parse(document.uri).toString(), {
				functionCompletionItems,
				functionCompletionMap
			});
		}

		return {
			symbols,
			links,
			functions: functionsArray,
			functionCompletionItems,
			functionCompletionMap
		};
	}

	function getMVFeatures( workspace: Workspace, clientCapabilities: ClientCapabilities ): LanguageFeatures {

		// MV-specific completion data
		const mvTagCompletions: CompletionList = CompletionList.create( parseCompletionFile( Object.values( { ...mvSnippetData, ...filterTagData(mvTagData, ([, tagData]) => !tagData.parent) } ) ) );

		return {
			// @ts-ignore
			async doValidation( document: TextDocument, settings: Settings ) {
				await _createMivaScriptWorkspaceSymbols(workspace, settings);

				if (!mivaScriptCompilerProvider) {
					return [];
				}

				return mivaScriptCompilerProvider.provideDiagnostics(document, settings);
			},

			doCompletion( document: TextDocument, position: Position ): CompletionList {

				const {document: mvDocument, links, functionCompletionItems} = mvDocuments.get( document );
				const parsedDocument = htmlLanguageService.parseHTMLDocument(document);

				// determine left side text range
				const cursorPositionOffset = mvDocument.offsetAt( position );
				const leftOffset = cursorPositionOffset - BOUNDARY_AMOUNT;
				const leftRange = Range.create(
					mvDocument.positionAt( leftOffset ),
					position
				);
				const left = mvDocument.getText( leftRange ) || '';

				// determine right side text range
				const rightOffset = cursorPositionOffset + BOUNDARY_AMOUNT;
				const rightRange = Range.create(
					position,
					mvDocument.positionAt( rightOffset )
				);
				const right = mvDocument.getText( rightRange ) || '';

				// Get current node
				const currentNode = getNodeAtOffset(cursorPositionOffset, parsedDocument) || parsedDocument.findNodeAt(cursorPositionOffset);

				// MvDO tag value attribute completions
				if (
					patterns.MV.LEFT_IN_MVDO_TAG.test( left ) &&
					patterns.SHARED.RIGHT_IN_TAG.test( right ) &&
					patterns.SHARED.LEFT_IN_VALUE_ATTR.test( left )
				) {
					return doValueCompletions;
				}

				// If in an expression `{ ... }`
				if (
					patterns.MV.LEFT_IN_EXPRESSION.test(left) &&
					patterns.MV.RIGHT_IN_EXPRESSION.test(right)
				) {

					// If after `[].` notation
					if (patterns.MV.LEFT_AFTER_BRACKET_DOT.test( left )) {
						return doValueCompletions;
					}

					const variableCompletions = getVariableCompletions(left, mvDocument);
					if (variableCompletions) {
						return variableCompletions;
					}

					// Show completion list for operators, builtin functions and document functions (mvincludes too)
					return CompletionList.create([
						...operatorCompletions.items,
						...builtinFunctionCompletions.items,
						...functionCompletionItems,
						// Linked functions via mvinclude
						...links
							?.map(link => {
								const {functionCompletionItems} = mvDocumentFunctions.get(link.target) ?? {};

								return functionCompletionItems ?? [];
							})
							?.flat()
					]);

				}

				// tag-specific
				if ( patterns.MV.LEFT_IN_MV_TAG.test( left ) ) {

					// Determine which tag we are in
					let tagName = void 0;
					const [, mvTagName, mivaTagName] = safeMatch(left, patterns.MV.LEFT_TAG_NAME);
					tagName = mvTagName || mivaTagName;
					const tagNameLower = tagName?.toLowerCase();

					const foundTag = mvTagData[tagNameLower];
					if (foundTag) {
						const foundTagAttributes = foundTag.attributes;
						if (foundTagAttributes) {

							// Tag attribute value completions
							if (patterns.SHARED.LEFT_IN_ATTR.test(left)) {
								const [, attributeName] = safeMatch(left, patterns.SHARED.LEFT_ATTR_NAME);
								const attributeNameLower = attributeName?.toLowerCase();

								const foundAttribute = foundTag.attributes[attributeNameLower];
								if (foundAttribute) {
									switch (foundAttribute.valueType) {
										default:
										case 'literal':
										case 'expression': {
											if (patterns.MV.LEFT_IN_EXPRESSION.test(left)) {
												const variableCompletions = getVariableCompletions(left, mvDocument);
												if (variableCompletions) {
													return variableCompletions;
												}

												return builtinFunctionCompletions;
											}

											return getVariableCompletions(left, mvDocument);
										}
										case 'string':
											return CompletionList.create( parseCompletionFile( Object.values( foundAttribute.values || {} ) ) );
									}
								}
							}

							// Get list of available attributes
							const availableAttributes = Object.values( foundTagAttributes )
								.filter(attr => Object.keys(currentNode?.attributes)?.filter(_attr => _attr.toLowerCase() === attr.label.toLowerCase())?.length === 0);

							// Tag attribute completions
							return availableAttributes.length > 0
								? CompletionList.create( parseCompletionFile( availableAttributes ) )
								: CompletionList.create([]);
						}
					}

					return null;
				}

				// Determine if child tags exist and only complete those if inside a parent tag
				const currentTagLower = currentNode?.tag?.toLowerCase();

				if (currentTagLower) {
					const foundTag = mvTagData[currentTagLower];

					if (foundTag?.children?.length > 0) {
						return CompletionList.create(
							parseCompletionFile( Object.values( foundTag?.children?.map(childTagNameLower => mvTagData[childTagNameLower]) ) )
						);
					}
				}

				/**
				 * Used to determine if the tag starts with either <mvt: mvt: or < and removes that portion with an additionalTextEdit after completion
				 */
				const determineAdditionalTextEdits = (): TextEdit[] => {
					const foundMatch = [
						'<'
					].find(match => left.endsWith(match));

					return foundMatch
						? [
							TextEdit.del(Range.create(
								mvDocument.positionAt( cursorPositionOffset - foundMatch.length ),
								position
							))
						]
						: [];
				};

				// Define additional text edits and add them to the completions items via a map
				const additionalTextEdits = determineAdditionalTextEdits();

				return CompletionList.create([
					...additionalTextEdits.length > 0
						? mvTagCompletions.items.map(mvtTagCompletion => {
							return {
								...mvtTagCompletion,
								additionalTextEdits
							};
						})
						: mvTagCompletions.items,
					...htmlLanguageService.doComplete(document, position, parsedDocument)?.items || []
				]);
			},

			findDocumentSymbols( document: TextDocument ): SymbolInformationWithDocumentation[] {
				const {symbols} = mvDocuments.get( document );

				return symbols;
			},

			async findWorkspaceSymbols( query: string, settings: Settings ): Promise<SymbolInformationWithDocumentation[]> {
				await _createMivaScriptWorkspaceSymbols( workspace, settings, true );

				return mivaScriptWorkspaceSymbols;
			},

			async findDefinition( document: TextDocument, position: Position, settings: Settings ) {
				await _createMivaScriptWorkspaceSymbols(workspace, settings);

				const {document: mvDocument, symbols: documentSymbols} = mvDocuments.get( document );

				// Get word
				const line = mvDocument.getText( Range.create( position.line, 0, position.line, MAX_LINE_LENGTH ) );
				const word = getWordAtOffset( line, position.character )?.toLowerCase();
				const variable = getVariableAtOffset( line, position.character )?.toLowerCase();

				return [
					...documentSymbols,
					...mivaScriptWorkspaceSymbols
				]
					?.filter(( symbol ) => {
						const nameLower: string = symbol?.name?.toLowerCase();
						return nameLower === variable || nameLower === word;
					})
					?.map( symbol => symbol.location );

			},

			async onHover (document: TextDocument, position: Position, settings: Settings ) {
				if (!settings?.mivaScript?.disableHoverDocumentation) {
					await _createMivaScriptWorkspaceSymbols(workspace, settings);

					const {document: mvDocument, symbols: documentSymbols, links, functionCompletionMap} = mvDocuments.get( document );

					// Get word
					const line = mvDocument.getText( Range.create( position.line, 0, position.line, MAX_LINE_LENGTH ) );
					const word = getWordAtOffset( line, position.character );

					// Exit if word is null
					if (!word) {
						return null;
					}

					// Get lowercase version of word
					const wordLower = word.toLowerCase();

					// determine left side text range
					const cursorPositionOffset = mvDocument.offsetAt( position );
					const leftOffset = cursorPositionOffset - BOUNDARY_AMOUNT;
					const leftRange = Range.create(
						mvDocument.positionAt( leftOffset ),
						position
					);
					const left = mvDocument.getText( leftRange ) || '';

					// determine right side text range
					const rightOffset = cursorPositionOffset + BOUNDARY_AMOUNT;
					const rightRange = Range.create(
						position,
						mvDocument.positionAt( rightOffset )
					);
					const right = mvDocument.getText( rightRange ) || '';

					// Check for various hover scenarios

					// If in an expression `{ ... }`
					if (
						patterns.MV.LEFT_IN_EXPRESSION.test(left) &&
						patterns.MV.RIGHT_IN_EXPRESSION.test(right)
					) {

						// If after `[].` notation
						if (patterns.MV.LEFT_AFTER_BRACKET_DOT.test( left )) {
							const [, doFile] = safeMatch(left, patterns.MV.LEFT_DO_FILE_BRACKET_DOT);
							const key = `${doFile?.trim()?.toLowerCase()}@${wordLower}`;

							const foundDoHover = doValueHoverMap.get(key);
							if (foundDoHover) {
								return {
									contents: foundDoHover
								};
							}
						}

						// Function Hover
						if (patterns.SHARED.RIGHT_IS_OPEN_PAREN.test(right)) {
							// Builtin function lookup
							const foundBuiltinHover = builtinFunctionHoverMap.get(wordLower);
							if (foundBuiltinHover) {
								return {
									contents: foundBuiltinHover
								};
							}

							// Self defined function lookup
							const functionHover = functionCompletionMap.get(wordLower);
							if (functionHover) {
								return {
									contents: functionHover
								};
							}

							// Loop through linked files and attempt to get hover content
							for (let link of links) {
								const {functionCompletionMap} = mvDocumentFunctions.get(link.target) ?? {};

								if (functionCompletionMap) {
									const foundLinkedFunctionHover = functionCompletionMap.get(wordLower);
									if (foundLinkedFunctionHover) {
										return {
											contents: foundLinkedFunctionHover
										};
									}
								}
							}
						}

						// System variable hover
						if (patterns.SHARED.LEFT_VARIABLE_S.test(left)) {
							const foundSystemVariable = systemVariableData[wordLower];
							if (foundSystemVariable) {
								return {
									contents: foundSystemVariable.documentation
								};
							}
						}

						// Operator lookup
						const foundOperator = mvOperatorData[wordLower];
						if (foundOperator) {
							return {
								contents: formatGenericDocumentation(foundOperator)
							};
						}
					}

					// Tag name hover
					if (patterns.MV.LEFT_IN_MV_TAG.test( left )) {
						// Determine which tag we are in
						const [, tagName] = safeMatch(left, patterns.MV.LEFT_TAG_NAME);
						const tagNameLower = tagName?.toLowerCase();

						// Attempt to get tag from name
						const foundTagRegex = mvTagData[tagNameLower];

						// Do stuff with found tag (via regex)
						if (foundTagRegex) {

							// Do functions
							if (tagNameLower === 'mvdo') {
								// Get item name
								const [,, doFile] = left.match(patterns.SHARED.LEFT_DO_FILE) || right.match(patterns.SHARED.RIGHT_DO_FILE) || [];
								const doFileNoExpression = doFile
									?.replace(/[\{\}]/g, '')
									?.trim()
									?.toLowerCase();

								const key = `${doFileNoExpression}@${wordLower}`;

								const foundDoHover = doValueHoverMap.get(key);
								if (foundDoHover) {
									return {
										contents: foundDoHover
									};
								}
							}

							// Find attribute data on found tag name
							const foundAttributes = foundTagRegex.attributes;
							if (foundAttributes) {
								// Find attribute data with word
								const foundAttribute = foundAttributes[wordLower];

								// Return hover for attribute if found
								if (foundAttribute) {
									return {
										contents: formatTagAttributeDocumentation(foundTagRegex, foundAttribute)
									};
								}

								// Return hover for attribute value if found
								if (patterns.SHARED.LEFT_IN_ATTR.test(left)) {
									// Find attribute data with word
									const [, attributeName] = safeMatch(left, patterns.SHARED.LEFT_ATTR_NAME);
									const foundAttribute = foundAttributes[attributeName];
									const foundAttributeValue = foundAttribute?.values?.[wordLower];

									if (foundAttributeValue && foundAttributeValue.documentation) {
										return {
											contents: formatTagAttributeValueDocumentation(foundTagRegex, foundAttribute, foundAttributeValue)
										};
									}
								}
							}
						}
					}

					// Do stuff with found tag (via word)
					const foundTag = mvTagData[wordLower];
					if (foundTag) {
						return {
							contents: formatTagDocumentation(foundTag)
						};
					}

					// Variable / Symbol Hover Documentation
					const symbols = [].concat( mivaScriptWorkspaceSymbols, documentSymbols );
					const variable = getVariableAtOffset( line, position.character )?.toLowerCase();
					let symbolDocumentation = '';

					for (let symbol of symbols) {
						const nameLower = symbol?.name?.toLowerCase();
						const trimmedValue = symbol?.documentation?.value?.trim();

						// Show variable hover docs
						if (trimmedValue?.length > 0 && symbol.kind === SymbolKind.Variable && (nameLower === variable || nameLower === word)) {
							symbolDocumentation += trimmedValue + '\n---\n';
						}
					}

					if (symbolDocumentation.length > 0) {
						return {
							contents: {
								kind: 'markdown',
								value: symbolDocumentation
							}
						};
					}
				}

				return htmlLanguageService.doHover(document, position, htmlLanguageService.parseHTMLDocument(document));
			},

			onDocumentLinks (document: TextDocument): DocumentLink[] {
				const mvDocument = mvDocuments.get(document);

				return mvDocument.links;
			}
		};

	}

	return {
		baseMVTFeatures,
		getMVFeatures,
		getMVTCSSFeatures,
		getMVTFeatures
	};
}
