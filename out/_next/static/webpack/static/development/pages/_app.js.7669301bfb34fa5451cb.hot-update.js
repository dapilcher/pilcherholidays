webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/MenuIcon.js":
/*!********************************!*\
  !*** ./components/MenuIcon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/Users/dpilcher/dev/pilcherholidays/components/MenuIcon.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: auto;\n  width: auto;\n  position: relative;\n  .icon {\n    background-color: white;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    &.hamburger {\n      width: 1.5rem;\n      height: 0.25rem;\n      transition: transform 250ms ease-in-out;\n      transform: rotate(0);\n      position: absolute;\n      border-radius: 0.3rem;\n      &:before,\n      &:after {\n        border-radius: 0.3rem;\n        transform: rotate(0);\n        content: \"\";\n        width: 1.5rem;\n        height: 0.25rem;\n        background-color: white;\n        position: absolute;\n        left: 0;\n      }\n      &:before {\n        top: -0.5rem;\n        transition: top 250ms ease-in-out, transform 250ms ease-in-out;\n      }\n      &:after {\n        bottom: -0.5rem;\n        transition: bottom 250ms ease-in-out, transform 250ms ease-in-out;\n      }\n    }\n    &.times {\n      width: 1.5rem;\n      height: 0.25rem;\n      transform: rotate(-45deg);\n      transition: transform 250ms ease-in-out;\n      position: absolute;\n      border-radius: 0.3rem;\n      &:before,\n      &:after {\n        border-radius: 0.3rem;\n        transform: rotate(90deg);\n        content: \"\";\n        width: 1.5rem;\n        height: 0.25rem;\n        background-color: white;\n        position: absolute;\n        left: 0;\n      }\n      &:before {\n        top: 0;\n        transition: top 200ms ease-in-out, transform 250ms ease-in-out;\n      }\n      &:after {\n        bottom: 0;\n        transition: bottom 200ms ease-in-out, transform 250ms ease-in-out;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var MightyMorphinMenuIcon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var MenuIcon = function MenuIcon(_ref) {
  var menuIsOpen = _ref.menuIsOpen;
  return __jsx(MightyMorphinMenuIcon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("span", {
    className: "icon ".concat(menuIsOpen ? "times" : "hamburger"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuIcon);

/***/ })

})
//# sourceMappingURL=_app.js.7669301bfb34fa5451cb.hot-update.js.map