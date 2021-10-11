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
