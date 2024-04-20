const { expect } = require('@wdio/globals')
const HighlightsPage = require('../pageobjects/highlights.page');

describe('Chech that the page is rendered', () => {

    before(async () => {
        await HighlightsPage.open()
        await HighlightsPage.rejectAllCookiesButton.click();
    });

    // it('The logo is displayed and it has the link to the Volvo website', () => {
   //     expect(logo).toBeDisplayed(); 
    
    //     const logoLink = $('a.logo-link'); // Предполагаем, что у нас есть ссылка на логотип с классом "logo-link"
    //     expect(logoLink).toBeDisplayed(); // Проверяем, что ссылка на логотип отображается на странице
    //     expect(logoLink).toHaveHref(expect.stringContaining('https://www.example.com')); // Проверяем, что ссылка содержит корректный URL
    // });

    it('There is the Title on the page', async () => {
        expect(HighlightsPage.title).toBeDisplayed();
        expect(HighlightsPage.title).toHaveText('Safety');
    });

    it('Has the main content block', async () => {
        expect(HighlightsPage.mainBlockWithContent).toBeDisplayed();
    });

    it('Has the Top Bar', async () => {
        expect(HighlightsPage.topBar).toBeDisplayed();
    });

    it('The main block has h2 title', async () => { 
        expect(HighlightsPage.title2).toBeDisplayed();
    });

    //images checks

    it('All images should be displayed and have src and alt attributes', async() => {
        await HighlightsPage.images.forEach(image => {
            expect(image).toBeDisplayed();
            expect(image).toHaveAttribute('src');
            expect(image).toHaveAttribute('alt');
        });
    })

    //submenu checks

    it ('The submenu should be displayed', async() => {
        expect(HighlightsPage.subMenu).toBeDisplayed()
    })

    it('The Overview link should be active', async() => {
        const overviewLink = await HighlightsPage.subMenuLinks(1)[0];
        const isActive = await overviewLink.getAttribute('data-active');
        expect(isActive).toEqual('true');
    })

    it('The other links in submeny are not active', async() => {
        for (let i = 2; i <= 5; i++) { 
            const link = await HighlightsPage.subMenuLinks(i)[0];
            const isActive = await link.getAttribute('data-active');
            expect(isActive).toEqual('false');
        }
    });

    it('The links should be clickable', async () => {
        for (let i = 1; i < 6 && i < HighlightsPage.subMenuLinks.length; i++) {
            const link = await HighlightsPage.subMenuLinks[i](); // Вызываем метод subMenuLinks с индексом i
            expect(link).toBeClickable(); // Проверяем кликабельность ссылки

        }
    });

    //footer checks

    it('Has the Footer', async () => {
        await HighlightsPage.scrollToPageFooter();
        expect(await HighlightsPage.footer).toBeDisplayedInViewport();
    });

    it('Back to top button scroll to the top of the page'), async () => {
        
    }
})
