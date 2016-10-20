import _Base_uiMap from './_Base.uiMap'
/**
 * A class with keys and values for css selectors
 */
export default class UiMap extends _Base_uiMap {

    /* URL & Title */
    get url() {
        return `${browser.options.env.home_url}`;
    }

    get title() {
        return 'head > title';
    }

    get titleText() {
        return 'AdonisJs - Node.Js MVC Framework';
    }

    // /* Navigation */
    // get aNavHeading() {
    //     return 'body > div.hero.is-primary > nav > h1 > a';
    // }
    //
    // get aNavSongs() {
    //     return '.show-info';
    // }
    //
    // get aNavSetlists() {
    //     return '.close-help';
    // }
    //
    // get aNavProfile() {
    //     return '#help > div > article > p';
    // }
    //
    // get aNavLogout() {
    //     return '#help';
    // }

    /* Page Contents */

    get h1Message() {
        return 'body > section > div > div > h1';
    }

    get btnGetStarted() {
        return 'body > section > div > div > h2 > a';
    }

    get aNavLogin() {
        return 'body > div.hero.is-primary > nav > div.nav-right.nav-menu > a:nth-child(2)';
    }
}
