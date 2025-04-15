import {
	TagData,
	TagSnippet
} from '../util/interfaces';

// Snippet data structure

export const mvSnippetData: Record<string, TagSnippet> = {
	debug: {
		insertTextFormat: 'Snippet',
		kind: 'Function',
		commitCharacters: [],
		documentation: '',
		insertText: `$\{2|<pre>,<!--|\}
@@debug $1
<MvEVAL EXPR = "{ glosub( miva_array_serialize( $\{1:variable\} ), ',', asciichar( 10 ) ) }">
$\{3|</pre>,-->|\}`,
		label: 'mv-debug'
	},
	debug_json: {
		insertTextFormat: 'Snippet',
		kind: 'Function',
		commitCharacters: [],
		documentation: '',
		insertText: `$\{2|<pre>,<!--|\}
@@debug $1
<MvEVAL EXPR = "{ miva_json_encode( $\{1:variable\}, 'pretty' ) }">
$\{3|</pre>,-->|\}`,
		label: 'mv-debug-json'
	}
};

// Full tag data structure

export const mvTagData: Record<string, TagData> = {
	"miva": {
		"attributes": {
			"standardoutputlevel": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: html, text, compresswhitespace. Specifies what displays in browser.\n    If empty, output is suppressed unless explicitly output using the <MvEVAL> tag. By default HTML and text are output\n    to the browser.\n    \n        html: HTML is output to the browser. Default.\n        text: text (non html) is output to the browser. Default.\n        compresswhitespace: will cause Miva Script to eliminate extra whitespace in the output of Miva Script\n        code. Whitespace is leading and trailing spaces, tabs, and new lines.",
				"insertText": "STANDARDOUTPUTLEVEL = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "STANDARDOUTPUTLEVEL",
				"required": false,
				"valueType": "string",
				"values": {
					"html": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "html",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "html"
					},
					"text": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "text",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "text"
					},
					"compresswhitespace": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "compresswhitespace",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "compresswhitespace"
					}
				}
			},
			"erroroutputlevel": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: runtime, expression (depreciated), syntax (depreciated).\n    If empty, error output is suppressed. If omitted, defaults to runtime.\n        runtime: Specifies runtime errors display in the browser. Runtime errors occur when the script is executing.\n        For example, using <MvIMPORT> on a file that does not exist.\n        expression and syntax are unused in compiled Miva Script and are flagged by the compiler.",
				"insertText": "ERROROUTPUTLEVEL = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "ERROROUTPUTLEVEL",
				"required": false,
				"valueType": "string",
				"values": {
					"runtime": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "runtime",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "runtime"
					}
				}
			},
			"errormessage": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional global error message text displayed before standard error messages. If specified, this message\n    will be displayed even if all forms of error reporting are turned off.",
				"insertText": "ERRORMESSAGE = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "ERRORMESSAGE",
				"required": false,
				"valueType": "string"
			},
			"mvadd_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvADD_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvADD_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvassembly_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvASSEMBLY_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvASSEMBLY_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvassign_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvASSIGN_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvASSIGN_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvassignarray_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvASSIGNARRAY_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvASSIGNARRAY_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvasynchronous_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvASYNCHRONOUS_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvASYNCHRONOUS_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvcall_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvCALL_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvCALL_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvcallcontinue_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvCALLCONTINUE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvCALLCONTINUE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvcallstop_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvCALLSTOP_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvCALLSTOP_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvcapture_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvCAPTURE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvCAPTURE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvclose_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvCLOSE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvCLOSE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvcloseview_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvCLOSEVIEW_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvCLOSEVIEW_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvcomment_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvCOMMENT_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvCOMMENT_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvcommerce_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvCOMMERCE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvCOMMERCE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvcommercecontinue_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvCOMMERCECONTINUE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvCOMMERCECONTINUE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvcommercestop_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvCOMMERCESTOP_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvCOMMERCESTOP_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvcommit_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvCOMMIT_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvCOMMIT_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvcreate_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvCREATE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvCREATE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvdbcommand_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvDBCOMMAND_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvDBCOMMAND_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvdelete_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvDELETE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvDELETE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvdimension_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvDIMENSION_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvDIMENSION_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvdo_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvDO_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvDO_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvelse_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvELSE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvELSE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvelseif_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvELSEIF_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvELSEIF_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mveval_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvEVAL_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvEVAL_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvexit_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvEXIT_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvEXIT_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvexport_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvEXPORT_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvEXPORT_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvfilter_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvFILTER_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvFILTER_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvfind_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvFIND_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvFIND_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvfor_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvFOR_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvFOR_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvforcontinue_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvFORCONTINUE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvFORCONTINUE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvforeach_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvFOREACH_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvFOREACH_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvforeachcontinue_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvFOREACHCONTINUE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvFOREACHCONTINUE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvforeachstop_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvFOREACHSTOP_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvFOREACHSTOP_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvforstop_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvFORSTOP_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvFORSTOP_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvfuncreturn_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvFUNCRETURN_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvFUNCRETURN_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvfunction_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvFUNCTION_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvFUNCTION_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvfunctionreturn_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvFUNCTIONRETURN_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvFUNCTIONRETURN_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvgo_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvGO_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvGO_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvhide_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvHIDE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvHIDE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvif_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvIF_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvIF_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvifdef_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvIFDEF_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvIFDEF_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvifndef_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvIFNDEF_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvIFNDEF_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvimport_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvIMPORT_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvIMPORT_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvimportcontinue_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvIMPORTCONTINUE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvIMPORTCONTINUE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvimportstop_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvIMPORTSTOP_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvIMPORTSTOP_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvinclude_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvINCLUDE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvINCLUDE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvlocalized_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvLOCALIZED_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvLOCALIZED_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvlocalized-text_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvLOCALIZED-TEXT_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvLOCALIZED-TEXT_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvlocalized-token_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvLOCALIZED-TOKEN_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvLOCALIZED-TOKEN_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvlockfile_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvLOCKFILE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvLOCKFILE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvmakeindex_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvMAKEINDEX_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvMAKEINDEX_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvmember_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvMEMBER_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvMEMBER_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvopen_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvOPEN_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvOPEN_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvopenview_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvOPENVIEW_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvOPENVIEW_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvpack_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvPACK_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvPACK_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvpop_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvPOP_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvPOP_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvpopcontinue_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvPOPCONTINUE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvPOPCONTINUE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvpopdelete_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvPOPDELETE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvPOPDELETE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvpopstop_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvPOPSTOP_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvPOPSTOP_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvprimary_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvPRIMARY_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvPRIMARY_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvquery_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvQUERY_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvQUERY_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvreference_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvREFERENCE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvREFERENCE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvreferencearray_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvREFERENCEARRAY_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvREFERENCEARRAY_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvreindex_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvREINDEX_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvREINDEX_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvrevealstructure_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvREVEALSTRUCTURE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvREVEALSTRUCTURE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvrollback_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvROLLBACK_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvROLLBACK_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvsetindex_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvSETINDEX_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvSETINDEX_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvskip_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvSKIP_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvSKIP_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvsmtp_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvSMTP_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvSMTP_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvtransact_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvTRANSACT_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvTRANSACT_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvundelete_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvUNDELETE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvUNDELETE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvupdate_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvUPDATE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvUPDATE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvwhile_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvWHILE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvWHILE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvwhilecontinue_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvWHILECONTINUE_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvWHILECONTINUE_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"mvwhilestop_error": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: fatal | nonfatal, display | nodisplay. This\n    attribute controls handling of runtime errors for specific tags. During a runtime error, a global variable is\n    populated that contain the error message in the form of MvTagname_Error. For example a runtime error during <MvIMPORT>\n    will return MvImport_Error. Use the MvIMPORT_ERROR attribute to control Miva Scripts response.\n    \n        fatal | nonfatal: Select one. fatal will cause all runtime errors for this tag to terminate\n        the script. This is the default. nonfatal will allow the script to continue. \n        display | nodisplay: Select one. display will cause runtime error messages for this tag\n        to be displayed. This is the default nodisplay will suppress error messages for this tag.",
				"insertText": "MvWHILESTOP_ERROR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MvWHILESTOP_ERROR",
				"required": false,
				"valueType": "string",
				"values": {
					"fatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "fatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "fatal"
					},
					"nonfatal": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonfatal",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonfatal"
					},
					"display": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "display",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "display"
					},
					"nodisplay": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nodisplay",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nodisplay"
					}
				}
			},
			"ident": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional. Used to add rcs-style ident tags (Revision Control System) to compiled Miva Script files in this\n    form. $Id: filename revision number date time author $",
				"insertText": "IDENT = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "IDENT",
				"required": false,
				"valueType": "string"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Enables you to configure the level of output, error reporting, and error handling.\n\nYour script can contain multiple MIVA tags as needed, to turn features on and off. Each <MIVA> tag can specify one or\nmore attributes. The STANDARDOUTPUTLEVEL and ERROROUTPUTLEVEL attributes can also be specified in user-defined functions\ni.e. <MvFUNCTION> giving you local control, or embedded within a function, allowing you for example, to enable and disable\noutput to the browser for sections of script. When subsequent <MIVA> tags are encountered, and an attribute is omitted,\nthe current setting for that attribute are assumed.",
		"insertText": "<MIVA STANDARDOUTPUTLEVEL = \"$1\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MIVA",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MIVA.html",
		"selfClosing": true,
		"void": true
	},
	"mvadd": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Database alias. When a database is opened with MvOPEN, it is referenced in all\n\tother database commands by the alias. This lets you open the same database file with multiple aliases, often with\n\tdifferent indexes.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "expression"
			},
			"view": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional odbc_view. Support for ODBC has been dropped so this attribute can be omitted.",
				"insertText": "VIEW = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VIEW",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Adds a record to the end of the database that has alias db_alias and positions the record pointer at that record. If NAME is omitted, the record is added to the primary database.\n\nBefore <MvADD> is executed, each field for the record you want to insert must be assigned to database variables\nas shown below. <MvADD> locks the record that is being added.",
		"insertText": "<MvADD NAME = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvADD",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvADD.html",
		"selfClosing": true,
		"void": true
	},
	"mvassembly": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "New in 5.18. MvASSEMBLY allows MivaScript assembly code to be interleaved with\ntraditional MivaScript.  The content of the MvASSEMBLY tag is passed unmodified to the MivaScript  assembler.\n\n",
		"insertText": "<MvASSEMBLY>\n\t$1\n</MvASSEMBLY>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvASSEMBLY",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvASSEMBLY.html",
		"selfClosing": false,
		"void": false
	},
	"mvassign": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. The name assigned to the variable. Normally a literal, this can also contain an expression\n\tthat results in a variable name. For example \"{ g.varname }\" where g.varname = \"l.item[10]\".",
				"insertText": "NAME = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "literal"
			},
			"value": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. The expression or literal for the named variable.",
				"insertText": "VALUE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VALUE",
				"required": true,
				"valueType": "expression"
			},
			"index": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional: The expression or literal for the index to a variable array.",
				"insertText": "INDEX = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "INDEX",
				"required": false,
				"valueType": "literal"
			},
			"member": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional: The expression or literal for the member to a variable structure.",
				"insertText": "MEMBER = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MEMBER",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Assigns NAME variable a VALUE given by expression or literal. The vaiable can also be an array or member of a structure.\n\nVariable names must follow specific naming conventions and are normally prefixed with a character and period\nindicating the scope of the variable. (e.g. s, l, d, or g) See Variables for\na complete description.",
		"insertText": "<MvASSIGN NAME = \"$1\" VALUE = \"{ $2 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvASSIGN",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvASSIGN.html",
		"selfClosing": true,
		"void": true
	},
	"mvassignarray": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. The name assigned to the variable.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "expression"
			},
			"value": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "The value assigned to the variable name.",
				"insertText": "VALUE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VALUE",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Defines a multi-dimension array or structure using  and/or .\n\nArrays and structures are used to store multiple values in a single variable. They can consist of a simple indexed \nlist of values or more complex spreadsheet or database like structures.  If you think of a single dimension array \nas an simple numbered list, a two dimension array can be though of as a spreadsheet with numbered rows and columns. Miva \nScript provides flexible tools for creating even more complex data structures. Arrays can also be assigned using <MvASSIGN>; \noften the resulting code is shorter, but their is no functional difference between the two forms.",
		"children": [
			"mvdimension",
			"mvmember"
		],
		"insertText": "<MvASSIGNARRAY NAME = \"$1\" VALUE = \"{ $2 }\">\n\t$3\n</MvASSIGNARRAY>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvASSIGNARRAY",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvASSIGNARRAY.html",
		"selfClosing": false,
		"void": false
	},
	"mvasynchronous": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "Code within a  and  block will start to execute in a separate asynchronous task,\nand the task will exit when the  block is reached.  All output, even via , is\ndiscarded from the asynchronous task.\n\nAsynchronous tasks can not be started from within an asynchronous task.",
		"engine": ">=5.24",
		"insertText": "<MvASYNCHRONOUS>\n\t$1\n</MvASYNCHRONOUS>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvASYNCHRONOUS",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvASYNCHRONOUS.html",
		"selfClosing": false,
		"void": false
	},
	"mvcall": {
		"attributes": {
			"action": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, specifies the fully qualified URL to be contacted, starting with http.",
				"insertText": "ACTION = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "ACTION",
				"required": true,
				"valueType": "literal"
			},
			"method": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required \"GET | POST | HEAD | XML | RAW | OPTIONS | PUT | DELETE | DELETE | TRACE | CONNECT | PATCH | LINK | UNLINK\".\n    \tIn most cases use GET for simple page retrieval and use POST when when transmitting field data.",
				"insertText": "METHOD = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "METHOD",
				"required": true,
				"valueType": "string",
				"values": {
					"get": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "GET",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "GET"
					},
					"post": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "POST",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "POST"
					},
					"head": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "HEAD",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "HEAD"
					},
					"xml": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "XML",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "XML"
					},
					"raw": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "RAW",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "RAW"
					},
					"options": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "OPTIONS",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "OPTIONS"
					},
					"put": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "PUT",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "PUT"
					},
					"delete": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "DELETE",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "DELETE"
					},
					"trace": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "TRACE",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "TRACE"
					},
					"connect": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "CONNECT",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "CONNECT"
					},
					"patch": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "PATCH",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "PATCH"
					},
					"link": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "LINK",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "LINK"
					},
					"unlink": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "UNLINK",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "UNLINK"
					}
				}
			},
			"content-type": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional, attribute available when the METHOD is XML, RAW \n\tor POST (v 5.32 see below)\n        If not specified and METHOD is XML, POST will have content type \"text/xml.\"\n        If not specified and METHOD is RAW, will have content type \"text/plain\".\n    \tThe values of the variables listed in the FIELDS attribute will then be passed in the header.\n\tPOST content type of \"application/json\" supported as of v5.32. The POSTed \n\tdata will be parsed and stored in the s.json_data variable as a JSON object. \n\tThe raw POSTed data will populate the s.content_data variable.",
				"insertText": "CONTENT-TYPE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "CONTENT-TYPE",
				"required": false,
				"valueType": "expression"
			},
			"fields": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional, comma delimited list of variables value pairs sent to the URL when POST is used as the method.",
				"insertText": "FIELDS = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FIELDS",
				"required": false,
				"valueType": "expression"
			},
			"files": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional, contains variables whose values are filenames that will be uploaded to the URL specified in ACTION. The specified METHOD must be 'POST' or 'PUT'.",
				"insertText": "FILES = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FILES",
				"required": false,
				"valueType": "expression"
			},
			"certfile": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional, resolves to a location in the data directory containing a certificate or set of certificates.",
				"insertText": "CERTFILE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "CERTFILE",
				"required": false,
				"valueType": "expression"
			},
			"certtype": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional, must be either \"PEM\" or \"ASN1\".",
				"insertText": "CERTTYPE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "CERTTYPE",
				"required": false,
				"valueType": "expression"
			},
			"certpass": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "allows PEM-format certificates and/or private keys to be stored encrypted on disk. If specified,\n    the value of CERTPASS is used to decrypt the certificate and/or private key in the file specified by CERTFILE.",
				"insertText": "CERTPASS = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "CERTPASS",
				"required": true,
				"valueType": "expression"
			},
			"certvalue": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "allow inclusion of a certificate directly in the code, as opposed to being the contents of a file pointed to by the CERTFILE attribute.",
				"insertText": "CERTVALUE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "CERTVALUE",
				"required": true,
				"valueType": "expression"
			},
			"timeout": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional, this value is used if it is smaller than the configured MvCONFIG_CALL_TIMEOUT value.",
				"insertText": "TIMEOUT = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "TIMEOUT",
				"required": false,
				"valueType": "expression"
			},
			"headers": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional, the value in this attribute will be placed after the Empresa-generated HTTP headers, but before the CRLF\n    separating the HTTP headers and the body of the HTTP request.",
				"insertText": "HEADERS = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "HEADERS",
				"required": false,
				"valueType": "expression"
			},
			"flags": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional, \"noparse\" which will disable parsing of the returned \n\tdata. The data will populate the s.callvalue variable. This is ideal if you \n\tdo not need to iterate HTML / XML elements.",
				"insertText": "FLAGS = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FLAGS",
				"required": false,
				"valueType": "string",
				"values": {
					"noparse": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "noparse",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "noparse"
					}
				}
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Uses the HTTP/1.1 protocol to emulate a browser and contact a remote or local host. HTML, XML, and other pages can be requested from or posted to the remote URI. Page data is returned one tag at a time inside the  loop.\n\nAugust 2017 -- Added new section named Methods:\n\tThis new section will try to clarify and expand on all the new methods added over the last few years. A few more examples have been added as well.\n\tPLEASE, post your own examples in the User Annotations section at the bottom of this page.",
		"insertText": "<MvCALL ACTION = \"$1\" METHOD = \"$2\">\n\t$3\n</MvCALL>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvCALL",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvCALL.html",
		"selfClosing": false,
		"void": false
	},
	"mvcallcontinue": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "Returns program flow to the top of the  loop, performing the operations would normally occur at the bottom of the loop i.e. reading the next line.\n\nThis examples calls a URL stripping out any tags by using <MvCALLCONTINUE> to ignore tag objects.",
		"engine": ">=5.10",
		"insertText": "<MvCALLCONTINUE>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvCALLCONTINUE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvCALLCONTINUE.html",
		"selfClosing": true,
		"void": true
	},
	"mvcallstop": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "can be explicitly halted using the  tag to exit the loop. Execution jumps to the code following the closing  tag.\n\nThis examples calls a URL and displays the page. If any value other than 200 (i.e. http status ok ) is returned in \ns.callreturnheader[1] the call terminates by using <MvCALLSTOP>",
		"insertText": "<MvCALLSTOP>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvCALLSTOP",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvCALLSTOP.html",
		"selfClosing": true,
		"void": true
	},
	"mvcapture": {
		"attributes": {
			"variable": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. Variable name or expression that results in a variable name where the captured output is\n\tstored.",
				"insertText": "VARIABLE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VARIABLE",
				"required": true,
				"valueType": "expression"
			},
			"standardoutputlevel": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: html, text, compresswhitespace. Specifies what gets returned in VARIABLE.\n\tIf omitted, output is returned un-altered.\n\t\n\t\thtml: Default. HTML is output to the browser.\n\t\ttext: Default. Text (non html) is output to the browser.\n\t\tcompresswhitespace: will cause Miva Script to eliminate extra whitespace in the output of Miva Script\n\t\tcode. Whitespace is leading and trailing spaces, tabs, and new lines.",
				"insertText": "STANDARDOUTPUTLEVEL = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "STANDARDOUTPUTLEVEL",
				"required": false,
				"valueType": "string",
				"values": {
					"html": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "html",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "html"
					},
					"text": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "text",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "text"
					},
					"compresswhitespace": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "compresswhitespace",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "compresswhitespace"
					}
				}
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Captures the browser output until the end  tag, and save it into a variable.\n\nSometimes we deal with functions that output directly to the screen. By capturing the output in a variable, it is\npossible to pass the results to another function or save the output to a file.",
		"insertText": "<MvCAPTURE VARIABLE = \"{ $1 }\">\n\t$2\n</MvCAPTURE>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvCAPTURE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvCAPTURE.html",
		"selfClosing": false,
		"void": false
	},
	"mvclose": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Database alias. When a database is opened with\n\tMvOPEN, it is referenced in\n\tall other database commands by the alias. This lets you open the same database file with multiple aliases, often\n\twith different indexes.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Closes the database alias opend using . If name omitted, primary database alias (the one most recently opened with  or ) is closed. All open databases are automatically closed when a MivaScript program finishes executing.\n\nIt's good programming practice to close a database once you are finished working with it. This can prevent runtime\nerrors if another process attempts to open a file using the same alias.",
		"insertText": "<MvCLOSE NAME = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvCLOSE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvCLOSE.html",
		"selfClosing": true,
		"void": true
	},
	"mvcloseview": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional Database alias. When a database is opened with MvOPEN,\n\tthe database is referenced by the alias. If omitted, the the primary\n\tdatabase is assumed.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": false,
				"valueType": "expression"
			},
			"view": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. The view alias that will be closed.",
				"insertText": "VIEW = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VIEW",
				"required": true,
				"valueType": "string"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Closes the specified SQL view opened with\n\nIt's good programming practice to close a view once you are finished working with it. This can prevent runtime\nerrors if another process attempts to open s view using the same alias.",
		"insertText": "<MvCLOSEVIEW VIEW = \"$1\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvCLOSEVIEW",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvCLOSEVIEW.html",
		"selfClosing": true,
		"void": true
	},
	"mvcomment": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "Used to annotate your program and inserts comments or code ignored by the compiler. They are also useful when you are developing and debugging your program.\n\nMiva Script comments inside your script to explain the code can be used to make it more readable. Comments are always \nended with a closing tag and can span a single or multiple lines.",
		"insertText": "<MvCOMMENT>\n\t$1\n</MvCOMMENT>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvCOMMENT",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvCOMMENT.html",
		"selfClosing": false,
		"void": false
	},
	"mvcommerce": {
		"attributes": {
			"action": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional, URL for the destination server.",
				"insertText": "ACTION = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "ACTION",
				"required": false,
				"valueType": "expression"
			},
			"metamethod": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, Identifies the method you are using to contact the server (that is, the type of service \n\tyou are requesting). Define the METAMETHOD to match the one you have registered in the Miva Engine.",
				"insertText": "METAMETHOD = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "METAMETHOD",
				"required": true,
				"valueType": "expression"
			},
			"fields": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Comma delimited, list of variables that contains the data to be sent to the commerce library.",
				"insertText": "FIELDS = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FIELDS",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Provides communications between a Miva Script application and an external commerce library. It will loop until it no longer receives data, or until it is explicitly halted with the  tag.\n\nA Commerce Library is a program file that is stored on the server which allows for secure transactions with other \nwebsite using Miva Script. Because these files are generally stored in a shared central location on the server, \nindividual site owners usually don't have access to them. They can only be enabled and modified by someone with \nadministrative access to the server. Usually, this would be your host provider. Contact your host and ask them to \ninstall the commerce library on your server for you.",
		"insertText": "<MvCOMMERCE METAMETHOD = \"{ $1 }\" FIELDS = \"{ $2 }\">\n\t$3\n</MvCOMMERCE>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvCOMMERCE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvCOMMERCE.html",
		"selfClosing": false,
		"void": false
	},
	"mvcommercecontinue": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "Returns program flow to the top of the  loop, performing the operations would normally occur at the bottom of the loop i.e. reading the next line.\n\nThis example skips any un-important / unused responses from the commerce library using  <MvCOMMERCECONTINUE>.",
		"engine": ">=5.10",
		"insertText": "<MvCOMMERCECONTINUE>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvCOMMERCECONTINUE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvCOMMERCECONTINUE.html",
		"selfClosing": true,
		"void": true
	},
	"mvcommercestop": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "can be explicitly halted using the  tag to exit the loop. Execution jumps to the code following the closing  tag.\n\nThis example terminates the <MvCOMMERCE> if an unexpected value is returned.",
		"insertText": "<MvCOMMERCESTOP>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvCOMMERCESTOP",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvCOMMERCESTOP.html",
		"selfClosing": true,
		"void": true
	},
	"mvcommit": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional Database alias. When a database is opened with MvOPEN,\n\tit is referenced in all other database commands by the alias. If omitted, the operation is performed on the primary\n\tdatabase. The database must be open.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "When altering multiple related database records, it's important that all transactions proceed.  manual commits to writing database records.\n\nNormally database operations take place immediately when a database tag is executed.",
		"insertText": "<MvCOMMIT>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvCOMMIT",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvCOMMIT.html",
		"selfClosing": true,
		"void": true
	},
	"mvcreate": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, database alias. When a database is open, it is referenced in all \n\tother database commands by the alias. This lets you open the same database file with multiple aliases, often with \n\tdifferent indexes.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "expression"
			},
			"database": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "The physical path and file name that will be created. For xBase3 files (default) the extension is \n\tnormally .dbf. If a MEMO field is specified a second file will be automatically created with the extension .dbt.",
				"insertText": "DATABASE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "DATABASE",
				"required": true,
				"valueType": "expression"
			},
			"fields": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Is a comma separated list of field names and field type.\n\t\t\n\t\t\tfield_name CHAR(max_chars), You must specify max_chars up to 254. For larger data \n\t\t\tuse the MEMO field type.\n\t\t\tfield_name NUMBER(digits_before.digits_after), You may specify the digits_before a \n\t\t\tdecimal point and digits_after up to a maximum of 19 characters including the decimal. If omitted, \n\t\t\te.g. NUMBER(), defaults to NUMBER(19). If a decimal is omitted, none will be permitted. Numeric values with \n\t\t\tmore than the specified number of decimal places will be truncated. Numeric values with more than the \n\t\t\tspecified number of digits before the decimal place will not be entered in the database. \n\t\t\tfield_name DATE, Date fields have a fixed length of 8 digites in the form YYYYMMDD.\n\t\t\tfield_name BOOL, True or false where 1 is true and 0 is false.\n\t\t\tfield_name MEMO, fields have a dynamic length, allocated as needed.",
				"insertText": "FIELDS = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FIELDS",
				"required": true,
				"valueType": "expression"
			},
			"type": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional. xBase3 (default) | MivaSQL \". This attribute can be omitted for xBase3 \n\tdatabases. Support for ODBC has been dropped.",
				"insertText": "TYPE = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "TYPE",
				"required": false,
				"valueType": "string",
				"values": {
					"xbase3": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "xbase3",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "xbase3"
					}
				}
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Creates a new database with the structure specified by fields. Field types are CHAR, NUMBER, DATE, BOOL, and MEMO.\n\nA database must be created before it can be used. When you create a database, you are defining its structure. An \nempty database file is created on your system. This step needs to be done only once for each database.",
		"insertText": "<MvCREATE NAME = \"{ $1 }\" DATABASE = \"{ $2 }\" FIELDS = \"{ $3 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvCREATE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvCREATE.html",
		"selfClosing": true,
		"void": true
	},
	"mvdbcommand": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional Database alias. When a database is opened with\n\t<MvOPEN>,\n\tit is referenced in all other database commands by the alias. If omitted, the index is opened for the primary\n\tdatabase. The database must be open.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": false,
				"valueType": "expression"
			},
			"command": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. Command name.",
				"insertText": "COMMAND = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "COMMAND",
				"required": true,
				"valueType": "expression"
			},
			"parameter": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional parameters.",
				"insertText": "PARAMETER = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "PARAMETER",
				"required": false,
				"valueType": "string"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Used to issue commands to a database that has already been opened or created via the MvOPEN or MvCREATE tags. All database interfaces take these commands.\n\nThe database must already be open or created via the <MvOPEN> or <MvCREATE> tags.",
		"engine": ">=5.00",
		"insertText": "<MvDBCOMMAND COMMAND = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvDBCOMMAND",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvDBCOMMAND.html",
		"selfClosing": true,
		"void": true
	},
	"mvdelete": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Database alias. When a database is opened with MvOPEN, it is referenced in all\n\tother database commands by the alias.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "expression"
			},
			"view": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional odbc_view. Support for ODBC has been dropped so this attribute can be omitted.",
				"insertText": "VIEW = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VIEW",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Marks the current database record for deletion. Records marked for deletion accumulate until they are actually deleted from the database with  or unmarked using .\n\nMarks the current database record for deletion. Records marked for deletion accumulate until they are actually\ndeleted from the database with <MvPACK> or unmarked using\n<MvUNDELETE> .",
		"insertText": "<MvDELETE NAME = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvDELETE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvDELETE.html",
		"selfClosing": true,
		"void": true
	},
	"mvdimension": {
		"attributes": {
			"index": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, declares the index of the array in NAME \n\tthat will receive the VALUE.",
				"insertText": "INDEX = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "INDEX",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Assigns an index position for a mulidimensional array. See\n\nIf you think of a single dimension array as an simple numbered list, a two dimension array can be though of as a \nspreadsheet with numbered rows and columns. Miva Script provides flexible tools for creating even more complex data \nstructures.",
		"parent": "mvassignarray",
		"insertText": "<MvDIMENSION INDEX = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvDIMENSION",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvDIMENSION.html",
		"selfClosing": true,
		"void": true
	},
	"mvdo": {
		"attributes": {
			"file": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. This is the path and name of the compiled file. If it is a relative path is is relative to the \n\tcurrent file.",
				"insertText": "FILE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FILE",
				"required": true,
				"valueType": "expression"
			},
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional. If NAME and VALUE are omitted. The file filename is processed as if it were included in the \n\tcurrent file. Any output from the external file is merged into the current file. If Included, it is the name \n\tassigned to the variable which will contain the results. Normally a literal, this can also contain an expression \n\tthat results in a variable name.",
				"insertText": "NAME = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": false,
				"valueType": "literal"
			},
			"value": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "The expression that calls the external function. The syntax for the external function is the same as for \n\tany other Miva Script function.",
				"insertText": "VALUE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VALUE",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Used to call an function declared with  in an external file or call an external file directly executing the script starting at the beginning.\n\n<MvDO> works in two somewhat different ways, depending on whether NAME and VALUE are present. If they are specified, \nthe function is the only code in the external file that gets executed. ALL other Miva Script and HTML code is ignored. \nThis allows you to create librarys of functions stored in external compiled files.\n\nIf NAME and VALUE are omitted, everything in the external file is executed, however any script contained within \nMvFUNCTION blocks are ignored. Starting at the beginning of the file, the results of all <MvASSIGN> tags are available \nto the calling program. All system and global variables, and all open databases, are available to the code in the \nexternal file. For example a file could contain initialization script, setting global variables and opening databases.",
		"insertText": "<MvDO FILE = \"{  }\" NAME = \"$2\" VALUE = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvDO",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvDO.html",
		"selfClosing": true,
		"void": true
	},
	"mvelse": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "Used in an  statement to provide an alternate execution branch when the condition return false.\n\nIn this example the code executed branches based on the system clocks current hour of the day, where LT means Less\nThan. See Operators",
		"command": {
			"title": "Outdent tag on completion.",
			"command": "outdent"
		},
		"insertText": "<MvELSE>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvELSE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvELSE.html",
		"selfClosing": true,
		"void": true
	},
	"mvelseif": {
		"attributes": {
			"expr": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, returns a value interpreted as a conditional expression, typically involving a comparison, string, \n\tor logic operator. The expression must return a true for Miva Script to process the code that follows the <MvIF> \n\ttag. An <MvIF> tag must have a closing </MvIF> end tag.",
				"insertText": "EXPR = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "EXPR",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Used in an  statement to provide an alternate execution branch when the initial condition return false. Used in place of nested  tags.\n\nUsing <MvELSEIF>, multiple conditions can be used to determine which of several block s of code to execute.",
		"command": {
			"title": "Outdent tag on completion.",
			"command": "outdent"
		},
		"insertText": "<MvELSEIF EXPR = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvELSEIF",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvELSEIF.html",
		"selfClosing": true,
		"void": true
	},
	"mveval": {
		"attributes": {
			"expr": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required expression. Expressions can contain formulas, variables, literal values (text or numbers), \n\tfunctions, and operators which indicate how the other components in the expression are to be evaluated.",
				"insertText": "EXPR = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "EXPR",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Evaluates an expression and displays the results in the brower.\n\nExpressions must be enclosed in double quotes and curly braces, \"{ expression }\". Spaces between the quote and braces \nare not allowed. e.g wrong \" {  expression } \"",
		"insertText": "<MvEVAL EXPR = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvEVAL",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvEVAL.html",
		"selfClosing": true,
		"void": true
	},
	"mvexit": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "Causes the script in which the exit tag resides to terminate.\n\nTo forcibly terminate a running Miva Script program use the <MvEXIT> tag. If used within a user defined function \nthe entire script terminates not just the function, so use <MvFUNCTIONRETURN> to terminate a function.",
		"insertText": "<MvEXIT>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvEXIT",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvEXIT.html",
		"selfClosing": true,
		"void": true
	},
	"mvexport": {
		"attributes": {
			"file": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, path and file name relative to the data folder.",
				"insertText": "FILE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FILE",
				"required": true,
				"valueType": "expression"
			},
			"fields": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, comma separated list of variables. If null only the delimiter value will be written.",
				"insertText": "FIELDS = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FIELDS",
				"required": true,
				"valueType": "expression"
			},
			"delimiter": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, delimiter can be null, a single character. or multiple characters. If null only the fields \n\tvalue will be written.",
				"insertText": "DELIMITER = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "DELIMITER",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Appends a single line of data to an external output file in the data folder, at the end of the output file, on a new line. It does not automatically loop. See .\n\nDesigned for exporting flat file information <MvEXPORT> can be used to export database files or other information in a \ndelimited format. Unlike <MvIMPORT>,  <MvEXPORT> does not automatically loop.",
		"insertText": "<MvEXPORT FILE = \"{ $1 }\" FIELDS = \"{ $2 }\" DELIMITER = \"{ $3 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvEXPORT",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvEXPORT.html",
		"selfClosing": true,
		"void": true
	},
	"mvfilter": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional Database alias. When a database is opened with MvOPEN,\n\tit is referenced in all other database commands by the alias. If omitted, the filter applies to the primary\n\tdatabase. The database must be open.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": false,
				"valueType": "expression"
			},
			"filter_type": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional literal keywords: expression or variable; Specifies what is contained in the FILTER attribute.\n\t\t\n\t\t\texpression: Default, specifies the filter contains an expression.\n\t\t\tvariable: Specifies the filter contains a variable. The variable then contains a string that can be\n\t\t\tevaluated as an expression, giving you the ability to create the expression dynamicly.",
				"insertText": "FILTER_TYPE = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FILTER_TYPE",
				"required": false,
				"valueType": "string",
				"values": {
					"expression": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "expression",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "expression"
					},
					"variable": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "variable",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "variable"
					}
				}
			},
			"filter": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required filter expression e.g. \"{ NOT alias.d.deleted }\" or variable name e.g. \"l.filter\"",
				"insertText": "FILTER = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FILTER",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Makes all records in the database with that do not match the FILTER condition invisible to , , and other database navigation tags. These tags will then find only the records that match both their own search condition and the filter condition.\n\nIf you have several open database aliases, each one can have a filter associated with it. However, a single alias can\nhave only one filter applied to it at a time. Subsequent <MvFILTER> tags referring to that alias will replace the\ncurrent filter.",
		"insertText": "<MvFILTER FILTER = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvFILTER",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvFILTER.html",
		"selfClosing": true,
		"void": true
	},
	"mvfind": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional Database alias. When a database is opened with   MvOPEN,\n\tit is referenced in all other database commands by the alias. If omitted, the search is performed on the primary\n\tdatabase. The database must be open.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": false,
				"valueType": "expression"
			},
			"value": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. The value searched for in the index.",
				"insertText": "VALUE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VALUE",
				"required": true,
				"valueType": "expression"
			},
			"exact": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional. (optional syntax EXACT=\"exact\"). If the EXACT flag is set, the search will succeed only\n\tif search_value matches the entire indexed value, rather than just a substring starting at the first character. When\n\tsearching for a number, set the EXACT flag.",
				"insertText": "EXACT = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "EXACT",
				"required": false,
				"valueType": "string"
			},
			"view": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional odbc_view. Support for ODBC has been dropped so this attribute can be omitted.",
				"insertText": "VIEW = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VIEW",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Performs a case-sensitive search for value in the index of the database and moves the record pointer to the first matching record in the database.\n\n<MvFIND> requires at least one index be open for the database being searched.",
		"insertText": "<MvFIND VALUE = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvFIND",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvFIND.html",
		"selfClosing": true,
		"void": true
	},
	"mvfor": {
		"attributes": {
			"index": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional, the name of the variable that is used to track the iterations through the loop. When specified,\n    the variable can be used inside the expressions for the EXPR, NEXT and LAST attributes, and is present inside the\n    MvFOR loop. If omitted an internal variable is used.",
				"insertText": "INDEX = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "INDEX",
				"required": false,
				"valueType": "expression"
			},
			"first": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional numeric expression defines the low-end range of the loop. This expression is executed only once,\n    at the beginning of the <MvFOR> block.",
				"insertText": "FIRST = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FIRST",
				"required": false,
				"valueType": "expression"
			},
			"next": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional expression. If specified the is expression called at the end of each iteration to increment the\n    INDEX variable. If omitted, the index variable is incremented by one for each pass through the loop.",
				"insertText": "NEXT = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NEXT",
				"required": false,
				"valueType": "expression"
			},
			"last": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Expression defines the high-end of the loop (inclusive). This expression is executed at the beginning of\n    the loop and also at every iteration through the loop, allowing you to perform interesting operations, such as\n    calling a function. If you use a simple expression here with a static value or simple variable, there is no\n    performance overhead by evaluating the expression after every iteration (* see below).",
				"insertText": "LAST = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "LAST",
				"required": true,
				"valueType": "expression"
			},
			"count": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "is a shorthand for an extremely simple loop which iterates from 1 to the value of the COUNT expression,\n    incrementing by 1 after each iteration. Unlike LAST, the expression in COUNT is executed only once, at the beginning\n    of the loop (* see below).",
				"insertText": "COUNT = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "COUNT",
				"required": true,
				"valueType": "expression"
			},
			"expr": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": ".",
				"insertText": "EXPR = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "EXPR",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Loops through the code between  and  the number of time specified between first and last, incrimenting the index. Optionally you can exit the loop using .\n\nLoops through the code between <MvFOR> and </MvFOR> the number of time specified between first and last, incrementing\nthe index. Optionally you can exit the loop using <MvFORSTOP>.",
		"engine": ">=5.10",
		"insertText": "<MvFOR LAST = \"{ $1 }\" COUNT = \"{ $2 }\" EXPR = \"{ $3 }\">\n\t$4\n</MvFOR>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvFOR",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvFOR.html",
		"selfClosing": false,
		"void": false
	},
	"mvforcontinue": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "An  loop can be explicitly halted using the  tag to exit the loop. Execution jumps to the code following the closing  tag.\n\nThis examples loops from 1 to 100 incrementing the INDEX by 1. The <MvFORCONTINUE> tag is used to skip \nprocessing on every third loop.",
		"insertText": "<MvFORCONTINUE>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvFORCONTINUE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvFORCONTINUE.html",
		"selfClosing": true,
		"void": true
	},
	"mvforeach": {
		"attributes": {
			"iterator": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, the name of a variable which will contain a specific element in the array. The mechanism\n    used is the same as <MvREFERENCE> and <MvREFERENCEARRAY>.",
				"insertText": "ITERATOR = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "ITERATOR",
				"required": true,
				"valueType": "literal"
			},
			"array": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, the array over which to iterate.",
				"insertText": "ARRAY = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "ARRAY",
				"required": true,
				"valueType": "literal"
			},
			"index": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional, the name of the variable that is used to track the iterations through the loop. When specified,\n    the variable can be used inside the expressions for the NEXT and LAST attributes, and is present within the\n    MvFOREACH loop. If omitted an internal variable is used.",
				"insertText": "INDEX = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "INDEX",
				"required": false,
				"valueType": "literal"
			},
			"first": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional expression defines the index of the first element to iterate. If omitted, the loop starts at the\n    first element present in the array (* see below).",
				"insertText": "FIRST = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FIRST",
				"required": false,
				"valueType": "expression"
			},
			"next": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional expression is called at the end of the loop to increment the INDEX variable. If omitted, the loop\n    transitions to the next element present in the array (* see below).",
				"insertText": "NEXT = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NEXT",
				"required": false,
				"valueType": "expression"
			},
			"last": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional expression, defines the upper bound of the loop, that is last element to iterate. If omitted, the\n    loop terminates after the last element in the array. (* see below).",
				"insertText": "LAST = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "LAST",
				"required": false,
				"valueType": "expression"
			},
			"count": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional: is shorthand for dealing with known-dense arrays. It sets the loop up to iterate from 1 to\n    COUNT, incrementing by1 each time. It has some performance advantages when proper handling of sparse arrays is not a\n    concern. (* see below).",
				"insertText": "COUNT = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "COUNT",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Is designed to make dealing with arrays of items more convenient. Each item in the array is represented in the loop as an iterator variable, simplifying the syntax. Optionally you can exit the loop using\n\nWhen combined with the -C (compatibility) compiler flag, MvFOREACH generates code that will run on any engine version\n5.00 or newer, using runtime engine version checks to either call these functions or emulate their behavior.",
		"engine": ">=5.10",
		"insertText": "<MvFOREACH ITERATOR = \"$1\" ARRAY = \"$2\">\n\t$3\n</MvFOREACH>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvFOREACH",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvFOREACH.html",
		"selfClosing": false,
		"void": false
	},
	"mvforeachcontinue": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "Returns program flow to the top of the  loop, performing the operations would normally occur at the bottom of the loop i.e. reading the next iterator.\n\nThis examples loops through the orders array. The <MvFOREACHCONTINUE> tag is used to skip \nprocessing if the fname field contains the string 'test order'.",
		"insertText": "<MvFOREACHCONTINUE>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvFOREACHCONTINUE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvFOREACHCONTINUE.html",
		"selfClosing": true,
		"void": true
	},
	"mvforeachstop": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "An  loop can be explicitly halted using the  tag to exit the loop. Execution jumps to the code following the closing  tag.\n\nThis examples loops through the orders array. The <MvFOREACHSTOP> tag is used to exit the loop if an expected \nfield is null..",
		"insertText": "<MvFOREACHSTOP>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvFOREACHSTOP",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvFOREACHSTOP.html",
		"selfClosing": true,
		"void": true
	},
	"mvforstop": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "Returns program flow to the top of the  loop, performing the operations would normally occur at the bottom of the loop i.e. incrimenting the index.\n\nThis examples loops through the orders array. The <MvFORSTOP> tag is used to exit the loop if an expected field\nis null.",
		"insertText": "<MvFORSTOP>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvFORSTOP",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvFORSTOP.html",
		"selfClosing": true,
		"void": true
	},
	"mvfunction": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, literal function name, defines the name that will be used to call the function.",
				"insertText": "NAME = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "string"
			},
			"parameters": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional comma separated list of variable names, assigned without any variable prefix; (parameter\n\tvariables are always local) and the optionally the keyword var (variable by reference)",
				"insertText": "PARAMETERS = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "PARAMETERS",
				"required": false,
				"valueType": "string"
			},
			"standardoutputlevel": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: html, text, compresswhitespace. Specifies what displays in the browser.\n\tIf empty, output is suppressed unless explicitly output using the <MvEVAL> tag.\n\t\thtml: Default. HTML is output to the browser.\n\t\ttext: Default. Text (non html) is output to the browser.\n\t\tcompresswhitespace: will cause Miva Script to eliminate extra whitespace in the output of Miva Script\n\t\tcode. Whitespace is leading and trailing spaces, tabs, and new lines.",
				"insertText": "STANDARDOUTPUTLEVEL = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "STANDARDOUTPUTLEVEL",
				"required": false,
				"valueType": "string",
				"values": {
					"html": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "html",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "html"
					},
					"text": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "text",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "text"
					},
					"compresswhitespace": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "compresswhitespace",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "compresswhitespace"
					}
				}
			},
			"erroroutputlevel": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keyword: runtime.\n\tRuntime errors display in the browser. If empty, error output is suppressed. If omitted, defaults to runtime.",
				"insertText": "ERROROUTPUTLEVEL = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "ERROROUTPUTLEVEL",
				"required": false,
				"valueType": "string"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "A function is a sub-section of code executed by a call to the function name. MivaScript contains many built in functions like toupper(string). This tag lets you create your own user defined functions.\n\nUser defined functions enable you to write re-usable code that can be called on to perform operations at any point in\nyour program, by calling the function within an expression. Even if a function is only called once in your program,\nmoving the code out of the main body of the program and replacing it with a function call still helps to make the\nprogram more 'modular', easier to read and debug. A function may output HTML to the screen, perform database I/O or\noptionally return a value.",
		"insertText": "<MvFUNCTION NAME = \"$1\" PARAMETERS = \"$2\">\n\t$3\n</MvFUNCTION>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvFUNCTION",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvFUNCTION.html",
		"selfClosing": false,
		"void": false
	},
	"mvfunctionreturn": {
		"attributes": {
			"value": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional value to return from a user defined function. If not value is being return it may be omitted.",
				"insertText": "VALUE = $0",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VALUE",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Exits a user defined function and optionally returns a value.\n\nIn this example if invalid parameters are passed to the the function returns without doing anything otherwise it \nreturns the parameter value added together.",
		"insertText": "<MvFUNCTIONRETURN VALUE = $1>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvFUNCTIONRETURN",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvFUNCTIONRETURN.html",
		"selfClosing": true,
		"void": true
	},
	"mvgo": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional Database alias. When a database is opened with MvOPEN,\n\tit is referenced in all other database commands by the alias. If omitted, the records pointer for the primary\n\tdatabase is moved. The database must be open.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": false,
				"valueType": "expression"
			},
			"row": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required numeric value or the keywords top or bottom which move the record pointer\n\trespectively, to the first and last database record.",
				"insertText": "ROW = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "ROW",
				"required": true,
				"valueType": "expression"
			},
			"view": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional odbc_view. Support for ODBC has been dropped so this attribute can be omitted.",
				"insertText": "VIEW = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VIEW",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Operating on an open database or query, this tag moves to the physical record in the database in NAME, regardless of how the database is indexed. If NAME is omitted, the record pointer for the primary database is moved.\n\nThe row number generally referrers to the row in physical, not indexed order. There are two exceptions to this: if\nthe database is indexed, the special values 'top' and 'bottom' will move the record pointer to the first and last\nrecords in indexed order. It follows from this that 'top' and 'bottom' do not move the record pointer to the physical\ntop and bottom of an indexed database. In this situation, you can achieve the same effect via the following:",
		"insertText": "<MvGO ROW = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvGO",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvGO.html",
		"selfClosing": true,
		"void": true
	},
	"mvhide": {
		"attributes": {
			"fields": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. Comma separated list of variable names. The varialbe name and values wull be output to the \n\tbrowser as hidden input fields.",
				"insertText": "FIELDS = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FIELDS",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "For each field listed, outputs separate html  tags. e.g.\n\n<MvHIDE> tags are intended to be use only inside HTML forms.",
		"insertText": "<MvHIDE FIELDS = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvHIDE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvHIDE.html",
		"selfClosing": true,
		"void": true
	},
	"mvif": {
		"attributes": {
			"expr": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, returns a value interpreted as a conditional expression, typically involving a comparison, string,\n\tor logic operator. The expression must return a true for Miva Script to process the code that follows the <MvIF>\n\ttag. An <MvIF> tag must have a closing </MvIF> end tag.",
				"insertText": "EXPR = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "EXPR",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Conditional statements are used to perform different actions based on different conditions, giving your program the ability to follow or not follow a \"branch\" of program code.\n\nIn Miva Script we have the following conditional statements",
		"insertText": "<MvIF EXPR = \"{ $1 }\">\n\t$2\n</MvIF>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvIF",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvIF.html",
		"selfClosing": false,
		"void": false
	},
	"mvifdef": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. The name of a symbolic code passed on the compiler command line.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Compiler directive.  and , provide compile-time inclusion or exclusion of code.\n\nWithin an <MvIFDEF> block that does not generate code, the compiler still does syntax and logical parsing of the \nsource, such that tags that require end tags (e.g., <MvCALL> and </MvCALL>) are still checked and matched.",
		"insertText": "<MvIFDEF NAME = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvIFDEF",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvIFDEF.html",
		"selfClosing": true,
		"void": true
	},
	"mvifndef": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. The name of a symbolic code passed on the compiler command line.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Compiler directive.  and , provide compile-time inclusion or exclusion of code.\n\nWithin an <MvIFNDEF> block that does not generate code, the compiler still does syntax and logical parsing of the \nsource, such that tags that require end tags (e.g., <MvCALL> and </MvCALL>) are still checked and matched.",
		"insertText": "<MvIFNDEF NAME = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvIFNDEF",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvIFNDEF.html",
		"selfClosing": true,
		"void": true
	},
	"mvimport": {
		"attributes": {
			"file": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, path and file name relative to the data folder.",
				"insertText": "FILE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FILE",
				"required": true,
				"valueType": "expression"
			},
			"fields": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, comma separated list of variables, where the imported data will be stored.",
				"insertText": "FIELDS = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FIELDS",
				"required": true,
				"valueType": "expression"
			},
			"delimiter": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, delimiter can be null, a single character. or multiple characters. If null the entire\n\tstring can be stored into a single variable in fields.",
				"insertText": "DELIMITER = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "DELIMITER",
				"required": true,
				"valueType": "expression"
			},
			"filter_type": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional literal keywords: expression or variable; Specifies what is contained in the\n\tFILTER attribute.\n\t\t\n\t\t\texpression: Default, specifies the filter contains an expression.\n\t\t\tvariable: Specifies the filter contains a variable. The variable then contains a string that can\n\t\t\tbe evaluated as an expression, giving you the ability to create the expression dynamically.",
				"insertText": "FILTER_TYPE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FILTER_TYPE",
				"required": false,
				"valueType": "expression"
			},
			"filter": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required filter expression e.g. \"{ NOT alias.d.deleted }\" or variable name e.g. \"l.filter\"",
				"insertText": "FILTER = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FILTER",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Imports records from a text file one line at a time where each line ends with a line feed (lf). The tag loops through the file stopping at the end of file (eof), unless terminated using .\n\nOptionally fields separated by DELIMITER character or characters can be parsed and stored in variables supplied in\nthe FIELDS attribute.",
		"insertText": "<MvIMPORT FILE = \"{ $1 }\" FIELDS = \"{ $2 }\" DELIMITER = \"{ $3 }\" FILTER = \"{ $4 }\">\n\t$5\n</MvIMPORT>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvIMPORT",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvIMPORT.html",
		"selfClosing": false,
		"void": false
	},
	"mvimportcontinue": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "Returns program flow to the top of the  loop, performing the operations would normally occur at the bottom of the loop i.e. reading the next record.\n\nThis examples imports movies from a text file and appends the data to an array. The <MvIMPORCONTINUE> tag is \nused to skip importing movies made before the year 2000.",
		"engine": ">=5.10",
		"insertText": "<MvIMPORTCONTINUE>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvIMPORTCONTINUE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvIMPORTCONTINUE.html",
		"selfClosing": true,
		"void": true
	},
	"mvimportstop": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "An  loop can be explicitly halted using the . Execution jumps to the code following the closing  tag.\n\nImporting can be halted explicitly inside an <MvIMPORT> loop using the <MvIMPORTSTOP> tag. The program jumps to the \ncode following the </MvIMPORT> tag, without reading any more input from the data file.",
		"insertText": "<MvIMPORTSTOP>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvIMPORTSTOP",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvIMPORTSTOP.html",
		"selfClosing": true,
		"void": true
	},
	"mvinclude": {
		"attributes": {
			"file": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. The path and name of a separate un-compiled Miva Script program file that will be\n\tincluded (merged) into your program when encountered. The included file may contain additional <MvINCLUDE>\n\ttags.",
				"insertText": "FILE = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FILE",
				"required": true,
				"valueType": "string"
			},
			"interpret": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "optional. The literal value \"OFF\" will include the text of the included file as a literal\n\twithout interpreting or compiling html or Miva Script tags. The value \"ON\" is the default and will\n\tparse and compile the included file.",
				"insertText": "INTERPRET = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "INTERPRET",
				"required": false,
				"valueType": "string"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Compiler directive. At compile time,  will include the named file which can include other files. This allows you to separate your code into functional groups or libraries files.\n\nThe Miva Script compiler will merge these three un-compiled files into the program at compile time.",
		"insertText": "<MvINCLUDE FILE = \"$1\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvINCLUDE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvINCLUDE.html",
		"selfClosing": true,
		"void": true
	},
	"mvlocalized": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional. If specified, the output from the tag is stored in the variable named by this attribute instead of being sent \nto the browser.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": false,
				"valueType": "expression"
			},
			"id": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional. For informational purposes and is not currently used by Miva Script.",
				"insertText": "ID = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "ID",
				"required": false,
				"valueType": "expression"
			},
			"standardoutputlevel": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords: html, text, null string. Specifies what displays in browser.\n\t\thtml: HTML is output to the browser. Default.\n\t\ttext: text (non html) is output to the browser. Default.\n\t\tnull string: will cause Miva Script to suppress output.",
				"insertText": "STANDARDOUTPUTLEVEL = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "STANDARDOUTPUTLEVEL",
				"required": false,
				"valueType": "string",
				"values": {
					"html": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "html",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "html"
					},
					"text": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "text",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "text"
					}
				}
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "The localized tags allow you to design Miva Script programs that can display in various languages. In this way your programs can become truly international.  Starts the localization process. The tag can create a variable for output.\n\nLocalization allows you embed language specific prompts in your scripts.",
		"insertText": "<MvLOCALIZED>\n\t$1\n</MvLOCALIZED>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvLOCALIZED",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvLOCALIZED.html",
		"selfClosing": false,
		"void": false
	},
	"mvlocalized-text": {
		"attributes": {
			"language": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "The language code for the text has two components: language-country code. (e.g. en-US is English - \n\tUnited States)",
				"insertText": "LANGUAGE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "LANGUAGE",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Defines the text for the language specified by the LANGUAGE attribute. HTML is allowed, but MivaScript tags are not allowed between the opening and closing tags.\n\nDefines the text for the language specified by the LANGUAGE attribute. HTML is allowed, but no Miva tags may exist \nbetween the <MvLOCALIZED-TEXT> and\n</MvLOCALIZED-TEXT> tags.",
		"insertText": "<MvLOCALIZED-TEXT LANGUAGE = \"{ $1 }\">\n\t$2\n</MvLOCALIZED-TEXT>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvLOCALIZED-TEXT",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvLOCALIZED-TEXT.html",
		"selfClosing": false,
		"void": false
	},
	"mvlocalized-token": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required: The name of the token. When uses the token will be represented in the form %tokenname%",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "expression"
			},
			"value": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "The value of the token.",
				"insertText": "VALUE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VALUE",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Creates a \"token\" (or representation) which can then be displayed in localized text. Must be inside  and must precede any  blocks that use the token.\n\nCreates a \"token\" (or representation) which can then be displayed in localized text. Must be inside the <MvLOCALIZED> \nblock and \nmust precede any <MvLOCALIZED-TEXT> blocks that use the token.",
		"insertText": "<MvLOCALIZED-TOKEN NAME = \"{ $1 }\" VALUE = \"{ $2 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvLOCALIZED-TOKEN",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvLOCALIZED-TOKEN.html",
		"selfClosing": true,
		"void": true
	},
	"mvlockfile": {
		"attributes": {
			"file": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required path and filename within the data folder to the file that will be locked.",
				"insertText": "FILE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FILE",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Indicates to other processes that the current process has requested an exclusive lock on FILE. A lock request is in effect until the corresponding\n\nMultiple lock requests with <MvLOCKFILE> on the same file are queued. There is no limit on the number of\nfiles on which lock requests can be made. filename can be any file--a database, memo, index, or flat (.dat,.txt, etc.)\nfile. <MvLOCKFILE> tags can be nested.",
		"insertText": "<MvLOCKFILE FILE = \"{ $1 }\">\n\t$2\n</MvLOCKFILE>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvLOCKFILE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvLOCKFILE.html",
		"selfClosing": false,
		"void": false
	},
	"mvmakeindex": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Database alias. When a database is opened with MvOPEN,\n\tit is referenced in all other database commands by the alias. If omitted, the index is created for the primary\n\tdatabase. The database must be open.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "expression"
			},
			"indexfile": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. Contains the path and filename to be created for the database in the NAME alias.",
				"insertText": "INDEXFILE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "INDEXFILE",
				"required": true,
				"valueType": "expression"
			},
			"expr_type": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional, expression (default) | variable.",
				"insertText": "EXPR_TYPE = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "EXPR_TYPE",
				"required": false,
				"valueType": "string",
				"values": {
					"expression": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "expression",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "expression"
					},
					"variable": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "variable",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "variable"
					}
				}
			},
			"expr": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required key expression based on the field values in the database. It may not exceed 500 characters\n\tin length, and may not evaluate to more than 100 characters. The EXPR value will be evaluated for each record in the database and the records will be ordered in the index \naccording to the results of these evaluations. The key expression can be any Miva Script expression. Except in unusual\ncircumstances, the key expression will be based on field values in the database.",
				"insertText": "EXPR = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "EXPR",
				"required": true,
				"valueType": "expression"
			},
			"flags": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional: description.\n\tComma delimited list of flags. (e.g. ascending, nonunique)\n\t\tascending (default) | descending : Indicates sorting in ascending or descending order.\n\t\t*\n\t\tunique | nonunique (default): Unique allows only one record containing the results of the key\n\t\texpression to be stored in the index file. Duplicate entries will result in an error. Non unique allows any\n\t\trecord to be added to the database and the key field(s) indexed\n\t\tstring : force string (rather than numeric) comparisons of key expressions when ordering the index.",
				"insertText": "FLAGS = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FLAGS",
				"required": false,
				"valueType": "string",
				"values": {
					"ascending": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "ascending",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "ascending"
					},
					"descending": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "descending",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "descending"
					},
					"unique": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "unique",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "unique"
					},
					"nonunique": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "nonunique",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "nonunique"
					},
					"string": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "string",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "string"
					}
				}
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Creates the physical index file in INDEXFILE for the database alias in NAME. If NAME is omitted, the index is created for the primary database.\n\nIn an index, records are arranged in order according to the value of the key expression in the EXPR attribute, plus any flags that\nmay be\npresent. INDEXFILE and EXPR are required.",
		"insertText": "<MvMAKEINDEX NAME = \"{ $1 }\" INDEXFILE = \"{ $2 }\" EXPR = \"{ $3 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvMAKEINDEX",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvMAKEINDEX.html",
		"selfClosing": true,
		"void": true
	},
	"mvmember": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Declares sub-variable name within a structure.",
				"insertText": "NAME = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "literal"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Assigns a structure recordname for a mulidimensional array or structure. See\n\nStructures are used to store multiple values in a single variable. If a value is assigned to a member that did not previously exist, the entry will be created.",
		"parent": "mvassignarray",
		"insertText": "<MvMEMBER NAME = \"$1\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvMEMBER",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvMEMBER.html",
		"selfClosing": true,
		"void": true
	},
	"mvopen": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, database alias. When a database is open, it is referenced in all\n\tother database commands by the alias. This lets you open the same database file with multiple aliases, often with\n\tdifferent indexes.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "expression"
			},
			"database": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. The physical path and file name that will be created. For xBase3 files (default) the\n\textension is normally .dbf.",
				"insertText": "DATABASE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "DATABASE",
				"required": true,
				"valueType": "expression"
			},
			"username": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional. Used when opening databases that require a username.",
				"insertText": "USERNAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "USERNAME",
				"required": false,
				"valueType": "expression"
			},
			"password": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional. Used when opening databases that require a password.",
				"insertText": "PASSWORD = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "PASSWORD",
				"required": false,
				"valueType": "expression"
			},
			"indexes": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional. Contains a comma-separated list of index files that will be opened and associated with the an\n\txBase3\n\tdatabase.",
				"insertText": "INDEXES = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "INDEXES",
				"required": false,
				"valueType": "expression"
			},
			"type": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional keywords. xBase3 (default) | MivaSQL. |  MySQL This\n\tattribute can be omitted for xBase3 databases but is required for the others.",
				"insertText": "TYPE = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "TYPE",
				"required": false,
				"valueType": "string",
				"values": {
					"xbase3": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "xbase3",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "xbase3"
					},
					"mysql": {
						"commitCharacters": [
							"'"
						],
						"documentation": "",
						"insertText": "MySQL",
						"insertTextFormat": "Snippet",
						"kind": "Enum",
						"label": "MySQL"
					}
				}
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Opens the DATABASE filename as alias NAME makes it the primary database. The record pointer is positioned at the first record. The same database file can be open more than once simultaneously with different alias NAMEs.\n\nA database must be created before it can be used. When you create a database, you are just defining its structure: a\ndatabase file is created on your system, but it doesn't contain any data yet. This step needs to be done only once for\neach database. Miva Script uses the <MvCREATE> tag to\ncreate a database. If an existing database is created, it will be overwritten and the contents lost. You can use the\nfexists() function to determine if the file already exists. The syntax for\nMySQL database is different and detailed below.",
		"insertText": "<MvOPEN NAME = \"{ $1 }\" DATABASE = \"{ $2 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvOPEN",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvOPEN.html",
		"selfClosing": true,
		"void": true
	},
	"mvopenview": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional Database alias. When a database is opened with MvOPEN,\n\tthe database is referenced by the alias. If omitted, the the primary\n\tdatabase is assumed. The database must be open.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": false,
				"valueType": "expression"
			},
			"view": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. Query records alias. When records are selected by the QUERY attribute, they are referenced in\n\tthe navigation commands <MvGO>, or <MvSKIP> by the VIEW alias, NOT the NAME.",
				"insertText": "VIEW = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VIEW",
				"required": true,
				"valueType": "expression"
			},
			"query": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. The Query string used to access the records. For field variables used in the string, the\n\tquestion mark (e.g. ? ) can be used as a placeholder, for FIELDS.",
				"insertText": "QUERY = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "QUERY",
				"required": true,
				"valueType": "expression"
			},
			"fields": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional: A comma delimited list of literal field variables used in the QUERY string. For each ? found, a field\n\tvariable will be substituted in sequence. (e.g. FIELDS = \"l.var1, l.var2\") Also an variable containing a list of literal \n\tfield names can be used. (e.g. FIELDS = \" { l.fieldlist }\"",
				"insertText": "FIELDS = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FIELDS",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Opens an SQL VIEW on the NAMEed database based on the results of the query string.   and  are used to navigate the view.\n\nThis examples Opens a MySQL database, Opens a view that selects a particular table and record based on a product_code.",
		"insertText": "<MvOPENVIEW VIEW = \"{ $1 }\" QUERY = \"{ $2 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvOPENVIEW",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvOPENVIEW.html",
		"selfClosing": true,
		"void": true
	},
	"mvpack": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Database alias. When a database is opened with <MvOPEN>, it is referenced in all\n\tother database commands by the alias.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "marks the current database record for deletion. Records marked for deletion accumulate until they are actually deleted from the database with  or unmarked using .\n\n<MvUNDELETE> removes a mark set with\n<MvDELETE> from the current record in the database.\nUndeleted records will NOT be physically deleted by <MvPACK>.",
		"insertText": "<MvPACK NAME = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvPACK",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvPACK.html",
		"selfClosing": true,
		"void": true
	},
	"mvpop": {
		"attributes": {
			"mailhost": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required domain name or IP address of an email host that understands POP3",
				"insertText": "MAILHOST = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MAILHOST",
				"required": true,
				"valueType": "expression"
			},
			"login": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. The user name for the email account.",
				"insertText": "LOGIN = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "LOGIN",
				"required": true,
				"valueType": "expression"
			},
			"password": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. The password for the email account.",
				"insertText": "PASSWORD = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "PASSWORD",
				"required": true,
				"valueType": "expression"
			},
			"directory": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. The path within the mivadata folder where the email will be stored.",
				"insertText": "DIRECTORY = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "DIRECTORY",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Logs into the POP3 mail server named host, using the login_name and password login information, and retrieves all incoming mail messages in a loop, one message at a time. Use  to delete the message and  to terminate the loop.\n\nMiva Script provides tags that can send and receive email. <MvSMTP>  is used to send mail from any valid SMTP \nmail server, and Miva Script documents can receive email by becoming POP3 clients using <MvPOP>",
		"insertText": "<MvPOP MAILHOST = \"{ $1 }\" LOGIN = \"{ $2 }\" PASSWORD = \"{ $3 }\" DIRECTORY = \"{ $4 }\">\n\t$5\n</MvPOP>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvPOP",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvPOP.html",
		"selfClosing": false,
		"void": false
	},
	"mvpopcontinue": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "Returns program flow to the top of the  loop, performing the operations would normally occur at the bottom of the loop i.e. reading the next email.\n\nThis examples loops through and displays email messages . The <MvPOPCONTINUE> tag is used to skip \ndisplaying messages if they return true from a user defined function called SpamFilter().",
		"engine": ">=5.10",
		"insertText": "<MvPOPCONTINUE>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvPOPCONTINUE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvPOPCONTINUE.html",
		"selfClosing": true,
		"void": true
	},
	"mvpopdelete": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "If an  is executed, inside a  loop, the current email message is deleted from the server.\n\nBy default, <MvPOP> does not remove email messages from the POP3 server. If you want to remove a message, you need to \nexecute an <MvPOPDELETE> tag inside the <MvPOP> loop. This deletes the current email message on the server. The message \nwill still be processed by the application in this iteration of the <MvPOP> loop.",
		"insertText": "<MvPOPDELETE>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvPOPDELETE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvPOPDELETE.html",
		"selfClosing": true,
		"void": true
	},
	"mvpopstop": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "An  loop can be explicitly halted using the . Execution jumps to the code following the closing  tag.\n\nThis example returns a single message for the email host server then breaks out of the loop.",
		"insertText": "<MvPOPSTOP>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvPOPSTOP",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvPOPSTOP.html",
		"selfClosing": true,
		"void": true
	},
	"mvprimary": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. Database alias. Explicitly declares this alias to be the primary database.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "expression"
			},
			"index": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional. Index file name. Explicitly declares this file alias to be the primary index for the primary \n\tdatabase.",
				"insertText": "INDEX = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "INDEX",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "If a database tag does not explicitly name an alias, the primary alias is implied. An database alias can be explicetly made the primary alias using .\n\nSeveral database aliases can be open at the same time, but one alias is said to be the primary alias. This is the \ndefault alias for all database operations except creating and opening a database. with the exceptions <MvCREATE> and <MvOPEN>, \nif the NAME attribute is not specified by a database tag, that tag's action will be performed on the database pointed to \nby the primary alias. By default, the primary alias is the last open to be opened with <MvOPEN> or <MvCREATE>. If more \nthan one alias is open, <MvPRIMARY> makes the NAME alias the primary one.",
		"insertText": "<MvPRIMARY NAME = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvPRIMARY",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvPRIMARY.html",
		"selfClosing": true,
		"void": true
	},
	"mvquery": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional Database alias. When a database is opened with MvOPEN,\n\tit is referenced in all other database commands by the alias. If omitted, the primary\n\tdatabase is assumed. The database must be open.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": false,
				"valueType": "expression"
			},
			"query": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "The query string used to access the records. For field variables used in the string, the question mark\n\t(e.g. ? ) can be used as a placeholder, for FIELDS.",
				"insertText": "QUERY = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "QUERY",
				"required": true,
				"valueType": "expression"
			},
			"fields": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional: A comma delimited list of field variables used in the QUERY string. For each ? found a field\n\tvariable will be substituted in sequence.",
				"insertText": "FIELDS = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FIELDS",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Runs an SQL query that does not return any results, such as an create, update, delete, or insert.\n\nIf NAME is omitted, the query applies to the primary database. This must be an xBase3 or MySQL data source.",
		"insertText": "<MvQUERY QUERY = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvQUERY",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvQUERY.html",
		"selfClosing": true,
		"void": true
	},
	"mvreference": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. Source Variable Name",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "expression"
			},
			"index": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional. Index to the variable in NAME",
				"insertText": "INDEX = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "INDEX",
				"required": false,
				"valueType": "string"
			},
			"member": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional. Member to the variable in NAME",
				"insertText": "MEMBER = \"$0\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MEMBER",
				"required": false,
				"valueType": "string"
			},
			"variable": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. Target Variable Name or an expression that results in a variable name",
				"insertText": "VARIABLE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VARIABLE",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Creates a reference from one variable to another, such that changes to one will appear to be made to the other.  It can be also used to refer to a variable named created with an expression, like the miva_variable_value() function.\n\nNOTE:  * INDEX and MEMBER refer to the variable in the NAME parameter, NOT the VARIABLE parameter.",
		"engine": ">=5.00",
		"insertText": "<MvREFERENCE NAME = \"{ $1 }\" VARIABLE = \"{ $2 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvREFERENCE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvREFERENCE.html",
		"selfClosing": true,
		"void": true
	},
	"mvreferencearray": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. Source Variable Name",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "expression"
			},
			"variable": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. Target Variable Name or an expression that results in a variable name",
				"insertText": "VARIABLE = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VARIABLE",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Creates a reference from one array to another, such that changes to one will appear to be made to the other\n\nNOTE: <MvDIMENSION> and <MvMEMBER> refer to the VARIABLE parameter, NOT the NAME parameter.",
		"insertText": "<MvREFERENCEARRAY NAME = \"{ $1 }\" VARIABLE = \"{ $2 }\">\n\t$3\n</MvREFERENCEARRAY>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvREFERENCEARRAY",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvREFERENCEARRAY.html",
		"selfClosing": false,
		"void": false
	},
	"mvreindex": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional Database alias. When a database is opened with MvOPEN,\n\tit is referenced in all other database commands by the alias. If omitted, the index is recreates for the primary\n\tdatabase. The database and indexes must be open.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Recreates all open index files for NAMEed database alias or the primary database if NAME is omitted.\n\nUse <MvREINDEX> to incorporate all changes made to the database into the open index file(s), if they were not open\nwhen the database was updated.",
		"insertText": "<MvREINDEX>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvREINDEX",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvREINDEX.html",
		"selfClosing": true,
		"void": true
	},
	"mvrevealstructure": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "Returns information on the structure of database tables.\n\nDifferent syntax is used for dBase3 and MySQL databases.",
		"insertText": "<MvREVEALSTRUCTURE>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvREVEALSTRUCTURE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvREVEALSTRUCTURE.html",
		"selfClosing": true,
		"void": true
	},
	"mvrollback": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional Database alias. When a database is opened with MvOPEN,\n\tit is referenced in all other database commands by the alias. If omitted, the operation is performed on the primary\n\tdatabase. The database must be open.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "When altering multiple related database records, it's important that all transactions proceed.  manual removes all marks and does not commit to writing database records.\n\nNormally database operations take place immediately when a database tag is executed.",
		"insertText": "<MvROLLBACK>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvROLLBACK",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvROLLBACK.html",
		"selfClosing": true,
		"void": true
	},
	"mvsetindex": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional Database alias. When a database is opened with MvOPEN,\n\tit is referenced in all other database commands by the alias. If omitted, the index is opened for the primary\n\tdatabase. The database must be open.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": false,
				"valueType": "expression"
			},
			"indexes": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required. Contains a singe index or comma-separated list of index files that will be opened and\n\tassociated with the database. Any other opened indexes associated with the NAME database will be closed first.",
				"insertText": "INDEXES = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "INDEXES",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Opens the index files specified in INDEXES for an already open database with NAME alias. If the NAME attribute is omitted, the index files are opened for the primary database.\n\nThe first comma separated file listed becomes the main index for the database. <MvSETINDEX> closes any\ncurrently open index files for this\ndatabase alias before opening the specified index files. After opening, the record pointer moves to the first record in\nthe database (in indexed order).",
		"insertText": "<MvSETINDEX INDEXES = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvSETINDEX",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvSETINDEX.html",
		"selfClosing": true,
		"void": true
	},
	"mvskip": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional Database alias. When a database is opened with MvOPEN,\n\tit is referenced in all other database commands by the alias. If omitted, the records pointer for the primary\n\tdatabase is moved. The database must be open.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": false,
				"valueType": "expression"
			},
			"rows": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional numeric value. Indicates how many records forward (positive value) or backward (negative value)\n\tto move the record pointer. If omitted the pointer moves one record forward.",
				"insertText": "ROWS = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "ROWS",
				"required": false,
				"valueType": "expression"
			},
			"view": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional odbc_view. Support for ODBC has been dropped so this attribute can be omitted.",
				"insertText": "VIEW = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VIEW",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Moves the record pointer of the database with NAME alias  a specific number of records (ROWS) forward or backward relative to its current position. If NAME is omitted, the record pointer for the primary database is moved.\n\nIf the database is not indexed, the pointer moves according to physical record number. If the database is indexed,\nthe pointer moves according to the index order.",
		"insertText": "<MvSKIP>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvSKIP",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvSKIP.html",
		"selfClosing": true,
		"void": true
	},
	"mvsmtp": {
		"attributes": {
			"from": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "The sender’s email address; no additional data should be included, such as a display name.  To set a display name, you must use the \"noheaders\" flag in the FLAGS attribute and create all necessary headers yourself, including From, To and Subject.",
				"insertText": "FROM = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FROM",
				"required": true,
				"valueType": "expression"
			},
			"to": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Recipient email address, or comma delimited list of email addresses.  No additional data should be included, such as a display name.  To set a display name, you must use the \"noheaders\" flag in the FLAGS attribute and create all necessary headers yourself, including From, To and Subject.",
				"insertText": "TO = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "TO",
				"required": true,
				"valueType": "expression"
			},
			"cc": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional recipient email address or comma delimited list of email addresses.",
				"insertText": "CC = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "CC",
				"required": false,
				"valueType": "expression"
			},
			"subject": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "If creating your own email headers via the FLAGS=\"noheaders” option, the subject should not be specified as an MvSMTP SUBJECT attribute; you will need to define it manually as part of your overall headers.  If using the SUBJECT attribute and not generating your own headers, then this value will set the subject of the outbound email via a Subject: header.  If no subject is specified, and noheaders is not used, then the text ‘no subject’ is used as the default subject.",
				"insertText": "SUBJECT = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "SUBJECT",
				"required": true,
				"valueType": "expression"
			},
			"flags": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional contains a comma separated list of one or more of the following flags:\n        \n            tls -- Specifies that implicit TLS/SSL should be used for transport encryption\n            starttls -- Specifies that the SMTP STARTTLS command should be used for transport encryption\n            noheaders -- Prevents the default headers (Date, From, To, CC, X-Mailer and Subject) from being included in the message body. MvSMTP users that supply this flag must manually generate those headers.",
				"insertText": "FLAGS = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "FLAGS",
				"required": false,
				"valueType": "expression"
			},
			"mailhost": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required domain name or IP address of a host that understands SMTP.",
				"insertText": "MAILHOST = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "MAILHOST",
				"required": true,
				"valueType": "expression"
			},
			"port": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional defaults to 25",
				"insertText": "PORT = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "PORT",
				"required": false,
				"valueType": "expression"
			},
			"username": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional -- see password",
				"insertText": "USERNAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "USERNAME",
				"required": false,
				"valueType": "expression"
			},
			"password": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional If specified, SMTP authentication will be used. MvSMTP supports the following authentication schemes.  The scheme used will\n        be the first scheme from this list which is supported by the mail server. (DIGEST-MD5, CRAM-MD5, PLAIN, LOGIN)",
				"insertText": "PASSWORD = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "PASSWORD",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Sends email TO an email address FROM an email address using the SMTP protocol and optionally a copy CC to one or more email addresses. You may specify a SUBJECT. MAILHOST must contain the domain name or IP address of the SMTP server.\n\nMiva Script provides tags that can send and receive email. <MvSMTP>  is used to send mail from any valid SMTP\nmail server, and Miva Script documents can receive email by becoming POP3 clients using <MvPOP>",
		"insertText": "<MvSMTP FROM = \"{ $1 }\" TO = \"{ $2 }\" SUBJECT = \"{ $3 }\" MAILHOST = \"{ $4 }\">\n\t$5\n</MvSMTP>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvSMTP",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvSMTP.html",
		"selfClosing": false,
		"void": false
	},
	"mvtransact": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional Database alias. When a database is opened with MvOPEN,\n\tit is referenced in all other database commands by the alias. If omitted, the operation is performed on the primary\n\tdatabase. The database must be open.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "The  tag will suspend the default auto-commit settings for a database until a  or  tag is executed.\n\nNormally database operations take place immediately when a database tag is executed.",
		"insertText": "<MvTRANSACT>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvTRANSACT",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvTRANSACT.html",
		"selfClosing": true,
		"void": true
	},
	"mvundelete": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Database alias. When a database is opened with <MvOPEN>, it is referenced in all\n\tother database commands by the alias.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": true,
				"valueType": "expression"
			},
			"view": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional odbc_view. Support for ODBC has been dropped so this attribute can be omitted.",
				"insertText": "VIEW = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VIEW",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Marks for deletion the current record in the database that has alias db_alias. Records marked for deletion accumulate until they are actually deleted from the database with .\n\n<MvUNDELETE> removes a mark set with <MvDELETE> from the\ncurrent record in the database. Undeleted records will NOT be physically deleted by\n<MvPACK>.",
		"insertText": "<MvUNDELETE NAME = \"{ $1 }\">$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvUNDELETE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvUNDELETE.html",
		"selfClosing": true,
		"void": true
	},
	"mvupdate": {
		"attributes": {
			"name": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional database alias. When a database is opened it is referenced in all \n\tother database commands by the alias. If omitted, the current record in the primary database is updated.",
				"insertText": "NAME = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "NAME",
				"required": false,
				"valueType": "expression"
			},
			"view": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Optional odbc_view. Support for ODBC has been dropped so this attribute can be omitted.",
				"insertText": "VIEW = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "VIEW",
				"required": false,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Updates the current database record of NAME db_alias, with the contents of the database fields.\n\nWhen you are working with a database, Miva Script maintains a record pointer to the current record. A record becomes \nthe current record when you navigated to it using <MvFIND>, <MvGO>, or <MvSKIP>. You will need to \nnavigate to the records you want to change before updating.",
		"insertText": "<MvUPDATE>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvUPDATE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvUPDATE.html",
		"selfClosing": true,
		"void": true
	},
	"mvwhile": {
		"attributes": {
			"expr": {
				"commitCharacters": [
					"=",
					"\""
				],
				"documentation": "Required, returns a value interpreted as a conditional expression, typically involving a comparison, string, \n\tor logic operator. The expression must return a true for Miva Script to process the code that follows the <MvWHILE> \n\ttag. An <MvWHILE> tag must have a closing </MvWHILE> end tag.",
				"insertText": "EXPR = \"{ $0 }\"",
				"insertTextFormat": "Snippet",
				"kind": "Enum",
				"label": "EXPR",
				"required": true,
				"valueType": "expression"
			}
		},
		"commitCharacters": [
			"/"
		],
		"documentation": "Loops through the code between  and  until the condition in EXPR is false. Optionally you can exit the loop using .\n\nCare must be taken to ensure an endless loop is not created. The Empresa engine will eventually time out, but the \nloop will consume server resources until that happens. The <MvWHILESTOP> command can be used to exit a loop at any time.",
		"insertText": "<MvWHILE EXPR = \"{ $1 }\">\n\t$2\n</MvWHILE>",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvWHILE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvWHILE.html",
		"selfClosing": false,
		"void": false
	},
	"mvwhilecontinue": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "Returns program flow to the top of the  loop, performing the operations would normally occur at the bottom of the loop i.e. testing the expression.\n\nThis examples parses a comma separated list. The <MvWHILECONTINUE> tag is used to skip \nitems in the list that start with the letters N through Z",
		"engine": ">=5.10",
		"insertText": "<MvWHILECONTINUE>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvWHILECONTINUE",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvWHILECONTINUE.html",
		"selfClosing": true,
		"void": true
	},
	"mvwhilestop": {
		"attributes": {},
		"commitCharacters": [
			"/"
		],
		"documentation": "An  loop can be explicitly halted using the  tag to exit the loop. Execution jumps to the code following the closing  tag.\n\nCare must be taken to ensure an endless loop is not created. The Empresa engine will eventually time out, but the \nloop will consume server resources until that happens. The <MvWHILESTOP> command can be used to exit a loop at any time.",
		"insertText": "<MvWHILESTOP>$0",
		"insertTextFormat": "Snippet",
		"kind": "TypeParameter",
		"label": "MvWHILESTOP",
		"reference": "https://www.mivascript.com/item/mivascript-tags/MvWHILESTOP.html",
		"selfClosing": true,
		"void": true
	}
};
