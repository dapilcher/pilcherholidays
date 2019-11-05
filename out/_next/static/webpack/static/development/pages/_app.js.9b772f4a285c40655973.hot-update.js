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
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  .navbar {\n    box-sizing: border-box;\n    background-color: ", ";\n    color: ", ";\n    display: flex;\n    flex-wrap: wrap;\n    position: relative;\n    left: 0;\n    top: 0;\n    right: 0;\n    height: 5rem;\n    justify-content: space-between;\n    align-items: center;\n    z-index: 1000;\n    &.active .items {\n      left: 0;\n    }\n  }\n  a {\n    text-decoration: none;\n    color: white;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n  .site-name {\n    font-family: Merriweather;\n    font-size: 1.7rem;\n    width: 100%;\n    text-align: center;\n  }\n  .item {\n    .link {\n      width: 100%;\n      display: inline-block;\n      font-size: 1.5rem;\n      background-color: ", ";\n      text-align: center;\n      white-space: nowrap;\n      padding: 1.5rem 0;\n      &:hover {\n        cursor: pointer;\n        background-color: ", ";\n      }\n    }\n  }\n  .items {\n    width: 100%;\n    order: 2;\n    position: absolute;\n    top: 5rem;\n    left: -100vw;\n    transition: left 400ms ease-in-out;\n  }\n  .toggle {\n    padding: 1rem 2rem;\n    order: 1;\n    position: absolute;\n    right: 0;\n    z-index: 11;\n    button {\n      font-size: 1.7rem;\n      color: ", ";\n      padding: 0;\n      margin: 0;\n      background: none;\n      border: none;\n      outline: none;\n      height: 2rem;\n      width: 2rem;\n      &:active {\n        outline: none;\n      }\n      &:focus {\n        outline: none;\n      }\n      &:hover {\n        cursor: pointer;\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// components/Navbar.js




var StyledNav = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].nav(_templateObject(), function (p) {
  return p.theme.lightgreen;
}, function (p) {
  return p.theme.white;
}, function (p) {
  return p.theme.red;
}, function (p) {
  return p.theme.lightred;
}, function (p) {
  return p.theme.white;
});

var NavItem = function NavItem(_ref) {
  var text = _ref.text,
      href = _ref.href;
  return __jsx("li", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("a", {
    className: "item link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, text)));
};

var Navbar = function Navbar(_ref2) {
  var menuIsOpen = _ref2.menuIsOpen,
      toggleMenu = _ref2.toggleMenu;
  return __jsx(StyledNav, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("ul", {
    className: "navbar".concat(menuIsOpen ? " active" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, __jsx("li", {
    className: "site-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Pilcher Holidays")), __jsx("li", {
    className: "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, __jsx(NavItem, {
    text: "Home",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx(NavItem, {
    text: "Articles",
    href: "/articles",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx(NavItem, {
    text: "Podcast",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }))), __jsx("li", {
    className: "toggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx("button", {
    onClick: toggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(_components_MenuIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
    menuIsOpen: menuIsOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_styles_Reset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/styles/Reset */ "./components/styles/Reset.js");
/* harmony import */ var _components_styles_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/styles/theme */ "./components/styles/theme.js");
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Navbar */ "./components/Navbar.js");
/* harmony import */ var _components_Meta__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Meta */ "./components/Meta.js");
/* harmony import */ var _components_Page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Page */ "./components/Page.js");







var _jsxFileName = "/Users/dpilcher/dev/pilcherholidays/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  html {\n    font-family: 'Raleway', sans-serif\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_6__["default"])(["\n  max-width: 100%;\n  padding: 1rem;\n  z-index: -1;\n  height: auto;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Inner = styled_components__WEBPACK_IMPORTED_MODULE_9__["default"].div(_templateObject());
var Global = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["createGlobalStyle"])(_templateObject2());

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false),
          menuIsOpen = _useState[0],
          setMenuIsOpen = _useState[1];

      var toggleMenu = function toggleMenu() {
        return setMenuIsOpen(!menuIsOpen);
      };

      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, __jsx(_components_Meta__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), __jsx(styled_components__WEBPACK_IMPORTED_MODULE_9__["ThemeProvider"], {
        theme: _components_styles_theme__WEBPACK_IMPORTED_MODULE_11__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, __jsx(_components_Page__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, __jsx(_components_styles_Reset__WEBPACK_IMPORTED_MODULE_10__["Reset"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), __jsx(Global, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), __jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
        menuIsOpen: menuIsOpen,
        toggleMenu: toggleMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), __jsx(Inner, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }))))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_8___default.a);

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ })

})
//# sourceMappingURL=_app.js.9b772f4a285c40655973.hot-update.js.map