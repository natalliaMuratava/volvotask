const { $ } = require('@wdio/globals')
const Page = require('./page');


class highlightsPage extends Page {

    get cookiesContainer() { return $('//div[@id="onetrust-banner-sdk"]'); }
    get cookiesContainerLogo() { return $('//div[@id="onetrust-banner-sdk"]//div[@class="banner_logo"]'); }
    get cookiesContainerBody() { return $('//div[@id="onetrust-banner-sdk"]//div[@id="onetrust-policy-text"]'); }
    get cookiesContainerAcceptCookiesBtn() { return $('//button[@id="onetrust-accept-btn-handler"]'); }
    get cookiesContainerCookieSettingsBtn() { return $('//button[@id="onetrust-pc-btn-handler"]'); }
    get cookiesContainerRejectCookieBtn() { return $('//button[@id="onetrust-reject-all-handler"]'); }

    get siteNavigationBar() {
        return $('#site-navigation');
    }

    get logo() {
        return $('button-filled');
    }

    get title() {
        return $('h1');
    }

    get title2() {
        return $('h2');
    }

    get mainBlockWithContent() {
        return $('main');
    }

    get images() {
        return $$('img')
    }

    get subMenu() {
        return $('[data-autoid="localSubMenu:linksContainer"]')
    }

    get footer() {
        return $('#vcc-site-footer')
    }

    get backToTopButton() {
        return $('[data-autoid="footer:backToTop"]')
    }

    //carousel

    get productListCarouselContainer() { return $('//div[@data-component="ProductListCarousel"]'); }
    get productListCarouselContainerHeader() { return $('//div[@data-component="ProductListCarousel"]//h2'); }

    get productListCarouselItemContainer() { return '//div[@data-component="ProductListCarousel"]//a[@data-autoid="productListCarouselItem-__INDEX__"]'; }
    get productListCarouselItemType() { return '//div[@data-component="ProductListCarousel"]//a[@data-autoid="productListCarouselItem-__INDEX__"]//em'; }
    get productListCarouselItemName() { return '//div[@data-component="ProductListCarousel"]//a[@data-autoid="productListCarouselItem-__INDEX__"]//span[1]'; }
    get productListCarouselItemSubtype() { return '//div[@data-component="ProductListCarousel"]//a[@data-autoid="productListCarouselItem-__INDEX__"]//span[2]'; }
    get productListCarouselItemImg() { return '//div[@data-component="ProductListCarousel"]//a[@data-autoid="productListCarouselItem-__INDEX__"]//img'; }
    get productListCarouselLearnBtn() { return '//div[@data-component="ProductListCarousel"]//a[@data-autoid="productListCarouselItem-__INDEX__"]/following-sibling::div//a[contains(@data-autoid, "link1")]'; }
    get productListCarouselConfigureBtn() { return '//div[@data-component="ProductListCarousel"]//a[@data-autoid="productListCarouselItem-__INDEX__"]/following-sibling::div//a[contains(@data-autoid, "link2")]'; }

    get productListCarouselPreviousBtn() { return $('//button[@data-autoid="springCarouselPreviousButton"]'); }
    get productListCarouselNextBtn() { return $('//button[@data-autoid="springCarouselNextButton"]'); }

    // get productListCarouselRechargeBtn () { return $('//div[@data-component="ProductListCarousel"]//a[@data-autoid="ProductListCarousel:cta1"]'); }
    // get productListCarouselMildHybridCarsBtn () { return $('//div[@data-component="ProductListCarousel"]//a[@data-autoid="ProductListCarousel:cta2"]'); }

    // These keywords return selectors for the site footer
    //    get mainBodySiteFooterContainer () { return $('//div[@id="vcc-site-footer"]'); }
    //    get mainBodySiteFooterItem () { return '//div[@id="vcc-site-footer"]//span[@role="listitem"][__INDEX__]//a'; }
    //    get mainBodySiteFooterCopyright () { return $('//div[@id="vcc-site-footer"]//span[@data-autoid="footer:copyright"]'); }

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

    // get mainBodySiteFooterContainer () { return $('#vcc-site-footer'); }
    // get mainBodySiteFooterItem () { return '//div[@id="vcc-site-footer"]//span[@role="listitem"][__INDEX__]//a'; }
    // get mainBodySiteFooterCopyright () { return $('//div[@id="vcc-site-footer"]//span[@data-autoid="footer:copyright"]'); }

    async navigateToSiteFooterPage(selector) {
        await selector.isDisplayed();
        await selector.click();
    }

    async seekItemInProductCarousel(value) {
        for (let i = 4; i <= value; i++) {
            try {
                await this.viewNextItemInProductCarousel();
            }
            catch (err) {
                console.log('No new next item.');
            }
        }
    }

    async viewNextItemInProductCarousel() {
        await this.productListCarouselNextBtn.isDisplayed();
        await this.productListCarouselNextBtn.click();
    }

    async navigateToViewCarPage(selector) {
        await selector.isDisplayed();
        await selector.click();
    }

    async acceptAllCookies() {
        await this.cookiesContainerAcceptCookiesBtn.isDisplayed();
        await this.cookiesContainerAcceptCookiesBtn.click();
    }

    async acceptCookiesIfDisplayed() {
        try {
            await this.acceptAllCookies();
        }
        catch (err) {
            console.log('Cookies already accepted.');
        }
    }

    async open() {
        return super.open('/intl/v/safety/highlights');
    }
}

module.exports = new highlightsPage();
