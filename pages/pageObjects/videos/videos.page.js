'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _base = require('../_base.page');

var _base2 = _interopRequireDefault(_base);

var _videos = require('./videos.uiMap');

var _videos2 = _interopRequireDefault(_videos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _elements = void 0;

/**
 * @class Videos_page
 * @summary This page object represents the in-app upgrades page available to non-packaged pro accounts
 * @extends BasePage
 */

var Videos_page = function (_BasePage) {
    _inherits(Videos_page, _BasePage);

    _createClass(Videos_page, [{
        key: 'name',


        /* Default Functions */
        get: function get() {
            return 'Videos Page';
        }
    }]);

    function Videos_page() {
        _classCallCheck(this, Videos_page);

        var _this = _possibleConstructorReturn(this, (Videos_page.__proto__ || Object.getPrototypeOf(Videos_page)).call(this));

        _elements = new _videos2.default();
        return _this;
    }

    _createClass(Videos_page, [{
        key: 'getPageUrl',
        value: function getPageUrl() {
            return _elements.url;
        }
    }, {
        key: 'pageLoadIndicator',
        value: function pageLoadIndicator() {
            return this.findSelector('Lonely Logo');
        }
    }, {
        key: 'findSelector',
        value: function findSelector(target) {
            switch (target) {
                case 'Lonely Logo':
                    return _elements.aLonelyLogo;
                case 'Videos':
                    return _elements.aNavVideos;
                case 'Destinations':
                    return _elements.aNavDestinations;
                case 'Bookings':
                    return _elements.aNavBookings;
                case 'Search':
                    return _elements.search;
                case 'Shop':
                    return _elements.aNavShop;
                case 'Sign In':
                    return _elements.aNavSignIn;
                default:
                    var error = new Error('\nMessage:\n    Element ' + target + ' is not defined on the ' + this.name + '\nStack Trace:'); // eslint-disable-line prefer-const
                    error.message = '' + error.stack;
                    throw error;
            }
        }
        /* Page-Specific Functions */

    }]);

    return Videos_page;
}(_base2.default);

exports.default = Videos_page;