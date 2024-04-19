const { browser } = require('@wdio/globals')

module.exports = class Page {

    get rejectAllCookiesButton () {
        return $('#onetrust-reject-all-handler')
    }
    
    open (path) {
        return browser.url(`https://www.volvocars.com/intl/v/safety/${path}`)
    }

}
