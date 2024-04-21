//const { expect } = require('@wdio/globals')
const highlightsPage = require('../pageobjects/highlights.page');

const mainBodyProductListCarouselContainerHeaderText = 'All recharge models';
const mainBodyProductListCarouselCarModelsLearnText = "Learn";
const mainBodyProductListCarouselCarModelsConfigureText = "Shop";

const mainBodyProductListCarouselCarModels = [
	{'Type': 'CROSSOVER', 
	  'Name': 'EC40',
	  'Subtype': 'fully electric',
	  'ViewCarHref': '/intl/cars/ec40-electric/',
	  'ViewCarPageTitle': 'EC40 fully electric crossover | The renamed C40 Recharge | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/cars/ec40-electric/',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/ec40-electric',
	  'ShopCarPageTitle': 'Design your EC40',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/ec40-electric',
      'CarModelsButtonText': 'Shop',
      'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my25/car-images/ec40-my25-responsive.jpg?h=500&iar=0'
	},
	{'Type': 'SUV', 
	  'Name': 'EX30',
	  'Subtype': 'fully electric',
	  'ViewCarHref': '/intl/cars/ex30-electric/',
  	  'ViewCarPageTitle': 'Volvo XC60 Recharge plug-in hybrid | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/cars/ex30-electric/',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/ex30-electric/',
	  'ShopCarPageTitle': 'Design your EX30',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/ex30-electric',
      'CarModelsButtonText': 'Configure',
      'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my24/car-images/ex30-bev-my24-responsive-reveal.jpg?h=500&iar=0'
	},
	{'Type': 'SUV', 
	  'Name': 'EX90',
	  'Subtype': 'fully electric',
	  'ViewCarHref': '/intl/cars/ex90-electric/',
	  'ViewCarPageTitle': 'Volvo XC40 Recharge plug-in hybrid | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/cars/ex90-electric/',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/ex90-electric',
	  'ShopCarPageTitle': 'Design your EX90',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/ex90-electric',
      'CarModelsButtonText': 'Configure',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my24/car-images/xc90-phev-my24-responsive.jpg?h=500&iar=0'
	},
	{'Type': 'SUV', 
	  'Name': 'XC90',
	  'Subtype': 'plug-in hybrid',
	  'ViewCarHref': '/intl/cars/xc90-hybrid',
	  'ViewCarPageTitle': 'Volvo XC40 Recharge pure electric | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/cars/xc90-hybrid/',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/xc90-hybrid',
	  'ShopCarPageTitle': 'Design your XC90',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/xc90-hybrid',
      'CarModelsButtonText': 'Configure',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my24/car-images/xc90-phev-my24-responsive.jpg?h=500&iar=0'
    },
	{'Type': 'SUV', 
	  'Name': 'XC60',
	  'Subtype': 'plug-in hybrid',
	  'ViewCarHref': '/intl/cars/xc60-hybrid',
	  'ViewCarPageTitle': 'Volvo V90 Recharge plug-in hybrid | Volvo Cars',
	  'ViewCarPageUrl': 'https://www.volvocars.com/intl/cars/xc60-hybrid',
	  'ShopCarHref': 'https://www.volvocars.com/intl/build/xc60-hybrid',
	  'ShopCarPageTitle': 'Design your V90 Recharge | Volvo Cars International',
	  'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/v90-hybrid',
      'CarModelsButtonText': 'Configure',
	  'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my23/car-images/xc40-phev-my23-responsive.jpg?h=500&iar=0'
	},
	// {'Type': 'ESTATE', 
	//   'Name': 'V60 Recharge',
	//   'Subtype': 'plug-in hybrid',
	//   'ViewCarHref': '/intl/cars/xc40-hybrid',
	//   'ViewCarPageTitle': 'Volvo V60 Recharge plug-in hybrid | Volvo Cars',
	//   'ViewCarPageUrl': 'https://www.volvocars.com/intl/cars/xc40-hybrid',
	//   'ShopCarHref': 'https://www.volvocars.com/intl/build/v60-hybrid',
	//   'ShopCarPageTitle': 'Design your V60 Recharge | Volvo Cars International',
	//   'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/v60-hybrid',
	//   'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/v60-recharge-my22-responsive.jpg?h=300&iar=0'
	// },
	// {'Type': 'SEDAN', 
	//   'Name': 'S90 Recharge',
	//   'Subtype': 'plug-in hybrid',
	//   'ViewCarHref': '/intl/cars/ex40-electric',
	//   'ViewCarPageTitle': 'Volvo S90 Recharge plug-in hybrid | Volvo Cars',
	//   'ViewCarPageUrl': 'https://www.volvocars.com/intl/cars/ex40-electric',
	//   'ShopCarHref': 'https://www.volvocars.com/intl/build/s90-hybrid',
	//   'ShopCarPageTitle': 'Design your S90 Recharge | Volvo Cars International',
	//   'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/s90-hybrid',
	//   'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/s90-recharge-my22-responsive.jpg?h=300&iar=0'
	// },
	// {'Type': 'SEDAN', 
	//   'Name': 'S60 Recharge',
	//   'Subtype': 'plug-in hybrid',
	//   'ViewCarHref': '/intl/cars/v90-hybrid',
	//   'ViewCarPageTitle': 'Volvo S60 Recharge plug-in hybrid | Volvo Cars',
	//   'ViewCarPageUrl': 'https://www.volvocars.com/intl/v/cars/s60-hybrid',
	//   'ShopCarHref': 'https://www.volvocars.com/intl/build/s60-hybrid',
	//   'ShopCarPageTitle': 'Design your S60 Recharge | Volvo Cars International',
	//   'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/s60-hybrid',
	//   'Src': 'https://www.volvocars.com/images/v/-/media/project/contentplatform/data/media/my22/car-images/s60-recharge-my22-responsive.jpg?h=300&iar=0'
	// }
];

