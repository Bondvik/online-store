import {createElement} from "../utils/render";

const createNoProductsTemplate = () => {
    return (
        `<div class="results__info results__info--empty-block">
          <p class="results__empty-message">Мы не нашли товары по вашему запросу.</p>
          <p class="results__notion">Попробуйте поменять фильтры настройки объявлений в блоке слева</p>
        </div>`
    )
}

export default class NoProductsView {
    constructor() {
        this._element = null;
    }

    getTemplate() {
        return createNoProductsTemplate();
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