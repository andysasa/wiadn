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

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar postCard = function(param) {\n    var post = param.post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white rounded-lg shadow-lg p-5 md:p-8 mb-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative overflow-hidden shadow-md pb-80 xl:pb-96 mb-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: post.featuredImage.url,\n                    alt: post.title,\n                    layout: \"fill\",\n                    width: \"890px\",\n                    height: \"384px\",\n                    className: \"object-top absolute h-80 xl:h-96 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n                    lineNumber: 8,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"transition duration-700 text-center mb-8 cursor-pointer hover:text-indigo-600 text-3xl font-semibold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/blog/\".concat(post.slug),\n                    children: post.title\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n                    lineNumber: 18,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n                lineNumber: 17,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"block lg:flex text-center items-center justify-center mb-8 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                alt: post.author.name,\n                                height: \"75px\",\n                                width: \"75px\",\n                                className: \"align-middle rounded-full\",\n                                src: post.author.photo.url\n                            }, void 0, false, {\n                                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n                                lineNumber: 24,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"inline align-middle text-gray-700 ml-4 text-lg\",\n                                children: post.author.name\n                            }, void 0, false, {\n                                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n                                lineNumber: 31,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"font-medium text-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                xmlns: \"http://www.w3.org/2000/svg\",\n                                className: \"h-6 w-6 inline mr-2 text-pink-500\",\n                                fill: \"none\",\n                                viewBox: \"0 0 24 24\",\n                                stroke: \"currentColor\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                    strokeLinecap: \"round\",\n                                    strokeLinejoin: \"round\",\n                                    strokeWidth: \"2\",\n                                    d: \"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n                                    lineNumber: 35,\n                                    columnNumber: 21\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n                                lineNumber: 34,\n                                columnNumber: 17\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: moment__WEBPACK_IMPORTED_MODULE_1___default()(post.createdAt).format(\"MMM DD, YYYY\")\n                            }, void 0, false, {\n                                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n                                lineNumber: 37,\n                                columnNumber: 17\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"text-center text-gray-700 font-normal px-2 lg:px-4 mb-8\",\n                children: post.excerpt\n            }, void 0, false, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/blog/\".concat(post.slug),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"transition text-lg duration-300 ease-in transform hover:-translate-y-1 hover:bg-turquoise hover:text-gray-800 inline-block bg-indigo-600 rounded-full font-medium text-white px-8 py-3 cursor-pointer\",\n                        children: \"Continue Reading\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n                        lineNumber: 47,\n                        columnNumber: 13\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n                    lineNumber: 46,\n                    columnNumber: 13\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n                lineNumber: 45,\n                columnNumber: 9\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostCard.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, _this);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (postCard);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBNEI7QUFDQztBQUU3QixJQUFNRSxRQUFRLEdBQUcsZ0JBQWU7UUFBWEMsSUFBSSxTQUFKQSxJQUFJO0lBQ3ZCLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQywrQ0FBZ0Q7OzBCQUMzRCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHdEQUF3RDswQkFDbkUsNEVBQUNDLEtBQUc7b0JBQ0FDLEdBQUcsRUFBRUosSUFBSSxDQUFDSyxhQUFhLENBQUNDLEdBQUc7b0JBQzNCQyxHQUFHLEVBQUVQLElBQUksQ0FBQ1EsS0FBSztvQkFDZkMsTUFBTSxFQUFDLE1BQU07b0JBQ2JDLEtBQUssRUFBQyxPQUFPO29CQUNiQyxNQUFNLEVBQUMsT0FBTztvQkFDZFQsU0FBUyxFQUFDLDJGQUEyRjs7Ozs7eUJBQ3ZHOzs7OztxQkFDQTswQkFDTiw4REFBQ1UsSUFBRTtnQkFBQ1YsU0FBUyxFQUFDLHNHQUFzRzswQkFDaEgsNEVBQUNKLGtEQUFJO29CQUFDZSxJQUFJLEVBQUUsUUFBTyxDQUFZLE9BQVZiLElBQUksQ0FBQ2MsSUFBSSxDQUFFOzhCQUMzQmQsSUFBSSxDQUFDUSxLQUFLOzs7Ozt5QkFDUjs7Ozs7cUJBQ047MEJBQ0wsOERBQUNQLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxtRUFBbUU7O2tDQUM5RSw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLHFFQUFxRTs7MENBQ2hGLDhEQUFDQyxLQUFHO2dDQUNBSSxHQUFHLEVBQUVQLElBQUksQ0FBQ2UsTUFBTSxDQUFDQyxJQUFJO2dDQUNyQkwsTUFBTSxFQUFDLE1BQU07Z0NBQ2JELEtBQUssRUFBQyxNQUFNO2dDQUNaUixTQUFTLEVBQUMsMkJBQTJCO2dDQUNyQ0UsR0FBRyxFQUFFSixJQUFJLENBQUNlLE1BQU0sQ0FBQ0UsS0FBSyxDQUFDWCxHQUFHOzs7OztxQ0FDNUI7MENBQ0YsOERBQUNZLEdBQUM7Z0NBQUNoQixTQUFTLEVBQUMsZ0RBQWdEOzBDQUFFRixJQUFJLENBQUNlLE1BQU0sQ0FBQ0MsSUFBSTs7Ozs7cUNBQUs7Ozs7Ozs2QkFDbEY7a0NBQ04sOERBQUNmLEtBQUc7d0JBQUNDLFNBQVMsRUFBQywyQkFBMkI7OzBDQUN0Qyw4REFBQ2lCLEtBQUc7Z0NBQUNDLEtBQUssRUFBQyw0QkFBNEI7Z0NBQUNsQixTQUFTLEVBQUMsbUNBQW1DO2dDQUFDbUIsSUFBSSxFQUFDLE1BQU07Z0NBQUNDLE9BQU8sRUFBQyxXQUFXO2dDQUFDQyxNQUFNLEVBQUMsY0FBYzswQ0FDdkksNEVBQUNDLE1BQUk7b0NBQUNDLGFBQWEsRUFBQyxPQUFPO29DQUFDQyxjQUFjLEVBQUMsT0FBTztvQ0FBQ0MsV0FBVyxFQUFDLEdBQUc7b0NBQUNDLENBQUMsRUFBQyx3RkFBd0Y7Ozs7O3lDQUFHOzs7OztxQ0FDOUo7MENBQ04sOERBQUNDLE1BQUk7MENBQ0FoQyw2Q0FBTSxDQUFDRyxJQUFJLENBQUM4QixTQUFTLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLGNBQWMsQ0FBQzs7Ozs7cUNBQzNDOzs7Ozs7NkJBQ0w7Ozs7OztxQkFDSjswQkFDTiw4REFBQ2IsR0FBQztnQkFBQ2hCLFNBQVMsRUFBQyx5REFBMEQ7MEJBQ2xFRixJQUFJLENBQUNnQyxPQUFPOzs7OztxQkFDYjswQkFDSiw4REFBQy9CLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQyxhQUFhOzBCQUN4Qiw0RUFBQ0osa0RBQUk7b0JBQUNlLElBQUksRUFBRSxRQUFPLENBQVksT0FBVmIsSUFBSSxDQUFDYyxJQUFJLENBQUU7OEJBQ2hDLDRFQUFDZSxNQUFJO3dCQUFDM0IsU0FBUyxFQUFDLHVNQUF1TTtrQ0FBQyxrQkFBZ0I7Ozs7OzZCQUFPOzs7Ozt5QkFDeE87Ozs7O3FCQUNMOzs7Ozs7YUFFSixDQUNQO0NBQ0Y7QUFFRCwrREFBZUgsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1Bvc3RDYXJkLmpzP2ExOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgcG9zdENhcmQgPSAoIHsgcG9zdCB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIHAtNSBtZDpwLTggIG1iLTgnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIHNoYWRvdy1tZCBwYi04MCB4bDpwYi05NiBtYi02Jz5cbiAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgc3JjPXtwb3N0LmZlYXR1cmVkSW1hZ2UudXJsfSBcbiAgICAgICAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgICAgICAgbGF5b3V0PVwiZmlsbFwiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCI4OTBweFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzg0cHhcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm9iamVjdC10b3AgYWJzb2x1dGUgaC04MCB4bDpoLTk2IHctZnVsbCBvYmplY3QtY292ZXIgc2hhZG93LWxnIHJvdW5kZWQtdC1sZyBsZzpyb3VuZGVkLWxnXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSd0cmFuc2l0aW9uIGR1cmF0aW9uLTcwMCB0ZXh0LWNlbnRlciBtYi04IGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtaW5kaWdvLTYwMCB0ZXh0LTN4bCBmb250LXNlbWlib2xkJz5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYmxvZy8ke3Bvc3Quc2x1Z31gfT5cbiAgICAgICAgICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9oMT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayBsZzpmbGV4IHRleHQtY2VudGVyIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBtYi04IHctZnVsbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1iLTQgbGc6bWItMCB3LWZ1bGwgbGc6dy1hdXRvIG1yLTgnPlxuICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC5hdXRob3IubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNzVweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNzVweFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuYXV0aG9yLnBob3RvLnVybH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naW5saW5lIGFsaWduLW1pZGRsZSB0ZXh0LWdyYXktNzAwIG1sLTQgdGV4dC1sZyc+e3Bvc3QuYXV0aG9yLm5hbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCc+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC02IHctNiBpbmxpbmUgbXItMiB0ZXh0LXBpbmstNTAwXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTggN1YzbTggNFYzbS05IDhoMTBNNSAyMWgxNGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7bW9tZW50KHBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoJ01NTSBERCwgWVlZWScpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlciAgdGV4dC1ncmF5LTcwMCBmb250LW5vcm1hbCBweC0yIGxnOnB4LTQgbWItOCc+XG4gICAgICAgICAgICB7cG9zdC5leGNlcnB0fVxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL2Jsb2cvJHtwb3N0LnNsdWd9YH0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RyYW5zaXRpb24gdGV4dC1sZyBkdXJhdGlvbi0zMDAgZWFzZS1pbiB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTEgaG92ZXI6YmctdHVycXVvaXNlIGhvdmVyOnRleHQtZ3JheS04MDAgaW5saW5lLWJsb2NrIGJnLWluZGlnby02MDAgcm91bmRlZC1mdWxsIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgcHgtOCBweS0zIGN1cnNvci1wb2ludGVyJz5Db250aW51ZSBSZWFkaW5nPC9zcGFuPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgcG9zdENhcmQiXSwibmFtZXMiOlsibW9tZW50IiwiTGluayIsInBvc3RDYXJkIiwicG9zdCIsImRpdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImZlYXR1cmVkSW1hZ2UiLCJ1cmwiLCJhbHQiLCJ0aXRsZSIsImxheW91dCIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJocmVmIiwic2x1ZyIsImF1dGhvciIsIm5hbWUiLCJwaG90byIsInAiLCJzdmciLCJ4bWxucyIsImZpbGwiLCJ2aWV3Qm94Iiwic3Ryb2tlIiwicGF0aCIsInN0cm9rZUxpbmVjYXAiLCJzdHJva2VMaW5lam9pbiIsInN0cm9rZVdpZHRoIiwiZCIsInNwYW4iLCJjcmVhdGVkQXQiLCJmb3JtYXQiLCJleGNlcnB0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/PostCard.js\n"));

/***/ })

});