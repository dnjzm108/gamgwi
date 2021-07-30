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
var ButtonDetail = {
  'marginRight': '10px'
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3dyaXRlL1RleHRBcmVhLmpzeCJdLCJuYW1lcyI6WyJUZXh0QXJlYSIsIndyaXRlVGl0bGUiLCJ1c2VJbnB1dCIsIndyaXRlQ29udGVudCIsImhhZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIldyaXRlV3JhcCIsIlN0eWxlZCIsIklucHV0VGl0bGUiLCJJbnB1dENvbnRlbnQiLCJCdXR0b25Cb3giLCJCdXR0b25EZXRhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUNuQixNQUFNQyxVQUFVLEdBQUdDLHdEQUFRLENBQUMsRUFBRCxDQUEzQjtBQUNBLE1BQU1DLFlBQVksR0FBR0Qsd0RBQVEsQ0FBQyxFQUFELENBQTdCOztBQUVBLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBTztBQUN2QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZUCxVQUFaO0FBQ0FNLFdBQU8sQ0FBQ0MsR0FBUixDQUFZTCxZQUFaO0FBQ0gsR0FKRDs7QUFLQSxzQkFDSTtBQUFBLDJCQUNJLDhEQUFDLFNBQUQ7QUFBQSw2QkFDSTtBQUFNLGdCQUFRLEVBQUVDLFdBQWhCO0FBQUEsZ0NBQ0k7QUFBQSxrQ0FDSSw4REFBQyxVQUFEO0FBQVksZ0JBQUksRUFBQztBQUFqQixhQUE0QkgsVUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixlQUVJLDhEQUFDLFlBQUQsb0JBQWtCRSxZQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQU1JLDhEQUFDLFNBQUQ7QUFBQSxrQ0FHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISixlQUlJO0FBQVEsZ0JBQUksRUFBRyxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUFtQkgsQ0E1QkQ7O0dBQU1ILFE7VUFDaUJFLG9ELEVBQ0VBLG9EOzs7S0FGbkJGLFE7QUE4Qk4sK0RBQWVBLFFBQWY7QUFFQSxJQUFNUyxTQUFTLEdBQUdDLHFFQUFIO0FBQUE7QUFBQTtBQUFBLHdDQUFmO01BQU1ELFM7QUFPTixJQUFNRSxVQUFVLEdBQUdELHVFQUFIO0FBQUE7QUFBQTtBQUFBLHFLQUFoQjtNQUFNQyxVO0FBZU4sSUFBTUMsWUFBWSxHQUFHRiwwRUFBSDtBQUFBO0FBQUE7QUFBQSxrTUFBbEI7TUFBTUUsWTtBQW1CTixJQUFNQyxTQUFTLEdBQUdILHFFQUFIO0FBQUE7QUFBQTtBQUFBLG1HQUFmO01BQU1HLFM7QUFRTixJQUFNQyxZQUFZLEdBQUc7QUFDakIsaUJBQWU7QUFERSxDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy93cml0ZS40Mjk5NjA5ZmMyZmJkZDk2NWExNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xyXG5pbXBvcnQgU3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHVzZUlucHV0IGZyb20gJy4uLy4uL2hvb2tzL3VzZUlucHV0JztcclxuXHJcbmNvbnN0IFRleHRBcmVhID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgd3JpdGVUaXRsZSA9IHVzZUlucHV0KCcnKVxyXG4gICAgY29uc3Qgd3JpdGVDb250ZW50ID0gdXNlSW5wdXQoJycpXHJcblxyXG4gICAgY29uc3QgaGFkbGVTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHdyaXRlVGl0bGUpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHdyaXRlQ29udGVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxXcml0ZVdyYXA+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFkbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFRpdGxlIHR5cGU9XCJ0ZXh0XCIgey4uLndyaXRlVGl0bGV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dENvbnRlbnQgey4uLndyaXRlQ29udGVudH0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbkJveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0eWxlPXtCdXR0b25EZXRhaWx9Puy3qOyGjDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIj7soIDsnqU8L0J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+7Leo7IaMPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZSA9ICdzdWJtaXQnPuyggOyepTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uQm94PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L1dyaXRlV3JhcD5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dEFyZWFcclxuXHJcbmNvbnN0IFdyaXRlV3JhcCA9IFN0eWxlZC5kaXZgXHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICBoZWlnaHQgOiA3MHZoO1xyXG4gICAgbWFyZ2luIDogMDtcclxuYFxyXG5cclxuXHJcbmNvbnN0IElucHV0VGl0bGUgPSBTdHlsZWQuaW5wdXRgXHJcbiAgICB3aWR0aCA6IDk4JTtcclxuICAgIGhlaWdodCA6IDM1cHg7XHJcbiAgICBib3JkZXIgOiAxcHggc29saWQgbGlnaHRncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplIDogMjBweDtcclxuICAgIFxyXG4gICAgOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY4cHgpe1xyXG4gICAgICAgIHdpZHRoOiA5OS41JTtcclxuICAgIH1cclxuXHJcbmBcclxuY29uc3QgSW5wdXRDb250ZW50ID0gU3R5bGVkLnRleHRhcmVhYFxyXG4gICAgLy9tYXJnaW46IDBweDtcclxuICAgIHdpZHRoOiA5OCU7XHJcbiAgICBoZWlnaHQ6IDM0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIGJvcmRlciA6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemUgOiAyMHB4O1xyXG5cclxuICAgIDpmb2N1cyB7XHJcbiAgICAgICAgb3V0bGluZTpub25lO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAgICAgd2lkdGg6IDk5LjUlO1xyXG4gICAgICAgIGhlaWdodDogNDd2aDtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgQnV0dG9uQm94ID0gU3R5bGVkLmRpdmBcclxuICAgIHRleHQtYWxpZ24gOiByaWdodDtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjhweCl7XHJcbiAgICAgICAgaGVpZ2h0IDogYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAxMDBweCAwIDAgMDtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgQnV0dG9uRGV0YWlsID0ge1xyXG4gICAgJ21hcmdpblJpZ2h0JzogJzEwcHgnLFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==