import _Base_page from './_base.page';
import UiMap from '../uiMaps/login.uiMap';
let _elements;

export default class Login_page extends _Base_page {

    /* Default Functions */
    get name() {
        return "Login Page";
    }

    constructor() {
        super();
        _elements = new UiMap();
    }

    getPageUrl() {
        return _elements.url;
    }

    pageLoadIndicator() {
        return _elements.heading;
    }

    findSelector(target) {
        switch (target) {
            case 'heading':
                return _elements.heading;
            case 'submit button':
                return _elements.btnLogin;
            case 'username':
                return _elements.inputUsername;
            case 'password':
                return _elements.inputPassword;
            default:
                throw Error(`Selector not found for ${target}`);
        }
    }

    /* Page-Specific Functions */

    submit() {
        this.waitAndClick('submit button', 30000);
    }

    fillForm(username, password) {
        browser.waitForVisible(this.findSelector('heading'));
        browser.setValue(this.findSelector('username'), username);
        browser.setValue(this.findSelector('password'), password);
    }
}
