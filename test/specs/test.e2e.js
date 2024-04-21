const { expect } = require('@wdio/globals')
const highlightsPage = require('../pageobjects/highlights.page');


describe('Check that the page is rendered', () => {

    before(async () => {
        await highlightsPage.open()
        await highlightsPage.cookiesContainerAcceptCookiesBtn.click();
    });

    // it('The logo is displayed and it has the link to the Volvo website', () => {
   //     expect(logo).toBeDisplayed(); 
    
    //     const logoLink = $('a.logo-link'); // Предполагаем, что у нас есть ссылка на логотип с классом "logo-link"
    //     expect(logoLink).toBeDisplayed(); // Проверяем, что ссылка на логотип отображается на странице
    //     expect(logoLink).toHaveHref(expect.stringContaining('https://www.example.com')); // Проверяем, что ссылка содержит корректный URL
    // });

    it('There is the Title on the page', async () => {
        expect(highlightsPage.title).toBeDisplayed();
        expect(highlightsPage.title).toHaveText('Safety');
    });

    it('Has the main content block', async () => {
        expect(highlightsPage.mainBlockWithContent).toBeDisplayed();
    });

    it('Has the Top Bar', async () => {
        expect(highlightsPage.topBar).toBeDisplayed();
    });

    it('The main block has h2 title', async () => { 
        expect(highlightsPage.title2).toBeDisplayed();
    });

    //images checks

    it('All images should be displayed and have src and alt attributes', async() => {
        await highlightsPage.images.forEach(image => {
            expect(image).toBeDisplayed();
            expect(image).toHaveAttribute('src');
            expect(image).toHaveAttribute('alt');
        });
    })

    //submenu checks

    it ('The submenu should be displayed', async() => {
        expect(highlightsPage.subMenu).toBeDisplayed()
    })

    it('The Overview link should be active', async() => {
        const overviewLink = await highlightsPage.subMenuLinks(1)[0];
        const isActive = await overviewLink.getAttribute('data-active');
        expect(isActive).toEqual('true');
    })

    // it('Other links in submeny are not active', async() => {
    //     for (let i = 2; i <= 5; i++) { 
    //         const link = await HighlightsPage.subMenuLinks(i)[0];
    //         const isActive = await link.getAttribute('data-active');
    //         expect(isActive).toEqual('false');
    //     }
    // });

    it('The links should be clickable', async () => {
        for (let i = 1; i < 6 && i < highlightsPage.subMenuLinks.length; i++) {
            const link = await highlightsPage.subMenuLinks[i](); // Вызываем метод subMenuLinks с индексом i
            expect(link).toBeClickable(); // Проверяем кликабельность ссылки

        }
    });

    it('Back to top button scroll to the top of the page'), async () => {
        
    }
})
