import { MivaExpression } from 'miva-expression-parser';
import {
	CodeAction,
	CodeActionContext,
	Command,
	CompletionItem,
	CompletionItemKind,
	CompletionList,
	Definition,
	Diagnostic,
	DocumentLink,
	Hover,
	MarkupContent,
	Position,
	Range,
	SymbolInformation,
	WorkspaceFolder
} from 'vscode-languageserver';
import {
	TextDocument
} from 'vscode-languageserver-textdocument';
import { MivaScriptCompilerProvider, WorkspaceSymbolProvider } from '../mv/providers';
import { MivaMangedTemplatesProvider } from '../mvt/providers';

export interface Settings {
	LSK?: any;
	MVT?: any;
	mivaScript?: any;
}

export interface Workspace {
	readonly settings: Settings;
	readonly folders: WorkspaceFolder[];
}

export interface Languages {
	mv: LanguageFeatures;
	mvt: LanguageFeatures;
	mvtcss: LanguageFeatures;
	mvtjs: LanguageFeatures;
}

export interface ActivationProviders {
	workspaceSymbolProvider?: WorkspaceSymbolProvider,
	mivaScriptCompilerProvider?: MivaScriptCompilerProvider,
	mivaManagedTemplatesProvider?: MivaMangedTemplatesProvider
}

export interface LanguageFeatures {

	onWorkspaceChange? (): void;

	onConfigurationChange? (): void;

	doValidation?: ( document: TextDocument, settings?: Settings ) => Promise<Diagnostic[]> | Diagnostic[];

	doCompletion?: ( document: TextDocument, position: Position, settings?: Settings ) => CompletionList;

	findDocumentSymbols?: ( document: TextDocument ) => SymbolInformation[];

	findDefinition?: ( document: TextDocument, position: Position, settings: Settings ) => Promise<Definition> | Promise<null>;

	onHover?: ( document: TextDocument, position: Position, settings?: Settings ) => Promise<Hover> | Promise<null>;

	doCodeAction?: ( document: TextDocument, range: Range, context: CodeActionContext ) => CodeAction[];

	onDocumentLinks?: ( document: TextDocument ) => Promise<DocumentLink[]> | DocumentLink[];

	findWorkspaceSymbols?: ( query: string, settings: Settings ) => Promise<SymbolInformation[]>;

}

export interface MvLanguageModel {
	links: DocumentLink[];
	symbols: SymbolInformationWithDocumentation[];
	functions: MivaScriptFunction[];
	functionCompletionItems: CompletionItem[];
	functionCompletionMap: Map<string, MarkupContent>;
	document: TextDocument;
}

export interface MvtLanguageModel {
	symbols: SymbolInformationWithDocumentation[];
	document: TextDocument;
	parsedItems: MivaTemplateLanguageParsedItem[];
	parsedFragments: MivaTemplateLanguageParsedFragment[];
}


export interface ValidationProblem {
	type: string;
	message: string;
}

export namespace ValidationCode {
	export const NO_TOOLKIT = 'NO_TOOLKIT';
	export const NO_TOOLBELT = 'NO_TOOLBELT';
	export const FOREACH_LSETTINGS = 'FOREACH_LSETTINGS';
	export const FOREACH_GLOBAL = 'FOREACH_GLOBAL';
	export const GLOBAL_NULL_ASSIGNMENT = 'GLOBAL_NULL_ASSIGNMENT';
	export const GLOBAL_ENCODING_ENTITY = 'GLOBAL_ENCODING_ENTITY';
	export const GLOBAL_ENCODING_EVAL = 'GLOBAL_ENCODING_EVAL';
}
export type ValidationCode = 'NO_TOOLKIT' | 'NO_TOOLBELT' | 'FOREACH_LSETTINGS' | 'FOREACH_GLOBAL' | 'GLOBAL_NULL_ASSIGNMENT' | 'GLOBAL_ENCODING_ENTITY' | 'GLOBAL_ENCODING_EVAL';

export interface ValidationDataReplacement {
	text: string;
	message: string;
	isPreferred?: boolean;
}

export namespace ValidationDataType {
	export const REPLACEMENT = 'REPLACEMENT';
}
export type ValidationDataType = 'REPLACEMENT';

