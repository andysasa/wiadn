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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _public_wiadn_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../public/wiadn-logo.png */ \"./public/wiadn-logo.png\");\nvar _this = undefined;\n\n\n\n\n\nvar categories = [\n    {\n        name: \"travel\",\n        slug: \"travel\"\n    },\n    {\n        name: \"balloons\",\n        slug: \"balloons\"\n    }\n];\nvar Header = function() {\n    var handleNavClick = function() {\n        var burgerButton = document.querySelector(\".burger-button\");\n        var slideNav = document.querySelector(\".slide-nav\");\n        burgerButton.classList.toggle(\"open\");\n        slideNav.classList.toggle(\"translate-x-full\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto px-10 mb-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"border-b w-full flex justify-between border-amber-200\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"md:float-left block my-4 md:m-4\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"cursor-pointer\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                unoptimized: true,\n                                alt: \"Logo\",\n                                src: _public_wiadn_logo_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                            }, void 0, false, {\n                                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                lineNumber: 23,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                    lineNumber: 20,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container flex justify-end items-end px-4 md:my-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            className: \"slide-nav bg-turquoise fixed top-0 right-0 translate-x-full ease-out duration-300 md:hidden z-20\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"slide-nav-items right-0 list-none h-screen w-screen bg-indigo py-6 px-8\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"text-coral font-semibold text-lg\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/\",\n                                            children: \"What is Andy Doing NOW?!\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 35,\n                                            columnNumber: 74\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 35,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"my-4 ml-2 hover:border-b-coral hover:border-b-2 duration-200 ease-linear w-fit\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            className: \"\",\n                                            href: \"/about\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 36,\n                                            columnNumber: 120\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 36,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"my-4 ml-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"hover:border-b-coral hover:border-b-2 focus:border-b-coral focus:border-b-2\",\n                                            href: \"./services.html\",\n                                            children: \"Services\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 37,\n                                            columnNumber: 51\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 37,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"my-4 ml-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"hover:border-b-coral hover:border-b-2 focus:border-b-coral focus:border-b-2\",\n                                            href: \"#work\",\n                                            children: \"Work\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 38,\n                                            columnNumber: 51\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"my-4 ml-2\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"hover:border-b-coral hover:border-b-2 focus:border-b-coral focus:border-b-2\",\n                                            href: \"./faq.html\",\n                                            children: \"FAQ\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 39,\n                                            columnNumber: 51\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"ml-2 absolute bottom-20\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            className: \"hover:border-b-lavender hover:border-b-2 focus:border-b-lavender focus:border-b-2 text-coral text-2xl font-extrabold\",\n                                            href: \"./contact.html\",\n                                            children: \"CONTACT\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 40,\n                                            columnNumber: 65\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 40,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"ml-2 absolute bottom-16\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"mailto:andy@modernvet.solutions\",\n                                            children: \"andy@modernvet.solutions\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 41,\n                                            columnNumber: 65\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 41,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                lineNumber: 34,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                            lineNumber: 33,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"hidden md:flex space-x-12\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-1 rounded-md duration-200 ease-in hover:bg-turquoise\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/about\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 47,\n                                            columnNumber: 29\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 46,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-1 rounded-md duration-200 ease-in hover:bg-turquoise\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/page/1\",\n                                            children: \"Blogs\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 50,\n                                            columnNumber: 25\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 49,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-1 rounded-md duration-200 ease-in hover:bg-turquoise\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/resources\",\n                                            children: \"Resources\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 29\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 25\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        className: \"px-4 py-1 rounded-md duration-200 ease-in hover:bg-turquoise\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/contact\",\n                                            children: \"Contact\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 25\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 25\n                                    }, _this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                            lineNumber: 44,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleNavClick,\n                            className: \"burger-button burger-transition md:hidden w-10 h-10 fixed right-8 top-4 bg-none cursor-pointer z-20\",\n                            \"aria-label\": \"menu\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute w-6 h-0.5 bg-black left-1/2 -translate-x-1/2 top-3\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute w-6 h-0.5 bg-black left-1/2 -translate-x-1/2 top-5 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 25\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"absolute w-6 h-0.5 bg-black left-1/2 -translate-x-1/2 top-7 \"\n                                }, void 0, false, {\n                                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 25\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                            lineNumber: 61,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n            lineNumber: 19,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Header.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, _this);\n};\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE4RDs7Ozs7eUNBQVE7Ozs7OztpQ0FDckY7Ozs7Ozt5QkFDUDs7Ozs7O2lCQUNKOzs7OzthQUNKLENBQ1A7Q0FDRjtBQS9ES1QsS0FBQUEsTUFBTTtBQWlFWiwrREFBZUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRlci5qcz80ZGJiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgbG9nbyBmcm9tICcuLi9wdWJsaWMvd2lhZG4tbG9nby5wbmcnO1xuXG5jb25zdCBjYXRlZ29yaWVzID0gW3tuYW1lOiBcInRyYXZlbFwiLCBzbHVnOlwidHJhdmVsXCJ9LCB7bmFtZTogXCJiYWxsb29uc1wiLCBzbHVnOlwiYmFsbG9vbnNcIn1dXG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3QgaGFuZGxlTmF2Q2xpY2sgPSAoKSA9PiB7XG4gICAgY29uc3QgYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1idXR0b24nKTtcbiAgICBjb25zdCBzbGlkZU5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1uYXYnKTtcbiAgICBidXJnZXJCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbicpO1xuICAgIHNsaWRlTmF2LmNsYXNzTGlzdC50b2dnbGUoJ3RyYW5zbGF0ZS14LWZ1bGwnKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgbXgtYXV0byBweC0xMCBtYi04XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgdy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1hbWJlci0yMDBcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6ZmxvYXQtbGVmdCBibG9jayBteS00IG1kOm0tNFwiPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nY3Vyc29yLXBvaW50ZXInPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHVub3B0aW1pemVkXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2BMb2dvYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17bG9nb31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciBmbGV4IGp1c3RpZnktZW5kIGl0ZW1zLWVuZCBweC00IG1kOm15LTQnPlxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwic2xpZGUtbmF2IGJnLXR1cnF1b2lzZSBmaXhlZCB0b3AtMCByaWdodC0wIHRyYW5zbGF0ZS14LWZ1bGwgZWFzZS1vdXQgZHVyYXRpb24tMzAwIG1kOmhpZGRlbiB6LTIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzbGlkZS1uYXYtaXRlbXMgcmlnaHQtMCBsaXN0LW5vbmUgaC1zY3JlZW4gdy1zY3JlZW4gYmctaW5kaWdvIHB5LTYgcHgtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtY29yYWwgZm9udC1zZW1pYm9sZCB0ZXh0LWxnXCI+PExpbmsgaHJlZj17YC9gfT5XaGF0IGlzIEFuZHkgRG9pbmcgTk9XPyE8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS00IG1sLTIgaG92ZXI6Ym9yZGVyLWItY29yYWwgaG92ZXI6Ym9yZGVyLWItMiBkdXJhdGlvbi0yMDAgZWFzZS1saW5lYXIgdy1maXRcIj48TGluayBjbGFzc05hbWU9XCJcIiBocmVmPXtgL2Fib3V0YH0+QWJvdXQ8L0xpbms+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS00IG1sLTJcIj48YSBjbGFzc05hbWU9XCJob3Zlcjpib3JkZXItYi1jb3JhbCBob3Zlcjpib3JkZXItYi0yIGZvY3VzOmJvcmRlci1iLWNvcmFsIGZvY3VzOmJvcmRlci1iLTJcIiBocmVmPVwiLi9zZXJ2aWNlcy5odG1sXCI+U2VydmljZXM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJteS00IG1sLTJcIj48YSBjbGFzc05hbWU9XCJob3Zlcjpib3JkZXItYi1jb3JhbCBob3Zlcjpib3JkZXItYi0yIGZvY3VzOmJvcmRlci1iLWNvcmFsIGZvY3VzOmJvcmRlci1iLTJcIiBocmVmPVwiI3dvcmtcIj5Xb3JrPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibXktNCBtbC0yXCI+PGEgY2xhc3NOYW1lPVwiaG92ZXI6Ym9yZGVyLWItY29yYWwgaG92ZXI6Ym9yZGVyLWItMiBmb2N1czpib3JkZXItYi1jb3JhbCBmb2N1czpib3JkZXItYi0yXCIgaHJlZj1cIi4vZmFxLmh0bWxcIj5GQVE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtbC0yIGFic29sdXRlIGJvdHRvbS0yMFwiPjxhIGNsYXNzTmFtZT1cImhvdmVyOmJvcmRlci1iLWxhdmVuZGVyIGhvdmVyOmJvcmRlci1iLTIgZm9jdXM6Ym9yZGVyLWItbGF2ZW5kZXIgZm9jdXM6Ym9yZGVyLWItMiB0ZXh0LWNvcmFsIHRleHQtMnhsIGZvbnQtZXh0cmFib2xkXCIgaHJlZj1cIi4vY29udGFjdC5odG1sXCI+Q09OVEFDVDwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1sLTIgYWJzb2x1dGUgYm90dG9tLTE2XCI+PGEgaHJlZj1cIm1haWx0bzphbmR5QG1vZGVybnZldC5zb2x1dGlvbnNcIj5hbmR5QG1vZGVybnZldC5zb2x1dGlvbnM8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8bmF2PlxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiaGlkZGVuIG1kOmZsZXggc3BhY2UteC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInB4LTQgcHktMSByb3VuZGVkLW1kIGR1cmF0aW9uLTIwMCBlYXNlLWluIGhvdmVyOmJnLXR1cnF1b2lzZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvYWJvdXRgfT5BYm91dDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHgtNCBweS0xIHJvdW5kZWQtbWQgZHVyYXRpb24tMjAwIGVhc2UtaW4gaG92ZXI6YmctdHVycXVvaXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3BhZ2UvMWB9PkJsb2dzPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJweC00IHB5LTEgcm91bmRlZC1tZCBkdXJhdGlvbi0yMDAgZWFzZS1pbiBob3ZlcjpiZy10dXJxdW9pc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Jlc291cmNlc2B9PlJlc291cmNlczwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwicHgtNCBweS0xIHJvdW5kZWQtbWQgZHVyYXRpb24tMjAwIGVhc2UtaW4gaG92ZXI6YmctdHVycXVvaXNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL2NvbnRhY3RgfT5Db250YWN0PC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmF2Q2xpY2t9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1cmdlci1idXR0b24gYnVyZ2VyLXRyYW5zaXRpb24gbWQ6aGlkZGVuIHctMTAgaC0xMCBmaXhlZCByaWdodC04IHRvcC00IGJnLW5vbmUgY3Vyc29yLXBvaW50ZXIgei0yMFwiIGFyaWEtbGFiZWw9XCJtZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSB3LTYgaC0wLjUgYmctYmxhY2sgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LTEvMiB0b3AtM1wiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHctNiBoLTAuNSBiZy1ibGFjayBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHRvcC01IFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImFic29sdXRlIHctNiBoLTAuNSBiZy1ibGFjayBsZWZ0LTEvMiAtdHJhbnNsYXRlLXgtMS8yIHRvcC03IFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXIiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIkxpbmsiLCJsb2dvIiwiY2F0ZWdvcmllcyIsIm5hbWUiLCJzbHVnIiwiSGVhZGVyIiwiaGFuZGxlTmF2Q2xpY2siLCJidXJnZXJCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzbGlkZU5hdiIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzcGFuIiwidW5vcHRpbWl6ZWQiLCJhbHQiLCJzcmMiLCJuYXYiLCJ1bCIsImxpIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJhcmlhLWxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.js\n"));

/***/ })

});