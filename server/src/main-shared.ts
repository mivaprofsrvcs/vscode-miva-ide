import _has from 'lodash.has';
import {
	CancellationToken,
	CodeActionKind,
	CodeActionParams,
	ConfigurationParams,
	ConfigurationRequest,
	Connection,
	Diagnostic,
	DidChangeConfigurationNotification,
	DidChangeWorkspaceFoldersNotification,
	DocumentLinkParams,
	HoverParams,
	InitializeParams,
	InitializeResult,
	ServerCapabilities,
	SymbolInformation,
	TextDocumentSyncKind,
	TextDocuments,
	WorkspaceFolder
} from 'vscode-languageserver';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { URI } from 'vscode-uri';
import { activateFeatures } from './miva-features';
import { formatError, pushAll, runSafe, runSafeAsync } from './util/functions';
import { ActivationProviders, Languages, Settings, Workspace } from './util/interfaces';

export function activate (connection: Connection, {workspaceSymbolProvider, mivaScriptCompilerProvider, mivaManagedTemplatesProvider}: ActivationProviders = {}) {
	// ================================================================================================================================ //

	function getDocumentSettings( textDocument: TextDocument ): Thenable<Settings> {

		let promise = documentSettings[ textDocument.uri ];

		if ( !promise ) {

			const scopeUri = textDocument.uri;
			const configRequestParam: ConfigurationParams = { items: [ { scopeUri, section: 'LSK' }, { scopeUri, section: 'MVT' }, { scopeUri, section: 'mivaScript' } ] };

			promise = connection.sendRequest( ConfigurationRequest.type, configRequestParam ).then( s => ( { LSK: s[0], MVT: s[1], mivaScript: s[2] } ) );

			documentSettings[ textDocument.uri ] = promise;

		}

		return promise;

	}

	function cleanPendingValidation( textDocument: TextDocument ): void {
		const request = pendingValidationRequests[ textDocument.uri ];
		if ( request ) {
			clearTimeout( request );
			delete pendingValidationRequests[ textDocument.uri ];
		}
	}

	function triggerValidation( textDocument: TextDocument ): void {
		cleanPendingValidation( textDocument );
		pendingValidationRequests[ textDocument.uri ] = setTimeout(() => {
			delete pendingValidationRequests[ textDocument.uri ];
			validateTextDocument( textDocument );
		}, validationDelayMs);
	}

	async function validateTextDocument( textDocument: TextDocument ) {
		try {

			// const version = textDocument.version;
			const diagnostics: Diagnostic[] = [];
			const settings = await getDocumentSettings( textDocument );
			const latestTextDocument = documents.get( textDocument.uri );
			const features = languages[ textDocument.languageId ];

			if ( features && features.doValidation ) {

				pushAll( diagnostics, await features.doValidation( textDocument, settings ) );

			}

			connection.sendDiagnostics( { uri: latestTextDocument.uri, diagnostics } );

		}
		catch( e ) {
			console.error( formatError( `Error while validating ${ textDocument.uri }`, e ) );
		}
	}

	// ================================================================================================================================ //

	// Create a text document manager.
	const documents: TextDocuments<TextDocument> = new TextDocuments( TextDocument );

	// define workspace
	let workspaceFolders: WorkspaceFolder[] = [];

	let clientSnippetSupport = false;
	let workspaceFoldersSupport = false;
	let configurationSupport = false;

	// define settings
	let globalSettings: Settings = {};
	let documentSettings: { [ key: string ]: Thenable<Settings> } = {};

	const pendingValidationRequests: { [ uri: string ]: NodeJS.Timer } = {};
	const validationDelayMs = 500;

	let languages: Languages = {
		mvt: null,
		mvtcss: null,
		mvtjs: null,
		mv: null
	};

	// After the server has started the client sends an initialize request. The server receives
	// in the passed params the rootPath of the workspace plus the client capabilities
	connection.onInitialize(( params: InitializeParams ): InitializeResult => {

		workspaceFolders = (<any>params).workspaceFolders;
		if ( !Array.isArray( workspaceFolders ) ) {
			workspaceFolders = [];
			if ( params.rootPath ) {
				workspaceFolders.push( { name: '', uri: URI.file( params.rootPath ).toString() } );
			}
		}

		const workspace: Workspace = {
			get settings() { return globalSettings },
			get folders() { return workspaceFolders }
		};

		const { baseMVTFeatures, getMVFeatures, getMVTCSSFeatures, getMVTFeatures } = activateFeatures({
			workspaceSymbolProvider,
			mivaScriptCompilerProvider,
			mivaManagedTemplatesProvider
		});

		const baseFeatures = baseMVTFeatures( workspace, params.capabilities );
		const mvtFeatures = getMVTFeatures(baseFeatures);
		const mvtCSSFeatures = getMVTCSSFeatures(baseFeatures);
		languages.mvt = mvtFeatures;
		languages.mvtcss = mvtCSSFeatures;
		languages.mvtjs = mvtFeatures;
		languages.mv = getMVFeatures( workspace, params.capabilities );

		function getClientCapability<T>( name: string, def: T ) {
			return _has( params.capabilities, name ) || def;
		}

		clientSnippetSupport = getClientCapability( 'textDocument.completion.completionItem.snippetSupport', false );
		workspaceFoldersSupport = getClientCapability( 'workspace.workspaceFolders', false );
		configurationSupport = getClientCapability( 'workspace.configuration', false );

		const capabilities: ServerCapabilities = {
			textDocumentSync: TextDocumentSyncKind.Full,
			completionProvider: clientSnippetSupport ? { resolveProvider: false, triggerCharacters: [ '.', ':', '<', '"', '=', '/', '&', '\'' ] } : undefined,
			definitionProvider: true,
			documentSymbolProvider: true,
			workspaceSymbolProvider: true,
			hoverProvider: true,
			documentLinkProvider: {
				resolveProvider: true
			},
			codeActionProvider: {
				codeActionKinds: [
					CodeActionKind.QuickFix
				]
			}
		};

		return { capabilities };

	});

	connection.onInitialized(() => {

		if ( configurationSupport ) {

			connection.client.register( DidChangeConfigurationNotification.type, undefined );

		}

		if ( workspaceFoldersSupport ) {

			connection.client.register( DidChangeWorkspaceFoldersNotification.type );

			// Trigger workspace change function on every language
			for (let language in languages) {
				languages[language]?.onWorkspaceChange?.();
			}

			connection.onNotification(
				DidChangeWorkspaceFoldersNotification.type,
				e => {

					const toAdd = e.event.added;
					const toRemove = e.event.removed;
					const updatedFolders = [];

					if ( workspaceFolders ) {
						for ( const folder of workspaceFolders ) {
							if ( !toRemove.some( r => r.uri === folder.uri ) && !toAdd.some( r => r.uri === folder.uri ) ) {
								updatedFolders.push( folder );
							}
						}
					}

					workspaceFolders = updatedFolders.concat( toAdd );
					documents.all().forEach( triggerValidation );

					// Trigger workspace change function on every language
					for (let language in languages) {
						languages[language]?.onWorkspaceChange?.();
					}

				}
			);

		}

	});

	// The settings have changed. Is send on server activation as well.
	connection.onDidChangeConfiguration(change  => {

		globalSettings = change.settings;

		documentSettings = {}; // reset all document settings

		documents.all().forEach( triggerValidation );

		for (let language in languages) {
			const foundLanguage = languages[language];

			if (foundLanguage && typeof foundLanguage.onConfigurationChange === 'function') {
				languages[language].onConfigurationChange();
			}
		}

	});

	// Handle completion events
	connection.onCompletion(async ( textDocumentPosition, token ) => {
		return runSafeAsync(async () => {

			const document = documents.get( textDocumentPosition.textDocument.uri );

			if ( !document ) {
				return null;
			}

			const settings = await getDocumentSettings( document );
			const features = languages[ document.languageId ];

			if ( features && features.doCompletion ) {

				return features.doCompletion( document, textDocumentPosition.position, settings );

			}

		}, null, `Error while computing completions for ${ textDocumentPosition.textDocument.uri }`, token );
	});
	/* connection.onCompletionResolve(( item: CompletionItem, token: CancellationToken ) => {
		return undefined;
	}); */

	connection.onDocumentSymbol(( documentSymbolParams, token ) => {
		return runSafe(() => {

			const document = documents.get( documentSymbolParams.textDocument.uri );
			const symbols: SymbolInformation[] = [];

			if ( document ) {

				const features = languages[ document.languageId ];

				if ( features && features.findDocumentSymbols ) {

					pushAll( symbols, features.findDocumentSymbols( document ) );

				}
			}

			return symbols;

		}, [], `Error while computing document symbols for ${ documentSymbolParams.textDocument.uri }`, token );
	});

	connection.onWorkspaceSymbol(( workspaceSymbolParams, token ) => {
		return runSafeAsync(async () => {
			const symbols: SymbolInformation[] = [];
			const features = languages['mv'];

			const document = TextDocument.create('file://null', 'mv', 1, '');
			const settings = await getDocumentSettings(document);

			if (features && features.findWorkspaceSymbols) {
				pushAll(symbols, (await features.findWorkspaceSymbols(workspaceSymbolParams.query, settings)));
			}

			return symbols;
		}, [], `Error while computing definitions for`, token );
	});

	connection.onDefinition(( definitionParams, token ) => {
		return runSafeAsync(async () => {

			const document = documents.get( definitionParams.textDocument.uri );

			if ( document ) {

				const settings = await getDocumentSettings( document );
				const features = languages[ document.languageId ];

				if ( features && features.findDefinition ) {

					return features.findDefinition( document, definitionParams.position, settings );

				}

			}

			return [];

		}, null, `Error while computing definitions for ${ definitionParams.textDocument.uri }`, token );
	});

	connection.onHover(( hoverParams: HoverParams, token: CancellationToken ) => {
		return runSafeAsync(async () => {

			const document = documents.get( hoverParams.textDocument.uri );

			if ( document ) {

				const settings = await getDocumentSettings( document );
				const features = languages[ document.languageId ];

				if ( features && features.onHover ) {

					return features.onHover( document, hoverParams.position, settings );

				}

			}

			return [];

		}, null, `Error while hovering on position: ${hoverParams.position.line}:${hoverParams.position.character}`, token);
	});

	connection.onDocumentLinks(( documentLinkParams: DocumentLinkParams, token: CancellationToken ) => {
		return runSafeAsync(async () => {

			const document = documents.get( documentLinkParams.textDocument.uri );

			if ( document ) {

				const features = languages[ document.languageId ];

				if ( features && features.onDocumentLinks ) {

					return features.onDocumentLinks( document );

				}

			}

			return [];

		}, null, `Error while providing links for document: ${documentLinkParams.textDocument.uri}`, token);
	});

	connection.onCodeAction(( params: CodeActionParams, token: CancellationToken ) => {
		return runSafe(() => {

			const document = documents.get( params.textDocument.uri );

			if ( document ) {

				const features = languages[ document.languageId ];

				if ( features && features.doCodeAction ) {

					return features.doCodeAction( document, params.range, params.context );

				}

			}

			return [];
		}, null, `Error while providing code actions for document: ${params.textDocument.uri}`, token);
	});

	// The content of a text document has changed. This event is emitted
	// when the text document first opened or when its content has changed.
	documents.onDidChangeContent(changeEvent => {

		triggerValidation( changeEvent.document );

	});

	// The text document was saved. This event is emitted
	documents.onDidSave(changeEvent => {

		triggerValidation( changeEvent.document );

	});

	// a document has closed: clear all diagnostics
	documents.onDidClose(event => {

		cleanPendingValidation( event.document );

		connection.sendDiagnostics( { uri: event.document.uri, diagnostics: [] } );

	});

	// remove document settings on close
	documents.onDidClose(e => {
		delete documentSettings[ e.document.uri ];
	});

	// Make the text document manager listen on the connection
	// for open, change and close text document events
	documents.listen( connection );

	// Listen on the connection
	connection.listen();
}
