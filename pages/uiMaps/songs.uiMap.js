import _Base_uiMap from './_Base.uiMap';

/**
 * A class with keys and values for css selectors
 */
export default class UiMap extends _Base_uiMap{

    /** URL & Title **/
    get url() {
        return `${browser.options.env.songs_url}`;
    }

    get title() {
        return 'head > title';
    }

    get titleText() {
        return 'AdonisJs - Node.Js MVC Framework';
    }

    /*  Page Contents */

    get h2Songs() {
        return 'body > section > div:nth-child(2) > div > div > nav > div.panel-heading.is-flex.is-space-between > h2'
    }

}
