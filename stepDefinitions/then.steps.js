/*
 * Then Steps
 */

"use strict";

import container from './container';
let _page, _route;
const path = require('path');

module.exports = function () {

    this.Then(/^I should be on the "([^"]*)" page$/, target => {
        _route = new container.Router();
        _page = _route.setContext(target);
        expect(_page.isOnPage(), `Should be on the ${target} page, but was unable to verify`).to.be.true;
    });

    this.Then(/^I should (not )?see (the )?(a )?"([^"]*)"$/, (not, article1, article2, target) => {
        _route = new container.Router();
        _page = _route.getContext();
        if (not) {
            expect(_page.checkVisibility(target, false), `Expected ${target} to be not visible.`).to.be.true;
        } else {
            expect(_page.checkVisibility(target, true), `Expected ${target} to be visible.`).to.be.true;
        }
    });

    this.Then(/^The "([^"]*)" of (the )?"([^"]*)" should be (less than |greater than |equal to )?"([^"]*)"/,
        (property, the, target, quantifier, value) => {
            _route = new container.Router();
            _page = _route.getContext();
            expect(_page.elementIsOnPage(target), `Element ${target} should be on the page, but was unable to verify`).to.be.true;
            switch (quantifier) {
                case 'greater than ':
                    browser.waitUntil(() => {
                        return _page.getStyleAttribute(target, property).localeCompare(value) > 0;
                    }, 10000, `Expected ${target}'s ${property}, ${_page.getStyleAttribute(target, property)} to be greater than value, ${value}`);
                    break;
                case 'less than ':
                    browser.waitUntil(() => {
                        return _page.getStyleAttribute(target, property).localeCompare(value) < 0;
                    }, 10000, `Expected ${target}'s ${property}, ${_page.getStyleAttribute(target, property)} to be less than value, ${value}`);
                    break;
                default:
                    browser.waitUntil(() => {
                        return _page.getStyleAttribute(target, property).localeCompare(value) === 0;
                    }, 10000, `Expected ${target}'s ${property}, ${_page.getStyleAttribute(target, property)} to be equal to value, ${value}`);
            }
        });

    this.Then(/^The name of (the )?"([^"]*)" should be (the )?"([^"]*)"/,
        (article, target, article2, value) => {
            _route = new container.Router();
            _page = _route.getContext();
            expect(_page.elementIsOnPage(target), `Element ${target} should be on the page, but was unable to verify`).to.be.true;
            expect(_page.assertText(target, value), `Expected ${target}'s text to be ${value}`).to.be.true;
        });

    this.Then(/^The "([^"]*)" is "([^"]*)"/,
        (target, value) => {
            _route = new container.Router();
            _page = _route.getContext();
            expect(_page.elementIsOnPage(target), `Element ${target} should be on the page, but was unable to verify`).to.be.true;
            expect(_page.assertProperty(target, value), `Expected ${target}'s text to be ${value}`).to.be.true;
        });

    this.Then(/^I should be logged in/, () => {
        _route = new container.Router;
        _page = _route.getContext();
        _page.checkVisibility(`Logged In Message`, true);
    });
};
