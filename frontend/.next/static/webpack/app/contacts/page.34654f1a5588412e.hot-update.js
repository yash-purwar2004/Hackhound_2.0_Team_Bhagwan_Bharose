"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/contacts/page",{

/***/ "(app-pages-browser)/./src/app/contacts/page.tsx":
/*!***********************************!*\
  !*** ./src/app/contacts/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ui_contactCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ui/contactCard */ \"(app-pages-browser)/./src/app/components/ui/contactCard.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Page = ()=>{\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [otherUsers, setOtherUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const contacts = [\n        \"66106b11c1d08c27244d08c4\"\n    ];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const res = await fetch(\"http://localhost:4000/user/\".concat(localStorage.getItem(\"userid\")));\n            const user1 = await res.json();\n            console.log(user1);\n            setUser(user1.user);\n            await Promise.all(contacts.map(async (otherid)=>{\n                const newres = await fetch(\"http://localhost:4000/user/\".concat(otherid));\n                const other = await newres.json();\n                setOtherUsers((prev)=>[\n                        ...prev,\n                        other\n                    ]);\n            }));\n        };\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container mx-auto py-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_contactCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                id: data._id,\n                title: data.firstName,\n                subtitle: data.authorityLevel\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\adity gupta\\\\hackhound\\\\Hackhound_2.0_Team_Bhagwan_Bharose\\\\frontend\\\\src\\\\app\\\\contacts\\\\page.tsx\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\adity gupta\\\\hackhound\\\\Hackhound_2.0_Team_Bhagwan_Bharose\\\\frontend\\\\src\\\\app\\\\contacts\\\\page.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\adity gupta\\\\hackhound\\\\Hackhound_2.0_Team_Bhagwan_Bharose\\\\frontend\\\\src\\\\app\\\\contacts\\\\page.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"isU4QPqH6y9E1gjAg/6b+hkZBjU=\");\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29udGFjdHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNnRDtBQUNNO0FBRXRELE1BQU1JLE9BQWlCOztJQUNuQixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0wsK0NBQVFBLENBQWE7SUFDN0MsTUFBTSxDQUFDTSxZQUFZQyxjQUFjLEdBQUdQLCtDQUFRQSxDQUFlLEVBQUU7SUFDN0QsTUFBTVEsV0FBVztRQUFDO0tBQTZCO0lBRS9DUCxnREFBU0EsQ0FBQztRQUNOLE1BQU1RLFlBQVk7WUFDZCxNQUFNQyxNQUFNLE1BQU1DLE1BQU0sOEJBQTZELE9BQS9CQyxhQUFhQyxPQUFPLENBQUM7WUFDM0UsTUFBTUMsUUFBUSxNQUFNSixJQUFJSyxJQUFJO1lBQzVCQyxRQUFRQyxHQUFHLENBQUNIO1lBQ1pULFFBQVFTLE1BQU1WLElBQUk7WUFFbEIsTUFBTWMsUUFBUUMsR0FBRyxDQUNiWCxTQUFTWSxHQUFHLENBQUMsT0FBT0M7Z0JBQ2xCLE1BQU1DLFNBQVMsTUFBTVgsTUFBTSw4QkFBc0MsT0FBUlU7Z0JBQ3pELE1BQU1FLFFBQVEsTUFBTUQsT0FBT1AsSUFBSTtnQkFDL0JSLGNBQWMsQ0FBQ2lCLE9BQVM7MkJBQUlBO3dCQUFNRDtxQkFBTTtZQUMxQztRQUlSO1FBRUFkO0lBQ0osR0FBRyxFQUFFO0lBQ1AscUJBQ0UsOERBQUNnQjtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVO3NCQUVYLDRFQUFDeEIsa0VBQVdBO2dCQUFFeUIsSUFBSUMsS0FBS0MsR0FBRztnQkFBRUMsT0FBT0YsS0FBS0csU0FBUztnQkFBRUMsVUFBVUosS0FBS0ssY0FBYzs7Ozs7Ozs7Ozs7Ozs7OztBQUsxRjtHQWxDTTlCO0tBQUFBO0FBb0NOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29udGFjdHMvcGFnZS50c3g/MmU3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRhY3RDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvdWkvY29udGFjdENhcmQnXHJcblxyXG5jb25zdCBQYWdlOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPGFueSB8IG51bGw+KG51bGwpO1xyXG4gICAgY29uc3QgW290aGVyVXNlcnMsIHNldE90aGVyVXNlcnNdID0gdXNlU3RhdGU8YW55W10gfCBudWxsPihbXSlcclxuICAgIGNvbnN0IGNvbnRhY3RzID0gW1wiNjYxMDZiMTFjMWQwOGMyNzI0NGQwOGM0XCIsIF1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC91c2VyLyR7bG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJpZCcpfWApO1xyXG4gICAgICAgICAgICBjb25zdCB1c2VyMSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXIxKVxyXG4gICAgICAgICAgICBzZXRVc2VyKHVzZXIxLnVzZXIpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICAgICAgICAgICAgICBjb250YWN0cy5tYXAoYXN5bmMgKG90aGVyaWQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbmV3cmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6NDAwMC91c2VyLyR7b3RoZXJpZH1gKTtcclxuICAgICAgICAgICAgICAgICAgY29uc3Qgb3RoZXIgPSBhd2FpdCBuZXdyZXMuanNvbigpO1xyXG4gICAgICAgICAgICAgICAgICBzZXRPdGhlclVzZXJzKChwcmV2KSA9PiBbLi4ucHJldiwgb3RoZXJdKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfTtcclxuICAgIFxyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSwgW10pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBteC1hdXRvIHB5LThcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGxnOmdyaWQtY29scy0zIGdhcC00XCI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8Q29udGFjdENhcmQgIGlkPXtkYXRhLl9pZH0gdGl0bGU9e2RhdGEuZmlyc3ROYW1lfSBzdWJ0aXRsZT17ZGF0YS5hdXRob3JpdHlMZXZlbH0gLz5cclxuICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQ29udGFjdENhcmQiLCJQYWdlIiwidXNlciIsInNldFVzZXIiLCJvdGhlclVzZXJzIiwic2V0T3RoZXJVc2VycyIsImNvbnRhY3RzIiwiZmV0Y2hEYXRhIiwicmVzIiwiZmV0Y2giLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwidXNlcjEiLCJqc29uIiwiY29uc29sZSIsImxvZyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJvdGhlcmlkIiwibmV3cmVzIiwib3RoZXIiLCJwcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwiaWQiLCJkYXRhIiwiX2lkIiwidGl0bGUiLCJmaXJzdE5hbWUiLCJzdWJ0aXRsZSIsImF1dGhvcml0eUxldmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/contacts/page.tsx\n"));

/***/ })

});