const highlightsPage = require('../pageobjects/highlights.page.js');

const footerItems = [
	{
		'Name': 'Cookies',
		'Href': 'https://www.volvocars.com/intl/v/legal/cookies',
		'Title': 'Cookies | Volvo Cars - International'
	},
	{
		'Name': 'Legal',
		'Href': 'https://www.volvocars.com/intl/v/legal/legal',
		'Title': 'Legal | Volvo Cars - International'
	},
	{
		'Name': 'Privacy',
		'Href': 'https://www.volvocars.com/intl/v/legal/privacy',
		'Title': 'Privacy | Volvo Cars - International'
	},
	{
		'Name': 'Social Media',
		'Href': 'https://www.volvocars.com/intl/v/legal/social-media',
		'Title': 'Social Media | Volvo Cars - International'
	}
];

const footerCopyrightText = 'Copyright © 2024 Volvo Car Corporation (or its affiliates or licensors)';


describe('Test Site Footer', () => {
	beforeEach(async () => {
		await highlightsPage.open();
		await highlightsPage.acceptCookiesIfDisplayed();
		await (await highlightsPage.footer).scrollIntoView();
	});

	//ToDo
	// it('Check the site footer text and hyperlinks', async () => {
	// });

	it('The footer is displayed on the page', async () => {
		expect(highlightsPage.footer).toBeDisplayed();
	});
});