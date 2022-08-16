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

/***/ "./components/PostDetail.js":
/*!**********************************!*\
  !*** ./components/PostDetail.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar PostDetail = function(param) {\n    var post = param.post;\n    var _this1 = _this;\n    var getContentFragment = function(index, text, obj, type) {\n        var modifiedText = text;\n        if (obj) {\n            if (obj.bold) {\n                modifiedText = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: text\n                }, index, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 10,\n                    columnNumber: 25\n                }, _this1);\n            }\n            if (obj.italic) {\n                modifiedText = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n                    children: text\n                }, index, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 14,\n                    columnNumber: 25\n                }, _this1);\n            }\n            if (obj.underline) {\n                modifiedText = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"u\", {\n                    children: text\n                }, index, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 18,\n                    columnNumber: 25\n                }, _this1);\n            }\n        }\n        switch(type){\n            case \"heading-three\":\n                var _this = _this1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-xl font-semibold mb-4\",\n                    children: modifiedText.map(function(item, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                            children: item\n                        }, i, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                            lineNumber: 25,\n                            columnNumber: 102\n                        }, _this);\n                    })\n                }, index, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 25,\n                    columnNumber: 16\n                }, _this1);\n            case \"paragraph\":\n                var _this2 = _this1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mb-8\",\n                    children: modifiedText.map(function(item, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                            children: item\n                        }, i, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                            lineNumber: 27,\n                            columnNumber: 79\n                        }, _this2);\n                    })\n                }, index, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 27,\n                    columnNumber: 16\n                }, _this1);\n            case \"heading-four\":\n                var _this3 = _this1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"text-md font-semibold mb-4\",\n                    children: modifiedText.map(function(item, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                            children: item\n                        }, i, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                            lineNumber: 29,\n                            columnNumber: 102\n                        }, _this3);\n                    })\n                }, index, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 29,\n                    columnNumber: 16\n                }, _this1);\n            case \"image\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    alt: obj.title,\n                    height: obj.height,\n                    width: obj.width,\n                    src: obj.src\n                }, index, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, _this1);\n            case \"code-block\":\n                var iframeCode = obj.children[0].text;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex justify-center\",\n                    dangerouslySetInnerHTML: {\n                        __html: iframeCode\n                    }\n                }, index, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 42,\n                    columnNumber: 20\n                }, _this1);\n            default:\n                return modifiedText;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white shadow-lg rounded-lg p-5 md:p-8 pb-12 mb-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative overflow-hidden mb-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: post.featuredImage.url,\n                    alt: post.title,\n                    className: \"object-top h-full w-full rounded-t-lg\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-4 lg:px-0 text-sm lg:text-base\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center my-6 w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center lg:mb-0 w-full lg:w-auto mr-8\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            alt: post.author.name,\n                                            height: \"60px\",\n                                            width: \"60px\",\n                                            className: \"align-middle rounded-full\",\n                                            src: post.author.photo.url\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"inline align-middle text-gray-700 ml-4\",\n                                            children: post.author.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"font-medium text-gray-700\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            className: \"h-6 w-6 inline mr-2 text-pink-500\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            stroke: \"currentColor\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                strokeWidth: \"2\",\n                                                d: \"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 21\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: moment__WEBPACK_IMPORTED_MODULE_2___default()(post.createdAt).format(\"MMM DD, YYYY\")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"mb-8 text-2xl lg:text-3xl font-semibold\",\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this),\n                        post.content.raw.children.map(function(typeObj, index) {\n                            var children = typeObj.children.map(function(item, itemindex) {\n                                return getContentFragment(itemindex, item.text, item);\n                            });\n                            return getContentFragment(index, children, typeObj, typeObj.type);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, _this);\n};\n_c = PostDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostDetail);\nvar _c;\n$RefreshReg$(_c, \"PostDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBTSxDQUFDRSxJQUFJLENBQUNnRCxTQUFTLENBQUMsQ0FBQ0MsTUFBTSxDQUFDLGNBQWMsQ0FBQzs7Ozs7aURBQzNDOzs7Ozs7eUNBQ0w7Ozs7OztpQ0FDRjtzQ0FDTiw4REFBQ0MsSUFBRTs0QkFBQ3BDLFNBQVMsRUFBQyx5Q0FBeUM7c0NBQ3BEZCxJQUFJLENBQUN1QixLQUFLOzs7OztpQ0FDUjt3QkFDSnZCLElBQUksQ0FBQ21ELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDeEIsUUFBUSxDQUFDYixHQUFHLENBQUMsU0FBQ3NDLE9BQU8sRUFBRW5ELEtBQUssRUFBSzs0QkFDakQsSUFBTTBCLFFBQVEsR0FBR3lCLE9BQU8sQ0FBQ3pCLFFBQVEsQ0FBQ2IsR0FBRyxDQUFDLFNBQUNDLElBQUksRUFBR3NDLFNBQVM7dUNBQ3ZEckQsa0JBQWtCLENBQUNxRCxTQUFTLEVBQUV0QyxJQUFJLENBQUNiLElBQUksRUFBRWEsSUFBSSxDQUFDOzZCQUFBLENBQUM7NEJBQy9DLE9BQU9mLGtCQUFrQixDQUFDQyxLQUFLLEVBQUUwQixRQUFRLEVBQUV5QixPQUFPLEVBQUVBLE9BQU8sQ0FBQ2hELElBQUksQ0FBQyxDQUFDO3lCQUNuRSxDQUFDOzs7Ozs7eUJBQ0U7Ozs7OztpQkFDRjs7Ozs7YUFDRixDQUNQO0NBQ0Y7QUFwRktOLEtBQUFBLFVBQVU7QUFzRmhCLCtEQUFlQSxVQUFVLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0RGV0YWlsLmpzPzllOGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcblxuXG5jb25zdCBQb3N0RGV0YWlsID0gKHsgcG9zdCB9KSA9PiB7XG4gIGNvbnN0IGdldENvbnRlbnRGcmFnbWVudCA9IChpbmRleCwgdGV4dCwgb2JqLCB0eXBlKSA9PiB7XG4gICAgbGV0IG1vZGlmaWVkVGV4dCA9IHRleHQ7XG4gICAgaWYgKG9iaikge1xuICAgICAgaWYgKG9iai5ib2xkKSB7XG4gICAgICAgIG1vZGlmaWVkVGV4dCA9ICg8YiBrZXk9e2luZGV4fT57dGV4dH08L2I+KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9iai5pdGFsaWMpIHtcbiAgICAgICAgbW9kaWZpZWRUZXh0ID0gKDxlbSBrZXk9e2luZGV4fT57dGV4dH08L2VtPik7XG4gICAgICB9XG5cbiAgICAgIGlmIChvYmoudW5kZXJsaW5lKSB7XG4gICAgICAgIG1vZGlmaWVkVGV4dCA9ICg8dSBrZXk9e2luZGV4fT57dGV4dH08L3U+KTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSAnaGVhZGluZy10aHJlZSc6XG4gICAgICAgIHJldHVybiA8aDMga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTRcIj57bW9kaWZpZWRUZXh0Lm1hcCgoaXRlbSwgaSkgPT4gPFJlYWN0LkZyYWdtZW50IGtleT17aX0+e2l0ZW19PC9SZWFjdC5GcmFnbWVudD4pfTwvaDM+O1xuICAgICAgY2FzZSAncGFyYWdyYXBoJzpcbiAgICAgICAgcmV0dXJuIDxwIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cIm1iLThcIj57bW9kaWZpZWRUZXh0Lm1hcCgoaXRlbSwgaSkgPT4gPFJlYWN0LkZyYWdtZW50IGtleT17aX0+e2l0ZW19PC9SZWFjdC5GcmFnbWVudD4pfTwvcD47XG4gICAgICBjYXNlICdoZWFkaW5nLWZvdXInOlxuICAgICAgICByZXR1cm4gPGg0IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRleHQtbWQgZm9udC1zZW1pYm9sZCBtYi00XCI+e21vZGlmaWVkVGV4dC5tYXAoKGl0ZW0sIGkpID0+IDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PntpdGVtfTwvUmVhY3QuRnJhZ21lbnQ+KX08L2g0PjtcbiAgICAgIGNhc2UgJ2ltYWdlJzpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgYWx0PXtvYmoudGl0bGV9XG4gICAgICAgICAgICBoZWlnaHQ9e29iai5oZWlnaHR9XG4gICAgICAgICAgICB3aWR0aD17b2JqLndpZHRofVxuICAgICAgICAgICAgc3JjPXtvYmouc3JjfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICAgIGNhc2UgJ2NvZGUtYmxvY2snOlxuICAgICAgICAgICAgbGV0IGlmcmFtZUNvZGUgPSBvYmouY2hpbGRyZW5bMF0udGV4dDtcbiAgICAgICAgICAgIHJldHVybiA8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IGlmcmFtZUNvZGV9fT48L3NwYW4+XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbW9kaWZpZWRUZXh0O1xuICAgIH1cbiAgfTtcbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J2JnLXdoaXRlIHNoYWRvdy1sZyByb3VuZGVkLWxnIHAtNSBtZDpwLTggcGItMTIgbWItOCc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVsYXRpdmUgb3ZlcmZsb3ctaGlkZGVuIG1iLTYnPlxuICAgICAgICA8aW1nIFxuICAgICAgICAgIHNyYz17cG9zdC5mZWF0dXJlZEltYWdlLnVybH1cbiAgICAgICAgICBhbHQ9e3Bvc3QudGl0bGV9XG4gICAgICAgICAgY2xhc3NOYW1lPSdvYmplY3QtdG9wIGgtZnVsbCB3LWZ1bGwgcm91bmRlZC10LWxnJ1xuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHgtNCBsZzpweC0wIHRleHQtc20gbGc6dGV4dC1iYXNlJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgbXktNiB3LWZ1bGwnPiBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGl0ZW1zLWNlbnRlciBsZzptYi0wIHctZnVsbCBsZzp3LWF1dG8gbXItOCc+XG4gICAgICAgICAgICAgICAgPGltZyBcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtwb3N0LmF1dGhvci5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI2MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI2MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlIHJvdW5kZWQtZnVsbFwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cG9zdC5hdXRob3IucGhvdG8udXJsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdpbmxpbmUgYWxpZ24tbWlkZGxlIHRleHQtZ3JheS03MDAgbWwtNCc+e3Bvc3QuYXV0aG9yLm5hbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCc+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC02IHctNiBpbmxpbmUgbXItMiB0ZXh0LXBpbmstNTAwXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTggN1YzbTggNFYzbS05IDhoMTBNNSAyMWgxNGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7bW9tZW50KHBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoJ01NTSBERCwgWVlZWScpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J21iLTggdGV4dC0yeGwgbGc6dGV4dC0zeGwgZm9udC1zZW1pYm9sZCc+XG4gICAgICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIHtwb3N0LmNvbnRlbnQucmF3LmNoaWxkcmVuLm1hcCgodHlwZU9iaiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdHlwZU9iai5jaGlsZHJlbi5tYXAoKGl0ZW0sICBpdGVtaW5kZXgpID0+XG4gICAgICAgICAgICBnZXRDb250ZW50RnJhZ21lbnQoaXRlbWluZGV4LCBpdGVtLnRleHQsIGl0ZW0pKTtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb250ZW50RnJhZ21lbnQoaW5kZXgsIGNoaWxkcmVuLCB0eXBlT2JqLCB0eXBlT2JqLnR5cGUpO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3REZXRhaWw7Il0sIm5hbWVzIjpbIlJlYWN0IiwibW9tZW50IiwiUG9zdERldGFpbCIsInBvc3QiLCJnZXRDb250ZW50RnJhZ21lbnQiLCJpbmRleCIsInRleHQiLCJvYmoiLCJ0eXBlIiwibW9kaWZpZWRUZXh0IiwiYm9sZCIsImIiLCJpdGFsaWMiLCJlbSIsInVuZGVybGluZSIsInUiLCJoMyIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpIiwiRnJhZ21lbnQiLCJwIiwiaDQiLCJpbWciLCJhbHQiLCJ0aXRsZSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwiaWZyYW1lQ29kZSIsImNoaWxkcmVuIiwic3BhbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZGl2IiwiZmVhdHVyZWRJbWFnZSIsInVybCIsImF1dGhvciIsIm5hbWUiLCJwaG90byIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwiaDEiLCJjb250ZW50IiwicmF3IiwidHlwZU9iaiIsIml0ZW1pbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostDetail.js\n"));

/***/ })

});