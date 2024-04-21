const highlightsPage = require('../pageobjects/highlights.page.js');

const mainBodySiteFooterItems = [
	{'Name': 'Cookies',
	  'Href': 'https://www.volvocars.com/intl/v/legal/cookies',
	  'Title': 'Cookies | Volvo Cars - International'
	},
	{'Name': 'Legal',
	  'Href': 'https://www.volvocars.com/intl/v/legal/legal',
	  'Title': 'Legal | Volvo Cars - International'
	},
	{'Name': 'Privacy',
	  'Href': 'https://www.volvocars.com/intl/v/legal/privacy',
	  'Title': 'Privacy | Volvo Cars - International'
	},
	{'Name': 'Social Media',
	  'Href': 'https://www.volvocars.com/intl/v/legal/social-media',
	  'Title': 'Social Media | Volvo Cars - International'
	}
];

const mainBodySiteFooterCopyrightText = 'Copyright © 2021 Volvo Car Corporation (or its affiliates or licensors)';

/*
 * This section defines the list of test cases
 */

describe('Test Site Footer', () => {
	beforeEach (async () => {
		await highlightsPage.open();
		await highlightsPage.acceptAllCookiesButton.click();
		await (await highlightsPage.footer).scrollIntoView();
	});
	
	// it('Verify the site footer text and hyperlinks', async () => {
	// 	for (let index = 0; index < mainBodySiteFooterItems.length; index++) {
	// 		await expect($(aMillionMorePage.mainBodySiteFooterItem.replace('__INDEX__', index + 1))).toBeDisplayed();
	// 		await expect($(aMillionMorePage.mainBodySiteFooterItem.replace('__INDEX__', index + 1))).toHaveText(mainBodySiteFooterItems[index]['Name']);
	// 		await expect($(aMillionMorePage.mainBodySiteFooterItem.replace('__INDEX__', index + 1))).toHaveAttribute('href', mainBodySiteFooterItems[index]['Href']);
			
	// 		await aMillionMorePage.navigateToSiteFooterPage($(aMillionMorePage.mainBodySiteFooterItem.replace('__INDEX__', index + 1)));
	// 		await expect(browser).toHaveTitle(mainBodySiteFooterItems[index]['Title']);
	// 		await expect(browser).toHaveUrl(mainBodySiteFooterItems[index]['Href']);
			
	// 		await aMillionMorePage.open();
	// 		await aMillionMorePage.mainBodySiteFooterContainer.scrollIntoView();
	// 	}
	// });

	// it('Verify the site footer copyright', async () => {		
	// 	await expect(aMillionMorePage.mainBodySiteFooterCopyright).toBeDisplayed();
	// 	await expect(aMillionMorePage.mainBodySiteFooterCopyright).toHaveText(mainBodySiteFooterCopyrightText);
	// });
});