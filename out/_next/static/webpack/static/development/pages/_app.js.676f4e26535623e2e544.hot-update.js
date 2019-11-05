webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_MenuIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MenuIcon */ "./components/MenuIcon.js");

var _jsxFileName = "/Users/dpilcher/dev/pilcherholidays/components/Navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .navbar {\n    box-sizing: border-box;\n    background-color: ", ";\n    color: white;\n    display: flex;\n    flex-wrap: wrap;\n    position: relative;\n    left: 0;\n    top: 0;\n    right: 0;\n    height: 5rem;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 1000;\n    &.active .items {\n      left: 0;\n    }\n  }\n  a {\n    text-decoration: none;\n    color: white;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n  .site-name {\n    font-family: Merriweather;\n    font-size: 1.7rem;\n    width: 100%;\n    text-align: center;\n  }\n  .logo {\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    z-index: 10;\n    position: absolute;\n    top: 0.5rem;\n    left: 0;\n    right: 0;\n    .logo-circle {\n      height: 5.8rem;\n      width: 5.8rem;\n      border-radius: 50%;\n      background-color: white;\n      border: 5px solid red;\n      img {\n        height: inherit;\n        width: inherit;\n      }\n    }\n  }\n  .item {\n    .link {\n      width: 100%;\n      display: inline-block;\n      font-size: 1.5rem;\n      background-color: red;\n      text-align: center;\n      white-space: nowrap;\n      padding: 1.5rem 0;\n      &:hover {\n        cursor: pointer;\n        background-color: blue;\n      }\n    }\n  }\n  .items {\n    width: 100%;\n    order: 2;\n    position: absolute;\n    top: 5rem;\n    left: -100vw;\n    transition: left 400ms ease-in-out;\n  }\n  .toggle {\n    padding: 1rem 2rem;\n    order: 1;\n    position: absolute;\n    right: 0;\n    z-index: 11;\n    button {\n      font-size: 1.7rem;\n      color: white;\n      padding: 0;\n      margin: 0;\n      background: none;\n      border: none;\n      outline: none;\n      height: 2rem;\n      width: 2rem;\n      &:active {\n        outline: none;\n      }\n      &:focus {\n        outline: none;\n      }\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// components/Navbar.js




var StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].nav(_templateObject(), function (p) {
  return p.theme.green;
});

var NavItem = function NavItem(_ref) {
  var text = _ref.text,
      href = _ref.href;
  return __jsx("li", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("a", {
    className: "item link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, text)));
};

var Navbar = function Navbar() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      menuIsOpen = _useState[0],
      setMenuIsOpen = _useState[1];

  var toggleMenu = function toggleMenu() {
    return setMenuIsOpen(!menuIsOpen);
  };

  return __jsx(StyledNav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("ul", {
    className: "navbar".concat(menuIsOpen ? " active" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("li", {
    className: "site-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Pilcher Holidays")), __jsx("li", {
    className: "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx(NavItem, {
    text: "Home",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), __jsx(NavItem, {
    text: "Articles",
    href: "/articles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), __jsx(NavItem, {
    text: "Podcast",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }))), __jsx("li", {
    className: "toggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx("button", {
    onClick: toggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx(_components_MenuIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    menuIsOpen: menuIsOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=_app.js.676f4e26535623e2e544.hot-update.js.map