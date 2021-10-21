import {createElement} from "../utils/render";
import {getPublishDate} from "../utils/date";
import {getPrice} from "../utils/product";
import {getFilterValues, getFilterName} from "../constants";
import * as L from 'leaflet';

const OSM_ATTRIBUTION = `&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>`;

const activeIcon = L.icon({
    iconUrl: `/img/pin-active.svg`,
    iconSize: [20, 30],
});
const tileLayer = L.tileLayer(
    `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: OSM_ATTRIBUTION,
    },
);

const createPhotosTemplate = (name, photos) => {
    return photos.reduce((accum, currentValue) => {
            accum += `<li class="gallery__item">
                        <img src="${currentValue}" srcset="${currentValue} 2x" alt="${name}" width="124" height="80">
                      </li>`
            return accum;
    }, '');
}

const createCharsItem = (category, filters) => {
    return (
        Object.entries(getFilterName(category)).reduce((accum, [key, value]) => {
            accum += `<li class="chars__item">
                        <div class="chars__name">${value}</div>
                        <div class="chars__value">${getFilterValues(category, filters[key])}</div>
                    </li>`
            return accum;
        }, '')
    )
}

const createProductModalTemplate = (product) => {
    const {name, price, description, address, photos, publishDate, seller, isFavorite, category, filters} = product;
    const {fullname, rating} = seller;
    const {city, street, building} = address;
    return (
        `<section class="popup">
            <div class="popup__inner">
                <button class="popup__close" type="button" aria-label="Закрыть">
                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L9.41421 8L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L8 9.41421L1.70711 15.7071C1.31658 16.0976 0.683418 16.0976 0.292893 15.7071C-0.0976311 15.3166 -0.0976311 14.6834 0.292893 14.2929L6.58579 8L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893Z"/>
                    </svg>
                </button>
                <div class="popup__date">${getPublishDate(publishDate)}</div>
                <h3 class="popup__title">${name}</h3>
                <div class="popup__price">${getPrice(price)} ₽</div>
                    <div class="popup__columns">
                        <div class="popup__left">
                              <div class="popup__gallery gallery">
                                <button class="gallery__favourite fav-add ${isFavorite ? 'fav-add--checked' : ''}">
                                  <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3 7C3 13 10 16.5 11 17C12 16.5 19 13 19 7C19 4.79086 17.2091 3 15 3C12 3 11 5 11 5C11 5 10 3 7 3C4.79086 3 3 4.79086 3 7Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                                  </svg>
                                </button>
                                <div class="gallery__main-pic"">
                                  <img src="${photos[0]}" srcset="${photos[0]} 2x" width="520" height="340" alt="${name}">
                                </div>
                                <ul class="gallery__list">
                                 ${createPhotosTemplate(name, photos)}
                                </ul>
                              </div>
                              <ul class="popup__chars chars">
                                ${createCharsItem(category, filters)}
                              </ul>
                              <div class="popup__seller seller seller--good">
                                <h3>Продавец</h3>
                                <div class="seller__inner">
                                  <a class="seller__name" href="#">${fullname}</a>
                                  <div class="seller__rating"><span>${rating}</span></div>
                                </div>
                              </div>
                              <div class="popup__description">
                                <h3>Описание товара</h3>
                                <p>${description}</p>
                              </div>
                        </div>
                        <div class="popup__right">
                              <div class="popup__map" id="map"></div>
                              <div class="popup__address">${city}, ${street}, ${(building) ? building: ''}</div>
                        </div>
                    </div>
            </div>
        </section>`
    )
}

export default class ProductModalView {
    constructor(product) {
        this._element = null;
        this._product = product;
        this.map = null;
        this.closeModalClickHandler = this.closeModalClickHandler.bind(this);
    }

    renderMap() {
        const element = this.getElement().querySelector(`#map`);
        const {coordinates} = this._product;
        setTimeout(() => {
            this.map = L.map(element, {
                center: coordinates,
                zoom: 15,
                layers: [tileLayer],
                marker: true,
            });
            L.marker(coordinates, {icon: activeIcon}).addTo(this.map);
        },0);
    }

    renderGallery() {
        const galleryListElement = this.getElement().querySelector(`.gallery__list`);
        const galleryMainPic = this.getElement().querySelector(`.gallery__main-pic`);
        const imgItemsElement = this.getElement().querySelectorAll('.gallery__item');

        galleryListElement.addEventListener('click', (evt) => {
            imgItemsElement.forEach((item) => {
                item.classList.remove('gallery__item--active');
            });
            if (!evt.target.parentElement.classList.contains('gallery__item')) {
                return
            }
            evt.target.parentElement.classList.add('gallery__item--active');
            galleryMainPic.innerHTML = '';

            const img = new Image(520, 340);
            img.src = evt.target.src;
            img.srcset = evt.target.srcset;
            img.alt = evt.target.alt;
            galleryMainPic.append(img);
        })
    }

    getTemplate() {
        return createProductModalTemplate(this._product);
    }

    getElement() {
        if (!this._element) {
            this._element = createElement(this.getTemplate());
        }
        return this._element;
    }

    closeModal() {
        this.map.remove();
        this.getElement().querySelector(`.popup__close`).removeEventListener(`click`, this.closeModalClickHandler);
    }

    closeModalClickHandler(evt) {
        evt.preventDefault();
        this.closeModal();
    }

    removeElement() {
        this._element = null;
    }
}