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

/***/ "./components/Contact.js":
/*!*******************************!*\
  !*** ./components/Contact.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var _Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _formspark_use_formspark__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @formspark/use-formspark */ \"./node_modules/@formspark/use-formspark/dist/use-formspark.esm.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config/index.js\");\n\n\n\nvar _this = undefined;\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar FORMSPARK_FORM_ID = \"bA4bnUPj\";\nvar Contact = function() {\n    _s();\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_formspark_use_formspark__WEBPACK_IMPORTED_MODULE_4__.useFormspark)({\n        formId: FORMSPARK_FORM_ID\n    }), 2), submit = ref[0], submitting = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref1[0], setName = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), email = ref2[0], setEmail = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), message = ref3[0], setMessage = ref3[1];\n    var onSubmit = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(_Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            return _Users_andysasa_mvs_projects_wiadn_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        _ctx.next = 3;\n                        return submit({\n                            name: name,\n                            email: email,\n                            message: message\n                        });\n                    case 3:\n                        alert(\"Form Submitted\");\n                    case 4:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n            onSubmit: onSubmit,\n            className: \"bg-indigo-600 px-4 py-8 lg:px-12 rounded-xl grid xl:grid-cols-12 xl:gap-4\",\n            method: \"POST\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    className: \"mb-8 text-offwhite text-5xl font-semibold xl:col-span-12\",\n                    children: \"Contact\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    className: \"mb-2 text-turquoise xl:col-span-1\",\n                    htmlFor: \"name\",\n                    children: \"Name\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    className: \"outline-none px-2 py-1 rounded-md mb-2 xl:col-span-5\",\n                    type: \"text\",\n                    id: \"name\",\n                    name: \"name\",\n                    placeholder: \"Name\",\n                    value: name,\n                    onChange: function(e) {\n                        return setName(e.target.value);\n                    },\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    className: \"mb-2 text-turquoise xl:ml-4 xl:col-span-1\",\n                    htmlFor: \"email\",\n                    children: \"Email\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                    className: \"outline-none px-2 py-1 rounded-md mb-2 xl:col-span-5\",\n                    pattern: \"^([a-zA-Z0-9_\\\\-\\\\.]+)@((\\\\[[0-9]{1,3}\\\\.[0-9]{1,3}\\\\.[0-9]{1,3}\\\\.)|(([a-zA-Z0-9\\\\-]+\\\\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\\\\]?)$\",\n                    type: \"email\",\n                    id: \"email\",\n                    name: \"email\",\n                    placeholder: \"Email\",\n                    value: email,\n                    onChange: function(e) {\n                        return setEmail(e.target.value);\n                    },\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 34,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                    className: \"mb-2 text-turquoise xl:col-span-1\",\n                    htmlFor: \"message\",\n                    children: \"Message\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"textarea\", {\n                    className: \"outline-none px-2 py-1 rounded-md mb-8 xl:col-span-11\",\n                    id: \"message\",\n                    name: \"message\",\n                    rows: \"8\",\n                    value: message,\n                    onChange: function(e) {\n                        return setMessage(e.target.value);\n                    },\n                    required: true\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"mb-8 xl:col-start-2\"\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                    className: \"xl:col-end-13 mb-4\",\n                    type: \"submit\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"g-recaptcha bg-turquoise px-4 py-2 w-fit rounded-full text-gray-900 hover:bg-indigo-900 hover:text-gray-200 duration-300 ease-in\",\n                        \"data-sitekey\": \"6LcT248hAAAAAPV4FbMO0aADwHbja0fEQ-NO26ug \",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/andysasa/mvs-projects/wiadn/components/Contact.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, _this);\n};\n_s(Contact, \"ROLOBDgSTsbtzvc3UWGeFOXVqwE=\", false, function() {\n    return [\n        _formspark_use_formspark__WEBPACK_IMPORTED_MODULE_4__.useFormspark\n    ];\n});\n_c = Contact;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\nvar _c;\n$RefreshReg$(_c, \"Contact\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0ksT0FBTyxFQUFDLFNBQVM7OEJBQUMsU0FBTzs7Ozs7eUJBQVE7OEJBQ3RGLDhEQUFDVSxVQUFRO29CQUFDZCxTQUFTLEVBQUMsdURBQXVEO29CQUFDTyxFQUFFLEVBQUMsU0FBUztvQkFBQ25CLElBQUksRUFBQyxTQUFTO29CQUFDMkIsSUFBSSxFQUFDLEdBQUc7b0JBQUNOLEtBQUssRUFBRWpCLE9BQU87b0JBQUVrQixRQUFRLEVBQUUsU0FBQ2YsQ0FBQzsrQkFBS0YsVUFBVSxDQUFDRSxDQUFDLENBQUNnQixNQUFNLENBQUNGLEtBQUssQ0FBQztxQkFBQTtvQkFBRUcsUUFBUTs7Ozs7eUJBQUc7OEJBQ3pMLDhEQUFDZCxLQUFHO29CQUFDRSxTQUFTLEVBQUMscUJBQXFCOzs7Ozt5QkFBTzs4QkFDM0MsOERBQUNnQixRQUFNO29CQUFDaEIsU0FBUyxFQUFDLG9CQUFvQjtvQkFBQ00sSUFBSSxFQUFDLFFBQVE7OEJBQ2xELDRFQUFDUixLQUFHO3dCQUFDRSxTQUFTLEVBQUMsa0lBQWtJO3dCQUFDaUIsY0FBWSxFQUFDLDJDQUNoSztrQ0FBQyxRQUFNOzs7Ozs2QkFBTTs7Ozs7eUJBQ0w7Ozs7OztpQkFDSjs7Ozs7YUFDSCxDQUNQO0NBQ0Y7R0FyQ0tqQyxPQUFPOztRQUVrQkgsa0VBQVk7OztBQUZyQ0csS0FBQUEsT0FBTztBQXVDYiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ29udGFjdC5qcz82NDZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyB1c2VGb3Jtc3BhcmsgfSBmcm9tIFwiQGZvcm1zcGFyay91c2UtZm9ybXNwYXJrXCI7XG5pbXBvcnQgeyBDT05UQUNUX0ZPUk1fSUQgfSBmcm9tICcuLi9jb25maWcnO1xuXG5jb25zdCBGT1JNU1BBUktfRk9STV9JRCA9IFwiYkE0Ym5VUGpcIjtcblxuY29uc3QgQ29udGFjdCA9ICgpID0+IHtcblxuICBjb25zdCBbc3VibWl0LCBzdWJtaXR0aW5nXSA9IHVzZUZvcm1zcGFyayh7XG4gICAgZm9ybUlkOiBGT1JNU1BBUktfRk9STV9JRCxcbiAgfSk7XG5cbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYXdhaXQgc3VibWl0KHsgbmFtZSwgZW1haWwsIG1lc3NhZ2UgfSk7XG4gICAgYWxlcnQoXCJGb3JtIFN1Ym1pdHRlZFwiKTtcbiAgfVxuXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBjbGFzc05hbWU9XCJiZy1pbmRpZ28tNjAwIHB4LTQgcHktOCBsZzpweC0xMiByb3VuZGVkLXhsIGdyaWQgeGw6Z3JpZC1jb2xzLTEyIHhsOmdhcC00XCIgbWV0aG9kPVwiUE9TVFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPSdtYi04IHRleHQtb2Zmd2hpdGUgdGV4dC01eGwgZm9udC1zZW1pYm9sZCB4bDpjb2wtc3Bhbi0xMic+XG4gICAgICAgICAgQ29udGFjdFxuICAgICAgICA8L2gxPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXR1cnF1b2lzZSB4bDpjb2wtc3Bhbi0xXCIgaHRtbEZvcj1cIm5hbWVcIj5OYW1lPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSBweC0yIHB5LTEgcm91bmRlZC1tZCBtYi0yIHhsOmNvbC1zcGFuLTVcIiB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIG5hbWU9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCJOYW1lXCIgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmFtZShlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XG4gICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJtYi0yIHRleHQtdHVycXVvaXNlIHhsOm1sLTQgeGw6Y29sLXNwYW4tMVwiIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSBweC0yIHB5LTEgcm91bmRlZC1tZCBtYi0yIHhsOmNvbC1zcGFuLTVcIiBwYXR0ZXJuPVwiXihbYS16QS1aMC05X1xcLVxcLl0rKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLil8KChbYS16QS1aMC05XFwtXStcXC4pKykpKFthLXpBLVpdezIsNH18WzAtOV17MSwzfSkoXFxdPykkXCIgdHlwZT1cImVtYWlsXCIgaWQ9XCJlbWFpbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRW1haWxcIiB2YWx1ZT17ZW1haWx9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAvPlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwibWItMiB0ZXh0LXR1cnF1b2lzZSB4bDpjb2wtc3Bhbi0xXCIgaHRtbEZvcj1cIm1lc3NhZ2VcIj5NZXNzYWdlPC9sYWJlbD5cbiAgICAgICAgPHRleHRhcmVhIGNsYXNzTmFtZT1cIm91dGxpbmUtbm9uZSBweC0yIHB5LTEgcm91bmRlZC1tZCBtYi04IHhsOmNvbC1zcGFuLTExXCIgaWQ9XCJtZXNzYWdlXCIgbmFtZT1cIm1lc3NhZ2VcIiByb3dzPVwiOFwiIHZhbHVlPXttZXNzYWdlfSBvbkNoYW5nZT17KGUpID0+IHNldE1lc3NhZ2UoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTggeGw6Y29sLXN0YXJ0LTJcIj48L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJ4bDpjb2wtZW5kLTEzIG1iLTRcIiB0eXBlPVwic3VibWl0XCIgPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZy1yZWNhcHRjaGEgYmctdHVycXVvaXNlIHB4LTQgcHktMiB3LWZpdCByb3VuZGVkLWZ1bGwgdGV4dC1ncmF5LTkwMCBob3ZlcjpiZy1pbmRpZ28tOTAwIGhvdmVyOnRleHQtZ3JheS0yMDAgZHVyYXRpb24tMzAwIGVhc2UtaW5cIiBkYXRhLXNpdGVrZXk9XCI2TGNUMjQ4aEFBQUFBUFY0RmJNTzBhQUR3SGJqYTBmRVEtTk8yNnVnXG4gICAgICAgIFwiPlN1Ym1pdDwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZm9ybT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb250YWN0OyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTGluayIsInVzZUZvcm1zcGFyayIsIkNPTlRBQ1RfRk9STV9JRCIsIkZPUk1TUEFSS19GT1JNX0lEIiwiQ29udGFjdCIsImZvcm1JZCIsInN1Ym1pdCIsInN1Ym1pdHRpbmciLCJuYW1lIiwic2V0TmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiYWxlcnQiLCJkaXYiLCJmb3JtIiwiY2xhc3NOYW1lIiwibWV0aG9kIiwiaDEiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwicGF0dGVybiIsInRleHRhcmVhIiwicm93cyIsImJ1dHRvbiIsImRhdGEtc2l0ZWtleSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Contact.js\n"));

/***/ })

});