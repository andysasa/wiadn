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

/***/ "./components/PostWidget.js":
/*!**********************************!*\
  !*** ./components/PostWidget.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util */ \"./util.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services */ \"./services/index.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar PostWidget = function(param) {\n    var categories = param.categories, slug = param.slug;\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), relatedPosts = ref[0], setRelatedPosts = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        if (slug) {\n            (0,_services__WEBPACK_IMPORTED_MODULE_6__.getSimilarPosts)(categories, slug).then(function(result) {\n                setRelatedPosts(result);\n            });\n        } else {\n            (0,_services__WEBPACK_IMPORTED_MODULE_6__.getRecentPosts)().then(function(result) {\n                setRelatedPosts(result);\n            });\n        }\n    }, [\n        slug\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white shadow-lg rounded-lg p-8 pb-12 mb-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-xl mb-8 font-semibold border-b pb-4\",\n                children: slug ? \"Related Posts\" : \"Recent Posts\"\n            }, void 0, false, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostWidget.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, _this),\n            relatedPosts.map(function(post, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex items-center w-full mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-16 flex-none\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                loader: _util__WEBPACK_IMPORTED_MODULE_5__.grpahCMSImageLoader,\n                                alt: post.title,\n                                height: \"60px\",\n                                width: \"60px\",\n                                unoptimized: true,\n                                className: \"align-middle rounded-full\",\n                                src: post.featuredImage.url\n                            }, void 0, false, {\n                                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostWidget.js\",\n                                lineNumber: 30,\n                                columnNumber: 13\n                            }, _this1)\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostWidget.js\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, _this1),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex-grow ml-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-500 font-xs\",\n                                    children: moment__WEBPACK_IMPORTED_MODULE_3___default()(post.createdAt).format(\"MMM DD, YYYY\")\n                                }, void 0, false, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostWidget.js\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, _this1),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                    href: \"/blog/\".concat(post.slug),\n                                    className: \"text-md\",\n                                    children: post.title\n                                }, index, false, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostWidget.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 13\n                                }, _this1)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostWidget.js\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, _this1)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostWidget.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostWidget.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_s(PostWidget, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = PostWidget;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostWidget);\nvar _c;\n$RefreshReg$(_c, \"PostWidget\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RXaWRnZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUFtRDtBQUNwQjtBQUNIO0FBQ0M7QUFFaUI7QUFDZ0I7O0FBRTlELElBQU1TLFVBQVUsR0FBRyxnQkFBMEI7UUFBdkJDLFVBQVUsU0FBVkEsVUFBVSxFQUFFQyxJQUFJLFNBQUpBLElBQUk7OztJQUNwQyxJQUF3Q1YsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3Q1csWUFBWSxHQUFxQlgsR0FBWSxHQUFqQyxFQUFFWSxlQUFlLEdBQUlaLEdBQVksR0FBaEI7SUFFcENDLGdEQUFTLENBQUMsV0FBTTtRQUNkLElBQUlTLElBQUksRUFBRTtZQUNSSiwwREFBZSxDQUFDRyxVQUFVLEVBQUVDLElBQUksQ0FBQyxDQUFDRyxJQUFJLENBQUMsU0FBQ0MsTUFBTSxFQUFLO2dCQUNqREYsZUFBZSxDQUFDRSxNQUFNLENBQUMsQ0FBQzthQUN6QixDQUFDLENBQUM7U0FDSixNQUFNO1lBQ0xQLHlEQUFjLEVBQUUsQ0FBQ00sSUFBSSxDQUFDLFNBQUNDLE1BQU0sRUFBSztnQkFDaENGLGVBQWUsQ0FBQ0UsTUFBTSxDQUFDLENBQUM7YUFDekIsQ0FBQyxDQUFDO1NBQ0o7S0FDRixFQUFFO1FBQUNKLElBQUk7S0FBQyxDQUFDLENBQUM7SUFFWCxxQkFDRSw4REFBQ0ssS0FBRztRQUFDQyxTQUFTLEVBQUMsOENBQThDOzswQkFDM0QsOERBQUNDLElBQUU7Z0JBQUNELFNBQVMsRUFBQywwQ0FBMEM7MEJBQUVOLElBQUksR0FBRyxlQUFlLEdBQUcsY0FBYzs7Ozs7cUJBQU07WUFDdEdDLFlBQVksQ0FBQ08sR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBRUMsS0FBSztxQ0FDNUIsOERBQUNMLEtBQUc7b0JBQWFDLFNBQVMsRUFBQywrQkFBK0I7O3NDQUN4RCw4REFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGdCQUFnQjtzQ0FDN0IsNEVBQUNkLG1EQUFLO2dDQUNKbUIsTUFBTSxFQUFFaEIsc0RBQW1CO2dDQUMzQmlCLEdBQUcsRUFBRUgsSUFBSSxDQUFDSSxLQUFLO2dDQUNmQyxNQUFNLEVBQUMsTUFBTTtnQ0FDYkMsS0FBSyxFQUFDLE1BQU07Z0NBQ1pDLFdBQVc7Z0NBQ1hWLFNBQVMsRUFBQywyQkFBMkI7Z0NBQ3JDVyxHQUFHLEVBQUVSLElBQUksQ0FBQ1MsYUFBYSxDQUFDQyxHQUFHOzs7OztzQ0FDM0I7Ozs7O2tDQUNFO3NDQUNOLDhEQUFDZCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsZ0JBQWdCOzs4Q0FDN0IsOERBQUNjLEdBQUM7b0NBQUNkLFNBQVMsRUFBQyx1QkFBdUI7OENBQUViLDZDQUFNLENBQUNnQixJQUFJLENBQUNZLFNBQVMsQ0FBQyxDQUFDQyxNQUFNLENBQUMsY0FBYyxDQUFDOzs7OzswQ0FBSzs4Q0FDeEYsOERBQUM1QixrREFBSTtvQ0FBQzZCLElBQUksRUFBRSxRQUFPLENBQVksT0FBVmQsSUFBSSxDQUFDVCxJQUFJLENBQUU7b0NBQUVNLFNBQVMsRUFBQyxTQUFTOzhDQUFjRyxJQUFJLENBQUNJLEtBQUs7bUNBQWxCSCxLQUFLOzs7OzBDQUFxQjs7Ozs7O2tDQUNqRjs7bUJBZkVBLEtBQUs7Ozs7MEJBZ0JUO2FBQ1AsQ0FBQzs7Ozs7O2FBQ0UsQ0FDTjtDQUNIO0dBdkNLWixVQUFVO0FBQVZBLEtBQUFBLFVBQVU7QUF5Q2hCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0V2lkZ2V0LmpzPzUwMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBncnBhaENNU0ltYWdlTG9hZGVyIH0gZnJvbSAnLi4vdXRpbCc7XG5pbXBvcnQgeyBnZXRTaW1pbGFyUG9zdHMsIGdldFJlY2VudFBvc3RzIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG5jb25zdCBQb3N0V2lkZ2V0ID0gKHsgY2F0ZWdvcmllcywgc2x1ZyB9KSA9PiB7XG4gIGNvbnN0IFtyZWxhdGVkUG9zdHMsIHNldFJlbGF0ZWRQb3N0c10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2x1Zykge1xuICAgICAgZ2V0U2ltaWxhclBvc3RzKGNhdGVnb3JpZXMsIHNsdWcpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBzZXRSZWxhdGVkUG9zdHMocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZXRSZWNlbnRQb3N0cygpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBzZXRSZWxhdGVkUG9zdHMocmVzdWx0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3NsdWddKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQtbGcgcC04IHBiLTEyIG1iLThcIj5cbiAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXhsIG1iLTggZm9udC1zZW1pYm9sZCBib3JkZXItYiBwYi00XCI+e3NsdWcgPyAnUmVsYXRlZCBQb3N0cycgOiAnUmVjZW50IFBvc3RzJ308L2gzPlxuICAgICAge3JlbGF0ZWRQb3N0cy5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgdy1mdWxsIG1iLTRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTYgZmxleC1ub25lXCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgbG9hZGVyPXtncnBhaENNU0ltYWdlTG9hZGVyfVxuICAgICAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgIGhlaWdodD1cIjYwcHhcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjYwcHhcIlxuICAgICAgICAgICAgICB1bm9wdGltaXplZFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGlnbi1taWRkbGUgcm91bmRlZC1mdWxsXCJcbiAgICAgICAgICAgICAgc3JjPXtwb3N0LmZlYXR1cmVkSW1hZ2UudXJsfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBtbC00XCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNTAwIGZvbnQteHNcIj57bW9tZW50KHBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoJ01NTSBERCwgWVlZWScpfTwvcD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy8ke3Bvc3Quc2x1Z31gfSBjbGFzc05hbWU9XCJ0ZXh0LW1kXCIga2V5PXtpbmRleH0+e3Bvc3QudGl0bGV9PC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdFdpZGdldDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwibW9tZW50IiwiTGluayIsImdycGFoQ01TSW1hZ2VMb2FkZXIiLCJnZXRTaW1pbGFyUG9zdHMiLCJnZXRSZWNlbnRQb3N0cyIsIlBvc3RXaWRnZXQiLCJjYXRlZ29yaWVzIiwic2x1ZyIsInJlbGF0ZWRQb3N0cyIsInNldFJlbGF0ZWRQb3N0cyIsInRoZW4iLCJyZXN1bHQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsIm1hcCIsInBvc3QiLCJpbmRleCIsImxvYWRlciIsImFsdCIsInRpdGxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJ1bm9wdGltaXplZCIsInNyYyIsImZlYXR1cmVkSW1hZ2UiLCJ1cmwiLCJwIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostWidget.js\n"));

/***/ })

});