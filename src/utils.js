//Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export const getRandomNumber = function(min, max) {
    let minValue =  Math.ceil(min);
    let maxValue = Math.floor(max);
    if (min < 0 || max < 0) {
        return;
    }
    if (min === max) {
        return min;
    }
    if (min > max) {
        minValue = Math.ceil(max);
        maxValue = Math.floor(min);
    }
    return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
};

export const getPrice = (value) => {
    const price = String(value).split('');
    let modifiedPrice = [];
    let counter = 0;
    for (let i = price.length; i >= 0; i-- ) {
        modifiedPrice.push(price[i]);
        if (counter % 3 === 0) {
            modifiedPrice.push(' ');
        }
        counter++;
    }
    return modifiedPrice.reverse().join('').trim();
}
