const { $ } = require('@wdio/globals')
const Page = require('./page');


class HighlightsPage extends Page {

    get logo () {
        return $('button-filled');
    }

    get title () {
        return $('h1');
    }

    get title2 () {
        return $('h2');
    }

    get mainBlockWithContent () {
        return $('main');
    }

    get topBar () {
        return $('site-navigation#site-navigation');
    }

    get images () {
        return $$('img')
    }

    get subMenu() {
        return $('[data-autoid="localSubMenu:linksContainer"]')
    }

    get footer () {
        return $('#vcc-site-footer')
    }

    get backToTopButton () {
        return $('[data-autoid="footer:backToTop"]')
    }

    subMenuLinks(index) { 
        return $$(`[data-autoid="localSubMenu:linksContainer"]:nth-child(${index}) a`) 
    }

    clickLink(index) {
        this.subMenuLinks(index).waitForDisplayed()
        this.link(index).click()
    }

    scrollToPageFooter() {
        this.footer.moveTo()
    }



    open () {
        return super.open('highlights');
    }
}

module.exports = new HighlightsPage();
