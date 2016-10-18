import _Base_page from './_base.page';
import UiMap from '../uiMaps/setLists.uiMap';
let _elements;

export default class SetLists_page extends _Base_page {

    /* Default Functions */
    get name() {
        return "Set Lists Page";
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
            case 'username':
                return _elements.inputUsername;
            case 'password':
                return _elements.inputPassword;
            default:
                throw Error(`Selector not found for ${target}`);
        }
    }

    /* Page-Specific Functions */

}