export interface ValidationData {
	type: ValidationDataType;
	replacements?: ValidationDataReplacement[];
}

export interface ValidationRule {
	match: string;
	matchIndex: number;
	checkSetting?: string;
	problem: ValidationProblem;
	code: ValidationCode;
	data?: ValidationData;
}

export interface BaseTagAttributeValueData {
	insertTextFormat: string;
	kind: CompletionItemKind | string;
	commitCharacters: string[];
}

export interface TagAttributeValueData extends BaseTagAttributeValueData {
	documentation: string;
	insertText?: string;
	label: string;
	reference?: string;
	engine?: string;
	version?: string;
}

export interface BaseTagAttributeData {
	required: boolean;
	insertTextFormat: string;
	kind: CompletionItemKind | string;
	commitCharacters: string[];
	valueType: 'variable' | 'expression' | 'string' | 'function' | 'literal';
}

export interface TagAttributeData extends BaseTagAttributeData {
	requiredMessage?: string;
	documentation: string;
	insertText?: string;
	label: string;
	values?: Record<string, TagAttributeValueData | ItemData>;
	reference?: string;
	engine?: string;
	version?: string;
}

export interface BaseTagData {
	insertTextFormat: string;
	kind: CompletionItemKind | string;
	commitCharacters: string[];
}

export interface TagData extends BaseTagData {
	documentation: string;
	insertText?: string;
	label: string;
	reference?: string;
	engine?: string;
	version?: string;
	attributes?: Record<string, TagAttributeData>;
	selfClosing: boolean;
	void: boolean;
	command?: Command
	parent?: string;
	children?: string[];
}

export interface TagSnippet extends BaseTagData {
	documentation: string;
	insertText?: string;
	label: string;
};

export interface BaseItemParamData {
	insertTextFormat: string;
	kind: CompletionItemKind;
	commitCharacters: string[];
	paramType: 'function' | 'link' | 'variable';
}

export interface ItemParamData extends BaseItemParamData {
	documentation: string;
	insertText?: string;
	label: string;
	reference?: string;
	engine?: string;
	version?: string;
}

export interface BaseItemData {
	insertTextFormat: string;
	kind: CompletionItemKind;
	commitCharacters: string[];
	link?: string;
}

export interface ItemData extends BaseItemData {
	documentation: string;
	insertText?: string;
	label: string;
	reference?: string;
	engine?: string;
	version?: string;
	params?: Record<string, ItemParamData>
}

export interface BaseEntityData {
	kind: CompletionItemKind;
	commitCharacters: string[];
}

export interface EntityData extends BaseEntityData {
	label: string;
	detail: string;
	documentation: string;
	preselect?: boolean
	engine?: string;
}

export interface BaseSystemVariableData {
	kind: CompletionItemKind;
}

export interface SystemVariableData extends BaseSystemVariableData {
	label: string;
	detail: string;
	documentation: string;
}

export interface BaseGlobalVariableData {
	kind: CompletionItemKind;
}

export interface GlobalVariableData extends BaseGlobalVariableData {
	label: string;
	detail: string;
	documentation: string;
}

export interface SymbolInformationWithDocumentation extends SymbolInformation {
	documentation?: MarkupContent;
};

export interface BaseOperatorData {
	insertTextFormat: string;
	kind: CompletionItemKind | string;
	commitCharacters: string[];
	reference?: string;
}

export interface OperatorData extends BaseOperatorData {
	documentation: string;
	insertText?: string;
	label: string;
	reference?: string;
	engine?: string;
	detail?: string;
	example?: string;
}

export interface MivaScriptFunction {
	uri: string;
	name: string;
	parameters: string[];
	description?: string;
	returnValue?: string;
}

export interface MivaScriptFunctionFile {
	distroPath: string;
	functions: MivaScriptFunction[];
	moduleCode?: string;
	moduleVar?: string;
}

export interface MivaTemplateLanguageParsedItem {
	name: string;
	param?: string;
	expression?: MivaExpression;
	range?: Range;
}

export interface MivaTemplateLanguageParsedFragment {
	code: string;
	range: Range;
}

export enum MivaMangedTemplatesProviderCompletionType {
	Variable
}