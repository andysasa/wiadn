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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _formspark_use_formspark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @formspark/use-formspark */ \"./node_modules/@formspark/use-formspark/dist/use-formspark.esm.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config/index.js\");\n\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar FORMSPARK_FORM_ID = \"bA4bnUPj\";\nvar Contact = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_formspark_use_formspark__WEBPACK_IMPORTED_MODULE_4__.useFormspark)({\n        formId: FORMSPARK_FORM_ID\n    }), 2), submit = ref[0], submitting = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), email = ref2[0], setEmail = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), message = ref3[0], setMessage = ref3[1];\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        _ctx.next = 3;\n                        return submit({\n                            name: name,\n                            email: email,\n                            message: message\n                        });\n                    case 3:\n                        alert(\"Form Submitted\");\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n            onSubmit: onSubmit,\n            className: \"bg-indigo-600 px-4 py-8 lg:px-12 rounded-xl grid xl:grid-cols-12 xl:gap-4\",\n            method: \"POST\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    className: \"mb-8 text-offwhite text-5xl font-semibold xl:col-span-12\",\n                    children: \"Contact\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    className: \"mb-2 text-turquoise xl:col-span-1\",\n                    htmlFor: \"name\",\n                    children: \"Name\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    className: \"outline-none px-2 py-1 rounded-md mb-2 xl:col-span-5\",\n                    type: \"text\",\n                    id: \"name\",\n                    name: \"name\",\n                    placeholder: \"Name\",\n                    value: name,\n                    onChange: function(e) {\n                        return setName(e.target.value);\n                    },\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    className: \"mb-2 text-turquoise xl:ml-4 xl:col-span-1\",\n                    htmlFor: \"email\",\n                    children: \"Email\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    className: \"outline-none px-2 py-1 rounded-md mb-2 xl:col-span-5\",\n                    pattern: \"^([a-zA-Z0-9_\\\\-\\\\.]+)@((\\\\[[0-9]{1,3}\\\\.[0-9]{1,3}\\\\.[0-9]{1,3}\\\\.)|(([a-zA-Z0-9\\\\-]+\\\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\\\]?)$\",\n                    type: \"email\",\n                    id: \"email\",\n                    name: \"email\",\n                    placeholder: \"Email\",\n                    value: email,\n                    onChange: function(e) {\n                        return setEmail(e.target.value);\n                    },\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    className: \"mb-2 text-turquoise xl:col-span-1\",\n                    htmlFor: \"message\",\n                    children: \"Message\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                    className: \"outline-none px-2 py-1 rounded-md mb-8 xl:col-span-11\",\n                    id: \"message\",\n                    name: \"message\",\n                    rows: \"8\",\n                    value: message,\n                    onChange: function(e) {\n                        return setMessage(e.target.value);\n                    },\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"g-recaptcha mb-8 xl:col-start-2\",\n                    \"data-sitekey\": \"6LcT248hAAAAAPV4FbMO0aADwHbja0fEQ-NO26ug \"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: \"xl:col-end-13 mb-4\",\n                    type: \"submit\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"g-recaptcha bg-turquoise px-4 py-2 w-fit rounded-full text-gray-900 hover:bg-indigo-900 hover:text-gray-200 duration-300 ease-in\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(Contact, \"ROLOBDgSTsbtzvc3UWGeFOXVqwE=\", false, function() {\n    return [\n        _formspark_use_formspark__WEBPACK_IMPORTED_MODULE_4__.useFormspark\n    ];\n});\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0ksT0FBTyxFQUFDLFNBQVM7OEJBQUMsU0FBTzs7Ozs7eUJBQVE7OEJBQ3RGLDhEQUFDVSxVQUFRO29CQUFDZCxTQUFTLEVBQUMsdURBQXVEO29CQUFDTyxFQUFFLEVBQUMsU0FBUztvQkFBQ25CLElBQUksRUFBQyxTQUFTO29CQUFDMkIsSUFBSSxFQUFDLEdBQUc7b0JBQUNOLEtBQUssRUFBRWpCLE9BQU87b0JBQUVrQixRQUFRLEVBQUUsU0FBQ2YsQ0FBQzsrQkFBS0YsVUFBVSxDQUFDRSxDQUFDLENBQUNnQixNQUFNLENBQUNGLEtBQUssQ0FBQztxQkFBQTtvQkFBRUcsUUFBUTs7Ozs7eUJBQUc7OEJBQ3pMLDhEQUFDZCxLQUFHO29CQUFDRSxTQUFTLEVBQUMsaUNBQWlDO29CQUFDZ0IsY0FBWSxFQUFDLDJDQUM3RDs7Ozs7eUJBQU87OEJBQ1IsOERBQUNDLFFBQU07b0JBQUNqQixTQUFTLEVBQUMsb0JBQW9CO29CQUFDTSxJQUFJLEVBQUMsUUFBUTs4QkFDbEQsNEVBQUNSLEtBQUc7d0JBQUNFLFNBQVMsRUFBQyxrSUFBa0k7a0NBQUMsUUFBTTs7Ozs7NkJBQU07Ozs7O3lCQUN2Sjs7Ozs7O2lCQUNKOzs7OzthQUNILENBQ1A7Q0FDRjtHQXJDS2hCLE9BQU87O1FBRWtCSCxrRUFBWTs7O0FBRnJDRyxLQUFBQSxPQUFPO0FBdUNiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db250YWN0LmpzPzY0NmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IHVzZUZvcm1zcGFyayB9IGZyb20gXCJAZm9ybXNwYXJrL3VzZS1mb3Jtc3BhcmtcIjtcbmltcG9ydCB7IENPTlRBQ1RfRk9STV9JRCB9IGZyb20gJy4uL2NvbmZpZyc7XG5cbmNvbnN0IEZPUk1TUEFSS19GT1JNX0lEID0gXCJiQTRiblVQalwiO1xuXG5jb25zdCBDb250YWN0ID0gKCkgPT4ge1xuXG4gIGNvbnN0IFtzdWJtaXQsIHN1Ym1pdHRpbmddID0gdXNlRm9ybXNwYXJrKHtcbiAgICBmb3JtSWQ6IEZPUk1TUEFSS19GT1JNX0lELFxuICB9KTtcblxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhd2FpdCBzdWJtaXQoeyBuYW1lLCBlbWFpbCwgbWVzc2FnZSB9KTtcbiAgICBhbGVydChcIkZvcm0gU3VibWl0dGVkXCIpO1xuICB9XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IGNsYXNzTmFtZT1cImJnLWluZGlnby02MDAgcHgtNCBweS04IGxnOnB4LTEyIHJvdW5kZWQteGwgZ3JpZCB4bDpncmlkLWNvbHMtMTIgeGw6Z2FwLTRcIiBtZXRob2Q9XCJQT1NUXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9J21iLTggdGV4dC1vZmZ3aGl0ZSB0ZXh0LTV4bCBmb250LXNlbWlib2xkIHhsOmNvbC1zcGFuLTEyJz5cbiAgICAgICAgICBDb250YWN0XG4gICAgICAgIDwvaDE+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0yIHRleHQtdHVycXVvaXNlIHhsOmNvbC1zcGFuLTFcIiBodG1sRm9yPVwibmFtZVwiPk5hbWU8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIHB4LTIgcHktMSByb3VuZGVkLW1kIG1iLTIgeGw6Y29sLXNwYW4tNVwiIHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgbmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiB2YWx1ZT17bmFtZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXROYW1lKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cIm1iLTIgdGV4dC10dXJxdW9pc2UgeGw6bWwtNCB4bDpjb2wtc3Bhbi0xXCIgaHRtbEZvcj1cImVtYWlsXCI+RW1haWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIHB4LTIgcHktMSByb3VuZGVkLW1kIG1iLTIgeGw6Y29sLXNwYW4tNVwiIHBhdHRlcm49XCJeKFthLXpBLVowLTlfXFwtXFwuXSspQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuKXwoKFthLXpBLVowLTlcXC1dK1xcLikrKSkoW2EtekEtWl17Miw0fXxbMC05XXsxLDN9KShcXF0/KSRcIiB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgbmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0yIHRleHQtdHVycXVvaXNlIHhsOmNvbC1zcGFuLTFcIiBodG1sRm9yPVwibWVzc2FnZVwiPk1lc3NhZ2U8L2xhYmVsPlxuICAgICAgICA8dGV4dGFyZWEgY2xhc3NOYW1lPVwib3V0bGluZS1ub25lIHB4LTIgcHktMSByb3VuZGVkLW1kIG1iLTggeGw6Y29sLXNwYW4tMTFcIiBpZD1cIm1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiIHJvd3M9XCI4XCIgdmFsdWU9e21lc3NhZ2V9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZy1yZWNhcHRjaGEgbWItOCB4bDpjb2wtc3RhcnQtMlwiIGRhdGEtc2l0ZWtleT1cIjZMY1QyNDhoQUFBQUFQVjRGYk1PMGFBRHdIYmphMGZFUS1OTzI2dWdcbiAgICAgICAgXCI+PC9kaXY+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwieGw6Y29sLWVuZC0xMyBtYi00XCIgdHlwZT1cInN1Ym1pdFwiID5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImctcmVjYXB0Y2hhIGJnLXR1cnF1b2lzZSBweC00IHB5LTIgdy1maXQgcm91bmRlZC1mdWxsIHRleHQtZ3JheS05MDAgaG92ZXI6YmctaW5kaWdvLTkwMCBob3Zlcjp0ZXh0LWdyYXktMjAwIGR1cmF0aW9uLTMwMCBlYXNlLWluXCI+U3VibWl0PC9kaXY+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbnRhY3Q7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJMaW5rIiwidXNlRm9ybXNwYXJrIiwiQ09OVEFDVF9GT1JNX0lEIiwiRk9STVNQQVJLX0ZPUk1fSUQiLCJDb250YWN0IiwiZm9ybUlkIiwic3VibWl0Iiwic3VibWl0dGluZyIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwib25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJhbGVydCIsImRpdiIsImZvcm0iLCJjbGFzc05hbWUiLCJtZXRob2QiLCJoMSIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJwYXR0ZXJuIiwidGV4dGFyZWEiLCJyb3dzIiwiZGF0YS1zaXRla2V5IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Contact.js\n"));

/***/ })

});