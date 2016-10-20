/**
 * A class with keys and values for css selectors
 */
export default class UiMap {

    /* URL & Title */
    get url() {
        return `${browser.options.env.login_url}`;
    }

    get title() {
        return 'head > title';
    }

    get titleText() {
        return 'AdonisJs - Node.Js MVC Framework';
    }

    /* Navigation */
    get aNavHeading() {
        return 'body > div.hero.is-primary > nav > h1 > a';
    }

    get aNavSongs() {
        return '.show-info';
    }

    get aNavSetlists() {
        return '.close-help';
    }

    get aNavProfile() {
        return '#help > div > article > p';
    }

    get aNavLogout() {
        return '#help';
    }

    /* Page Contents */

}
