
const { expect } = require('@wdio/globals');
const highlightsPage = require('../pageobjects/highlights.page');

const productListCarouselContainerHeaderText = 'All recharge models';
const productListCarouselCarModelsLearnText = "Learn";

const productListCarouselCarModels = [
	{
		'Type': 'CROSSOVER',
		'Name': 'EC40',
		'Subtype': 'fully electric',
		'ViewCarHref': '/intl/cars/ec40-electric/',
		'ViewCarPageTitle': 'EC40 fully electric crossover | The renamed C40 Recharge | Volvo Cars',
		'ViewCarPageUrl': 'https://www.volvocars.com/intl/cars/ec40-electric/',
		'ShopCarHref': 'https://www.volvocars.com/intl/build/ec40-electric',
		'ShopCarPageTitle': 'Design your EC40',
		'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/ec40-electric',
		'CarModelsButtonText': 'Shop'
	},
	{
		'Type': 'SUV',
		'Name': 'EX30',
		'Subtype': 'fully electric',
		'ViewCarHref': '/intl/cars/ex30-electric/',
		'ViewCarPageTitle': 'Volvo XC60 Recharge plug-in hybrid | Volvo Cars',
		'ViewCarPageUrl': 'https://www.volvocars.com/intl/cars/ex30-electric/',
		'ShopCarHref': 'https://www.volvocars.com/intl/build/ex30-electric/',
		'ShopCarPageTitle': 'Design your EX30',
		'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/ex30-electric',
		'CarModelsButtonText': 'Configure'
	},
	{
		'Type': 'SUV',
		'Name': 'EX90',
		'Subtype': 'fully electric',
		'ViewCarHref': '/intl/cars/ex90-electric/',
		'ViewCarPageTitle': 'Volvo XC40 Recharge plug-in hybrid | Volvo Cars',
		'ViewCarPageUrl': 'https://www.volvocars.com/intl/cars/ex90-electric/',
		'ShopCarHref': 'https://www.volvocars.com/intl/build/ex90-electric',
		'ShopCarPageTitle': 'Design your EX90',
		'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/ex90-electric',
		'CarModelsButtonText': 'Configure'
	},
	{
		'Type': 'SUV',
		'Name': 'XC90',
		'Subtype': 'plug-in hybrid',
		'ViewCarHref': '/intl/cars/xc90-hybrid',
		'ViewCarPageTitle': 'Volvo XC40 Recharge pure electric | Volvo Cars',
		'ViewCarPageUrl': 'https://www.volvocars.com/intl/cars/xc90-hybrid/',
		'ShopCarHref': 'https://www.volvocars.com/intl/build/xc90-hybrid',
		'ShopCarPageTitle': 'Design your XC90',
		'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/xc90-hybrid',
		'CarModelsButtonText': 'Configure'
	},
	{
		'Type': 'SUV',
		'Name': 'XC60',
		'Subtype': 'plug-in hybrid',
		'ViewCarHref': '/intl/cars/xc60-hybrid',
		'ViewCarPageTitle': 'Volvo V90 Recharge plug-in hybrid | Volvo Cars',
		'ViewCarPageUrl': 'https://www.volvocars.com/intl/cars/xc60-hybrid',
		'ShopCarHref': 'https://www.volvocars.com/intl/build/xc60-hybrid',
		'ShopCarPageTitle': 'Design your V90 Recharge | Volvo Cars International',
		'ShopCarPageUrl': 'https://www.volvocars.com/intl/build/v90-hybrid',
		'CarModelsButtonText': 'Configure'
	}
];

describe('Product List Carousel checks', () => {
	before(async () => {
		await highlightsPage.open();
		await highlightsPage.acceptCookiesIfDisplayed();
		await highlightsPage.productListCarouselContainer.scrollIntoView();
	});

	it('Verify the product list carousel header', async () => {
		await expect(highlightsPage.productListCarouselContainerHeader).toBeDisplayed();
		await expect(highlightsPage.productListCarouselContainerHeader).toHaveText(productListCarouselContainerHeaderText);
	});

	it('Verify the product list carousel pagination buttons', async () => {
		await expect(highlightsPage.productListCarouselPreviousBtn).toBeDisplayed();
		await expect(highlightsPage.productListCarouselNextBtn).toBeDisplayed();
	});

	it('Verify the product list carousel items', async () => {
		for (let index = 0; index < productListCarouselCarModels.length; index++) {
			await highlightsPage.seekItemInProductCarousel(index);

			await expect($(highlightsPage.productListCarouselItemType.replace('__INDEX__', index))).toBeDisplayed();
			await expect($(highlightsPage.productListCarouselItemType.replace('__INDEX__', index))).toHaveText(productListCarouselCarModels[index]['Type']);

			await expect($(highlightsPage.productListCarouselItemName.replace('__INDEX__', index))).toBeDisplayed();
			await expect($(highlightsPage.productListCarouselItemName.replace('__INDEX__', index))).toHaveText(productListCarouselCarModels[index]['Name']);

			await expect($(highlightsPage.productListCarouselItemSubtype.replace('__INDEX__', index))).toBeDisplayed();
			await expect($(highlightsPage.productListCarouselItemSubtype.replace('__INDEX__', index))).toHaveText(productListCarouselCarModels[index]['Subtype']);


			await expect($(highlightsPage.productListCarouselLearnBtn.replace('__INDEX__', index))).toBeDisplayed();
			await expect($(highlightsPage.productListCarouselLearnBtn.replace('__INDEX__', index))).toHaveText(productListCarouselCarModelsLearnText);
			await expect($(highlightsPage.productListCarouselLearnBtn.replace('__INDEX__', index))).toHaveAttribute('href', productListCarouselCarModels[index]['ViewCarHref']);

			await expect($(highlightsPage.productListCarouselConfigureBtn.replace('__INDEX__', index))).toBeDisplayed();
			await expect($(highlightsPage.productListCarouselConfigureBtn.replace('__INDEX__', index))).toHaveText(productListCarouselCarModels[index]['CarModelsButtonText']);
			await expect($(highlightsPage.productListCarouselConfigureBtn.replace('__INDEX__', index))).toHaveAttribute('href', productListCarouselCarModels[index]['ShopCarHref']);
		}
	});
});