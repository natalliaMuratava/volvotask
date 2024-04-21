const { expect } = require('@wdio/globals')
const highlightsPage = require('../pageobjects/highlights.page');

const mainBodyProductListCarouselContainerHeaderText = 'All recharge models';
const mainBodyProductListCarouselCarModelsLearnText = "LEARN";
const mainBodyProductListCarouselCarModelsShopText = "SHOP";

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

const mainBodyProductListCarouselCarModels = [
	{'Type': 'SUV', 
	  'Name': 'XC90 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewCarHref': '/intl/cars/ec40-electric/',
	  'ViewCarPageTitle': 'EC40 fully electric crossover | The renamed C40 Recharge | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/cars/ec40-electric/',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/xc90-hybrid',
	  'ShopCarPageTitle': 'Design your XC90 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/xc90-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/xc90-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'SUV', 
	  'Name': 'XC60 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewCarHref': '/intl/v/cars/xc60-hybrid',
  	  'ViewCarPageTitle': 'Volvo XC60 Recharge plug-in hybrid | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/v/cars/xc60-hybrid',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/xc60-hybrid',
	  'ShopCarPageTitle': 'Design your XC60 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/xc60-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/xc60-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'SUV', 
	  'Name': 'XC40 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewCarHref': '/intl/v/cars/xc40-hybrid',
	  'ViewCarPageTitle': 'Volvo XC40 Recharge plug-in hybrid | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/v/cars/xc40-hybrid',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/xc40-hybrid',
	  'ShopCarPageTitle': 'Design your XC40 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/xc40-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/xc40-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'SUV', 
	  'Name': 'XC40 Recharge',
	  'Subtype': 'pure electric',
	  'ViewCarHref': '/intl/v/cars/xc40-electric',
	  'ViewCarPageTitle': 'Volvo XC40 Recharge pure electric | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/v/cars/xc40-electric',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/xc40-electric',
	  'ShopCarPageTitle': 'Design your XC40 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/xc40-electric',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/recharge/xc40_bev_responsive.jpg?h=300&iar=0'
	},
	{'Type': 'ESTATE', 
	  'Name': 'V90 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewCarHref': '/intl/v/cars/v90-hybrid',
	  'ViewCarPageTitle': 'Volvo V90 Recharge plug-in hybrid | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/v/cars/v90-hybrid',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/v90-hybrid',
	  'ShopCarPageTitle': 'Design your V90 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/v90-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/v90-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'ESTATE', 
	  'Name': 'V60 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewCarHref': '/intl/v/cars/v60-hybrid',
	  'ViewCarPageTitle': 'Volvo V60 Recharge plug-in hybrid | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/v/cars/v60-hybrid',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/v60-hybrid',
	  'ShopCarPageTitle': 'Design your V60 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/v60-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/v60-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'SEDAN', 
	  'Name': 'S90 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewCarHref': '/intl/v/cars/s90-hybrid',
	  'ViewCarPageTitle': 'Volvo S90 Recharge plug-in hybrid | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/v/cars/s90-hybrid',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/s90-hybrid',
	  'ShopCarPageTitle': 'Design your S90 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/s90-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/s90-recharge-my22-responsive.jpg?h=300&iar=0'
	},
	{'Type': 'SEDAN', 
	  'Name': 'S60 Recharge',
	  'Subtype': 'plug-in hybrid',
	  'ViewCarHref': '/intl/v/cars/s60-hybrid',
	  'ViewCarPageTitle': 'Volvo S60 Recharge plug-in hybrid | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/v/cars/s60-hybrid',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/s60-hybrid',
	  'ShopCarPageTitle': 'Design your S60 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/s60-hybrid',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/s60-recharge-my22-responsive.jpg?h=300&iar=0'
	}
];

