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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\n\nvar Pagination = function(param) {\n    var numPages = param.numPages, currentPage = param.currentPage, pageInfo = param.pageInfo;\n    var _this1 = _this;\n    var prevPage = \"/page/\".concat(currentPage - 1);\n    var nextPage = \"/page/\".concat(currentPage + 1);\n    var currentPage = function(i) {\n        i + 1 == currentPage ? true : false;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"flex list-none my-2 gap-2\",\n            children: [\n                pageInfo.hasPreviousPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: prevPage,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"relative block leading-tight\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"transition text-gray-800 duration-500 transform hover:-translate-y-1 hover:bg-indigo-700 hover:text-[#ff9966] inline-block bg-turquoise rounded-lg text-lg font-semibold px-4 py-2 cursor-pointer uppercase\",\n                            children: \"previous\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n                            lineNumber: 17,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n                        lineNumber: 16,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, _this),\n                Array.from({\n                    length: numPages\n                }, function(_, i) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        href: \"/page/\".concat(i + 1)\n                    }, \"page-\".concat(i), false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, _this1);\n                }),\n                pageInfo.hasNextPage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    href: nextPage,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"relative block leading-tight\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"transition text-gray-800 duration-500 transform hover:-translate-y-1 hover:bg-indigo-700 hover:text-[#ff9966] inline-block bg-turquoise rounded-lg text-lg font-semibold px-4 py-2 cursor-pointer uppercase\",\n                            children: \"next\"\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n            lineNumber: 13,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Pagination.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, _this);\n};\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nvar _c;\n$RefreshReg$(_c, \"Pagination\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7QUFBNkI7QUFFN0IsSUFBTUMsVUFBVSxHQUFHLGdCQUEwQztRQUF0Q0MsUUFBUSxTQUFSQSxRQUFRLEVBQUVDLFdBQVcsU0FBWEEsV0FBVyxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7O0lBQ3BELElBQU1DLFFBQVEsR0FBRyxRQUFPLENBQW1CLE9BQWpCRixXQUFXLEdBQUcsQ0FBQyxDQUFHO0lBQzVDLElBQU1HLFFBQVEsR0FBRyxRQUFPLENBQWtCLE9BQWhCSCxXQUFXLEdBQUcsQ0FBQyxDQUFFO0lBRTNDLElBQU1BLFdBQVcsR0FBRyxTQUFDSSxDQUFDLEVBQUs7UUFDekJBLENBQUMsR0FBRyxDQUFDLElBQUlKLFdBQVcsR0FBRyxJQUFJLEdBQUcsS0FBSyxDQUFDO0tBQ3JDO0lBRUQscUJBQ0UsOERBQUNLLEtBQUc7a0JBQ0EsNEVBQUNDLElBQUU7WUFBQ0MsU0FBUyxFQUFDLDJCQUEyQjs7Z0JBQ3BDTixRQUFRLENBQUNPLGVBQWUsa0JBQ3JCLDhEQUFDWCxrREFBSTtvQkFBQ1ksSUFBSSxFQUFFUCxRQUFROzhCQUNwQiw0RUFBQ1EsSUFBRTt3QkFBQ0gsU0FBUyxFQUFDLDhCQUE4QjtrQ0FDeEMsNEVBQUNJLFFBQU07NEJBQUNKLFNBQVMsRUFBQyw2TUFBNk07c0NBQUMsVUFBUTs7Ozs7aUNBQVM7Ozs7OzZCQUNoUDs7Ozs7eUJBQ0U7Z0JBR1ZLLEtBQUssQ0FBQ0MsSUFBSSxDQUFDO29CQUFDQyxNQUFNLEVBQUVmLFFBQVE7aUJBQUMsRUFBRSxTQUFDZ0IsQ0FBQyxFQUFFWCxDQUFDO3lDQUNqQyw4REFBQ1Asa0RBQUk7d0JBQUNZLElBQUksRUFBRSxRQUFPLENBQVEsT0FBTkwsQ0FBQyxHQUFHLENBQUMsQ0FBRTt1QkFBTyxPQUFNLENBQUksT0FBRkEsQ0FBQyxDQUFFOzs7OzhCQUt2QztpQkFDVixDQUFDO2dCQUNESCxRQUFRLENBQUNlLFdBQVcsa0JBQ2pCLDhEQUFDbkIsa0RBQUk7b0JBQUNZLElBQUksRUFBRU4sUUFBUTs4QkFDcEIsNEVBQUNPLElBQUU7d0JBQUNILFNBQVMsRUFBQyw4QkFBOEI7a0NBQ3hDLDRFQUFDSSxRQUFNOzRCQUFDSixTQUFTLEVBQUMsNk1BQTZNO3NDQUFDLE1BQUk7Ozs7O2lDQUFTOzs7Ozs2QkFDNU87Ozs7O3lCQUNFOzs7Ozs7aUJBRVY7Ozs7O2FBQ0gsQ0FDUDtDQUNGO0FBckNLVCxLQUFBQSxVQUFVO0FBdUNoQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1BhZ2luYXRpb24uanM/YjJhZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IFBhZ2luYXRpb24gPSAoIHsgbnVtUGFnZXMsIGN1cnJlbnRQYWdlLCBwYWdlSW5mbyB9KSA9PiB7XG4gIGNvbnN0IHByZXZQYWdlID0gYC9wYWdlLyR7Y3VycmVudFBhZ2UgLSAxIH1gO1xuICBjb25zdCBuZXh0UGFnZSA9IGAvcGFnZS8ke2N1cnJlbnRQYWdlICsgMX1gO1xuXG4gIGNvbnN0IGN1cnJlbnRQYWdlID0gKGkpID0+IHtcbiAgIChpICsgMSA9PSBjdXJyZW50UGFnZSA/IHRydWUgOiBmYWxzZSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmxleCBsaXN0LW5vbmUgbXktMiBnYXAtMic+XG4gICAgICAgICAgICB7cGFnZUluZm8uaGFzUHJldmlvdXNQYWdlICYmIChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtwcmV2UGFnZX0+XG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT0ncmVsYXRpdmUgYmxvY2sgbGVhZGluZy10aWdodCc+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0cmFuc2l0aW9uIHRleHQtZ3JheS04MDAgZHVyYXRpb24tNTAwIHRyYW5zZm9ybSBob3ZlcjotdHJhbnNsYXRlLXktMSBob3ZlcjpiZy1pbmRpZ28tNzAwIGhvdmVyOnRleHQtWyNmZjk5NjZdIGlubGluZS1ibG9jayBiZy10dXJxdW9pc2Ugcm91bmRlZC1sZyB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgcHgtNCBweS0yIGN1cnNvci1wb2ludGVyIHVwcGVyY2FzZSc+cHJldmlvdXM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIHtBcnJheS5mcm9tKHtsZW5ndGg6IG51bVBhZ2VzfSwgKF8sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BhZ2UvJHtpICsgMX1gfSBrZXk9e2BwYWdlLSR7aX1gfT5cbiAgICAgICAgICAgICAgICB7fVxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT0ndHJhbnNpdGlvbiB0ZXh0LWdyYXktODAwIGR1cmF0aW9uLTUwMCB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTEgaG92ZXI6YmctaW5kaWdvLTcwMCBob3Zlcjp0ZXh0LVsjZmY5OTY2XSBpbmxpbmUtYmxvY2sgYmctdHVycXVvaXNlIHJvdW5kZWQtbGcgdGV4dC1sZyBmb250LXNlbWlib2xkIHB4LTQgcHktMiBjdXJzb3ItcG9pbnRlciB1cHBlcmNhc2UnPlxuICAgICAgICAgICAgICAgICAgICB7IGkgKyAxIH1cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICB7cGFnZUluZm8uaGFzTmV4dFBhZ2UgJiYgKFxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e25leHRQYWdlfT5cbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPSdyZWxhdGl2ZSBibG9jayBsZWFkaW5nLXRpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J3RyYW5zaXRpb24gdGV4dC1ncmF5LTgwMCBkdXJhdGlvbi01MDAgdHJhbnNmb3JtIGhvdmVyOi10cmFuc2xhdGUteS0xIGhvdmVyOmJnLWluZGlnby03MDAgaG92ZXI6dGV4dC1bI2ZmOTk2Nl0gaW5saW5lLWJsb2NrIGJnLXR1cnF1b2lzZSByb3VuZGVkLWxnIHRleHQtbGcgZm9udC1zZW1pYm9sZCBweC00IHB5LTIgY3Vyc29yLXBvaW50ZXIgdXBwZXJjYXNlJz5uZXh0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L3VsPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb24iXSwibmFtZXMiOlsiTGluayIsIlBhZ2luYXRpb24iLCJudW1QYWdlcyIsImN1cnJlbnRQYWdlIiwicGFnZUluZm8iLCJwcmV2UGFnZSIsIm5leHRQYWdlIiwiaSIsImRpdiIsInVsIiwiY2xhc3NOYW1lIiwiaGFzUHJldmlvdXNQYWdlIiwiaHJlZiIsImxpIiwiYnV0dG9uIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwiXyIsImhhc05leHRQYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Pagination.js\n"));

/***/ })

});