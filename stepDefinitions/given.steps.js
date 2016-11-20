/*
 * Given Steps
 */

"use strict";

import container from './container';
let _page, _auth, _route;
const path = require('path');

module.exports = function () {

    this.Given(/^I navigate to the "([^"]*)" page$/, target => {
        _route = new container.Router();
        _page = _route.setContext(target);
        _page.navigate(target);
        expect(_page.isOnPage(), `Should be on the ${target} page, but was unable to verify`).to.be.true;
    });

    this.Given(/^I am logged in as (a )?(an )?(the )?"([^"]*)" user$/, (article1, article2, article3, accountType) => {
        _auth = new container.Auth();
        // if (_auth.softAuthCheck() === false) {
            _page = new container.Login_page();
            _page.navigate();
            _auth.login(accountType);
        // }
    });

    this.Given(/^I am on the "([^"]*)" page$/, targetPage => {
        _route = new container.Router();
        _page = _route.switchPage(targetPage);
        expect(_page.isOnPage(), `Should be on the ${targetPage} page, but was unable to verify`).to.be.true;
    });

    this.Given(/^I have clicked (the )?"([^"]*)"$/, (the, action) => {
        _route = new container.Router();
        _page = _route.getContext();
        _page.waitAndClick(action);
    });

    this.Given(/^The "([^"]*)" should be "([^"]*)"/, (target, value) => {
        _route = new container.Router();
        _page = _route.getContext();
        expect(_page.elementIsOnPage(target), `Element ${target} should be on the page, but was unable to verify`).to.be.true;
        if (!_page.assertProperty(target, value)) {
            _page.executeProperty(target, value);
        }
        expect(_page.assertProperty(target, value), `Expected ${target}'s text to be ${value}`).to.be.true;
    });

    this.Given(/^I resize the screen/, () => {
        _page = new container.Login_page();
        _page.resizeScreen();
    });

    this.Given(/^I set (the )?"([^"]*)" to "([^"]*)"$/, (article, target, value) => {
        _route = new container.Router();
        _page = _route.getContext();
        _page.fillElement(target, value);
    });

    this.Given(/^I am not logged in$/, () => {
        _route = new container.Router();
        _page = _route.getContext();
        _page.checkVisibility(`Logout`, false);
    });
};
