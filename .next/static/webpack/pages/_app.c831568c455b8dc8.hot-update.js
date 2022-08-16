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

/***/ "./components/FeaturedPostCard.js":
/*!****************************************!*\
  !*** ./components/FeaturedPostCard.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\nvar _this = undefined;\n\n\n\n\n\nvar FeaturedPostCard = function(param) {\n    var post = param.post;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"relative h-72\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72\",\n                style: {\n                    backgroundImage: \"url('\".concat(post.featuredImage.url, \"')\")\n                }\n            }, void 0, false, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/FeaturedPostCard.js\",\n                lineNumber: 8,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute rounded-lg bg-center bg-gradient-to-b opacity-50 from-gray-400 via-gray-700 to-black w-full h-72\"\n            }, void 0, false, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/FeaturedPostCard.js\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white px-2 py-1 border mb-4 text-shadow font-semibold text-xs\",\n                        children: moment__WEBPACK_IMPORTED_MODULE_2___default()(post.createdAt).format(\"MMM DD, YYYY\")\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/FeaturedPostCard.js\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white mb-4 mx-2 text-shadow font-semibold text-xl text-center\",\n                        children: post.title\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/FeaturedPostCard.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex items-center absolute bottom-5 mt-2 w-full justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                unoptimized: true,\n                                alt: post.author.name,\n                                height: \"30px\",\n                                width: \"30px\",\n                                className: \"align-middle drop-shadow-lg rounded-full\",\n                                src: post.author.photo.url\n                            }, void 0, false, {\n                                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/FeaturedPostCard.js\",\n                                lineNumber: 14,\n                                columnNumber: 11\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"inline align-middle text-xs text-white text-shadow ml-2 font-medium\",\n                                children: post.author.name\n                            }, void 0, false, {\n                                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/FeaturedPostCard.js\",\n                                lineNumber: 22,\n                                columnNumber: 11\n                            }, _this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/FeaturedPostCard.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/FeaturedPostCard.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                href: \"/blog/\".concat(post.slug),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"cursor-pointer absolute w-full h-full\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/FeaturedPostCard.js\",\n                    lineNumber: 25,\n                    columnNumber: 41\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/FeaturedPostCard.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/FeaturedPostCard.js\",\n        lineNumber: 7,\n        columnNumber: 3\n    }, _this);\n};\n_c = FeaturedPostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FeaturedPostCard);\nvar _c;\n$RefreshReg$(_c, \"FeaturedPostCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZlYXR1cmVkUG9zdENhcmQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBMEI7QUFDRTtBQUNHO0FBQ0Y7QUFFN0IsSUFBTUksZ0JBQWdCLEdBQUc7UUFBR0MsSUFBSSxTQUFKQSxJQUFJO3lCQUM5Qiw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsZUFBZTs7MEJBQzVCLDhEQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsd0ZBQXdGO2dCQUFDQyxLQUFLLEVBQUU7b0JBQUVDLGVBQWUsRUFBRSxPQUFNLENBQXlCLE1BQUUsQ0FBekJKLElBQUksQ0FBQ0ssYUFBYSxDQUFDQyxHQUFHLEVBQUMsSUFBRSxDQUFDO2lCQUFFOzs7OztxQkFBSTswQkFDMUssOERBQUNMLEtBQUc7Z0JBQUNDLFNBQVMsRUFBQywyR0FBMkc7Ozs7O3FCQUFHOzBCQUMzSCw4REFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLGlGQUFpRjs7a0NBQzlGLDhEQUFDSyxHQUFDO3dCQUFDTCxTQUFTLEVBQUMsb0VBQW9FO2tDQUFFTiw2Q0FBTSxDQUFDSSxJQUFJLENBQUNRLFNBQVMsQ0FBQyxDQUFDQyxNQUFNLENBQUMsY0FBYyxDQUFDOzs7Ozs2QkFBSztrQ0FDckksOERBQUNGLEdBQUM7d0JBQUNMLFNBQVMsRUFBQyxvRUFBb0U7a0NBQUVGLElBQUksQ0FBQ1UsS0FBSzs7Ozs7NkJBQUs7a0NBQ2xHLDhEQUFDVCxLQUFHO3dCQUFDQyxTQUFTLEVBQUMsZ0VBQWdFOzswQ0FDN0UsOERBQUNMLG1EQUFLO2dDQUNKYyxXQUFXO2dDQUNYQyxHQUFHLEVBQUVaLElBQUksQ0FBQ2EsTUFBTSxDQUFDQyxJQUFJO2dDQUNyQkMsTUFBTSxFQUFDLE1BQU07Z0NBQ2JDLEtBQUssRUFBQyxNQUFNO2dDQUNaZCxTQUFTLEVBQUMsMENBQTBDO2dDQUNwRGUsR0FBRyxFQUFFakIsSUFBSSxDQUFDYSxNQUFNLENBQUNLLEtBQUssQ0FBQ1osR0FBRzs7Ozs7cUNBQzFCOzBDQUNGLDhEQUFDQyxHQUFDO2dDQUFDTCxTQUFTLEVBQUMscUVBQXFFOzBDQUFFRixJQUFJLENBQUNhLE1BQU0sQ0FBQ0MsSUFBSTs7Ozs7cUNBQUs7Ozs7Ozs2QkFDckc7Ozs7OztxQkFDRjswQkFDTiw4REFBQ2hCLGtEQUFJO2dCQUFDcUIsSUFBSSxFQUFFLFFBQU8sQ0FBWSxPQUFWbkIsSUFBSSxDQUFDb0IsSUFBSSxDQUFFOzBCQUFFLDRFQUFDQyxNQUFJO29CQUFDbkIsU0FBUyxFQUFDLHVDQUF1Qzs7Ozs7eUJBQUc7Ozs7O3FCQUFPOzs7Ozs7YUFDakc7Q0FDUDtBQXJCS0gsS0FBQUEsZ0JBQWdCO0FBdUJ0QiwrREFBZUEsZ0JBQWdCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GZWF0dXJlZFBvc3RDYXJkLmpzPzNjNDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IEZlYXR1cmVkUG9zdENhcmQgPSAoeyBwb3N0IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBoLTcyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSByb3VuZGVkLWxnIGJnLWNlbnRlciBiZy1uby1yZXBlYXQgYmctY292ZXIgc2hhZG93LW1kIGlubGluZS1ibG9jayB3LWZ1bGwgaC03MlwiIHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgnJHtwb3N0LmZlYXR1cmVkSW1hZ2UudXJsfScpYCB9fSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcm91bmRlZC1sZyBiZy1jZW50ZXIgYmctZ3JhZGllbnQtdG8tYiBvcGFjaXR5LTUwIGZyb20tZ3JheS00MDAgdmlhLWdyYXktNzAwIHRvLWJsYWNrIHctZnVsbCBoLTcyXCIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCByb3VuZGVkLWxnIHAtNCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHB4LTIgcHktMSBib3JkZXIgbWItNCB0ZXh0LXNoYWRvdyBmb250LXNlbWlib2xkIHRleHQteHNcIj57bW9tZW50KHBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoJ01NTSBERCwgWVlZWScpfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi00IG14LTIgdGV4dC1zaGFkb3cgZm9udC1zZW1pYm9sZCB0ZXh0LXhsIHRleHQtY2VudGVyXCI+e3Bvc3QudGl0bGV9PC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGFic29sdXRlIGJvdHRvbS01IG10LTIgdy1mdWxsIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICB1bm9wdGltaXplZFxuICAgICAgICAgICAgYWx0PXtwb3N0LmF1dGhvci5uYW1lfVxuICAgICAgICAgICAgaGVpZ2h0PVwiMzBweFwiXG4gICAgICAgICAgICB3aWR0aD1cIjMwcHhcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlIGRyb3Atc2hhZG93LWxnIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICBzcmM9e3Bvc3QuYXV0aG9yLnBob3RvLnVybH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImlubGluZSBhbGlnbi1taWRkbGUgdGV4dC14cyB0ZXh0LXdoaXRlIHRleHQtc2hhZG93IG1sLTIgZm9udC1tZWRpdW1cIj57cG9zdC5hdXRob3IubmFtZX08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8TGluayBocmVmPXtgL2Jsb2cvJHtwb3N0LnNsdWd9YH0+PHNwYW4gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgYWJzb2x1dGUgdy1mdWxsIGgtZnVsbFwiIC8+PC9MaW5rPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmVkUG9zdENhcmQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwibW9tZW50IiwiSW1hZ2UiLCJMaW5rIiwiRmVhdHVyZWRQb3N0Q2FyZCIsInBvc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImZlYXR1cmVkSW1hZ2UiLCJ1cmwiLCJwIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwidGl0bGUiLCJ1bm9wdGltaXplZCIsImFsdCIsImF1dGhvciIsIm5hbWUiLCJoZWlnaHQiLCJ3aWR0aCIsInNyYyIsInBob3RvIiwiaHJlZiIsInNsdWciLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/FeaturedPostCard.js\n"));

/***/ })

});