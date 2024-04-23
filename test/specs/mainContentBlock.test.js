const { expect } = require('@wdio/globals')
const highlightsPage = require('../pageobjects/highlights.page');

describe('Main Content Block checks', () => {

    it('Site navigation bar is displayed', async () => {
        expect(highlightsPage.siteNavigationBar).toBeDisplayed();
    })

    it('There is the Title on the page', async () => {
        expect(highlightsPage.title).toBeDisplayed();
        expect(highlightsPage.title).toHaveText('Safety');
    });

    it('Has the main content block', async () => {
        expect(highlightsPage.mainBlockWithContent).toBeDisplayed();
    });

    it('The main block has h2 title', async () => {
        expect(highlightsPage.title2).toBeDisplayed();
    });

    //images checks

    it('All images should be displayed and have src and alt attributes', async () => {
        await highlightsPage.images.forEach(image => {
            expect(image).toBeDisplayed();
            expect(image).toHaveAttribute('src');
            expect(image).toHaveAttribute('alt');
        });
    })
})