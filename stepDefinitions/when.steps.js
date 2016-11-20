/*
 * When Steps
 */

"use strict";

import container from './container';
let _page, _account, _route;

module.exports = function () {

    this.When(/^I log in as (a )?(an )?(the )?"([^"]*)" user$/, (article1, article2, article3, accountType) => {
        _page = new container.Login_page();
        _account = new container.Account_data();
        _account.setCredential(accountType);
        _page.fillForm(_account.username, _account.password);
        _page.submit();
    });

    this.When(/^I click (the )?"([^"]*)"$/, {retry: 3}, (the, action) => {
        _route = new container.Router();
        _page = _route.getContext();
        _page.waitAndClick(action);
    });

    this.When(/^I select "([^"]*)" from (the )"([^"]*)" select box$/, (option, article, target) => {
        _route = new container.Router();
        _page = _route.getContext();
        _page.select(target, option);
    });

    this.When(/^I enter (a )?"([^"]*)" for the "([^"]*)" input$/, (article, value, target) => {
        _route = new container.Router();
        _page = _route.getContext();
        _page.enterInput(target, value);
    });

    this.When(/^I scroll to (the )?"([^"]*)"$/, (article, target) => {
        _route = new container.Router();
        _page = _route.getContext();
        _page.scrollTo(target);
    });

    this.When(/^I hover over (the )?"([^"]*)"$/, (the, action) => {
        _route = new container.Router();
        _page = _route.getContext();
        _page.hoverOver(action);
    });

    this.When(/^I wait a moment( \d+)?$/, time => {
        if (time) {
            browser.pause(time);
        } else {
            browser.pause(100);
        }
    });

    this.When(/^I switch "([^"]*)"$/, type => {
        _route = new container.Router();
        _page = _route.getContext();
        switch (type) {
            case 'windows':
                _page.changeWindow();
                break;
            case 'tabs':
                _page.changeTab();
                break;
            case 'windows or tabs':
                _page.changeWindowOrTab();
                break;
            default: throw Error(`unable to switch focus of ${type} because it is an invalid case.`);
        }
    });
};
