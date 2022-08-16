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

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Pagination = function(param) {\n    var numPages = param.numPages, currentPage = param.currentPage, pageInfo = param.pageInfo;\n    var _this1 = _this;\n    var prevPage = \"/page/\".concat(currentPage - 1);\n    var nextPage = \"/page/\".concat(currentPage + 1);\n    var onCurrentPage = function(i) {\n        i + 1 == currentPage ? true : false;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex list-none my-2 gap-2\",\n            children: [\n                pageInfo.hasPreviousPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: prevPage,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"relative block leading-tight\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"transition text-gray-800 duration-500 transform hover:-translate-y-1 hover:bg-indigo-700 hover:text-[#ff9966] inline-block bg-turquoise rounded-lg text-lg font-semibold px-4 py-2 cursor-pointer uppercase\",\n                            children: \"previous\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, _this),\n                Array.from({\n                    length: numPages\n                }, function(_, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/page/\".concat(i + 1),\n                        children: onCurrentPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"transition text-gray-800 duration-500 transform hover:-translate-y-1 hover:bg-indigo-700 hover:text-[#ff9966] inline-block bg-turquoise rounded-lg text-lg font-semibold px-4 py-2 cursor-pointer uppercase\",\n                            children: i + 1\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n                            lineNumber: 24,\n                            columnNumber: 34\n                        }, _this1) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"transition text-gray-800 duration-500 transform hover:-translate-y-1 hover:bg-indigo-700 hover:text-[#ff9966] inline-block bg-turquoise rounded-lg text-lg font-semibold px-4 py-2 cursor-pointer uppercase\",\n                            children: i + 1\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n                            lineNumber: 26,\n                            columnNumber: 29\n                        }, _this1)\n                    }, \"page-\".concat(i), false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, _this1);\n                }),\n                pageInfo.hasNextPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: nextPage,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"relative block leading-tight\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"transition text-gray-800 duration-500 transform hover:-translate-y-1 hover:bg-indigo-700 hover:text-[#ff9966] inline-block bg-turquoise rounded-lg text-lg font-semibold px-4 py-2 cursor-pointer uppercase\",\n                            children: \"next\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n                            lineNumber: 37,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n            lineNumber: 13,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBNkI7QUFFN0IsSUFBTUMsVUFBVSxHQUFHLGdCQUEwQztRQUF0Q0MsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ3BELElBQU1DLFFBQVEsR0FBRyxRQUFPLENBQW1CLE9BQWpCRixXQUFXLEdBQUcsQ0FBQyxDQUFHO0lBQzVDLElBQU1HLFFBQVEsR0FBRyxRQUFPLENBQWtCLE9BQWhCSCxXQUFXLEdBQUcsQ0FBQyxDQUFFO0lBRTNDLElBQU1JLGFBQWEsR0FBRyxTQUFDQyxDQUFDLEVBQUs7UUFDM0JBLENBQUMsR0FBRyxDQUFDLElBQUlMLFdBQVcsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0tBQ3JDO0lBRUQscUJBQ0UsOERBQUNNLEtBQUc7a0JBQ0EsNEVBQUNDLElBQUU7WUFBQ0MsU0FBUyxFQUFDLDJCQUEyQjs7Z0JBQ3BDUCxRQUFRLENBQUNRLGVBQWUsa0JBQ3JCLDhEQUFDWixrREFBSTtvQkFBQ2EsSUFBSSxFQUFFUixRQUFROzhCQUNwQiw0RUFBQ1MsSUFBRTt3QkFBQ0gsU0FBUyxFQUFDLDhCQUE4QjtrQ0FDeEMsNEVBQUNJLFFBQU07NEJBQUNKLFNBQVMsRUFBQyw2TUFBNk07c0NBQUMsVUFBUTs7Ozs7aUNBQVM7Ozs7OzZCQUNoUDs7Ozs7eUJBQ0U7Z0JBR1ZLLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO29CQUFDQyxNQUFNLEVBQUVoQixRQUFRO2lCQUFDLEVBQUUsU0FBQ2lCLENBQUMsRUFBRVgsQ0FBQzt5Q0FDakMsOERBQUNSLGtEQUFJO3dCQUFDYSxJQUFJLEVBQUUsUUFBTyxDQUFRLE9BQU5MLENBQUMsR0FBRyxDQUFDLENBQUU7a0NBQzNCRCxhQUFhLGlCQUFHLDhEQUFDUSxRQUFNOzRCQUFDSixTQUFTLEVBQUMsNk1BQTZNO3NDQUMxT0gsQ0FBQyxHQUFHLENBQUM7Ozs7O2tDQUNGLGlCQUFHLDhEQUFDTyxRQUFNOzRCQUFDSixTQUFTLEVBQUMsNk1BQTZNO3NDQUNyT0gsQ0FBQyxHQUFHLENBQUM7Ozs7O2tDQUNGO3VCQUwwQixPQUFNLENBQUksT0FBRkEsQ0FBQyxDQUFFOzs7OzhCQVN2QztpQkFDVixDQUFDO2dCQUNESixRQUFRLENBQUNnQixXQUFXLGtCQUNqQiw4REFBQ3BCLGtEQUFJO29CQUFDYSxJQUFJLEVBQUVQLFFBQVE7OEJBQ3BCLDRFQUFDUSxJQUFFO3dCQUFDSCxTQUFTLEVBQUMsOEJBQThCO2tDQUN4Qyw0RUFBQ0ksUUFBTTs0QkFBQ0osU0FBUyxFQUFDLDZNQUE2TTtzQ0FBQyxNQUFJOzs7OztpQ0FBUzs7Ozs7NkJBQzVPOzs7Ozt5QkFDRTs7Ozs7O2lCQUVWOzs7OzthQUNILENBQ1A7Q0FDRjtBQXpDS1YsS0FBQUEsVUFBVTtBQTJDaEIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzP2IyYWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBQYWdpbmF0aW9uID0gKCB7IG51bVBhZ2VzLCBjdXJyZW50UGFnZSwgcGFnZUluZm8gfSkgPT4ge1xuICBjb25zdCBwcmV2UGFnZSA9IGAvcGFnZS8ke2N1cnJlbnRQYWdlIC0gMSB9YDtcbiAgY29uc3QgbmV4dFBhZ2UgPSBgL3BhZ2UvJHtjdXJyZW50UGFnZSArIDF9YDtcblxuICBjb25zdCBvbkN1cnJlbnRQYWdlID0gKGkpID0+IHtcbiAgICBpICsgMSA9PSBjdXJyZW50UGFnZSA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmxleCBsaXN0LW5vbmUgbXktMiBnYXAtMic+XG4gICAgICAgICAgICB7cGFnZUluZm8uaGFzUHJldmlvdXNQYWdlICYmIChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcmV2UGFnZX0+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncmVsYXRpdmUgYmxvY2sgbGVhZGluZy10aWdodCc+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0cmFuc2l0aW9uIHRleHQtZ3JheS04MDAgZHVyYXRpb24tNTAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMSBob3ZlcjpiZy1pbmRpZ28tNzAwIGhvdmVyOnRleHQtWyNmZjk5NjZdIGlubGluZS1ibG9jayBiZy10dXJxdW9pc2Ugcm91bmRlZC1sZyB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgcHgtNCBweS0yIGN1cnNvci1wb2ludGVyIHVwcGVyY2FzZSc+cHJldmlvdXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtBcnJheS5mcm9tKHtsZW5ndGg6IG51bVBhZ2VzfSwgKF8sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BhZ2UvJHtpICsgMX1gfSBrZXk9e2BwYWdlLSR7aX1gfT5cbiAgICAgICAgICAgICAgICB7b25DdXJyZW50UGFnZSA/IDxidXR0b24gY2xhc3NOYW1lPSd0cmFuc2l0aW9uIHRleHQtZ3JheS04MDAgZHVyYXRpb24tNTAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMSBob3ZlcjpiZy1pbmRpZ28tNzAwIGhvdmVyOnRleHQtWyNmZjk5NjZdIGlubGluZS1ibG9jayBiZy10dXJxdW9pc2Ugcm91bmRlZC1sZyB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgcHgtNCBweS0yIGN1cnNvci1wb2ludGVyIHVwcGVyY2FzZSc+XG4gICAgICAgICAgICAgICAgICAgIHsgaSArIDEgfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPiA6IDxidXR0b24gY2xhc3NOYW1lPSd0cmFuc2l0aW9uIHRleHQtZ3JheS04MDAgZHVyYXRpb24tNTAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMSBob3ZlcjpiZy1pbmRpZ28tNzAwIGhvdmVyOnRleHQtWyNmZjk5NjZdIGlubGluZS1ibG9jayBiZy10dXJxdW9pc2Ugcm91bmRlZC1sZyB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgcHgtNCBweS0yIGN1cnNvci1wb2ludGVyIHVwcGVyY2FzZSc+XG4gICAgICAgICAgICAgICAgICAgIHsgaSArIDEgfVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPn1cbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9J3RyYW5zaXRpb24gdGV4dC1ncmF5LTgwMCBkdXJhdGlvbi01MDAgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0xIGhvdmVyOmJnLWluZGlnby03MDAgaG92ZXI6dGV4dC1bI2ZmOTk2Nl0gaW5saW5lLWJsb2NrIGJnLXR1cnF1b2lzZSByb3VuZGVkLWxnIHRleHQtbGcgZm9udC1zZW1pYm9sZCBweC00IHB5LTIgY3Vyc29yLXBvaW50ZXIgdXBwZXJjYXNlJz5cbiAgICAgICAgICAgICAgICAgICAgeyBpICsgMSB9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+ICovfVxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAge3BhZ2VJbmZvLmhhc05leHRQYWdlICYmIChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtuZXh0UGFnZX0+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncmVsYXRpdmUgYmxvY2sgbGVhZGluZy10aWdodCc+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0cmFuc2l0aW9uIHRleHQtZ3JheS04MDAgZHVyYXRpb24tNTAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMSBob3ZlcjpiZy1pbmRpZ28tNzAwIGhvdmVyOnRleHQtWyNmZjk5NjZdIGlubGluZS1ibG9jayBiZy10dXJxdW9pc2Ugcm91bmRlZC1sZyB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgcHgtNCBweS0yIGN1cnNvci1wb2ludGVyIHVwcGVyY2FzZSc+bmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uIl0sIm5hbWVzIjpbIkxpbmsiLCJQYWdpbmF0aW9uIiwibnVtUGFnZXMiLCJjdXJyZW50UGFnZSIsInBhZ2VJbmZvIiwicHJldlBhZ2UiLCJuZXh0UGFnZSIsIm9uQ3VycmVudFBhZ2UiLCJpIiwiZGl2IiwidWwiLCJjbGFzc05hbWUiLCJoYXNQcmV2aW91c1BhZ2UiLCJocmVmIiwibGkiLCJidXR0b24iLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaGFzTmV4dFBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Pagination.js\n"));

/***/ })

});