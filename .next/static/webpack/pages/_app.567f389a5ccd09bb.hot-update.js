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

/***/ "./components/Categories.js":
/*!**********************************!*\
  !*** ./components/Categories.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ \"./services/index.js\");\nvar _this = undefined;\n\n\n\n\nvar _s = $RefreshSig$();\nvar Categories = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), categories = ref[0], setCatetories = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        (0,_services__WEBPACK_IMPORTED_MODULE_3__.getCategories)().then(function(newCategories) {\n            return setCatetories(newCategories);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white shadow-lg rounded-lg p-8 mb-8 pb-12\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"text-xl mb-8 font-semibold border-b border-b-amber-300 pb-4\",\n                children: \"Categories\"\n            }, void 0, false, {\n                fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Categories.js\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, _this),\n            categories.map(function(category) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/category/\".concat(category.slug),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"px-2 py-3 rounded-md duration-200 ease-in hover:bg-turquoise cursor-pointer block\",\n                        children: category.name\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Categories.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, _this1)\n                }, category.slug, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Categories.js\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, _this1);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Categories.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this);\n};\n_s(Categories, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = Categories;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Categories);\nvar _c;\n$RefreshReg$(_c, \"Categories\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhdGVnb3JpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBa0Q7QUFDckI7QUFDZTs7QUFFNUMsSUFBTUssVUFBVSxHQUFHLFdBQU07OztJQUN2QixJQUFvQ0osR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUF6Q0ssVUFBVSxHQUFtQkwsR0FBWSxHQUEvQixFQUFFTSxhQUFhLEdBQUlOLEdBQVksR0FBaEI7SUFFaENDLGdEQUFTLENBQUMsV0FBTTtRQUNkRSx3REFBYSxFQUFFLENBQ1ZJLElBQUksQ0FBQyxTQUFDQyxhQUFhO21CQUFLRixhQUFhLENBQUNFLGFBQWEsQ0FBQztTQUFBLENBQUM7S0FDM0QsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUVQLHFCQUNFLDhEQUFDQyxLQUFHO1FBQUNDLFNBQVMsRUFBQyw4Q0FBOEM7OzBCQUN6RCw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLDZEQUE2RDswQkFBQyxZQUU1RTs7Ozs7cUJBQUs7WUFDSkwsVUFBVSxDQUFDTyxHQUFHLENBQUMsU0FBQ0MsUUFBUTtxQ0FDckIsOERBQUNYLGtEQUFJO29CQUFxQlksSUFBSSxFQUFFLFlBQVcsQ0FBZ0IsT0FBZEQsUUFBUSxDQUFDRSxJQUFJLENBQUU7OEJBQ3hELDRFQUFDQyxNQUFJO3dCQUFDTixTQUFTLEVBQUMsbUZBQW1GO2tDQUM5RkcsUUFBUSxDQUFDSSxJQUFJOzs7Ozs4QkFDWDttQkFIQUosUUFBUSxDQUFDRSxJQUFJOzs7OzBCQUlqQjthQUNWLENBQUM7Ozs7OzthQUNBLENBQ1A7Q0FDRjtHQXRCS1gsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBd0JoQiwrREFBZUEsVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NhdGVnb3JpZXMuanM/NjY2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB7IGdldENhdGVnb3JpZXMgfSBmcm9tICcuLi9zZXJ2aWNlcyc7XG5cbmNvbnN0IENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRldG9yaWVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldENhdGVnb3JpZXMoKVxuICAgICAgICAudGhlbigobmV3Q2F0ZWdvcmllcykgPT4gc2V0Q2F0ZXRvcmllcyhuZXdDYXRlZ29yaWVzKSlcbiAgfSwgW10pO1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYmctd2hpdGUgc2hhZG93LWxnIHJvdW5kZWQtbGcgcC04IG1iLTggcGItMTInPlxuICAgICAgICA8aDMgY2xhc3NOYW1lPSd0ZXh0LXhsIG1iLTggZm9udC1zZW1pYm9sZCBib3JkZXItYiBib3JkZXItYi1hbWJlci0zMDAgcGItNCc+XG4gICAgICAgICAgICBDYXRlZ29yaWVzXG4gICAgICAgIDwvaDM+XG4gICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+IChcbiAgICAgICAgICAgIDxMaW5rIGtleT17Y2F0ZWdvcnkuc2x1Z30gaHJlZj17YC9jYXRlZ29yeS8ke2NhdGVnb3J5LnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdweC0yIHB5LTMgcm91bmRlZC1tZCBkdXJhdGlvbi0yMDAgZWFzZS1pbiBob3ZlcjpiZy10dXJxdW9pc2UgY3Vyc29yLXBvaW50ZXIgYmxvY2snPlxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcnkubmFtZX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICkpfVxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3JpZXMiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkxpbmsiLCJnZXRDYXRlZ29yaWVzIiwiQ2F0ZWdvcmllcyIsImNhdGVnb3JpZXMiLCJzZXRDYXRldG9yaWVzIiwidGhlbiIsIm5ld0NhdGVnb3JpZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsIm1hcCIsImNhdGVnb3J5IiwiaHJlZiIsInNsdWciLCJzcGFuIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Categories.js\n"));

/***/ })

});