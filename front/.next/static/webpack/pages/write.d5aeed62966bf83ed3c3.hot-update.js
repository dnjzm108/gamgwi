self["webpackHotUpdate_N_E"]("pages/write",{

/***/ "./component/write/TextArea.jsx":
/*!**************************************!*\
  !*** ./component/write/TextArea.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Blockchain_html_0727_TeamProject_gamgwi_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useInput */ "./hooks/useInput.jsx");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Blockchain_html\\0727_TeamProject\\gamgwi\\front\\component\\write\\TextArea.jsx",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Blockchain_html_0727_TeamProject_gamgwi_front_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var TextArea = function TextArea() {
  _s();

  var writeTitle = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)('');
  var writeContent = (0,_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default)('');

  var hadleSubmit = function hadleSubmit(e) {
    e.preventDefault();
    console.log(writeTitle);
    console.log(writeContent);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WriteWrap, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
        onSubmit: hadleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputTitle, _objectSpread({
            type: "text"
          }, writeTitle), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(InputContent, _objectSpread({}, writeContent), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ButtonBox, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            children: "\uCDE8\uC18C"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            type: "submit",
            children: "\uC800\uC7A5"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(TextArea, "qhs4jESddAs8TT7P1wISv+jTIdI=", false, function () {
  return [_hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default, _hooks_useInput__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = TextArea;
/* harmony default export */ __webpack_exports__["default"] = (TextArea);
var WriteWrap = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "TextArea__WriteWrap",
  componentId: "sc-62xr63-0"
})(["width:100%;height:70vh;margin:0;"]);
_c2 = WriteWrap;
var InputTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.input.withConfig({
  displayName: "TextArea__InputTitle",
  componentId: "sc-62xr63-1"
})(["width:98%;height:35px;border:1px solid lightgray;border-radius:5px;font-size:20px;:focus{outline:none;}@media only screen and (min-width:768px){width:99.5%;}"]);
_c3 = InputTitle;
var InputContent = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.textarea.withConfig({
  displayName: "TextArea__InputContent",
  componentId: "sc-62xr63-2"
})(["width:98%;height:340px;margin-top:30px;border:1px solid lightgray;border-radius:5px;font-size:20px;:focus{outline:none;}@media only screen and (min-width:768px){width:99.5%;height:47vh;}"]);
_c4 = InputContent;
var ButtonBox = styled_components__WEBPACK_IMPORTED_MODULE_3__.default.div.withConfig({
  displayName: "TextArea__ButtonBox",
  componentId: "sc-62xr63-3"
})(["text-align:right;@media only screen and (min-width:768px){height:auto;padding:100px 0 0 0;}"]);
_c5 = ButtonBox;

var _c, _c2, _c3, _c4, _c5;

$RefreshReg$(_c, "TextArea");
$RefreshReg$(_c2, "WriteWrap");
$RefreshReg$(_c3, "InputTitle");
$RefreshReg$(_c4, "InputContent");
$RefreshReg$(_c5, "ButtonBox");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3dyaXRlL1RleHRBcmVhLmpzeCJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIndyaXRlVGl0bGUiLCJ1c2VJbnB1dCIsIndyaXRlQ29udGVudCIsImhhZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIldyaXRlV3JhcCIsIlN0eWxlZCIsIklucHV0VGl0bGUiLCJJbnB1dENvbnRlbnQiLCJCdXR0b25Cb3giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxVQUFVLEdBQUdDLHdEQUFRLENBQUMsRUFBRCxDQUEzQjtBQUNBLE1BQU1DLFlBQVksR0FBR0Qsd0RBQVEsQ0FBQyxFQUFELENBQTdCOztBQUVBLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN2QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxVQUFaO0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxZQUFaO0FBQ0gsR0FKRDs7QUFLQSxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLFNBQUQ7QUFBQSw2QkFDSTtBQUFNLGdCQUFRLEVBQUVDLFdBQWhCO0FBQUEsZ0NBQ0k7QUFBQSxrQ0FDSSw4REFBQyxVQUFEO0FBQVksZ0JBQUksRUFBQztBQUFqQixhQUE0QkgsVUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLDhEQUFDLFlBQUQsb0JBQWtCRSxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU1JLDhEQUFDLFNBQUQ7QUFBQSxrQ0FHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJO0FBQVEsZ0JBQUksRUFBRyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFtQkgsQ0E1QkQ7O0dBQU1ILFE7VUFDaUJFLG9ELEVBQ0VBLG9EOzs7S0FGbkJGLFE7QUE4Qk4sK0RBQWVBLFFBQWY7QUFFQSxJQUFNUyxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHdDQUFmO01BQU1ELFM7QUFPTixJQUFNRSxVQUFVLEdBQUdELHVFQUFIO0FBQUE7QUFBQTtBQUFBLHFLQUFoQjtNQUFNQyxVO0FBZU4sSUFBTUMsWUFBWSxHQUFHRiwwRUFBSDtBQUFBO0FBQUE7QUFBQSxrTUFBbEI7TUFBTUUsWTtBQW1CTixJQUFNQyxTQUFTLEdBQUdILHFFQUFIO0FBQUE7QUFBQTtBQUFBLG1HQUFmO01BQU1HLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvd3JpdGUuZDVhZWVkNjI5NjZiZjgzZWQzYzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCB1c2VJbnB1dCBmcm9tICcuLi8uLi9ob29rcy91c2VJbnB1dCc7XHJcblxyXG5jb25zdCBUZXh0QXJlYSA9ICgpID0+IHtcclxuICAgIGNvbnN0IHdyaXRlVGl0bGUgPSB1c2VJbnB1dCgnJylcclxuICAgIGNvbnN0IHdyaXRlQ29udGVudCA9IHVzZUlucHV0KCcnKVxyXG5cclxuICAgIGNvbnN0IGhhZGxlU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zb2xlLmxvZyh3cml0ZVRpdGxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh3cml0ZUNvbnRlbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8V3JpdGVXcmFwPlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRUaXRsZSB0eXBlPVwidGV4dFwiIHsuLi53cml0ZVRpdGxlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRDb250ZW50IHsuLi53cml0ZUNvbnRlbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25Cb3g+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBzdHlsZT17QnV0dG9uRGV0YWlsfT7st6jshow8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCI+7KCA7J6lPC9CdXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPuy3qOyGjDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGUgPSAnc3VibWl0Jz7soIDsnqU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbkJveD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9Xcml0ZVdyYXA+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRBcmVhXHJcblxyXG5jb25zdCBXcml0ZVdyYXAgPSBTdHlsZWQuZGl2YFxyXG4gICAgd2lkdGggOiAxMDAlO1xyXG4gICAgaGVpZ2h0IDogNzB2aDtcclxuICAgIG1hcmdpbiA6IDA7XHJcbmBcclxuXHJcblxyXG5jb25zdCBJbnB1dFRpdGxlID0gU3R5bGVkLmlucHV0YFxyXG4gICAgd2lkdGggOiA5OCU7XHJcbiAgICBoZWlnaHQgOiAzNXB4O1xyXG4gICAgYm9yZGVyIDogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZSA6IDIwcHg7XHJcbiAgICBcclxuICAgIDpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KXtcclxuICAgICAgICB3aWR0aDogOTkuNSU7XHJcbiAgICB9XHJcblxyXG5gXHJcbmNvbnN0IElucHV0Q29udGVudCA9IFN0eWxlZC50ZXh0YXJlYWBcclxuICAgIC8vbWFyZ2luOiAwcHg7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgaGVpZ2h0OiAzNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBib3JkZXIgOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplIDogMjBweDtcclxuXHJcbiAgICA6Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6bm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgICAgIHdpZHRoOiA5OS41JTtcclxuICAgICAgICBoZWlnaHQ6IDQ3dmg7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IEJ1dHRvbkJveCA9IFN0eWxlZC5kaXZgXHJcbiAgICB0ZXh0LWFsaWduIDogcmlnaHQ7XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgICAgIGhlaWdodCA6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzogMTAwcHggMCAwIDA7XHJcbiAgICB9XHJcbmAiXSwic291cmNlUm9vdCI6IiJ9