const mainBodyProductListCarouselRechargeBtnText = 'RECHARGE';
const mainBodyProductListCarouselRechargeBtnHrefAttribute = '/intl/v/cars/recharge';

const rechargePageTitle = 'Plug-in hybrid and Pure electric cars | Volvo Cars';
const rechargePageUrl = 'https://www.volvocars.com/intl/v/cars/recharge';

const mainBodyProductListCarouselMildHybridCarsBtnText = 'MILD HYBRID CARS';
const mainBodyProductListCarouselMildHybridCarsBtnHrefAttribute = '/intl/v/cars/other-powertrains';

const mildHybridCarsPageTitle = 'Mild hybrids and other powertrains | Volvo Cars';
const mildHybridCarsPageUrl = 'https://www.volvocars.com/intl/v/cars/other-powertrains';

describe('Product List Carousel checks', () => {
	before (async () => {
		await highlightsPage.open();
        await highlightsPage.acceptCookiesIfDisplayed();
		await highlightsPage.mainBodyProductListCarouselContainer.scrollIntoView();
	});

it('Verify the product list carousel header', async () => {
    await expect(highlightsPage.mainBodyProductListCarouselContainerHeader).toBeDisplayed();
    await expect(highlightsPage.mainBodyProductListCarouselContainerHeader).toHaveText(mainBodyProductListCarouselContainerHeaderText);
});	

it('Verify the product list carousel pagination buttons', async () => {
    await expect(highlightsPage.mainBodyProductListCarouselPreviousBtn).toBeDisplayed();
    await expect(highlightsPage.mainBodyProductListCarouselNextBtn).toBeDisplayed();
});

it('Verify the product list carousel items', async () => {
    for (let index = 0; index < mainBodyProductListCarouselCarModels.length; index++) {
        // await highlightsPage.open();
        // await highlightsPage.mainBodyProductListCarouselContainer.scrollIntoView();
        await highlightsPage.seekItemInProductCarousel(index);
        
        await expect($(highlightsPage.mainBodyProductListCarouselItemType.replace('__INDEX__', index))).toBeDisplayed();
        await expect($(highlightsPage.mainBodyProductListCarouselItemType.replace('__INDEX__', index))).toHaveText(mainBodyProductListCarouselCarModels[index]['Type']);
        
        await expect($(highlightsPage.mainBodyProductListCarouselItemName.replace('__INDEX__', index))).toBeDisplayed();
        await expect($(highlightsPage.mainBodyProductListCarouselItemName.replace('__INDEX__', index))).toHaveText(mainBodyProductListCarouselCarModels[index]['Name']);
        
        await expect($(highlightsPage.mainBodyProductListCarouselItemSubtype.replace('__INDEX__', index))).toBeDisplayed();
        await expect($(highlightsPage.mainBodyProductListCarouselItemSubtype.replace('__INDEX__', index))).toHaveText(mainBodyProductListCarouselCarModels[index]['Subtype']);

        // await expect($(highlightsPage.mainBodyProductListCarouselItemImg.replace('__INDEX__', index))).toBeDisplayed();
		// await expect($(highlightsPage.mainBodyProductListCarouselItemImg.replace('__INDEX__', index))).toHaveAttribute('src', mainBodyProductListCarouselCarModels[index]['Src']);
        
        await expect($(highlightsPage.mainBodyProductListCarouselLearnBtn.replace('__INDEX__', index))).toBeDisplayed();
        await expect($(highlightsPage.mainBodyProductListCarouselLearnBtn.replace('__INDEX__', index))).toHaveText(mainBodyProductListCarouselCarModelsLearnText);
        await expect($(highlightsPage.mainBodyProductListCarouselLearnBtn.replace('__INDEX__', index))).toHaveAttribute('href', mainBodyProductListCarouselCarModels[index]['ViewCarHref']);
        
        await expect($(highlightsPage.mainBodyProductListCarouselConfigureBtn.replace('__INDEX__', index))).toBeDisplayed();
        await expect($(highlightsPage.mainBodyProductListCarouselConfigureBtn.replace('__INDEX__', index))).toHaveText(mainBodyProductListCarouselCarModels[index]['CarModelsButtonText']);
        await expect($(highlightsPage.mainBodyProductListCarouselConfigureBtn.replace('__INDEX__', index))).toHaveAttribute('href', mainBodyProductListCarouselCarModels[index]['ShopCarHref']);
   }
});
});