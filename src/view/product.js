import {getPublishDate} from "../utils/date";
import {getPrice} from "../utils/product";
import {createElement} from "../utils/render";

const createProductTemplate = (product) => {
    const {name, price, address, photos, publishDate, isFavorite} = product;
    const {city, street} = address;
    const isPhotos = photos.length > 1 ? `+${photos.length - 1} фото` : '';
    return (
        `<li class="results__item product">
            <button class="product__favourite fav-add ${isFavorite ? 'fav-add--checked' : ''}" type="button" aria-label="Добавить в избранное">
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="product__image">
                <div class="product__image-more-photo hidden">${isPhotos}</div>
                <img src="${photos[0]}" srcset="${photos[0]} 2x" class="product-image" alt="${name}">
                    <div class="product__image-navigation">
                        <span class="product__navigation-item product__navigation-item--active"></span>
                        <span class="product__navigation-item"></span>
                        <span class="product__navigation-item"></span>
                        <span class="product__navigation-item"></span>
                        <span class="product__navigation-item"></span>
                    </div>
            </div>
            <div class="product__content">
                <h3 class="product__title">
                    <a href="#">${name}</a>
                </h3>
                <div class="product__price">${getPrice(price)} ₽</div>
                <div class="product__address">${city}, ${street}</div>
                <div class="product__date">${getPublishDate(publishDate)}</div>
            </div>
        </li>`
    )
}

export default class ProductView {
    constructor(product) {
        this._element = null;
        this._product = product;
    }

    getTemplate() {
        return createProductTemplate(this._product);
    }

    getElement() {
        if (!this._element) {
            this._element = createElement(this.getTemplate());
        }
        return this._element;
    }

    removeElement() {
        this._element = null;
    }
}