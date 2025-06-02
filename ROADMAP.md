# Miva IDE (VSCode) Roadmap

Our VSCode extension is a vital tool for web development on the Miva platform. It provides the following benefits:

1. Improved code quality. Developers benefit from built-in best practices provided automatically to them via diagnostic tools, snippets and syntax highlighting. This increases confidence in our code since the extension will catch common errors before we even upload the changes to Miva. Also, it encourages developers to adhere to our code standards.
2. Increased productivity. Developers can organize their code easily using the VSCode "Explorer" view. Our extension enhances this feature by allowing Go-To Definition support as well as Go-To Symbols (variables, functions, etc...).
3. Increased efficiency. By providing keyboard shortcuts, code auto-completion and useful templates developers can focus directly on coding the customer's unique business rules and focus less on syntax or having to read external documentation.

## Existing Features

- Syntax highlighting for Miva Script and MVT languages.
- Syntax highlighting for MVT embedded in CSS and MVT embedded in JavaScript (MVTCSS, MVTJS)
- Autocompletion for Miva Script and MVT tags.
- Autocompletion for `<mvt:do>`/`<MvDO>` functions with automatic file path injection.
- Goto defintion/peek support for `<mvt:do>`/`<MvDO>` functions (requires copy of LSK on your computer).
- Autocompletion for system variables, global variables and local variables with automatic parsing of open files.
- Documentation is displayed inline when hovering over variables, functions and tags.
- Custom tag folding.
- Snippets for common MVT features including custom fields, readytheme and more.
- Function that converts entities => variables and variables => entities.
- Function that calculates the current `l.posX` variable at your current cursor position.
- Provides warning and error messages and hints users about Miva best practices:
	- Warns user about XSS vulnerabilities by outputting (via entity or `mvt:eval`) unencoded global variables within their files.
	- Warns users about using `toolkit` module functions.
	- Warns users about using `toolbelt` module functions.
	- Throws error about assigning `g.null` to a new value.

## Future Versions

### v1.X.X (2-5 hrs per version upgrade)

This is the existing development flow. When new LSK or Empressa versions are released I simply update the code completion data to include the new functions.

- Add additional `<mvt:do>`/`<MvDO>` function completions as future LSK versions are released.
- Add additional built-in function completions & documentation as future Miva Empressa engines are released.

### v1.2.0

- [x] Apply fixes to Miva Script snippets based off developer feedback
- [x] Fix builtin function `miva_joinstring` flag parameter completion values as per [issue #52](https://github.com/mivaprofsrvcs/vscode-miva-ide/issues/52)
- [x] Add operators to expression completions results
- [x] Add engine version callouts to tags and builtin functions
- [x] Fix indentation issues for block tags

### v1.3.0

- [x] Fix expression syntax highlighting as per [issue #47](https://github.com/mivaprofsrvcs/vscode-miva-ide/issues/47)
- [x] Fix MvDO VALUE attribute snippet. It should default to be an expression.
- [x] Remove mvt:else tag from mvt:if snippet.
- [x] Research if completion window can be triggered automatically on paste.
- [x] Dedent on completion of else/elseif tags

### v1.4.0

- [x] Fix windows issue for paste completion window
- [x] <s>Fix initial comment auto pipe add to include extra spaces and pipes</s>
- [x] Add support for markdown code fences for mvt and miva script
	- https://stackoverflow.com/questions/75903579/how-to-add-custom-language-syntax-highlighter-to-markdown-code-block-in-vscode

### v1.5.0

- [x] Add setting to enable/disable the suggestion after paste feature.
- [x] Add missing documentation to MVT tags / items.
- [x] Fix bug with `<MIVA>` tag attribute completions.
- [x] Add tooltkit tskl validation.
- [x] Document vscode-icons integration.

### v1.6.0

- [x] Add "What's New" popup after upgrading.
- [x] Fix completions when inside mvt:item functions.

### v1.6.3

- [x] Fix syntax issue in Miva Script where an expression scope is active inside embedded JavaScript curly code blocks.

### v1.7.0

- [x] Add web extension support.

### v1.8.0

- [x] Add "import" style module load functionality for mvt:do functions that don't have a specific global variable for their file attribute.
	- For example: `<mvt:do file="g.Module_Root $ '/modules/util/customfld.mvc'" name="l.void" value="Group_Load_ID( id, group var )" />`
	- For functions that have a string path instead use `<mvt:do file="g.Module_Library_DB" name="l.success" value="Module_Load_Code_Cached( '[MODULE_CODE]', l.module_[MODULE_CODE] )" />` injected at the top of the file
	- Use `g.Module_Root $ l.module_[MODULE_CODE]:module` for the file attribute instead of the string path.
	- Have said "importer" function check if the same "import" already exists and skip adding a duplicate value if so.
- [x] Fix syntax issue for Miva Script expressions.
	- See "LSK/src/features/prv/mmlsk-prv_ad.mv" for an example.

### v1.14.0

- [x] Create language specific debug snippets.
	- mvtcss will only allow a css comment wrap
	- mvtjs will only allow a json encoded console.log wrap
	- mvt standard will allow the existing 3 (debug, debug-json, debug-textarea)


### v1.22.0-rc (next)

* Fixing MivaExpressionParser error for `image` readytheme functions.

### v1.X.0

- [ ] Fix indentation issues when running Reindent Lines.
	- mvt:comment with pipes

### v2.0.0 (TBD)

This is a semi-rewrite of the extension. It will use a newly created Language Service package to handle most of the file parsing. The parsed file generated from the package will improve overall performance, allow me to add missing Language Extension features and provide an easier to maintain extension for future changes. Also, I will focus on adding a `mmt` integration directly into the extension.

- Full `mmt` support via VSCode's Source Control API. This will allow users interact with `mmt` via the VSCode user interface. Features include:
	- Automatic file diffing.
	- Create / delete and push branches.
	- Commit file changes and write notes.
	- Status bar widget that informs the user what remote, branch and changeset they are currently working with.
- Split Miva Script / MVT language service into separate packages. This will make it easier to maintain the intricacies of each language. Also, it aligns the Embedded Language extension guide: https://code.visualstudio.com/api/language-extensions/embedded-languages
- A Miva Script/MVT parser class written in Node that will be used to improve existing parsing performance add missing language server features including:
	- Rename symbol: Allows users to highlight a variable and rename all references within the file.
	- Code Actions: Allows users to automatically fix common issues in the current file.
	- Document Links: Provide links to templates from the `<mvt:item>` tag / readtheme functions.
	- Document Formatting: Automatically format the code to follow our coding standards (spacing, indentation, etc...).
	- Linting: Show basic syntax errors and pre-compilation errors before having to test your code on the server.
	- See all features here: https://code.visualstudio.com/api/language-extensions/programmatic-language-features