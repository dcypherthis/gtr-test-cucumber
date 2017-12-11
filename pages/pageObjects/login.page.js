'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('./_base.page');

var _base2 = _interopRequireDefault(_base);

var _login = require('../uiMaps/login.uiMap');

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _elements = void 0;

var Login_page = function (_Base_page2) {
    _inherits(Login_page, _Base_page2);

    _createClass(Login_page, [{
        key: 'name',


        /* Default Functions */
        get: function get() {
            return "Login Page";
        }
    }]);

    function Login_page() {
        _classCallCheck(this, Login_page);

        var _this = _possibleConstructorReturn(this, (Login_page.__proto__ || Object.getPrototypeOf(Login_page)).call(this));

        _elements = new _login2.default();
        return _this;
    }

    _createClass(Login_page, [{
        key: 'getPageUrl',
        value: function getPageUrl() {
            return _elements.url;
        }
    }, {
        key: 'pageLoadIndicator',
        value: function pageLoadIndicator() {
            return this.findSelector('Guitar Practice Header');
        }
    }, {
        key: 'findSelector',
        value: function findSelector(target) {
            switch (target) {
                case 'Guitar Practice Header':
                    return _elements.aNavHeading;
                case 'Songs Navigation Link':
                    return _elements.aNavSongs;
                case 'My Set Lists Navigation Link':
                    return _elements.aNavSetlists;
                case 'Profile Navigation Link':
                    return _elements.aNavProfile;
                case 'Logout':
                    return _elements.aNavLogout;
                case 'Home Page Message':
                    return _elements.h1Message;
                case 'Get Started Button':
                    return _elements.btnGetStarted;
                case 'username':
                    return _elements.inputUsername;
                case 'password':
                    return _elements.inputPassword;
                case 'save':
                    return _elements.btnSubmit;
                default:
                    var error = new Error('\nMessage:\n    Element ' + target + ' is not defined on the ' + this.name + '\nStack Trace:'); // eslint-disable-line prefer-const
                    error.message = '' + error.stack;
                    throw error;
            }
        }

        /* Page-Specific Functions */

    }, {
        key: 'submit',
        value: function submit() {
            this.waitAndClick('save');
        }
    }, {
        key: 'fillForm',
        value: function fillForm(username, password) {
            browser.waitForVisible(this.findSelector('Guitar Practice Header'));
            browser.setValue(this.findSelector('username'), username);
            browser.setValue(this.findSelector('password'), password);
        }
    }]);

    return Login_page;
}(_base2.default);

exports.default = Login_page;