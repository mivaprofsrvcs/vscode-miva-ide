# Miva IDE CHANGELOG

## v1.32.0 (latest)

* Fixed issue where workspace level Miva Script symbols were not searchable.

## v1.31.0

* Added Miva Script debug snippets.
	* `mv-debug`
	* 'mv-debug-json'

## v1.30.0

* Added Miva Script command to insert next error code based off of "Prefix" and "Next Error Code" comment block.

	```
	<MvCOMMENT>
	|
	| Prefix         : AAA-AAA-AAA-
	| Next Error Code: 10
	|
	</MvCOMMENT>
	```

## v1.29.0

* Added variable autocompletion for flex instance templates.

## v1.28.1

* Fixed issue with changelog formatting.

## v1.28.0

* Added global variable autocompletion.

## v1.27.0

* Added tag mismatch validation for mvt tags.

## v1.26.0

* Added document linking support for the following items:
	* `templatefeed`
	* `hdft:header`
	* `hdft:footer`
* Fixed issue where template files with a dash character in the name was not linking templates correctly.

## v1.25.0

* Added document linking for `<mvt:fragment />` tags.

## v1.24.0

* Added `<mvt:fragment />` tag snippet and syntax support.
* Added Miva Merchant 10.10.00 LSK data.
* Added new functions from Empressa v5.45:
	* cmark_version
	* cmark_markdown_to_html

## v1.23.3

* Resolved issue where hovering a function may not work due to a reference being a different case than the stored data.

## v1.23.2

* Updated `miva-expression-parser` to `v0.3.0`. This should resolve an issue with `image` and `load_image` ReadyTheme functions not being parsed correctly.

## v1.23.1

