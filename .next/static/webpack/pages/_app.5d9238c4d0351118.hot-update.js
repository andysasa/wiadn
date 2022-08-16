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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar PostDetail = function(param) {\n    var post = param.post;\n    var _this1 = _this;\n    var getContentFragment = function(index, text, obj, type) {\n        var modifiedText = text;\n        if (obj) {\n            if (obj.bold) {\n                modifiedText = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                    children: text\n                }, index, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 10,\n                    columnNumber: 25\n                }, _this1);\n            }\n            if (obj.italic) {\n                modifiedText = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"em\", {\n                    children: text\n                }, index, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 14,\n                    columnNumber: 25\n                }, _this1);\n            }\n            if (obj.underline) {\n                modifiedText = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"u\", {\n                    children: text\n                }, index, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 18,\n                    columnNumber: 25\n                }, _this1);\n            }\n        }\n        switch(type){\n            case \"heading-three\":\n                var _this = _this1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"text-xl font-semibold mb-4\",\n                    children: modifiedText.map(function(item, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                            children: item\n                        }, i, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                            lineNumber: 25,\n                            columnNumber: 102\n                        }, _this);\n                    })\n                }, index, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 25,\n                    columnNumber: 16\n                }, _this1);\n            case \"paragraph\":\n                var _this2 = _this1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"mb-8\",\n                    children: modifiedText.map(function(item, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                            children: item\n                        }, i, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                            lineNumber: 27,\n                            columnNumber: 79\n                        }, _this2);\n                    })\n                }, index, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 27,\n                    columnNumber: 16\n                }, _this1);\n            case \"heading-four\":\n                var _this3 = _this1;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                    className: \"text-md font-semibold mb-4\",\n                    children: modifiedText.map(function(item, i) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                            children: item\n                        }, i, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                            lineNumber: 29,\n                            columnNumber: 102\n                        }, _this3);\n                    })\n                }, index, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 29,\n                    columnNumber: 16\n                }, _this1);\n            case \"image\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    alt: obj.title,\n                    height: obj.height,\n                    width: obj.width,\n                    src: obj.src\n                }, index, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 32,\n                    columnNumber: 11\n                }, _this1);\n            case \"code-block\":\n                var iframeCode = obj.children[0].text;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"flex justify-center\",\n                    dangerouslySetInnerHTML: {\n                        __html: iframeCode\n                    }\n                }, index, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 42,\n                    columnNumber: 20\n                }, _this1);\n            default:\n                return modifiedText;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white shadow-lg rounded-lg p-5 md:p-8 pb-12 mb-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative overflow-hidden mb-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: post.featuredImage.url,\n                    alt: post.title,\n                    className: \"object-top h-full w-full rounded-t-lg\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"px-4 lg:px-0\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center my-4 w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex items-center mb-4 lg:mb-0 w-full lg:w-auto\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            alt: post.author.name,\n                                            height: \"60px\",\n                                            width: \"60px\",\n                                            className: \"align-middle rounded-full\",\n                                            src: post.author.photo.url\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"inline align-middle text-gray-700 ml-4 text-lg\",\n                                            children: post.author.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                                            lineNumber: 66,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"font-medium text-gray-700\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                            xmlns: \"http://www.w3.org/2000/svg\",\n                                            className: \"h-6 w-6 inline mr-2 text-pink-500\",\n                                            fill: \"none\",\n                                            viewBox: \"0 0 24 24\",\n                                            stroke: \"currentColor\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                                strokeLinecap: \"round\",\n                                                strokeLinejoin: \"round\",\n                                                strokeWidth: \"2\",\n                                                d: \"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 21\n                                            }, _this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: moment__WEBPACK_IMPORTED_MODULE_2___default()(post.createdAt).format(\"MMM DD, YYYY\")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"mb-8 text-3xl font-semibold\",\n                            children: post.title\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, _this),\n                        post.content.raw.children.map(function(typeObj, index) {\n                            var children = typeObj.children.map(function(item, itemindex) {\n                                return getContentFragment(itemindex, item.text, item);\n                            });\n                            return getContentFragment(index, children, typeObj, typeObj.type);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/PostDetail.js\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, _this);\n};\n_c = PostDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostDetail);\nvar _c;\n$RefreshReg$(_c, \"PostDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sQ0FBQ0UsSUFBSSxDQUFDZ0QsU0FBUyxDQUFDLENBQUNDLE1BQU0sQ0FBQyxjQUFjLENBQUM7Ozs7O2lEQUMzQzs7Ozs7O3lDQUNMOzs7Ozs7aUNBQ0Y7c0NBQ04sOERBQUNDLElBQUU7NEJBQUNwQyxTQUFTLEVBQUMsNkJBQTZCO3NDQUN4Q2QsSUFBSSxDQUFDdUIsS0FBSzs7Ozs7aUNBQ1I7d0JBQ0p2QixJQUFJLENBQUNtRCxPQUFPLENBQUNDLEdBQUcsQ0FBQ3hCLFFBQVEsQ0FBQ2IsR0FBRyxDQUFDLFNBQUNzQyxPQUFPLEVBQUVuRCxLQUFLLEVBQUs7NEJBQ2pELElBQU0wQixRQUFRLEdBQUd5QixPQUFPLENBQUN6QixRQUFRLENBQUNiLEdBQUcsQ0FBQyxTQUFDQyxJQUFJLEVBQUdzQyxTQUFTO3VDQUN2RHJELGtCQUFrQixDQUFDcUQsU0FBUyxFQUFFdEMsSUFBSSxDQUFDYixJQUFJLEVBQUVhLElBQUksQ0FBQzs2QkFBQSxDQUFDOzRCQUMvQyxPQUFPZixrQkFBa0IsQ0FBQ0MsS0FBSyxFQUFFMEIsUUFBUSxFQUFFeUIsT0FBTyxFQUFFQSxPQUFPLENBQUNoRCxJQUFJLENBQUMsQ0FBQzt5QkFDbkUsQ0FBQzs7Ozs7O3lCQUNFOzs7Ozs7aUJBQ0Y7Ozs7O2FBQ0YsQ0FDUDtDQUNGO0FBcEZLTixLQUFBQSxVQUFVO0FBc0ZoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdERldGFpbC5qcz85ZThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cblxuY29uc3QgUG9zdERldGFpbCA9ICh7IHBvc3QgfSkgPT4ge1xuICBjb25zdCBnZXRDb250ZW50RnJhZ21lbnQgPSAoaW5kZXgsIHRleHQsIG9iaiwgdHlwZSkgPT4ge1xuICAgIGxldCBtb2RpZmllZFRleHQgPSB0ZXh0O1xuICAgIGlmIChvYmopIHtcbiAgICAgIGlmIChvYmouYm9sZCkge1xuICAgICAgICBtb2RpZmllZFRleHQgPSAoPGIga2V5PXtpbmRleH0+e3RleHR9PC9iPik7XG4gICAgICB9XG5cbiAgICAgIGlmIChvYmouaXRhbGljKSB7XG4gICAgICAgIG1vZGlmaWVkVGV4dCA9ICg8ZW0ga2V5PXtpbmRleH0+e3RleHR9PC9lbT4pO1xuICAgICAgfVxuXG4gICAgICBpZiAob2JqLnVuZGVybGluZSkge1xuICAgICAgICBtb2RpZmllZFRleHQgPSAoPHUga2V5PXtpbmRleH0+e3RleHR9PC91Pik7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgJ2hlYWRpbmctdGhyZWUnOlxuICAgICAgICByZXR1cm4gPGgzIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00XCI+e21vZGlmaWVkVGV4dC5tYXAoKGl0ZW0sIGkpID0+IDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PntpdGVtfTwvUmVhY3QuRnJhZ21lbnQ+KX08L2gzPjtcbiAgICAgIGNhc2UgJ3BhcmFncmFwaCc6XG4gICAgICAgIHJldHVybiA8cCBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJtYi04XCI+e21vZGlmaWVkVGV4dC5tYXAoKGl0ZW0sIGkpID0+IDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PntpdGVtfTwvUmVhY3QuRnJhZ21lbnQ+KX08L3A+O1xuICAgICAgY2FzZSAnaGVhZGluZy1mb3VyJzpcbiAgICAgICAgcmV0dXJuIDxoNCBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJ0ZXh0LW1kIGZvbnQtc2VtaWJvbGQgbWItNFwiPnttb2RpZmllZFRleHQubWFwKChpdGVtLCBpKSA9PiA8UmVhY3QuRnJhZ21lbnQga2V5PXtpfT57aXRlbX08L1JlYWN0LkZyYWdtZW50Pil9PC9oND47XG4gICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgIGFsdD17b2JqLnRpdGxlfVxuICAgICAgICAgICAgaGVpZ2h0PXtvYmouaGVpZ2h0fVxuICAgICAgICAgICAgd2lkdGg9e29iai53aWR0aH1cbiAgICAgICAgICAgIHNyYz17b2JqLnNyY31cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgICBjYXNlICdjb2RlLWJsb2NrJzpcbiAgICAgICAgICAgIGxldCBpZnJhbWVDb2RlID0gb2JqLmNoaWxkcmVuWzBdLnRleHQ7XG4gICAgICAgICAgICByZXR1cm4gPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlclwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7X19odG1sOiBpZnJhbWVDb2RlfX0+PC9zcGFuPlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIG1vZGlmaWVkVGV4dDtcbiAgICB9XG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdiZy13aGl0ZSBzaGFkb3ctbGcgcm91bmRlZC1sZyBwLTUgbWQ6cC04IHBiLTEyIG1iLTgnPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3JlbGF0aXZlIG92ZXJmbG93LWhpZGRlbiBtYi02Jz5cbiAgICAgICAgPGltZyBcbiAgICAgICAgICBzcmM9e3Bvc3QuZmVhdHVyZWRJbWFnZS51cmx9XG4gICAgICAgICAgYWx0PXtwb3N0LnRpdGxlfVxuICAgICAgICAgIGNsYXNzTmFtZT0nb2JqZWN0LXRvcCBoLWZ1bGwgdy1mdWxsIHJvdW5kZWQtdC1sZydcbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3B4LTQgbGc6cHgtMCc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaXRlbXMtY2VudGVyIG15LTQgdy1mdWxsJz4gXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgbWItNCBsZzptYi0wIHctZnVsbCBsZzp3LWF1dG8nPlxuICAgICAgICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICAgICAgICAgIGFsdD17cG9zdC5hdXRob3IubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNjBweFwiXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNjBweFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFsaWduLW1pZGRsZSByb3VuZGVkLWZ1bGxcIlxuICAgICAgICAgICAgICAgICAgICBzcmM9e3Bvc3QuYXV0aG9yLnBob3RvLnVybH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0naW5saW5lIGFsaWduLW1pZGRsZSB0ZXh0LWdyYXktNzAwIG1sLTQgdGV4dC1sZyc+e3Bvc3QuYXV0aG9yLm5hbWV9PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCc+XG4gICAgICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3NOYW1lPVwiaC02IHctNiBpbmxpbmUgbXItMiB0ZXh0LXBpbmstNTAwXCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIiBzdHJva2VXaWR0aD1cIjJcIiBkPVwiTTggN1YzbTggNFYzbS05IDhoMTBNNSAyMWgxNGEyIDIgMCAwMDItMlY3YTIgMiAwIDAwLTItMkg1YTIgMiAwIDAwLTIgMnYxMmEyIDIgMCAwMDIgMnpcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7bW9tZW50KHBvc3QuY3JlYXRlZEF0KS5mb3JtYXQoJ01NTSBERCwgWVlZWScpfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9J21iLTggdGV4dC0zeGwgZm9udC1zZW1pYm9sZCc+XG4gICAgICAgICAgICB7cG9zdC50aXRsZX1cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIHtwb3N0LmNvbnRlbnQucmF3LmNoaWxkcmVuLm1hcCgodHlwZU9iaiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdHlwZU9iai5jaGlsZHJlbi5tYXAoKGl0ZW0sICBpdGVtaW5kZXgpID0+XG4gICAgICAgICAgICBnZXRDb250ZW50RnJhZ21lbnQoaXRlbWluZGV4LCBpdGVtLnRleHQsIGl0ZW0pKTtcbiAgICAgICAgICAgIHJldHVybiBnZXRDb250ZW50RnJhZ21lbnQoaW5kZXgsIGNoaWxkcmVuLCB0eXBlT2JqLCB0eXBlT2JqLnR5cGUpO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3REZXRhaWw7Il0sIm5hbWVzIjpbIlJlYWN0IiwibW9tZW50IiwiUG9zdERldGFpbCIsInBvc3QiLCJnZXRDb250ZW50RnJhZ21lbnQiLCJpbmRleCIsInRleHQiLCJvYmoiLCJ0eXBlIiwibW9kaWZpZWRUZXh0IiwiYm9sZCIsImIiLCJpdGFsaWMiLCJlbSIsInVuZGVybGluZSIsInUiLCJoMyIsImNsYXNzTmFtZSIsIm1hcCIsIml0ZW0iLCJpIiwiRnJhZ21lbnQiLCJwIiwiaDQiLCJpbWciLCJhbHQiLCJ0aXRsZSIsImhlaWdodCIsIndpZHRoIiwic3JjIiwiaWZyYW1lQ29kZSIsImNoaWxkcmVuIiwic3BhbiIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiZGl2IiwiZmVhdHVyZWRJbWFnZSIsInVybCIsImF1dGhvciIsIm5hbWUiLCJwaG90byIsInN2ZyIsInhtbG5zIiwiZmlsbCIsInZpZXdCb3giLCJzdHJva2UiLCJwYXRoIiwic3Ryb2tlTGluZWNhcCIsInN0cm9rZUxpbmVqb2luIiwic3Ryb2tlV2lkdGgiLCJkIiwiY3JlYXRlZEF0IiwiZm9ybWF0IiwiaDEiLCJjb250ZW50IiwicmF3IiwidHlwZU9iaiIsIml0ZW1pbmRleCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/PostDetail.js\n"));

/***/ })

});