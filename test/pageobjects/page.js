const { browser } = require('@wdio/globals')

module.exports = class Page {

    get rejectAllCookiesButton() {
        return $('#onetrust-accept-btn-handler')
    }

    open(path) {
        return browser.url(`https://www.volvocars.com${path}`)
    }

}
