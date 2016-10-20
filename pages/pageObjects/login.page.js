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
        return this.findSelector(`Guitar Practice Header`);
    }

    findSelector(target) {
        switch (target) {
            case `Guitar Practice Header`:
                return _elements.aNavHeading;
            case `Songs Navigation Link`:
                return _elements.aNavSongs;
            case `My Set Lists Navigation Link`:
                return _elements.aNavSetlists;
            case `Profile Navigation Link`:
                return _elements.aNavProfile;
            case `Logout`:
                return _elements.aNavLogout;
            case `Home Page Message`:
                return _elements.h1Message;
            case `Get Started Button`:
                return _elements.btnGetStarted;
            default:
                let error = new Error(`\nMessage:\n    Element ${target} is not defined on the home config\nStack Trace:`); // eslint-disable-line prefer-const
                error.message = `${error.stack}`;
                throw error;
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
