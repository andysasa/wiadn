/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Accordion\": function() { return /* reexport safe */ _Accordion__WEBPACK_IMPORTED_MODULE_14__[\"default\"]; },\n/* harmony export */   \"Author\": function() { return /* reexport safe */ _Author__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; },\n/* harmony export */   \"Categories\": function() { return /* reexport safe */ _Categories__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; },\n/* harmony export */   \"Comments\": function() { return /* reexport safe */ _Comments__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; },\n/* harmony export */   \"CommentsForm\": function() { return /* reexport safe */ _CommentsForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; },\n/* harmony export */   \"Contact\": function() { return /* reexport safe */ _Contact__WEBPACK_IMPORTED_MODULE_15__[\"default\"]; },\n/* harmony export */   \"FeaturedPostCard\": function() { return /* reexport safe */ _FeaturedPostCard__WEBPACK_IMPORTED_MODULE_10__[\"default\"]; },\n/* harmony export */   \"Footer\": function() { return /* reexport default from dynamic */ _Footer__WEBPACK_IMPORTED_MODULE_16___default.a; },\n/* harmony export */   \"Header\": function() { return /* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; },\n/* harmony export */   \"Hero\": function() { return /* reexport safe */ _Hero__WEBPACK_IMPORTED_MODULE_12__[\"default\"]; },\n/* harmony export */   \"Layout\": function() { return /* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; },\n/* harmony export */   \"Loader\": function() { return /* reexport safe */ _Loader__WEBPACK_IMPORTED_MODULE_11__[\"default\"]; },\n/* harmony export */   \"Pagination\": function() { return /* reexport safe */ _Pagination__WEBPACK_IMPORTED_MODULE_9__[\"default\"]; },\n/* harmony export */   \"PostCard\": function() { return /* reexport safe */ _PostCard__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; },\n/* harmony export */   \"PostDetail\": function() { return /* reexport safe */ _PostDetail__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; },\n/* harmony export */   \"PostWidget\": function() { return /* reexport safe */ _PostWidget__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; },\n/* harmony export */   \"Resources\": function() { return /* reexport safe */ _Resources__WEBPACK_IMPORTED_MODULE_13__[\"default\"]; },\n/* harmony export */   \"Typewriter\": function() { return /* reexport safe */ _Typewriter__WEBPACK_IMPORTED_MODULE_17__[\"default\"]; }\n/* harmony export */ });\n/* harmony import */ var _PostCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostCard */ \"./components/PostCard.js\");\n/* harmony import */ var _Categories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Categories */ \"./components/Categories.js\");\n/* harmony import */ var _PostWidget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PostWidget */ \"./components/PostWidget.js\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ \"./components/Header.js\");\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Layout */ \"./components/Layout.js\");\n/* harmony import */ var _PostDetail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./PostDetail */ \"./components/PostDetail.js\");\n/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Author */ \"./components/Author.js\");\n/* harmony import */ var _Comments__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Comments */ \"./components/Comments.js\");\n/* harmony import */ var _CommentsForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CommentsForm */ \"./components/CommentsForm.js\");\n/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Pagination */ \"./components/Pagination.js\");\n/* harmony import */ var _FeaturedPostCard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./FeaturedPostCard */ \"./components/FeaturedPostCard.js\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Loader */ \"./components/Loader.js\");\n/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Hero */ \"./components/Hero.js\");\n/* harmony import */ var _Resources__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Resources */ \"./components/Resources.js\");\n/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Accordion */ \"./components/Accordion.js\");\n/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Contact */ \"./components/Contact.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Footer */ \"./components/Footer.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_Footer__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _Typewriter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Typewriter */ \"./components/Typewriter.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDSTtBQUNBO0FBQ1I7QUFDQTtBQUNRO0FBQ1Q7QUFDSztBQUNRO0FBQ0o7QUFDWTtBQUNwQjtBQUNKO0FBQ1U7QUFDQTtBQUNKO0FBQ0g7QUFDUyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2luZGV4LmpzPzUwZDMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZGVmYXVsdCBhcyBQb3N0Q2FyZCB9IGZyb20gJy4vUG9zdENhcmQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBDYXRlZ29yaWVzIH0gZnJvbSAnLi9DYXRlZ29yaWVzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUG9zdFdpZGdldCB9IGZyb20gJy4vUG9zdFdpZGdldCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlciB9IGZyb20gJy4vSGVhZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTGF5b3V0IH0gZnJvbSAnLi9MYXlvdXQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQb3N0RGV0YWlsIH0gZnJvbSAnLi9Qb3N0RGV0YWlsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQXV0aG9yIH0gZnJvbSAnLi9BdXRob3InXG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbW1lbnRzIH0gZnJvbSAnLi9Db21tZW50cyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIENvbW1lbnRzRm9ybSB9IGZyb20gJy4vQ29tbWVudHNGb3JtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFnaW5hdGlvbiB9IGZyb20gJy4vUGFnaW5hdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZlYXR1cmVkUG9zdENhcmQgfSBmcm9tICcuL0ZlYXR1cmVkUG9zdENhcmQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkZXIgfSBmcm9tICcuL0xvYWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlcm8gfSBmcm9tICcuL0hlcm8nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXNvdXJjZXMgfSBmcm9tICcuL1Jlc291cmNlcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEFjY29yZGlvbiB9IGZyb20gJy4vQWNjb3JkaW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFjdCB9IGZyb20gJy4vQ29udGFjdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEZvb3RlciB9IGZyb20gJy4vRm9vdGVyJ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBUeXBld3JpdGVyIH0gZnJvbSAnLi9UeXBld3JpdGVyJztcbiJdLCJuYW1lcyI6WyJkZWZhdWx0IiwiUG9zdENhcmQiLCJDYXRlZ29yaWVzIiwiUG9zdFdpZGdldCIsIkhlYWRlciIsIkxheW91dCIsIlBvc3REZXRhaWwiLCJBdXRob3IiLCJDb21tZW50cyIsIkNvbW1lbnRzRm9ybSIsIlBhZ2luYXRpb24iLCJGZWF0dXJlZFBvc3RDYXJkIiwiTG9hZGVyIiwiSGVybyIsIlJlc291cmNlcyIsIkFjY29yZGlvbiIsIkNvbnRhY3QiLCJGb290ZXIiLCJUeXBld3JpdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/index.js\n"));

/***/ })

});