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

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_wiadn_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/wiadn-logo.png */ \"./public/wiadn-logo.png\");\nvar _this = undefined;\n\n\n\n\n\nvar categories = [\n    {\n        name: \"travel\",\n        slug: \"travel\"\n    },\n    {\n        name: \"balloons\",\n        slug: \"balloons\"\n    }\n];\nvar Header = function() {\n    var handleNavClick = function() {\n        var burgerButton = document.querySelector(\".burger-button\");\n        var slideNav = document.querySelector(\".slide-nav\");\n        var ul = document.querySelector(\".slide-nav-items\");\n        var ulItems = ul.getElementsByTagName(\"li\");\n        console.log(ulItems);\n        ulItems;\n        burgerButton.classList.toggle(\"open\");\n        slideNav.classList.toggle(\"translate-x-full\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-10 mb-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"border-b w-full flex justify-between border-amber-200\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:float-left block my-4 md:m-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"cursor-pointer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                unoptimized: true,\n                                alt: \"Logo\",\n                                src: _public_wiadn_logo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                            lineNumber: 26,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                    lineNumber: 24,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container flex justify-end items-end px-4 md:my-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"slide-nav bg-turquoise fixed top-0 right-0 translate-x-full ease-out duration-300 md:hidden z-20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"slide-nav-items right-0 list-none h-screen w-screen bg-indigo py-6 px-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"text-coral font-semibold text-lg\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/\",\n                                            children: \"What is Andy Doing NOW?!\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 74\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"my-4 ml-2 hover:border-b-coral hover:border-b-2 duration-200 ease-linear w-fit\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            className: \"\",\n                                            href: \"/about\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 120\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"my-4 ml-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"hover:border-b-coral hover:border-b-2 focus:border-b-coral focus:border-b-2\",\n                                            href: \"./services.html\",\n                                            children: \"Services\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 51\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"my-4 ml-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"hover:border-b-coral hover:border-b-2 focus:border-b-coral focus:border-b-2\",\n                                            href: \"#work\",\n                                            children: \"Work\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 42,\n                                            columnNumber: 51\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 42,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"my-4 ml-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"hover:border-b-coral hover:border-b-2 focus:border-b-coral focus:border-b-2\",\n                                            href: \"./faq.html\",\n                                            children: \"FAQ\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 51\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"ml-2 absolute bottom-20\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"hover:border-b-lavender hover:border-b-2 focus:border-b-lavender focus:border-b-2 text-coral text-2xl font-extrabold\",\n                                            href: \"./contact.html\",\n                                            children: \"CONTACT\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 65\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 44,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"ml-2 absolute bottom-16\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"mailto:andy@modernvet.solutions\",\n                                            children: \"andy@modernvet.solutions\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 45,\n                                            columnNumber: 65\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 45,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"hidden md:flex space-x-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-1 rounded-md duration-200 ease-in hover:bg-turquoise\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/about\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 29\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-1 rounded-md duration-200 ease-in hover:bg-turquoise\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/page/1\",\n                                            children: \"Blogs\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 25\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-1 rounded-md duration-200 ease-in hover:bg-turquoise\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/resources\",\n                                            children: \"Resources\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 29\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-1 rounded-md duration-200 ease-in hover:bg-turquoise\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/contact\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 60,\n                                            columnNumber: 25\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 59,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                lineNumber: 49,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                            lineNumber: 48,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleNavClick,\n                            className: \"burger-button burger-transition md:hidden w-10 h-10 fixed right-8 top-4 bg-none cursor-pointer z-20\",\n                            \"aria-label\": \"menu\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute w-6 h-0.5 bg-black left-1/2 -translate-x-1/2 top-3\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                    lineNumber: 68,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute w-6 h-0.5 bg-black left-1/2 -translate-x-1/2 top-5 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute w-6 h-0.5 bg-black left-1/2 -translate-x-1/2 top-7 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                            lineNumber: 65,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n            lineNumber: 23,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, _this);\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLHFHQUFxRzs0QkFBQ1csWUFBVSxFQUFDLE1BQU07OzhDQUM3SCw4REFBQ1QsTUFBSTtvQ0FBQ0YsU0FBUyxFQUFDLDZEQUE2RDs7Ozs7eUNBQVE7OENBQ3JGLDhEQUFDRSxNQUFJO29DQUFDRixTQUFTLEVBQUMsOERBQThEOzs7Ozt5Q0FBUTs4Q0FDdEYsOERBQUNFLE1BQUk7b0NBQUNGLFNBQVMsRUFBQyw4REFBOEQ7Ozs7O3lDQUFROzs7Ozs7aUNBQ3JGOzs7Ozs7eUJBQ1A7Ozs7OztpQkFDSjs7Ozs7YUFDSixDQUNQO0NBQ0Y7QUFuRUtkLEtBQUFBLE1BQU07QUFxRVosK0RBQWVBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NGRiYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGxvZ28gZnJvbSAnLi4vcHVibGljL3dpYWRuLWxvZ28ucG5nJztcblxuY29uc3QgY2F0ZWdvcmllcyA9IFt7bmFtZTogXCJ0cmF2ZWxcIiwgc2x1ZzpcInRyYXZlbFwifSwge25hbWU6IFwiYmFsbG9vbnNcIiwgc2x1ZzpcImJhbGxvb25zXCJ9XVxuXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGhhbmRsZU5hdkNsaWNrID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ1cmdlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItYnV0dG9uJyk7XG4gICAgY29uc3Qgc2xpZGVOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtbmF2Jyk7XG4gICAgY29uc3QgdWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtbmF2LWl0ZW1zJyk7XG4gICAgY29uc3QgdWxJdGVtcyA9IHVsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaScpO1xuICAgIGNvbnNvbGUubG9nKHVsSXRlbXMpXG4gICAgdWxJdGVtc1xuICAgIGJ1cmdlckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4gICAgc2xpZGVOYXYuY2xhc3NMaXN0LnRvZ2dsZSgndHJhbnNsYXRlLXgtZnVsbCcpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB4LTEwIG1iLThcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXItYiB3LWZ1bGwgZmxleCBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWFtYmVyLTIwMFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDpmbG9hdC1sZWZ0IGJsb2NrIG15LTQgbWQ6bS00XCI+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdjdXJzb3ItcG9pbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgdW5vcHRpbWl6ZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17YExvZ29gfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtsb2dvfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIGZsZXgganVzdGlmeS1lbmQgaXRlbXMtZW5kIHB4LTQgbWQ6bXktNCc+XG4gICAgICAgICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzbGlkZS1uYXYgYmctdHVycXVvaXNlIGZpeGVkIHRvcC0wIHJpZ2h0LTAgdHJhbnNsYXRlLXgtZnVsbCBlYXNlLW91dCBkdXJhdGlvbi0zMDAgbWQ6aGlkZGVuIHotMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInNsaWRlLW5hdi1pdGVtcyByaWdodC0wIGxpc3Qtbm9uZSBoLXNjcmVlbiB3LXNjcmVlbiBiZy1pbmRpZ28gcHktNiBweC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dC1jb3JhbCBmb250LXNlbWlib2xkIHRleHQtbGdcIj48TGluayBocmVmPXtgL2B9PldoYXQgaXMgQW5keSBEb2luZyBOT1c/ITwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LTQgbWwtMiBob3Zlcjpib3JkZXItYi1jb3JhbCBob3Zlcjpib3JkZXItYi0yIGR1cmF0aW9uLTIwMCBlYXNlLWxpbmVhciB3LWZpdFwiPjxMaW5rIGNsYXNzTmFtZT1cIlwiIGhyZWY9e2AvYWJvdXRgfT5BYm91dDwvTGluaz48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LTQgbWwtMlwiPjxhIGNsYXNzTmFtZT1cImhvdmVyOmJvcmRlci1iLWNvcmFsIGhvdmVyOmJvcmRlci1iLTIgZm9jdXM6Ym9yZGVyLWItY29yYWwgZm9jdXM6Ym9yZGVyLWItMlwiIGhyZWY9XCIuL3NlcnZpY2VzLmh0bWxcIj5TZXJ2aWNlczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm15LTQgbWwtMlwiPjxhIGNsYXNzTmFtZT1cImhvdmVyOmJvcmRlci1iLWNvcmFsIGhvdmVyOmJvcmRlci1iLTIgZm9jdXM6Ym9yZGVyLWItY29yYWwgZm9jdXM6Ym9yZGVyLWItMlwiIGhyZWY9XCIjd29ya1wiPldvcms8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS00IG1sLTJcIj48YSBjbGFzc05hbWU9XCJob3Zlcjpib3JkZXItYi1jb3JhbCBob3Zlcjpib3JkZXItYi0yIGZvY3VzOmJvcmRlci1iLWNvcmFsIGZvY3VzOmJvcmRlci1iLTJcIiBocmVmPVwiLi9mYXEuaHRtbFwiPkZBUTwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1sLTIgYWJzb2x1dGUgYm90dG9tLTIwXCI+PGEgY2xhc3NOYW1lPVwiaG92ZXI6Ym9yZGVyLWItbGF2ZW5kZXIgaG92ZXI6Ym9yZGVyLWItMiBmb2N1czpib3JkZXItYi1sYXZlbmRlciBmb2N1czpib3JkZXItYi0yIHRleHQtY29yYWwgdGV4dC0yeGwgZm9udC1leHRyYWJvbGRcIiBocmVmPVwiLi9jb250YWN0Lmh0bWxcIj5DT05UQUNUPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWwtMiBhYnNvbHV0ZSBib3R0b20tMTZcIj48YSBocmVmPVwibWFpbHRvOmFuZHlAbW9kZXJudmV0LnNvbHV0aW9uc1wiPmFuZHlAbW9kZXJudmV0LnNvbHV0aW9uczwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBzcGFjZS14LTEyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHgtNCBweS0xIHJvdW5kZWQtbWQgZHVyYXRpb24tMjAwIGVhc2UtaW4gaG92ZXI6YmctdHVycXVvaXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9hYm91dGB9PkFib3V0PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJweC00IHB5LTEgcm91bmRlZC1tZCBkdXJhdGlvbi0yMDAgZWFzZS1pbiBob3ZlcjpiZy10dXJxdW9pc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGFnZS8xYH0+QmxvZ3M8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB4LTQgcHktMSByb3VuZGVkLW1kIGR1cmF0aW9uLTIwMCBlYXNlLWluIGhvdmVyOmJnLXR1cnF1b2lzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmVzb3VyY2VzYH0+UmVzb3VyY2VzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJweC00IHB5LTEgcm91bmRlZC1tZCBkdXJhdGlvbi0yMDAgZWFzZS1pbiBob3ZlcjpiZy10dXJxdW9pc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvY29udGFjdGB9PkNvbnRhY3Q8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOYXZDbGlja31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnVyZ2VyLWJ1dHRvbiBidXJnZXItdHJhbnNpdGlvbiBtZDpoaWRkZW4gdy0xMCBoLTEwIGZpeGVkIHJpZ2h0LTggdG9wLTQgYmctbm9uZSBjdXJzb3ItcG9pbnRlciB6LTIwXCIgYXJpYS1sYWJlbD1cIm1lbnVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHctNiBoLTAuNSBiZy1ibGFjayBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHRvcC0zXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy02IGgtMC41IGJnLWJsYWNrIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgdG9wLTUgXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy02IGgtMC41IGJnLWJsYWNrIGxlZnQtMS8yIC10cmFuc2xhdGUteC0xLzIgdG9wLTcgXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlciJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiTGluayIsImxvZ28iLCJjYXRlZ29yaWVzIiwibmFtZSIsInNsdWciLCJIZWFkZXIiLCJoYW5kbGVOYXZDbGljayIsImJ1cmdlckJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNsaWRlTmF2IiwidWwiLCJ1bEl0ZW1zIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb25zb2xlIiwibG9nIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNwYW4iLCJ1bm9wdGltaXplZCIsImFsdCIsInNyYyIsIm5hdiIsImxpIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhcmlhLWxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});