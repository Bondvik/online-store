import * as noUiSlider from 'nouislider/dist/nouislider';
import * as wNumb from 'wnumb/wNumb';

const sliderElement = document.querySelector('#slider');

export const createNoUiSliderTemplate = () => {
    noUiSlider.create(sliderElement, {
        start: [20, 80],
        tooltips: [true, wNumb({decimals: 1})],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
}

