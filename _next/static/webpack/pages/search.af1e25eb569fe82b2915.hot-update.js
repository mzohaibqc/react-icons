webpackHotUpdate_N_E("pages/search",{

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
false,

/***/ "./node_modules/@loadable/component/dist/loadable.esm.js":
false,

/***/ "./node_modules/cogo-toast/dist/index.es.js":
false,

/***/ "./node_modules/copy-to-clipboard/index.js":
false,

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/react-dom/cjs/react-dom.development.js":
false,

/***/ "./node_modules/react-dom/index.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler-tracing.development.js":
false,

/***/ "./node_modules/scheduler/cjs/scheduler.development.js":
false,

/***/ "./node_modules/scheduler/index.js":
false,

/***/ "./node_modules/scheduler/tracing.js":
false,

/***/ "./node_modules/tiny-skeleton-loader-react/dist/index.es.js":
false,

/***/ "./node_modules/toggle-selection/index.js":
false,

/***/ "./src/components/@core/icon/index.tsx":
false,

/***/ "./src/components/pages/search/index.tsx":
/*!***********************************************!*\
  !*** ./src/components/pages/search/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchPageComponent; });\n/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _utils_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utils/icon */ \"./src/utils/icon.tsx\");\n/* harmony import */ var _utils_search_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @utils/search-context */ \"./src/utils/search-context.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/apple/Projects/react-icons/packages/preview/src/components/pages/search/index.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;\n\n\n\nfunction SearchPageComponent() {\n  _s();\n\n  var allIcons = _utils_icon__WEBPACK_IMPORTED_MODULE_1__[\"ALL_ICONS\"];\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(40),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      fontSize = _React$useState2[0],\n      setFontSize = _React$useState2[1];\n\n  console.log('🚀 ~ file: index.tsx ~ line 10 ~ SearchPageComponent ~ fontSize', fontSize);\n\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_3___default.a.useContext(_utils_search_context__WEBPACK_IMPORTED_MODULE_2__[\"Context\"]),\n      query = _React$useContext.query;\n\n  if (query.length > 1) {\n    var hightlightPattern = new RegExp(\"(\".concat(query, \")\"), \"i\");\n    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(\"h2\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 9\n      }\n    }, \"Results for: \", __jsx(\"i\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 24\n      }\n    }, query)), __jsx(\"div\", {\n      className: \"slider-container\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 9\n      }\n    }, __jsx(\"label\", {\n      htmlFor: \"font-size-slider\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }\n    }, \"Icon Size\"), __jsx(\"input\", {\n      id: \"font-size-slider\",\n      className: \"font-size-slider\",\n      type: \"range\",\n      min: 25,\n      max: 50,\n      value: fontSize,\n      onChange: function onChange(e) {\n        return setFontSize(Number(e.target.value));\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }\n    })), __jsx(\"h3\", {\n      className: \"no-results\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 10\n      }\n    }));\n  }\n\n  return __jsx(\"h2\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 10\n    }\n  }, \"Please enter at least 2 characters to search...\");\n}\n\n_s(SearchPageComponent, \"RYtCuqzaQKIbQUPppg2V5Q67bYE=\");\n\n_c = SearchPageComponent;\n\nvar _c;\n\n$RefreshReg$(_c, \"SearchPageComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcGFnZXMvc2VhcmNoL2luZGV4LnRzeD84OTY5Il0sIm5hbWVzIjpbIlNlYXJjaFBhZ2VDb21wb25lbnQiLCJhbGxJY29ucyIsIkFMTF9JQ09OUyIsIlJlYWN0IiwidXNlU3RhdGUiLCJmb250U2l6ZSIsInNldEZvbnRTaXplIiwiY29uc29sZSIsImxvZyIsInVzZUNvbnRleHQiLCJDb250ZXh0IiwicXVlcnkiLCJsZW5ndGgiLCJoaWdodGxpZ2h0UGF0dGVybiIsIlJlZ0V4cCIsImUiLCJOdW1iZXIiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUllLFNBQVNBLG1CQUFULEdBQStCO0FBQUE7O0FBQzVDLE1BQU1DLFFBQVEsR0FBR0MscURBQWpCOztBQUNBLHdCQUFnQ0MsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FBaEM7QUFBQTtBQUFBLE1BQU9DLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlFQUFaLEVBQStFSCxRQUEvRTs7QUFFQSwwQkFBa0JGLDRDQUFLLENBQUNNLFVBQU4sQ0FBaUJDLDZEQUFqQixDQUFsQjtBQUFBLE1BQVFDLEtBQVIscUJBQVFBLEtBQVI7O0FBRUEsTUFBSUEsS0FBSyxDQUFDQyxNQUFOLEdBQWUsQ0FBbkIsRUFBc0I7QUFDcEIsUUFBTUMsaUJBQWlCLEdBQUcsSUFBSUMsTUFBSixZQUFlSCxLQUFmLFFBQXlCLEdBQXpCLENBQTFCO0FBQ0EsV0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUNlO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSUEsS0FBSixDQURmLENBREYsRUFJRTtBQUFLLGVBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTyxhQUFPLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixFQUVFO0FBQ0UsUUFBRSxFQUFDLGtCQURMO0FBRUUsZUFBUyxFQUFDLGtCQUZaO0FBR0UsVUFBSSxFQUFDLE9BSFA7QUFJRSxTQUFHLEVBQUUsRUFKUDtBQUtFLFNBQUcsRUFBRSxFQUxQO0FBTUUsV0FBSyxFQUFFTixRQU5UO0FBT0UsY0FBUSxFQUFFLGtCQUFDVSxDQUFEO0FBQUEsZUFBT1QsV0FBVyxDQUFDVSxNQUFNLENBQUNELENBQUMsQ0FBQ0UsTUFBRixDQUFTQyxLQUFWLENBQVAsQ0FBbEI7QUFBQSxPQVBaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQUpGLEVBMEJHO0FBQUksZUFBUyxFQUFDLFlBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQTFCSCxDQURGO0FBOEJEOztBQUNELFNBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1REFBUDtBQUNEOztHQXpDdUJsQixtQjs7S0FBQUEsbUIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9wYWdlcy9zZWFyY2gvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQUxMX0lDT05TIH0gZnJvbSBcIkB1dGlscy9pY29uXCI7XG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIkB1dGlscy9zZWFyY2gtY29udGV4dFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgU2VhcmNoSWNvblNldCBmcm9tIFwiLi9zZWFyY2gtaWNvbnNldFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hQYWdlQ29tcG9uZW50KCkge1xuICBjb25zdCBhbGxJY29ucyA9IEFMTF9JQ09OUztcbiAgY29uc3QgW2ZvbnRTaXplLCBzZXRGb250U2l6ZV0gPSBSZWFjdC51c2VTdGF0ZSg0MCk7XG4gIGNvbnNvbGUubG9nKCfwn5qAIH4gZmlsZTogaW5kZXgudHN4IH4gbGluZSAxMCB+IFNlYXJjaFBhZ2VDb21wb25lbnQgfiBmb250U2l6ZScsIGZvbnRTaXplKVxuXG4gIGNvbnN0IHsgcXVlcnkgfSA9IFJlYWN0LnVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgaWYgKHF1ZXJ5Lmxlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBoaWdodGxpZ2h0UGF0dGVybiA9IG5ldyBSZWdFeHAoYCgke3F1ZXJ5fSlgLCBcImlcIik7XG4gICAgcmV0dXJuIChcbiAgICAgIDw+XG4gICAgICAgIDxoMj5cbiAgICAgICAgICBSZXN1bHRzIGZvcjogPGk+e3F1ZXJ5fTwvaT5cbiAgICAgICAgPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbGlkZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmb250LXNpemUtc2xpZGVyXCI+SWNvbiBTaXplPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwiZm9udC1zaXplLXNsaWRlclwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXNpemUtc2xpZGVyXCJcbiAgICAgICAgICAgIHR5cGU9XCJyYW5nZVwiXG4gICAgICAgICAgICBtaW49ezI1fVxuICAgICAgICAgICAgbWF4PXs1MH1cbiAgICAgICAgICAgIHZhbHVlPXtmb250U2l6ZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Rm9udFNpemUoTnVtYmVyKGUudGFyZ2V0LnZhbHVlKSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17YGljb25zIGZvbnQtc2l6ZS1gfT5cbiAgICAgICAgICB7YWxsSWNvbnMubWFwKChpY29uKSA9PiAoXG4gICAgICAgICAgICA8U2VhcmNoSWNvblNldFxuICAgICAgICAgICAgICBrZXk9e2ljb24uaWR9XG4gICAgICAgICAgICAgIGljb249e2ljb259XG4gICAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgICAgICAgaGlnaGxpZ2h0UGF0dGVybj17aGlnaHRsaWdodFBhdHRlcm59XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICA8aDMgY2xhc3NOYW1lPVwibm8tcmVzdWx0c1wiLz5cbiAgICAgIDwvPlxuICAgICk7XG4gIH1cbiAgcmV0dXJuIDxoMj5QbGVhc2UgZW50ZXIgYXQgbGVhc3QgMiBjaGFyYWN0ZXJzIHRvIHNlYXJjaC4uLjwvaDI+O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/pages/search/index.tsx\n");

/***/ }),

/***/ "./src/components/pages/search/loading.tsx":
false,

/***/ "./src/components/pages/search/search-iconset.tsx":
false,

/***/ "./src/utils/getIcons.ts":
false

})