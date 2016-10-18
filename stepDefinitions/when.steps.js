/*
 * When Steps
 */

"use strict";

import container from './container';
let _page, _account, _auth, _route;
const path = require('path');

module.exports = function () {

    /**
     *  Logging in to the application from app2/login where accountType is passed from a cucumber regex and is used to
     *  lookup the corresponding account credentials.
     *
     *  @param {String} accountType
     *      The User Account to use for auth & testing
     *  @type {regex}
     *  @returns {void}
     *
     **/
    this.When(/^I log in as (a )?(an )?(the )?"([^"]*)" user$/, (article1, article2, article3, accountType) => {
        _page = new container.Login_page();
        _account = new container.Account_data();
        _account.setCredential(accountType);
        _page.fillForm(_account.username, _account.password);
        _page.submit();
    });

    /**
     * Determine the current page context and click on an element on that page
     *
     *  @param {String} action
     *      A Regex value that describes which selector to find and click on
     *  @type {regex}
     *  @returns {void}
     *
     */
    this.When(/^I click (the )?"([^"]*)"$/, {retry: 3}, (the, action) => {
        _route = new container.Router();
        _page = _route.getContext();
        _page.waitAndClick(action);
    });

    /**
     * Select an option in a select box
     *
     * @param {String} option
     *     value to select in the select box
     * @param {arg} article
     *     optional/filler text
     * @param {String} target
     *      The select box the option is in
     * @returns {void}
     */
    this.When(/^I select "([^"]*)" from (the )"([^"]*)" select box$/, (option, article, target) => {
        _route = new container.Router();
        _page = _route.getContext();
        _page.select(target, option);
    });

    /**
     *  Enter text into a particular input
     *
     *  @param {arg} article
     *      optional/filler text
     *  @param {String} value
     *      value to compare property against
     *  @param {String} target
     *      The element
     *  @return {void}
     **/
    this.When(/^I enter (a )?"([^"]*)" for the "([^"]*)" input$/, (article, value, target) => {
        _route = new container.Router();
        _page = _route.getContext();
        _page.enterInput(target, value);
    });

    /**
     * Waits for an element to be visible and scrolls to it
     *
     *  @param {String} target
     *      A Regex value that describes which selector to find and interact with
     *  @param {arg} article
     *      optional/filler text
     *  @type {regex}
     *  @returns {void}
     *
     */
    this.When(/^I scroll to (the )?"([^"]*)"$/, (article, target) => {
        _route = new container.Router();
        _page = _route.getContext();
        _page.scrollTo(target);
    });

    /**
     * Waits for an element to be visible and hovers over it
     *
     *  @param {String}  action
     *      A Regex value that describes which selector to find and interact with
     *  @param {arg} the
     *      optional/filler text
     *  @type {regex}
     *  @returns {void}
     *
     */
    this.When(/^I hover over (the )?"([^"]*)"$/, (the, action) => {
        _route = new container.Router();
        _page = _route.getContext();
        _page.hoverOver(action);
    });

    /**
     * Explicitly run a pause
     * Should only be used as a last resort
     *
     * @param {int} time - time in ms to make the browser wait
     * @returns {void}
     */
    this.When(/^I wait a moment( \d+)?$/, time => {
        if (time) {
            browser.pause(time);
        } else {
            browser.pause(100);
        }
    });

    /**
     * Switches the browser window or tab to another available window or tab
     *
     * @param {string] type - the type of switch to be performed
     * @returns {void}
     */
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
