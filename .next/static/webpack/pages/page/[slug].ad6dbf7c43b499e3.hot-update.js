"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/page/[slug]",{

/***/ "./pages/page/[slug].js":
/*!******************************!*\
  !*** ./pages/page/[slug].js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ \"./components/index.js\");\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services */ \"./services/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Home(param) {\n    var posts = param.posts, numPages = param.numPages, currentPage = param.currentPage, pageInfo = param.pageInfo;\n    var _this = this;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), searchValue = ref[0], setSearchValue = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), searchedPosts = ref1[0], setSearchedPosts = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        (0,_services__WEBPACK_IMPORTED_MODULE_6__.getSearchedPosts)(searchValue).then(function(result) {\n            return setSearchedPosts(result);\n        });\n    });\n    if (router.isFallback) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.Loader, {}, void 0, false, {\n            fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n            lineNumber: 21,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-10 mb-8\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"What is Andy Doing NOW?!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    onChange: function(event) {\n                        return setSearchValue(event.target.value);\n                    },\n                    placeholder: \"Search blog posts\",\n                    value: searchValue,\n                    className: \"focus:outline-none mb-6 focus:ring-2 focus:ring- w-full rounded-lg border h-10 pl-4 text-lg text-gray-800 border-gray-200\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-1 lg:grid-cols-12 gap-12\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"lg:col-span-8 col-span-1\",\n                        children: [\n                            searchedPosts && searchedPosts.length === 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"bg-red-500 w-full rounded-md mb-6 px-4 py-2\",\n                                children: \"No post found\"\n                            }, void 0, false, {\n                                fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                                lineNumber: 42,\n                                columnNumber: 59\n                            }, this),\n                            searchValue && searchedPosts.map(function(post) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.PostCard, {\n                                    post: post.node\n                                }, post.node.title, false, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                                    lineNumber: 43,\n                                    columnNumber: 55\n                                }, _this);\n                            }) || posts.edges.map(function(post) {\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.PostCard, {\n                                    post: post.node\n                                }, post.node.title, false, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                                    lineNumber: 45,\n                                    columnNumber: 37\n                                }, _this);\n                            })\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"lg:col-span-4 col-span-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"lg:sticky relative top-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.PostWidget, {}, void 0, false, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.Categories, {}, void 0, false, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                            lineNumber: 48,\n                            columnNumber: 12\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"transition duration-500 transform hover:-translate-y-1 hover:bg-indigo-700 inline-block bg-pink-600 rounded-md text-lg font-medium text-white cursor-pointer\",\n                children: !searchValue && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_5__.Pagination, {\n                    numPages: numPages,\n                    currentPage: currentPage,\n                    pageInfo: pageInfo\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                    lineNumber: 55,\n                    columnNumber: 26\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andysasa/mvs-projects/wiadn/pages/page/[slug].js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"pbBCZltY5+Eqw5O6+uUllMMjXVg=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O2tDQUNOLDhEQUFDRixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsMEJBQTBCO2tDQUN0Qyw0RUFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLDBCQUEwQjs7OENBQ3hDLDhEQUFDbkIsbURBQVU7Ozs7d0NBQUc7OENBQ2QsOERBQUNELG1EQUFVOzs7O3dDQUFHOzs7Ozs7Z0NBQ1Q7Ozs7OzRCQUNIOzs7Ozs7b0JBQ0Y7MEJBQ04sOERBQUN3QyxRQUFNO2dCQUFDcEIsU0FBUyxFQUFDLDhKQUE4SjswQkFDN0ssQ0FBQ1IsV0FBVyxrQkFBSSw4REFBQ1YsbURBQVU7b0JBQUNNLFFBQVEsRUFBRUEsUUFBUTtvQkFBRUMsV0FBVyxFQUFFQSxXQUFXO29CQUFFQyxRQUFRLEVBQUVBLFFBQVE7Ozs7O3dCQUFJOzs7OztvQkFDMUY7Ozs7OztZQUNMLENBQ1A7Q0FDRjtHQWpEdUJKLElBQUk7O1FBQ1hYLGtEQUFTOzs7QUFERlcsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wYWdlL1tzbHVnXS5qcz8xZGNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJztcbmltcG9ydCB7IFBvc3RDYXJkLCBDYXRlZ29yaWVzLCBQb3N0V2lkZ2V0LCBQYWdpbmF0aW9uLCBMb2FkZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcbmltcG9ydCB7IGdldFBvc3RzLCBnZXRTZWFyY2hlZFBvc3RzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJzs7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoIHsgcG9zdHMsIG51bVBhZ2VzLCBjdXJyZW50UGFnZSwgcGFnZUluZm8gfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3NlYXJjaGVkUG9zdHMsIHNldFNlYXJjaGVkUG9zdHNdID0gdXNlU3RhdGUoKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRTZWFyY2hlZFBvc3RzKHNlYXJjaFZhbHVlKVxuICAgICAgICAgIC50aGVuKChyZXN1bHQpID0+IHNldFNlYXJjaGVkUG9zdHMocmVzdWx0KSk7XG4gICAgfSlcblxuICBpZiAocm91dGVyLmlzRmFsbGJhY2spIHtcbiAgICByZXR1cm4gPExvYWRlciAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC0xMCBtYi04XCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPldoYXQgaXMgQW5keSBEb2luZyBOT1c/ITwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IFxuICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgb25DaGFuZ2U9eygoZXZlbnQpID0+IHNldFNlYXJjaFZhbHVlKGV2ZW50LnRhcmdldC52YWx1ZSkpfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdTZWFyY2ggYmxvZyBwb3N0cydcbiAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lIG1iLTYgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctIHctZnVsbCByb3VuZGVkLWxnIGJvcmRlciBoLTEwIHBsLTQgdGV4dC1sZyB0ZXh0LWdyYXktODAwIGJvcmRlci1ncmF5LTIwMFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBsZzpncmlkLWNvbHMtMTIgZ2FwLTEyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6Y29sLXNwYW4tOCBjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAge3NlYXJjaGVkUG9zdHMgJiYgc2VhcmNoZWRQb3N0cy5sZW5ndGggPT09IDAgJiYgPGRpdiBjbGFzc05hbWU9XCJiZy1yZWQtNTAwIHctZnVsbCByb3VuZGVkLW1kIG1iLTYgcHgtNCBweS0yXCI+Tm8gcG9zdCBmb3VuZDwvZGl2Pn1cbiAgICAgICAgICB7c2VhcmNoVmFsdWUgJiYgc2VhcmNoZWRQb3N0cy5tYXAoKHBvc3QpID0+IDxQb3N0Q2FyZCBwb3N0PXtwb3N0Lm5vZGV9IGtleT17cG9zdC5ub2RlLnRpdGxlfSAvPilcbiAgICAgICAgICAgIHx8XG4gICAgICAgICAgcG9zdHMuZWRnZXMubWFwKChwb3N0KSA9PiA8UG9zdENhcmQgcG9zdD17cG9zdC5ub2RlfSBrZXk9e3Bvc3Qubm9kZS50aXRsZX0gLz4pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpjb2wtc3Bhbi00IGNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzpzdGlja3kgcmVsYXRpdmUgdG9wLThcIj5cbiAgICAgICAgICAgIDxQb3N0V2lkZ2V0IC8+XG4gICAgICAgICAgICA8Q2F0ZWdvcmllcyAvPlxuICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPSd0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMCB0cmFuc2Zvcm0gaG92ZXI6LXRyYW5zbGF0ZS15LTEgaG92ZXI6YmctaW5kaWdvLTcwMCBpbmxpbmUtYmxvY2sgYmctcGluay02MDAgcm91bmRlZC1tZCB0ZXh0LWxnIGZvbnQtbWVkaXVtIHRleHQtd2hpdGUgY3Vyc29yLXBvaW50ZXInPlxuICAgICAgICB7IXNlYXJjaFZhbHVlICYmIDxQYWdpbmF0aW9uIG51bVBhZ2VzPXtudW1QYWdlc30gY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfSBwYWdlSW5mbz17cGFnZUluZm99IC8+fVxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgY29uc3QgcGFnZSA9IHBhcnNlSW50KHBhcmFtcyAmJiBwYXJhbXMuc2x1ZyB8fCAxKTtcbiAgY29uc3QgcG9zdHNQZXJQYWdlID0gMTtcbiAgY29uc3Qgc2tpcEluZGV4ID0gKHBhZ2UgLSAxKSAqIHBvc3RzUGVyUGFnZTtcbiAgY29uc3QgcG9zdHMgPSAoYXdhaXQgZ2V0UG9zdHMocG9zdHNQZXJQYWdlLCBza2lwSW5kZXgpKSB8fCBbXTtcbiAgY29uc3QgbnVtUGFnZXMgPSBNYXRoLmNlaWwocG9zdHMubGVuZ3RoIC8gcG9zdHNQZXJQYWdlKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IFxuICAgICAgcG9zdHM6ICBwb3N0cyxcbiAgICAgIG51bVBhZ2VzLFxuICAgICAgY3VycmVudFBhZ2U6IHBhZ2UsXG4gICAgICBwYWdlSW5mbzogcG9zdHMucGFnZUluZm8sXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCBnZXRQb3N0cygpO1xuICBjb25zdCBudW1QYWdlcyA9IHBvc3RzLmVkZ2VzLmxlbmd0aDtcbiAgbGV0IHBhdGhzID0gW107XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IG51bVBhZ2VzOyBpKyspIHtcbiAgICBwYXRocy5wdXNoKHtcbiAgICAgIHBhcmFtczogeyBzbHVnOiBpLnRvU3RyaW5nKCkgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRocyxcbiAgICBmYWxsYmFjazogZmFsc2VcbiAgfVxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsIlBvc3RDYXJkIiwiQ2F0ZWdvcmllcyIsIlBvc3RXaWRnZXQiLCJQYWdpbmF0aW9uIiwiTG9hZGVyIiwiZ2V0U2VhcmNoZWRQb3N0cyIsIkxpbmsiLCJIb21lIiwicG9zdHMiLCJudW1QYWdlcyIsImN1cnJlbnRQYWdlIiwicGFnZUluZm8iLCJyb3V0ZXIiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwic2VhcmNoZWRQb3N0cyIsInNldFNlYXJjaGVkUG9zdHMiLCJ0aGVuIiwicmVzdWx0IiwiaXNGYWxsYmFjayIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJwbGFjZWhvbGRlciIsImxlbmd0aCIsIm1hcCIsInBvc3QiLCJub2RlIiwiZWRnZXMiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/page/[slug].js\n"));

/***/ })

});