const { expect } = require('@wdio/globals')
const highlightsPage = require('../pageobjects/highlights.page');

const pageUrl = 'https://www.volvocars.com/intl/v/safety/highlights';
const pageTitle = 'Safety - Highlights | Volvo Cars';
const cookiesContainerBodyText = 'We use cookies and similar technologies for the best experience on our website, to show you personalised content and ads, improve our website functionalities and gather insight. By clicking accept you agree to the placement and subsequent use of cookies and similar technologies as described in our Cookie Information Notice and General Privacy Notice.   You can change your privacy settings by clicking on “Cookie Settings”, and at any time by clicking on the Cookies link at the bottom of any page';

describe('Highlights page Loading and Cookie Container Verification', () => {
	beforeEach(async () => {
		await highlightsPage.open();
	});

	it('Check url and title', async () => {
		await expect(browser).toHaveUrl(pageUrl);
		await expect(browser).toHaveTitle(pageTitle);
	});

	it('The cookies container is displayed and accept all cookies', async () => {
		await 1000;
		await expect(highlightsPage.cookiesContainerBody).toHaveText(cookiesContainerBodyText);
		await expect(highlightsPage.cookiesContainerAcceptCookiesBtn).toBeClickable();
		await expect(highlightsPage.cookiesContainerCookieSettingsBtn).toBeClickable();
		await expect(highlightsPage.cookiesContainerRejectCookieBtn).toBeClickable();
		await highlightsPage.acceptAllCookies();
	});
})
