import * as noUiSlider from 'nouislider/dist/nouislider';
import * as wNumb from 'wnumb/wNumb';

export const createNoUiSliderTemplate = (element) => {
    noUiSlider.create(element, {
        start: [20, 80],
        tooltips: [true, wNumb({decimals: 1})],
        connect: true,
        range: {
            'min': 0,
            'max': 100
        }
    });
}

