/**
 * A base class with keys and values for css selectors shared between all pages
 */
export default class UiMap {

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
}
