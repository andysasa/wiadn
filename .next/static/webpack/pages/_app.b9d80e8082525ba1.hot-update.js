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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _formspark_use_formspark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @formspark/use-formspark */ \"./node_modules/@formspark/use-formspark/dist/use-formspark.esm.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config/index.js\");\n\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar FORMSPARK_FORM_ID = \"bA4bnUPj\";\nvar Contact = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_formspark_use_formspark__WEBPACK_IMPORTED_MODULE_4__.useFormspark)({\n        formId: FORMSPARK_FORM_ID\n    }), 2), submit = ref[0], submitting = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref1[0], set = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), email = ref2[0], setEmail = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), message = ref3[0], setMessage = ref3[1];\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        _ctx.next = 3;\n                        return submit({\n                            message: message\n                        });\n                    case 3:\n                        alert(\"Form Submitted\");\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-white shadow-lg rounded-lg p-4 lg:p-8 pb-12 mb-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"mb-8 text-5xl font-semibold\",\n                children: \"Contact\"\n            }, void 0, false, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: onSubmit,\n                className: \"bg-indigo-600 px-4 py-8 rounded-xl text-coral grid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"mb-2\",\n                        htmlFor: \"name\",\n                        children: \"Name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        className: \"outline-none px-2 py-1 rounded-md mb-2\",\n                        type: \"text\",\n                        id: \"name\",\n                        name: \"name\",\n                        placeholder: \"Name\",\n                        value: firstName,\n                        onChange: function(e) {\n                            return setName(e.target.value);\n                        },\n                        required: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"mb-2\",\n                        htmlFor: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        className: \"outline-none px-2 py-1 rounded-md mb-2\",\n                        type: \"email\",\n                        id: \"email\",\n                        name: \"email\",\n                        placeholder: \"Email\",\n                        value: email,\n                        onChange: function(e) {\n                            return setEmail(e.target.value);\n                        },\n                        required: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"mb-2\",\n                        htmlFor: \"message\",\n                        children: \"Message\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                        className: \"outline-none px-2 py-1 rounded-md mb-4\",\n                        id: \"message\",\n                        name: \"message\",\n                        rows: \"8\",\n                        value: message,\n                        onChange: function(e) {\n                            return setMessage(e.target.value);\n                        },\n                        required: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        diabled: submitting,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Complete contact form will be available soon\"\n            }, void 0, false, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Please e-mail \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"text-indigo-600\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"mailto:andy@modernvet.solutions\",\n                            children: \"andy@modernvet.solutions\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                            lineNumber: 61,\n                            columnNumber: 59\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 61,\n                        columnNumber: 25\n                    }, _this),\n                    \" for any inquiry\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(Contact, \"ROLOBDgSTsbtzvc3UWGeFOXVqwE=\", false, function() {\n    return [\n        _formspark_use_formspark__WEBPACK_IMPORTED_MODULE_4__.useFormspark\n    ];\n});\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1csVUFBUTt3QkFBQ2YsU0FBUyxFQUFDLHdDQUF3Qzt3QkFBQ08sRUFBRSxFQUFDLFNBQVM7d0JBQUNsQixJQUFJLEVBQUMsU0FBUzt3QkFBQzJCLElBQUksRUFBQyxHQUFHO3dCQUFDUCxLQUFLLEVBQUVoQixPQUFPO3dCQUFFa0IsUUFBUSxFQUFFLFNBQUNmLENBQUM7bUNBQUtGLFVBQVUsQ0FBQ0UsQ0FBQyxDQUFDaUIsTUFBTSxDQUFDSixLQUFLLENBQUM7eUJBQUE7d0JBQUVLLFFBQVEsRUFBQyxFQUFFOzs7Ozs2QkFBRTtrQ0FDNUssOERBQUNHLFFBQU07d0JBQUNYLElBQUksRUFBQyxRQUFRO3dCQUFDWSxPQUFPLEVBQUU5QixVQUFVO2tDQUFFLE1BRTNDOzs7Ozs2QkFBUzs7Ozs7O3FCQUNKOzBCQW9CUCw4REFBQytCLElBQUU7MEJBQUMsOENBQTRDOzs7OztxQkFBSzswQkFDckQsOERBQUNBLElBQUU7O29CQUFDLGdCQUFjO2tDQUFBLDhEQUFDQyxNQUFJO3dCQUFDcEIsU0FBUyxFQUFDLGlCQUFpQjtrQ0FBQyw0RUFBQ25CLGtEQUFJOzRCQUFFd0MsSUFBSSxFQUFDLGlDQUFpQztzQ0FBQywwQkFBd0I7Ozs7O2lDQUFPOzs7Ozs2QkFBTztvQkFBQSxrQkFBZ0I7Ozs7OztxQkFBSzs7Ozs7O2FBQ3pKLENBQ1A7Q0FDRjtHQXhES3BDLE9BQU87O1FBRWtCSCxrRUFBWTs7O0FBRnJDRyxLQUFBQSxPQUFPO0FBMERiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0LmpzPzY0NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZUZvcm1zcGFyayB9IGZyb20gXCJAZm9ybXNwYXJrL3VzZS1mb3Jtc3BhcmtcIjtcbmltcG9ydCB7IENPTlRBQ1RfRk9STV9JRCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IEZPUk1TUEFSS19GT1JNX0lEID0gXCJiQTRiblVQalwiO1xuXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtzdWJtaXQsIHN1Ym1pdHRpbmddID0gdXNlRm9ybXNwYXJrKHtcbiAgICBmb3JtSWQ6IEZPUk1TUEFSS19GT1JNX0lELFxuICB9KTtcblxuICBjb25zdCBbbmFtZSwgc2V0XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGF3YWl0IHN1Ym1pdCh7IG1lc3NhZ2UgfSk7XG4gICAgYWxlcnQoXCJGb3JtIFN1Ym1pdHRlZFwiKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnIHAtNCBsZzpwLTggcGItMTIgbWItOCc+XG4gICAgICA8aDEgY2xhc3NOYW1lPSdtYi04IHRleHQtNXhsIGZvbnQtc2VtaWJvbGQnPlxuICAgICAgICBDb250YWN0XG4gICAgICA8L2gxPlxuICAgICAgXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGNsYXNzTmFtZT1cImJnLWluZGlnby02MDAgcHgtNCBweS04IHJvdW5kZWQteGwgdGV4dC1jb3JhbCBncmlkXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0yXCIgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSBweC0yIHB5LTEgcm91bmRlZC1tZCBtYi0yXCIgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIHZhbHVlPXtmaXJzdE5hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkPVwiXCIgLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1iLTJcIiBodG1sRm9yPVwiZW1haWxcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgcHgtMiBweS0xIHJvdW5kZWQtbWQgbWItMlwiIHR5cGU9XCJlbWFpbFwiIGlkPVwiZW1haWxcIiBuYW1lPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQ9XCJcIiAvPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWItMlwiIGh0bWxGb3I9XCJtZXNzYWdlXCI+TWVzc2FnZTwvbGFiZWw+XG4gICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJvdXRsaW5lLW5vbmUgcHgtMiBweS0xIHJvdW5kZWQtbWQgbWItNFwiIGlkPVwibWVzc2FnZVwiIG5hbWU9XCJtZXNzYWdlXCIgcm93cz1cIjhcIiB2YWx1ZT17bWVzc2FnZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQ9XCJcIi8+XG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGRpYWJsZWQ9e3N1Ym1pdHRpbmd9PlxuICAgICAgICAgIFNlbmRcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG4gICAgICBcbiAgICAgIHsvKiA8dWwgY2xhc3NOYW1lPVwidGV4dC14bCBsZWFkaW5nLTEwIHBsLTZcIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktMlwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby02MDAgaG92ZXI6dGV4dC10dXJxdW9pc2UgZHVyYXRpb24tMjAwIGVhc2UtbGluZWFyXCIgaHJlZj17YGh0dHBzOi8vd3d3LmF2bWEub3JnL3Jlc291cmNlcy10b29scy93ZWxsYmVpbmdgfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+QVZNQSBXZWxsYmVpbmcgYW5kIFBlZXIgQXNzaXN0YW5jZTwvYT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBweC00XCI+QVZNQSBvZmZlcnMgYSB3aWRlIHJhbmdlIG9mIHVzZWZ1bCByZXNvdXJjZXMgdGhhdCBhc3Npc3Qgd2l0aCBwZXJzb25hbCB3ZWxsLWJlaW5nLiBGb3IgdGhvc2UgaW50ZXJlc3RlZCB0byBsZWFybiBtb3JlIGFib3V0IHRoZSB2ZXRlcmluYXJ5IHdlbGwtYmVpbmcgc3BhY2UsIHRoaXMgaXMgYSBncmVhdCBwbGFjZSB0byBzdGFydC48L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktMlwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby02MDAgaG92ZXI6dGV4dC10dXJxdW9pc2UgZHVyYXRpb24tMjAwIGVhc2UtbGluZWFyXCIgaHJlZj17YGh0dHBzOi8vMWxpZmVjYy5jb20vYH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPjEgTGlmZSBDb25uZWN0ZWQ8L2E+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gcHgtNFwiPkRyLiBLaW1iZXJseSBQb3BlLVJvYmluc29uLCBmb3VuZGVyIG9mIDEgTGlmZSBDb25uZWN0ZWQgYW5kIGF1dGhvciBvZiBUaGUgVW5zcG9rZW4gTGlmZSwgc2hhcmVzIHRoZSBhbWF6aW5nIHN0b3J5IG9mIGhvdyBzaGUgcmlzZXMgZnJvbSB0aGUgYnJpbmsgb2Ygc3VpY2lkZSB0byBndWlkaW5nIGZlbGxvdyB2ZXRlcmluYXJpYW5zIGluIHRoZSBtZW50YWwgaGVhbHRoIHNwYWNlLiBTaGUgaW50cm9kdWNlcyB0aGUgMSBMaWZlIENvbm5lY3RlZCBDb21taXRtZW50IHRoYXQgcmVtaW5kcyB1cyB0byBmb2N1cyBvbiBSZWNvZ25pemUsIEVtYnJhY2UsIENvbm5lY3QsIGFuZCBzdGVlciBhd2F5IGZyb20gTmFtZSwgQmxhbWUsIEp1ZGdlLiBIZXIgc3RvcnkgaXMgYSB0cnVlIGluc3BpcmF0aW9uIHRoYXQgZW5jb3VyYWdlZCBtZSB0byBhZHZvY2F0ZSBmb3IgcG9zaXRpdmUgd2VsbC1iZWluZy48L3A+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktMlwiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby02MDAgaG92ZXI6dGV4dC10dXJxdW9pc2UgZHVyYXRpb24tMjAwIGVhc2UtbGluZWFyXCIgaHJlZj17YGh0dHBzOi8vcmVsaWVmcm92ZXIuY29tL2B9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5SZWxpZWYgUm92ZXI8L2E+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gcHgtNFwiPkEgcGxhdGZvcm0gZGVzaWduZWQgdG8gaW1wcm92ZSB2ZXRlcmluYXJpYW5z4oCZIHdlbGwtYmVpbmcgYnkgYWxsb3dpbmcgZmxleGliaWxpdHkgYW5kIGNvbnRyb2wgb3ZlciBzY2hlZHVsZXMgdGhyb3VnaCBhbiBlZmZpY2llbnQsIHRyYW5zcGFyZW50LCBhbmQgYWNjZXNzaWJsZSByZWxpZWYgc3lzdGVtLjwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0yXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LXR1cnF1b2lzZSBkdXJhdGlvbi0yMDAgZWFzZS1saW5lYXJcIiBocmVmPXtgaHR0cHM6Ly9xcHJpbnN0aXR1dGUuY29tL2B9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5RUFIgSW5zdGl0dXRlPC9hPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHB4LTRcIj5RdWVzdGlvbi4gUGVyc3VhZGUuIFJlZmVyLiAzIGtleSBzdGVwcyBhbnlvbmUgY2FuIGxlYXJuIHRvIGhlbHAgcHJldmVudCBzdWljaWRlLjwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgPC91bD4gKi99XG4gICAgICA8aDI+Q29tcGxldGUgY29udGFjdCBmb3JtIHdpbGwgYmUgYXZhaWxhYmxlIHNvb248L2gyPlxuICAgICAgPGgyPlBsZWFzZSBlLW1haWwgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNjAwXCI+PExpbmsgIGhyZWY9XCJtYWlsdG86YW5keUBtb2Rlcm52ZXQuc29sdXRpb25zXCI+YW5keUBtb2Rlcm52ZXQuc29sdXRpb25zPC9MaW5rPjwvc3Bhbj4gZm9yIGFueSBpbnF1aXJ5PC9oMj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZUZvcm1zcGFyayIsIkNPTlRBQ1RfRk9STV9JRCIsIkZPUk1TUEFSS19GT1JNX0lEIiwiQ29udGFjdCIsImZvcm1JZCIsInN1Ym1pdCIsInN1Ym1pdHRpbmciLCJuYW1lIiwic2V0IiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsImZpcnN0TmFtZSIsIm9uQ2hhbmdlIiwic2V0TmFtZSIsInRhcmdldCIsInJlcXVpcmVkIiwidGV4dGFyZWEiLCJyb3dzIiwiYnV0dG9uIiwiZGlhYmxlZCIsImgyIiwic3BhbiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Contact.js\n"));

/***/ })

});