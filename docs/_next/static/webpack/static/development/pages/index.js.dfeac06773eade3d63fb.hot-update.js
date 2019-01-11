webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/content/skills/index.tsx":
/*!*********************************************!*\
  !*** ./components/content/skills/index.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Skills; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums */ "./components/enums.ts");
/* harmony import */ var _section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../section */ "./components/content/section/index.tsx");
/* harmony import */ var _skill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skill */ "./components/content/skills/skill/index.tsx");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.css */ "./components/content/skills/styles.css");
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/damianfrizzi/iCloud Drive (Archiv)/Projekte/damian/components/content/skills/index.tsx";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Skills =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Skills, _PureComponent);

  function Skills() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Skills);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Skills)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "skills", [{
      category: 'JavaScript',
      expertise: 95,
      keywordsProficient: ['ES2016', 'ES2015', 'Node.JS', 'TypeScript', 'React', 'Redux', 'Next.js', 'RequireJS'],
      keywordsBasic: ['React Native', 'Vue.JS', 'AngularJS', 'Electron', 'WebGL (mainly Three.js)', 'Ionic', 'NativeScript', 'Phonegap/Cordova', 'Phaser']
    }, {
      category: 'HTML & CSS',
      expertise: 95,
      keywordsProficient: ['HTML5', 'CSS', 'CSS Modules', 'Sass'],
      keywordsBasic: ['Styled Components', 'Less', 'Stylus']
    }, {
      category: 'Version Control',
      expertise: 80,
      keywordsProficient: ['Git', 'SVN', 'Github', 'Bitbucket'],
      keywordsBasic: ['Hg']
    }, {
      category: 'Testing',
      expertise: 80,
      keywordsProficient: ['Unit & UI Testing (Snapshot & E2E)', 'react-testing-library', 'Enzyme', 'Jest', 'Chai', 'Cypress'],
      keywordsBasic: ['Browser Stack Live', 'Selenium']
    }, {
      category: 'Automation, Building & Packaging',
      expertise: 80,
      keywordsProficient: ['Webpack', 'Grunt', 'Gulp', 'Bower', 'Yarn', 'npm']
    }, {
      category: 'GraphQL',
      expertise: 70,
      keywordsProficient: ['Apollo Server', 'Apollo Client'],
      keywordsBasic: ['Prisma']
    }, {
      category: 'CI, CD & DevOps',
      expertise: 50,
      keywordsProficient: ['VSTS', 'TeamCity', 'Docker'],
      keywordsBasic: ['Azure', 'Kubernetes']
    }, {
      category: 'C# & .NET',
      expertise: 30,
      keywordsBasic: ['ASP.NET Web API']
    }, {
      category: 'PHP & MySQL',
      expertise: 30,
      keywordsBasic: ['Wordpress', 'Magento', 'Symfony']
    }]);

    return _this;
  }

  _createClass(Skills, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_section__WEBPACK_IMPORTED_MODULE_2__["default"], {
        title: _enums__WEBPACK_IMPORTED_MODULE_1__["Anchors"].Skills,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: _styles_css__WEBPACK_IMPORTED_MODULE_4___default.a.skillsWrapper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, this.skills.map(function (skill, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_skill__WEBPACK_IMPORTED_MODULE_3__["default"], {
          key: i,
          skill: skill,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68
          },
          __self: this
        });
      })));
    }
  }]);

  return Skills;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);



/***/ })

})
//# sourceMappingURL=index.js.dfeac06773eade3d63fb.hot-update.js.map