describe('Check that the page is rendered', () => {

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

    // it('Other links in submeny are not active', async() => {
    //     for (let i = 2; i <= 5; i++) { 
    //         const link = await HighlightsPage.subMenuLinks(i)[0];
    //         const isActive = await link.getAttribute('data-active');
    //         expect(isActive).toEqual('false');
    //     }
    // });

    it('The links should be clickable', async () => {
        for (let i = 1; i < 6 && i < HighlightsPage.subMenuLinks.length; i++) {
            const link = await HighlightsPage.subMenuLinks[i](); // Вызываем метод subMenuLinks с индексом i
            expect(link).toBeClickable(); // Проверяем кликабельность ссылки

        }
    });

    //carousel

    it('9.1 should show and verify the product list carousel header', async () => {
        await highlightsPage.mainBodyProductListCarouselContainer.scrollIntoView();
		await expect(highlightsPage.mainBodyProductListCarouselContainerHeader).toBeDisplayed();
		await expect(highlightsPage.mainBodyProductListCarouselContainerHeader).toHaveText(mainBodyProductListCarouselContainerHeaderText);
	});	
	
	it('Verify the product list carousel pagination buttons', async () => {
		await expect(highlightsPage.mainBodyProductListCarouselPreviousBtn).toBeDisplayed();
		await expect(highlightsPage.mainBodyProductListCarouselNextBtn).toBeDisplayed();
	});

    it('9.3 should show and verify the product list carousel items', async () => {
		for (let index = 0; index < mainBodyProductListCarouselCarModels.length; index++) {
			// await highlightsPage.open();
			// await highlightsPage.mainBodyProductListCarouselContainer.scrollIntoView();
			await highlightsPage.seekItemInProductCarousel(index);
			
			await expect($(highlightsPage.mainBodyProductListCarouselItemContainer.replace('__INDEX__', index))).toBeExisting();
			await expect($(highlightsPage.mainBodyProductListCarouselItemContainer.replace('__INDEX__', index))).toHaveAttribute('href', mainBodyProductListCarouselCarModels[index]['ViewCarHref']);
			await highlightsPage.navigateToViewCarPage($(highlightsPage.mainBodyProductListCarouselItemContainer.replace('__INDEX__', index)));
			await expect(browser).toHaveTitle(mainBodyProductListCarouselCarModels[index]['ViewCarPageTitle']);
			await expect(browser).toHaveUrl(mainBodyProductListCarouselCarModels[index]['ViewCarPageUrl']);			
			
			// await highlightsPage.open();
			// await highlightsPage.mainBodyProductListCarouselContainer.scrollIntoView();
			// await highlightsPage.seekItemInProductCarousel(index);
			
			// await expect($(highlightsPage.mainBodyProductListCarouselItemType.replace('__INDEX__', index))).toBeDisplayed();
			// await expect($(highlightsPage.mainBodyProductListCarouselItemType.replace('__INDEX__', index))).toHaveText(mainBodyProductListCarouselCarModels[index]['Type']);
			
			// await expect($(highlightsPage.mainBodyProductListCarouselItemName.replace('__INDEX__', index))).toBeDisplayed();
			// await expect($(highlightsPage.mainBodyProductListCarouselItemName.replace('__INDEX__', index))).toHaveText(mainBodyProductListCarouselCarModels[index]['Name']);
			
			// await expect($(highlightsPage.mainBodyProductListCarouselItemSubtype.replace('__INDEX__', index))).toBeDisplayed();
			// await expect($(highlightsPage.mainBodyProductListCarouselItemSubtype.replace('__INDEX__', index))).toHaveText(mainBodyProductListCarouselCarModels[index]['Subtype']);
			
			// await expect($(highlightsPage.mainBodyProductListCarouselItemImg.replace('__INDEX__', index))).toBeDisplayed();
			// await expect($(highlightsPage.mainBodyProductListCarouselItemImg.replace('__INDEX__', index))).toHaveAttribute('src', mainBodyProductListCarouselCarModels[index]['Src']);
			
			// await expect($(highlightsPage.mainBodyProductListCarouselLearnBtn.replace('__INDEX__', index))).toBeDisplayed();
			// await expect($(highlightsPage.mainBodyProductListCarouselLearnBtn.replace('__INDEX__', index))).toHaveText(mainBodyProductListCarouselCarModelsLearnText);
			// await expect($(highlightsPage.mainBodyProductListCarouselLearnBtn.replace('__INDEX__', index))).toHaveAttribute('href', mainBodyProductListCarouselCarModels[index]['ViewCarHref']);
			
			// await highlightsPage.navigateToViewCarPage($(highlightsPage.mainBodyProductListCarouselLearnBtn.replace('__INDEX__', index)));
			// await expect(browser).toHaveTitle(mainBodyProductListCarouselCarModels[index]['ViewCarPageTitle']);
			// await expect(browser).toHaveUrl(mainBodyProductListCarouselCarModels[index]['ViewCarPageUrl']);			
			
			// await highlightsPage.open();
			// await highlightsPage.mainBodyProductListCarouselContainer.scrollIntoView();
			// await highlightsPage.seekItemInProductCarousel(index);
			
			// await expect($(highlightsPage.mainBodyProductListCarouselShopBtn.replace('__INDEX__', index))).toBeDisplayed();
			// await expect($(highlightsPage.mainBodyProductListCarouselShopBtn.replace('__INDEX__', index))).toHaveText(mainBodyProductListCarouselCarModelsShopText);
			// await expect($(highlightsPage.mainBodyProductListCarouselShopBtn.replace('__INDEX__', index))).toHaveAttribute('href', mainBodyProductListCarouselCarModels[index]['ShopCarHref']);
			
			// await highlightsPage.navigateToShopCarPage($(highlightsPage.mainBodyProductListCarouselShopBtn.replace('__INDEX__', index)));
			// await expect(browser).toHaveTitle(mainBodyProductListCarouselCarModels[index]['ShopCarPageTitle']);
			// await expect(browser).toHaveUrl(mainBodyProductListCarouselCarModels[index]['ShopCarPageUrl']);
		}
	});

    //footer checks

    it('Has the Footer', async () => {
        await HighlightsPage.scrollToPageFooter();
        expect(await HighlightsPage.footer).toBeDisplayedInViewport();
    });

    // it('11.1 should show and verify the site footer text and hyperlinks', async () => {
	// 	for (let index = 0; index < mainBodySiteFooterItems.length; index++) {
	// 		await expect($(highlightsPage.mainBodySiteFooterItem.replace('__INDEX__', index + 1))).toBeDisplayed();
	// 		await expect($(highlightsPage.mainBodySiteFooterItem.replace('__INDEX__', index + 1))).toHaveText(mainBodySiteFooterItems[index]['Name']);
	// 		await expect($(highlightsPage.mainBodySiteFooterItem.replace('__INDEX__', index + 1))).toHaveAttribute('href', mainBodySiteFooterItems[index]['Href']);
			
	// 		await highlightsPage.navigateToSiteFooterPage($(highlightsPage.mainBodySiteFooterItem.replace('__INDEX__', index + 1)));
	// 		await expect(browser).toHaveTitle(mainBodySiteFooterItems[index]['Title']);
	// 		await expect(browser).toHaveUrl(mainBodySiteFooterItems[index]['Href']);
			
	// 		await highlightsPage.open();
	// 		await highlightsPage.mainBodySiteFooterContainer.scrollIntoView();
	// 	}
	// });

	// it('11.2 should show and verify the site footer copyright', async () => {		
	// 	await expect(aMillionMorePage.mainBodySiteFooterCopyright).toBeDisplayed();
	// 	await expect(aMillionMorePage.mainBodySiteFooterCopyright).toHaveText(mainBodySiteFooterCopyrightText);
	// });

    it('Back to top button scroll to the top of the page'), async () => {
        
    }
})
