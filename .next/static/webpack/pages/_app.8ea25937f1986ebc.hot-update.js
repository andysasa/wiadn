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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _formspark_use_formspark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @formspark/use-formspark */ \"./node_modules/@formspark/use-formspark/dist/use-formspark.esm.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config/index.js\");\n\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar FORMSPARK_FORM_ID = \"bA4bnUPj\";\nvar Contact = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_formspark_use_formspark__WEBPACK_IMPORTED_MODULE_4__.useFormspark)({\n        formId: FORMSPARK_FORM_ID\n    }), 2), submit = ref[0], submitting = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), email = ref2[0], setEmail = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), message = ref3[0], setMessage = ref3[1];\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        _ctx.next = 3;\n                        return submit({\n                            message: message\n                        });\n                    case 3:\n                        alert(\"Form Submitted\");\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"bg-white shadow-lg rounded-lg p-4 lg:p-8 pb-12 mb-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"mb-8 text-5xl font-semibold\",\n                children: \"Contact\"\n            }, void 0, false, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                onSubmit: onSubmit,\n                className: \"bg-indigo-600 px-4 py-8 rounded-xl grid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"mb-2 text-turquoise\",\n                        htmlFor: \"name\",\n                        children: \"Name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        className: \"outline-none px-2 py-1 rounded-md mb-2\",\n                        type: \"text\",\n                        id: \"name\",\n                        name: \"name\",\n                        placeholder: \"Name\",\n                        value: name,\n                        onChange: function(e) {\n                            return setName(e.target.value);\n                        },\n                        required: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"mb-2 text-turquoise\",\n                        htmlFor: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        className: \"outline-none px-2 py-1 rounded-md mb-2\",\n                        type: \"email\",\n                        id: \"email\",\n                        name: \"email\",\n                        placeholder: \"Email\",\n                        value: email,\n                        onChange: function(e) {\n                            return setEmail(e.target.value);\n                        },\n                        required: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        className: \"mb-2 text-turquoise\",\n                        htmlFor: \"message\",\n                        children: \"Message\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                        className: \"outline-none px-2 py-1 rounded-md mb-4\",\n                        id: \"message\",\n                        name: \"message\",\n                        rows: \"8\",\n                        value: message,\n                        onChange: function(e) {\n                            return setMessage(e.target.value);\n                        },\n                        required: \"\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        diabled: submitting,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: \"Complete contact form will be available soon\"\n            }, void 0, false, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                children: [\n                    \"Please e-mail \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                        className: \"text-indigo-600\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"mailto:andy@modernvet.solutions\",\n                            children: \"andy@modernvet.solutions\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                            lineNumber: 61,\n                            columnNumber: 59\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 61,\n                        columnNumber: 25\n                    }, _this),\n                    \" for any inquiry\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(Contact, \"ROLOBDgSTsbtzvc3UWGeFOXVqwE=\", false, function() {\n    return [\n        _formspark_use_formspark__WEBPACK_IMPORTED_MODULE_4__.useFormspark\n    ];\n});\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OERBQUNTLFVBQVE7d0JBQUNiLFNBQVMsRUFBQyx3Q0FBd0M7d0JBQUNPLEVBQUUsRUFBQyxTQUFTO3dCQUFDbEIsSUFBSSxFQUFDLFNBQVM7d0JBQUN5QixJQUFJLEVBQUMsR0FBRzt3QkFBQ0wsS0FBSyxFQUFFaEIsT0FBTzt3QkFBRWlCLFFBQVEsRUFBRSxTQUFDZCxDQUFDO21DQUFLRixVQUFVLENBQUNFLENBQUMsQ0FBQ2UsTUFBTSxDQUFDRixLQUFLLENBQUM7eUJBQUE7d0JBQUVHLFFBQVEsRUFBQyxFQUFFOzs7Ozs2QkFBRTtrQ0FDNUssOERBQUNHLFFBQU07d0JBQUNULElBQUksRUFBQyxRQUFRO3dCQUFDVSxPQUFPLEVBQUU1QixVQUFVO2tDQUN2Qyw0RUFBQ1csS0FBRzs7OztpQ0FBTzs7Ozs7NkJBQ0o7Ozs7OztxQkFDSjswQkFvQlAsOERBQUNrQixJQUFFOzBCQUFDLDhDQUE0Qzs7Ozs7cUJBQUs7MEJBQ3JELDhEQUFDQSxJQUFFOztvQkFBQyxnQkFBYztrQ0FBQSw4REFBQ0MsTUFBSTt3QkFBQ2xCLFNBQVMsRUFBQyxpQkFBaUI7a0NBQUMsNEVBQUNuQixrREFBSTs0QkFBRXNDLElBQUksRUFBQyxpQ0FBaUM7c0NBQUMsMEJBQXdCOzs7OztpQ0FBTzs7Ozs7NkJBQU87b0JBQUEsa0JBQWdCOzs7Ozs7cUJBQUs7Ozs7OzthQUN6SixDQUNQO0NBQ0Y7R0F4REtsQyxPQUFPOztRQUVrQkgsa0VBQVk7OztBQUZyQ0csS0FBQUEsT0FBTztBQTBEYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udGFjdC5qcz82NDZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VGb3Jtc3BhcmsgfSBmcm9tIFwiQGZvcm1zcGFyay91c2UtZm9ybXNwYXJrXCI7XG5pbXBvcnQgeyBDT05UQUNUX0ZPUk1fSUQgfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBGT1JNU1BBUktfRk9STV9JRCA9IFwiYkE0Ym5VUGpcIjtcblxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcblxuICBjb25zdCBbc3VibWl0LCBzdWJtaXR0aW5nXSA9IHVzZUZvcm1zcGFyayh7XG4gICAgZm9ybUlkOiBGT1JNU1BBUktfRk9STV9JRCxcbiAgfSk7XG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXdhaXQgc3VibWl0KHsgbWVzc2FnZSB9KTtcbiAgICBhbGVydChcIkZvcm0gU3VibWl0dGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQtbGcgcC00IGxnOnAtOCBwYi0xMiBtYi04Jz5cbiAgICAgIDxoMSBjbGFzc05hbWU9J21iLTggdGV4dC01eGwgZm9udC1zZW1pYm9sZCc+XG4gICAgICAgIENvbnRhY3RcbiAgICAgIDwvaDE+XG4gICAgICBcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gY2xhc3NOYW1lPVwiYmctaW5kaWdvLTYwMCBweC00IHB5LTggcm91bmRlZC14bCBncmlkXCI+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0yIHRleHQtdHVycXVvaXNlXCIgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSBweC0yIHB5LTEgcm91bmRlZC1tZCBtYi0yXCIgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIHZhbHVlPXtuYW1lfSBvbkNoYW5nZT17KGUpID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZD1cIlwiIC8+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0yIHRleHQtdHVycXVvaXNlXCIgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIHB4LTIgcHktMSByb3VuZGVkLW1kIG1iLTJcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkPVwiXCIgLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC10dXJxdW9pc2VcIiBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIHB4LTIgcHktMSByb3VuZGVkLW1kIG1iLTRcIiBpZD1cIm1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHJvd3M9XCI4XCIgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkPVwiXCIvPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBkaWFibGVkPXtzdWJtaXR0aW5nfT5cbiAgICAgICAgICA8ZGl2PjwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICAgIFxuICAgICAgey8qIDx1bCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGxlYWRpbmctMTAgcGwtNlwiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0yXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LXR1cnF1b2lzZSBkdXJhdGlvbi0yMDAgZWFzZS1saW5lYXJcIiBocmVmPXtgaHR0cHM6Ly93d3cuYXZtYS5vcmcvcmVzb3VyY2VzLXRvb2xzL3dlbGxiZWluZ2B9IHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5BVk1BIFdlbGxiZWluZyBhbmQgUGVlciBBc3Npc3RhbmNlPC9hPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIHB4LTRcIj5BVk1BIG9mZmVycyBhIHdpZGUgcmFuZ2Ugb2YgdXNlZnVsIHJlc291cmNlcyB0aGF0IGFzc2lzdCB3aXRoIHBlcnNvbmFsIHdlbGwtYmVpbmcuIEZvciB0aG9zZSBpbnRlcmVzdGVkIHRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIHZldGVyaW5hcnkgd2VsbC1iZWluZyBzcGFjZSwgdGhpcyBpcyBhIGdyZWF0IHBsYWNlIHRvIHN0YXJ0LjwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0yXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LXR1cnF1b2lzZSBkdXJhdGlvbi0yMDAgZWFzZS1saW5lYXJcIiBocmVmPXtgaHR0cHM6Ly8xbGlmZWNjLmNvbS9gfSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+MSBMaWZlIENvbm5lY3RlZDwvYT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBweC00XCI+RHIuIEtpbWJlcmx5IFBvcGUtUm9iaW5zb24sIGZvdW5kZXIgb2YgMSBMaWZlIENvbm5lY3RlZCBhbmQgYXV0aG9yIG9mIFRoZSBVbnNwb2tlbiBMaWZlLCBzaGFyZXMgdGhlIGFtYXppbmcgc3Rvcnkgb2YgaG93IHNoZSByaXNlcyBmcm9tIHRoZSBicmluayBvZiBzdWljaWRlIHRvIGd1aWRpbmcgZmVsbG93IHZldGVyaW5hcmlhbnMgaW4gdGhlIG1lbnRhbCBoZWFsdGggc3BhY2UuIFNoZSBpbnRyb2R1Y2VzIHRoZSAxIExpZmUgQ29ubmVjdGVkIENvbW1pdG1lbnQgdGhhdCByZW1pbmRzIHVzIHRvIGZvY3VzIG9uIFJlY29nbml6ZSwgRW1icmFjZSwgQ29ubmVjdCwgYW5kIHN0ZWVyIGF3YXkgZnJvbSBOYW1lLCBCbGFtZSwgSnVkZ2UuIEhlciBzdG9yeSBpcyBhIHRydWUgaW5zcGlyYXRpb24gdGhhdCBlbmNvdXJhZ2VkIG1lIHRvIGFkdm9jYXRlIGZvciBwb3NpdGl2ZSB3ZWxsLWJlaW5nLjwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS0yXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRleHQtaW5kaWdvLTYwMCBob3Zlcjp0ZXh0LXR1cnF1b2lzZSBkdXJhdGlvbi0yMDAgZWFzZS1saW5lYXJcIiBocmVmPXtgaHR0cHM6Ly9yZWxpZWZyb3Zlci5jb20vYH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlJlbGllZiBSb3ZlcjwvYT5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSBweC00XCI+QSBwbGF0Zm9ybSBkZXNpZ25lZCB0byBpbXByb3ZlIHZldGVyaW5hcmlhbnPigJkgd2VsbC1iZWluZyBieSBhbGxvd2luZyBmbGV4aWJpbGl0eSBhbmQgY29udHJvbCBvdmVyIHNjaGVkdWxlcyB0aHJvdWdoIGFuIGVmZmljaWVudCwgdHJhbnNwYXJlbnQsIGFuZCBhY2Nlc3NpYmxlIHJlbGllZiBzeXN0ZW0uPC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LTJcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1pbmRpZ28tNjAwIGhvdmVyOnRleHQtdHVycXVvaXNlIGR1cmF0aW9uLTIwMCBlYXNlLWxpbmVhclwiIGhyZWY9e2BodHRwczovL3Fwcmluc3RpdHV0ZS5jb20vYH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlFQUiBJbnN0aXR1dGU8L2E+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gcHgtNFwiPlF1ZXN0aW9uLiBQZXJzdWFkZS4gUmVmZXIuIDMga2V5IHN0ZXBzIGFueW9uZSBjYW4gbGVhcm4gdG8gaGVscCBwcmV2ZW50IHN1aWNpZGUuPC9wPlxuICAgICAgICAgIDwvbGk+XG4gICAgICA8L3VsPiAqL31cbiAgICAgIDxoMj5Db21wbGV0ZSBjb250YWN0IGZvcm0gd2lsbCBiZSBhdmFpbGFibGUgc29vbjwvaDI+XG4gICAgICA8aDI+UGxlYXNlIGUtbWFpbCA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWluZGlnby02MDBcIj48TGluayAgaHJlZj1cIm1haWx0bzphbmR5QG1vZGVybnZldC5zb2x1dGlvbnNcIj5hbmR5QG1vZGVybnZldC5zb2x1dGlvbnM8L0xpbms+PC9zcGFuPiBmb3IgYW55IGlucXVpcnk8L2gyPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwidXNlRm9ybXNwYXJrIiwiQ09OVEFDVF9GT1JNX0lEIiwiRk9STVNQQVJLX0ZPUk1fSUQiLCJDb250YWN0IiwiZm9ybUlkIiwic3VibWl0Iiwic3VibWl0dGluZyIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsInJvd3MiLCJidXR0b24iLCJkaWFibGVkIiwiaDIiLCJzcGFuIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Contact.js\n"));

/***/ })

});