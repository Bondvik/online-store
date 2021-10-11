import {SortLabel} from "../constants";

export const sortProducts = (products, sortLabel) => {
    switch (sortLabel) {
        case SortLabel.CHEAP:
            return products.slice().sort((product1, product2) => product1.price - product2.price);
        case SortLabel.NEW:
            return products.slice().sort((product1, product2) => product2.publishDate - product1.publishDate);
        case SortLabel.FAVORITE:
            return products.filter((product) => product.isFavorite)
        default:
            return products;
    }
}