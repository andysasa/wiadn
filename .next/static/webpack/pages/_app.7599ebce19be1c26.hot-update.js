"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _formspark_use_formspark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @formspark/use-formspark */ \"./node_modules/@formspark/use-formspark/dist/use-formspark.esm.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config/index.js\");\n\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar FORMSPARK_FORM_ID = \"bA4bnUPj\";\nvar Contact = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_formspark_use_formspark__WEBPACK_IMPORTED_MODULE_4__.useFormspark)({\n        formId: FORMSPARK_FORM_ID\n    }), 2), submit = ref[0], submitting = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), email = ref2[0], setEmail = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), message = ref3[0], setMessage = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), submitted = ref4[0], setSubmitted = ref4[1];\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        _ctx.next = 3;\n                        return submit({\n                            name: name,\n                            email: email,\n                            message: message\n                        });\n                    case 3:\n                        alert(\"Form Submitted\");\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var handleSubmit = function(e) {\n        e.preventDefault();\n        console.log(\"Sending\");\n        var data = {\n            name: name,\n            email: email,\n            message: message\n        };\n        fetch(\"/api/contact\", {\n            method: \"POST\",\n            headers: {\n                \"Accept\": \"application/json, text/plain, */*\",\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify(data)\n        }).then(function(res) {\n            console.log(\"Response received\");\n            if (res.status === 200) {\n                console.log(\"Response succeeded!\");\n                setSubmitted(true);\n                setName(\"\");\n                setEmail(\"\");\n                setBody(\"\");\n            }\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n            onSubmit: onSubmit,\n            className: \"bg-indigo-600 px-4 py-8 lg:px-12 rounded-xl grid xl:grid-cols-12 xl:gap-4\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    className: \"mb-8 text-offwhite text-5xl font-semibold xl:col-span-12\",\n                    children: \"Contact\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    className: \"mb-2 text-turquoise xl:col-span-1\",\n                    htmlFor: \"name\",\n                    children: \"Name\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 61,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    className: \"outline-none px-2 py-1 rounded-md mb-2 xl:col-span-5\",\n                    type: \"text\",\n                    id: \"name\",\n                    name: \"name\",\n                    placeholder: \"Name\",\n                    value: name,\n                    onChange: function(e) {\n                        return setName(e.target.value);\n                    },\n                    required: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    className: \"mb-2 text-turquoise xl:ml-4 xl:col-span-1\",\n                    htmlFor: \"email\",\n                    children: \"Email\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    className: \"outline-none px-2 py-1 rounded-md mb-2 xl:col-span-5\",\n                    type: \"email\",\n                    id: \"email\",\n                    name: \"email\",\n                    placeholder: \"Email\",\n                    value: email,\n                    onChange: function(e) {\n                        return setEmail(e.target.value);\n                    },\n                    required: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    className: \"mb-2 text-turquoise xl:col-span-1\",\n                    htmlFor: \"message\",\n                    children: \"Message\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                    className: \"outline-none px-2 py-1 rounded-md mb-8 xl:col-span-11\",\n                    id: \"message\",\n                    name: \"message\",\n                    rows: \"8\",\n                    value: message,\n                    onChange: function(e) {\n                        return setMessage(e.target.value);\n                    },\n                    required: \"\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: \"xl:col-end-13 mb-4\",\n                    type: \"submit\",\n                    diabled: submitting,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"bg-turquoise px-4 py-2 w-fit rounded-full text-gray-900 hover:bg-indigo-900 hover:text-gray-200 duration-300 ease-in\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, _this);\n};\n_s(Contact, \"f8Fj1szAjpGxremS3qRumMV0H4o=\", false, function() {\n    return [\n        _formspark_use_formspark__WEBPACK_IMPORTED_MODULE_4__.useFormspark\n    ];\n});\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssRUFBRWhDLE9BQU87b0JBQUVpQyxRQUFRLEVBQUUsU0FBQzVCLENBQUM7K0JBQUtKLFVBQVUsQ0FBQ0ksQ0FBQyxDQUFDNkIsTUFBTSxDQUFDRixLQUFLLENBQUM7cUJBQUE7b0JBQUVHLFFBQVEsRUFBQyxFQUFFOzs7Ozt5QkFBRTs4QkFDM0wsOERBQUNHLFFBQU07b0JBQUNkLFNBQVMsRUFBQyxvQkFBb0I7b0JBQUNLLElBQUksRUFBQyxRQUFRO29CQUFDVSxPQUFPLEVBQUU1QyxVQUFVOzhCQUN0RSw0RUFBQzJCLEtBQUc7d0JBQUNFLFNBQVMsRUFBQyxzSEFBc0g7a0NBQUMsUUFBTTs7Ozs7NkJBQU07Ozs7O3lCQUMzSTs7Ozs7O2lCQUNKOzs7OzthQUNILENBQ1A7Q0FDRjtHQWpFS2hDLE9BQU87O1FBRWtCSCxrRUFBWTs7O0FBRnJDRyxLQUFBQSxPQUFPO0FBbUViLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0LmpzPzY0NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZUZvcm1zcGFyayB9IGZyb20gXCJAZm9ybXNwYXJrL3VzZS1mb3Jtc3BhcmtcIjtcbmltcG9ydCB7IENPTlRBQ1RfRk9STV9JRCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IEZPUk1TUEFSS19GT1JNX0lEID0gXCJiQTRiblVQalwiO1xuXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtzdWJtaXQsIHN1Ym1pdHRpbmddID0gdXNlRm9ybXNwYXJrKHtcbiAgICBmb3JtSWQ6IEZPUk1TUEFSS19GT1JNX0lELFxuICB9KTtcblxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzdWJtaXR0ZWQsIHNldFN1Ym1pdHRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhd2FpdCBzdWJtaXQoeyBuYW1lLCBlbWFpbCwgbWVzc2FnZSB9KTtcbiAgICBhbGVydChcIkZvcm0gU3VibWl0dGVkXCIpO1xuICB9XG4gIFxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZSkgPT4geyBcbiAgICBlLnByZXZlbnREZWZhdWx0KClcbiAgICBjb25zb2xlLmxvZygnU2VuZGluZycpXG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICBuYW1lLFxuICAgICAgZW1haWwsXG4gICAgICBtZXNzYWdlXG4gICAgfVxuXG4gICAgZmV0Y2goJy9hcGkvY29udGFjdCcsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24sIHRleHQvcGxhaW4sICovKicsXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHJlY2VpdmVkJylcbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1Jlc3BvbnNlIHN1Y2NlZWRlZCEnKVxuICAgICAgICBzZXRTdWJtaXR0ZWQodHJ1ZSlcbiAgICAgICAgc2V0TmFtZSgnJylcbiAgICAgICAgc2V0RW1haWwoJycpXG4gICAgICAgIHNldEJvZHkoJycpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gY2xhc3NOYW1lPVwiYmctaW5kaWdvLTYwMCBweC00IHB5LTggbGc6cHgtMTIgcm91bmRlZC14bCBncmlkIHhsOmdyaWQtY29scy0xMiB4bDpnYXAtNFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdtYi04IHRleHQtb2Zmd2hpdGUgdGV4dC01eGwgZm9udC1zZW1pYm9sZCB4bDpjb2wtc3Bhbi0xMic+XG4gICAgICAgICAgQ29udGFjdFxuICAgICAgICA8L2gxPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXR1cnF1b2lzZSB4bDpjb2wtc3Bhbi0xXCIgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSBweC0yIHB5LTEgcm91bmRlZC1tZCBtYi0yIHhsOmNvbC1zcGFuLTVcIiB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkPVwiXCIgLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC10dXJxdW9pc2UgeGw6bWwtNCB4bDpjb2wtc3Bhbi0xXCIgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIHB4LTIgcHktMSByb3VuZGVkLW1kIG1iLTIgeGw6Y29sLXNwYW4tNVwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQ9XCJcIiAvPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXR1cnF1b2lzZSB4bDpjb2wtc3Bhbi0xXCIgaHRtbEZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSBweC0yIHB5LTEgcm91bmRlZC1tZCBtYi04IHhsOmNvbC1zcGFuLTExXCIgaWQ9XCJtZXNzYWdlXCIgbmFtZT1cIm1lc3NhZ2VcIiByb3dzPVwiOFwiIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZD1cIlwiLz5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ4bDpjb2wtZW5kLTEzIG1iLTRcIiB0eXBlPVwic3VibWl0XCIgZGlhYmxlZD17c3VibWl0dGluZ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy10dXJxdW9pc2UgcHgtNCBweS0yIHctZml0IHJvdW5kZWQtZnVsbCB0ZXh0LWdyYXktOTAwIGhvdmVyOmJnLWluZGlnby05MDAgaG92ZXI6dGV4dC1ncmF5LTIwMCBkdXJhdGlvbi0zMDAgZWFzZS1pblwiPlN1Ym1pdDwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZUZvcm1zcGFyayIsIkNPTlRBQ1RfRk9STV9JRCIsIkZPUk1TUEFSS19GT1JNX0lEIiwiQ29udGFjdCIsImZvcm1JZCIsInN1Ym1pdCIsInN1Ym1pdHRpbmciLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsInN1Ym1pdHRlZCIsInNldFN1Ym1pdHRlZCIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJoYW5kbGVTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlcyIsInN0YXR1cyIsInNldEJvZHkiLCJkaXYiLCJmb3JtIiwiY2xhc3NOYW1lIiwiaDEiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwidGV4dGFyZWEiLCJyb3dzIiwiYnV0dG9uIiwiZGlhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Contact.js\n"));

/***/ })

});