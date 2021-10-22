import {getPublishDate} from "../utils/date";
import {getPrice} from "../utils/product";
import {createElement} from "../utils/render";

const NAVIGATION_PHOTOS_COUNT = 5;

const createProductNavigation = (photos) => {
    return photos.slice(0, NAVIGATION_PHOTOS_COUNT).reduce((accum, photo, index) => {
        accum += `<div class="product__navigation-column" data-photo-index="${index}"><span></span></div>`
        return accum;
    }, '')
}

const createProductTemplate = (product) => {
    const {name, price, address, photos, publishDate, isFavorite} = product;
    const {city, street} = address;
    return (
        `<li class="results__item product">
            <button class="product__favourite fav-add ${isFavorite ? 'fav-add--checked' : ''}" type="button" aria-label="Добавить в избранное">
                <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="product__image">
                <div class="product__image-more-photo hidden"></div>
                    <div class="product__image-navigation">
                        ${createProductNavigation(photos)}
                    </div>
                <img src="${photos[0]}" srcset="${photos[0]} 2x" class="product-image" alt="${name}">
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

        this.morePhotoElement = this.getElement().querySelector(`.product__image-more-photo`);
        this.hideMorePhotos = this.hideMorePhotos.bind(this);
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

    showMorePhotos() {
        const photosCount = this._product.photos.length;
        if (photosCount > NAVIGATION_PHOTOS_COUNT) {
            this.morePhotoElement.classList.remove(`hidden`);
            this.morePhotoElement.innerText = `+${photosCount - NAVIGATION_PHOTOS_COUNT} фото`;
        }
    }

    hideMorePhotos() {
        this.morePhotoElement.classList.add(`hidden`);
    }

    getActivePhoto() {
        const productImageNavigation = this.getElement().querySelector('.product__image-navigation');
        const productImage = this.getElement().querySelector('.product__image img');

        productImageNavigation.addEventListener('mousemove', (evt) => {
            const photoIndex = Number(evt.target.dataset.photoIndex);
            const activePhoto = this._product.photos[photoIndex];

            if (!activePhoto) {
                return
            }

            if (evt.target.classList.contains('product__navigation-column')) {
                productImage.setAttribute(`src`, activePhoto);
                productImage.setAttribute(`srcset`, activePhoto);
            }

            if (photoIndex === (NAVIGATION_PHOTOS_COUNT - 1)) {
                this.showMorePhotos();
                evt.target.addEventListener(`mouseout`, this.hideMorePhotos);
            }
        })
    }
}