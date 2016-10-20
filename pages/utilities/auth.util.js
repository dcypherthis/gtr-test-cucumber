import login_page from '../pageObjects/login.page';
const _login_page = new login_page();
const loginUrl = (_login_page.getPageUrl());

import home_page from '../pageObjects/home.page';
const _home_page = new home_page();
const homeUrl = (_home_page.getPageUrl());

import Account_data from '../testData/account.data';
const account = new Account_data();

let currentUrl;

/**
 * auth class handles user authentication
 */
export default class auth {
    /**
     * Navigates to the login page, waits and checks to see if the user has been redirected to home.
     *
     * @returns {boolean}   true = The user on the home page
     */
    hardAuthCheck() {
        _login_page.navigate();
        browser.pause(2500);
        currentUrl = browser.getUrl();
        return currentUrl === homeUrl;
    }

    /**
     * Compares the current url retrived from selnium with the loginUrl retrieved form
     * the login_page {}. If the current url is not the login url and includes a '.e2ma'
     * then the user is logged and returns true.
     *
     * @returns {boolean} true = The user is currently logged in
     */
    softAuthCheck () {
        currentUrl = browser.getUrl();
        return currentUrl.includes("e2ma.net") && currentUrl !== loginUrl;
    }

    /**
     * Performs a softAuthCheck() and (if not logged in) fills the login form based on
     * accountType
     * @param {String} accountType  The type/package/account to be used for authentication
     * @returns {void}
     */
    login (accountType) {
        if (this.softAuthCheck() === false) {
            account.setCredential(accountType);
            _login_page.fillForm(account.username, account.password);
            _login_page.submit();
            _home_page.isOnPage();
        }
    }
}
