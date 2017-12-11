'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Base = require('../_Base.uiMap');

var _Base2 = _interopRequireDefault(_Base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A class with keys and values for css selectors
 */
var UiMap = function (_Base_uiMap2) {
    _inherits(UiMap, _Base_uiMap2);

    function UiMap() {
        _classCallCheck(this, UiMap);

        return _possibleConstructorReturn(this, (UiMap.__proto__ || Object.getPrototypeOf(UiMap)).apply(this, arguments));
    }

    _createClass(UiMap, [{
        key: 'url',


        /* URL & Title */
        get: function get() {
            return '' + browser.options.env.destinations_url;
        }
    }, {
        key: 'title',
        get: function get() {
            return 'head > title';
        }
    }, {
        key: 'titleText',
        get: function get() {
            return 'Lonely Planet travel destinations';
        }

        /* Page Contents */

    }, {
        key: 'aNavVideos',
        get: function get() {
            return 'li.js-nav-item:nth-child(2) > a:nth-child(1)'
        }
    }, {
        key: 'aNavDestinations',
        get: function get() {
            return 'li.js-nav-item:nth-child(3) > a:nth-child(1)'
        }
    }, {
        key: 'aNavBookings',
        get: function get() {
            return 'li.js-nav-item:nth-child(4) > a:nth-child(1)'
        }
    }, {
        key: 'aNavShop',
        get: function get() {
            return 'li.js-nav-item:nth-child(5) > a:nth-child(1)'
        }
    }, {
    }]);

    return UiMap;
}(_Base2.default);

exports.default = UiMap;