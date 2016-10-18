import _Base_page from './_base.page';
import UiMap from '../uiMaps/home.uiMap';
let _elements;

export default class Home_page extends _Base_page {

    /* Default Functions */
    get name() {
        return "Home Page";
    }

    constructor() {
        super();
        _elements = new UiMap();
    }

    getPageUrl() {
        return _elements.url;
    }

    pageLoadIndicator() {
        return _elements.header;
    }

    findSelector(target) {
        switch (target) {
            default:
                let error = new Error(`\nMessage:\n    Element ${target} is not defined on the home config\nStack Trace:`); // eslint-disable-line prefer-const
                error.message = `${error.stack}`;
                throw error;
        }
    }
    /* Page-Specific Functions */

}
