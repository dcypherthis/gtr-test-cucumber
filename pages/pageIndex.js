'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

//var _auth = require('./utilities/auth.util');

//var _auth2 = _interopRequireDefault(_auth);

var _account = require('./testData/account.data');

var _account2 = _interopRequireDefault(_account);

var _text = require('./utilities/text.util');

var Text = _interopRequireWildcard(_text);

var _dateTime = require('./utilities/dateTime.util');

var Time = _interopRequireWildcard(_dateTime);

var _window = require('./utilities/window.util');

var _window2 = _interopRequireDefault(_window);

var _home = require('./pageObjects/home/home.page');

var _home2 = _interopRequireDefault(_home);

var _videos = require('./pageObjects/videos/videos.page');

var _videos2 = _interopRequireDefault(_videos);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Exports **/

/** PageObjects **/

/** Data **/
/**
 * @class PageIndex
 * @summary An index of available page objects
 */

exports.default = {
    Router: _router2.default,
    //Auth: _auth2.default,
    Text: Text,
    Time: Time,
    Window: _window2.default,
    Account_data: _account2.default,
    Home_page: _home2.default,
    Videos_page: _videos2.default
};

/** Utilities **/