* Currency module functions will use global variable for file attribute now. Fixes issue [#117](https://github.com/mivaprofsrvcs/vscode-miva-ide/issues/117).

## v1.23.0

* Added Miva Merchant 10.09.01 LSK data.

## v1.22.2

* Fixed issue where Miva Merchant functions were not providing hover documentation.
* Fixed performance issue when initializing the workspace.

## v1.22.1

* __MVT:__ Fixed bug where `cssui-` templates were creating links via `<mvt:item>` tags to files that did not exist.
* __MVT:__ Force lower caseing for template file names when linking.

## v1.22.0

* __MVT:__ Added document links for `<mvt:item>` tags if an [mmt](https://docs.miva.com/miva10/reference-guide/template-branches/template-branches-overview#mmt_overview) folder is detected within the workspace. The list of supported items are:
	- product_display_imagemachine
	- hdft
	- head
	- html_profile
	- buttons
	- breadcrumbs
	- readytheme
	- facets
	- navbar
	- category_tree
* Fixed bug where Miva Script symbols, including LSK ones, were no longer available.

## v1.21.1

* __Miva Script:__ Fixed issue where the script compiler would display errors from included files in the main file. Fixes [#109](https://github.com/mivaprofsrvcs/vscode-miva-ide/issues/109).

## v1.21.0

* __Miva Script:__ Added autocompletion for functions defined in files linked via `<MvINCLUDE>` tags.
* __Miva Script:__ Added hover documentation for functions defined in files linked via `<MvINCLUDE>` tags.

## v1.20.0

* Added autocompletion for Miva Script functions defined within the same file.

## v1.19.2

* Fixed variable conversion issue for global variables ([#100](https://github.com/mivaprofsrvcs/vscode-miva-ide/issues/100)).

## v1.19.1

* Fixed global variable encoding diagnostic warning for local variables starting with `global` ([#102](https://github.com/mivaprofsrvcs/vscode-miva-ide/issues/102)).

## v1.19.0

* Added document link feature for `<MvINCLUDE>` tags within Miva Script.

## v1.18.1

* Fixed improper Miva Script Compiler errors. The cwd will now be set to the file's root path instead of the workspace.

## v1.18.0

* Added error diagnostics via the [Miva Script Compiler](https://www.miva.com/support/downloads) when using Miva Script syntax.
* Added new settings:
	- `mivaScript.mivaScriptCompiler.enable`
	- `mivaScript.mivaScriptCompiler.disableLSK`

## v1.17.1

* Removed duplicate builtin snippet (`gethostbyname`).

## v1.17.0

* Added missing builtin functions from Empressa versions 5.39-5.42:
	- crypto_evp_sign_ctrl
	- miva_lockfile_valid
	- gdImageCreateFromWebp
	- gdImageCreateFromWebpMem
	- gdImageWebp
	- gdImageWebpMem
	- gdImageWebpOutput
	- gdVersionString
	- miva_member_delete

## v1.16.0

* Added missing builtin functions from Empressa versions 5.07-5.38:
	- gethostbyname
	- miva_array_combine
	- bzip2_compress
	- bzip2_decompress
	- miva_ip_version
	- miva_ip_normalize
	- mysql_get_client_info
	- redis_client_id
	- redis_connect_with_timeout
	- redis_connect_unix
	- rsa_public_encrypt_oaep
	- rsa_private_decrypt_oaep
	- strcmp
	- strcasecmp
	- file_last_error
	- pkcs7_get_signer_info

## v1.15.1

* Fixed issue with `miva_json_encode` function snippet.

## v1.15.0

* Added 10.09.00 LSK data.

## v1.14.0

* Modified the `mvt-debug` snippet to be different for `mvtjs`, `mvtcss` and `mvt` languages.
	* `mvtcss` will output a CSS block comment.
	* `mvtjs` will output a `console.log()` call with a JSON string.
	* `mvt` will retain existing functionality.

## v1.13.0

* Added new `mvt-debug-textarea` snippet.
	* Outputs a readonly textarea that resizes to fit content and decodes the debugged variable data.
* Switched default output format to `<pre>` tag for `mvt-debug-json` snippet.
* Switched debug variable to `_mvt_debug` from `_mvps_debug`.

## v1.12.1

* Fixed issue with CHANGELOG.

## v1.12.0

* Updated mvt-debug snippet default wrap to `<pre>` tag instead of HTML comment.

## v1.11.1

* Fixed bug with Currency modules merchant functions file paths.

## v1.11.0

* Added setting to disable documentation popover on hover (issue #80).
	* `mivaIde.MVT.disableHoverDocumentation`
	* `mivaIde.mivaScript.disableHoverDocumentation`
* Updated documentation references to new developer documentation site.

## v1.10.0

* Updated function data for Miva Merchant 10.08.03.

## v1.9.0

* Tag attribute completions will now be limited by the current attributes on the existing tag.
* Removed commit characters from tag completion data
	* This was causing unintended issues when trying to write code while the completion window was open.

## v1.8.2

* Fixed issue where the "module imports" variables were not referencing the correct member (`:module`).

## v1.8.1

* Added an additional linebreak after "module imports" comment.

## v1.8.0

* Added `mvt:do`/`MvDO` "module imports".
	* This feature replaces existing string-based file paths in favor of loading modules via `Module_Load_Code_Cached`.
	* Using `Module_Load_Code_Cached` ensures that the correct module will be loaded in the event the file path changes.
* Fixed Miva Script syntax issue.
* Replaced png icons with new svg icons.

## v1.7.2

* Fixed issue where MVT and Miva Script language servers would not start for the Web version.

## v1.7.1

* Fixed paths to syntax and configuration files for the Web version.

## v1.7.0

* Added support for VSCode's Web Extension features.
	* This allows users to install the Miva IDE extension when using [Visual Studio Code for the Web](https://code.visualstudio.com/docs/editor/vscode-web).
* Fixed issue with "MVT: Calculate POS Number" command.
* Updated LSK functionality to utilize local workspace LSK reference instead of `mivaIde.LSK.path` setting if an LSK folder is detected within the workspace.

## v1.6.3

* Fixed Miva Script expression syntax highlighting error.

## v1.6.2

* Updated CHANGELOG header to be consistent with README.
* Fixed MvASSIGNARRAY completion bugs.

## v1.6.1

* Removed automatic popup to show the CHANGELOG.
* Updated CHANGELOG popup functionality to instead display an information message with a link to show the CHANGELOG.

## v1.6.0

* Added feature that shows the CHANGELOG after an update happens.
* Added setting that allows you to disable showing the CHANGELOG after update.
	* `mivaIde.showChangelogOnUpdate`
* Added a command that allows you to show the CHANGELOG.
	* "Miva IDE: Show Updates"
* Fixed `mvt:item` tag variable completions within function parameters.
* Fixed bug related to legacy if/elseif/else snippet setting not working properly.

## v1.5.0

* Added setting to enable/disable the suggestion after paste feature.
	* This setting is disabled by default.
* Added setting to enable/disable legacy if/elseif/else snippets.
	* This setting is disabled by default.
* Added missing documentation to MVT tags / items.
* Fixed bug with `<MIVA>` tag attribute completions.
* Added tooltkit tskl validation.
* Documented [vscode-icons](https://github.com/vscode-icons) integration.

## v1.4.2

* Fixed bug where completion window was triggering after pasting into quick find input.

## v1.4.1

* Fixed bug where completion window was triggering after pasting into search bar.

## v1.4.0

* Fixed Windows OS issue for paste completion window.
* Added support for markdown code fences for mvt and Miva Script.

## v1.3.0

* Fixed expression syntax highlighting in Miva Script as per [issue #47](https://github.com/mivaprofsrvcs/vscode-miva-ide/issues/47).
* Fixed MvDO VALUE attribute snippet. It should default to be an expression.
* Removed mvt:else tag from mvt:if snippet.
* Added workaround to trigger completion window on paste command.
* Dedent on completion of else/elseif tags for Miva Script and MVT.

## v1.2.0

* Applied fixes to Miva Script snippets based off developer feedback
* Fixed builtin function `miva_joinstring` flag parameter completion values as per [issue #52](https://github.com/mivaprofsrvcs/vscode-miva-ide/issues/52)
* Added operators to expression completions results
* Added engine version callouts to tags and builtin functions
* Fixed indentation issues for block tags referenced in [issue #46](https://github.com/mivaprofsrvcs/vscode-miva-ide/issues/46)

## v1.1.0

* Bumped version to supersede previously deployed prerelease versions.

## v1.0.0

* Improved autocomplete and language intelligence for MVT and Miva Script.
	* Improved tag snippets.
	* Added tag attribute autocompletion.
	* Added matching `mvt:item` name and param attribute completions.
* Improved MVT and Miva Script syntax highlighting.
* Added language intelligence for the underlying HTML syntax in MVT files.
* Added hover-on-symbol support and documentation for key MVT features.
	* Items & Item Params
	* Builtin Functions
	* Variables
	* Miva Merchant functions
* Added goto-definition support for MVT variables (via `<mvt:assign>`).
* Added Code Actions support for existing problem diagnostics.
* Added improved snippet and completion intelligence.
	* Completions will be expression and document aware. For example no function completions within variable or document contexts.
	* Added compound `mvt:item` name and param completion snippets to the document completion list.
* Reduced overall extension size by adding `esbuild`.
* Updated dependencies and fixed security issues.

## v0.12.2

* Fixed broken Emmet support.

## v0.12.0

* Added embedded MVT syntax support for JavaScript.
* Added embedded MVT syntax support for CSS.

## v0.11.0

* Updated LSK functions to 10.04.02.

## v0.10.0

* Fixed dependency security vulnerabilities.
* Updated builtin functions to latest Empressa version.
* Updated LSK functions to 10.04.01.

## v0.9.1

* Fixed issue with functions-merchant autocompletion data that caused the file name to not auto fill.

## v0.9.0

* Added LSK data up to 10.04.00
* Added builtin function data up to Empressa 5.36

## v0.8.1

* Added missing CHANGELOG updates

## v0.8.0

* Added `LSK > Path` feature which allows symbol sniffing to a specific folder for goto definition support.

## v0.7.0

* Fixed `<mvt:capture>` syntax display bug
* Added `s.` variable autocompletion and documentation
* Added file-specific global and local variable autocompletion
* Updated scope for tag completions
* Updated scope for entity completions

## v0.4.0

* Added Convert & Copy command to the Command Palette.
* Added Convert to Variable / Convert to Entity commands.
* Added support for secondary block comment (HTML comments).
* Added command to insert HTML comment.
* Added `l.posx` calculator function.
* Fixed MVT/MV comment highlighting.
* Fixed issue with snippet scopes.

## v0.3.0

* Added Miva Script syntax highlighting.
* Added Miva Script MvDO and `[].` autocompletion.
* Added Go To Definition support for Miva Script and MVT.
* Added "Find Symbol in Document" support for Miva Script.

## v0.2.0

* Added the following settings:
	* mivaIde.MVT.defaultEncodingForVariableConversions
	* mivaIde.MVT.lint.showWarningOnToolkitUsage
	* mivaIde.MVT.lint.showWarningOnToolbeltUsage
	* mivaIde.MVT.lint.showWarningForUnencodedVariables
* Added some linting rules for MVT.
* Added Convert & Copy command.
* Updated flow for selecting MVT:DO function values.