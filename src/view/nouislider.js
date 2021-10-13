import * as noUiSlider from 'nouislider/dist/nouislider';
import * as wNumb from 'wnumb/wNumb';

export default class NoUiSliderView {
    constructor(element, products) {
        this._element = element;
        this._products = products;
    }

    createSlider() {
        const prices = this._products.map((product) => product.price);
        const pricesBySort = prices.sort((price1, price2) => price1 - price2);

        noUiSlider.create(this._element, {
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
    }
}

