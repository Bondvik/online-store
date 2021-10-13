import * as noUiSlider from 'nouislider/dist/nouislider';
import * as wNumb from 'wnumb/wNumb';

export const createNoUiSliderTemplate = (element, products) => {
    const prices = products.map((product) => product.price);
    const pricesBySort = prices.sort((price1, price2) => price1 - price2);

    noUiSlider.create(element, {
        start: [pricesBySort[0], pricesBySort[pricesBySort.length - 1]],
        tooltips: [true, wNumb({decimals: 0})],
        step: 1000,
        connect: true,
        format: wNumb({
            decimals: 0,
        }),
        range: {
            'min': pricesBySort[0],
            'max': pricesBySort[pricesBySort.length - 1]
        }
    });

    // element.noUiSlider.on('update', (_, handle, unencoded) => {
    //     //console.log(unencoded[0], unencoded[1])
    //     console.log(products.slice())
    // });
}

