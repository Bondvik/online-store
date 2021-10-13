import {createElement} from "../utils/render";

const createAppTemplate = () => {
    return (
        `<section class="onlineshop-app">
            <h1 class="visually-hidden">Главная</h1>
            <div class="onlineshop-app__blueline"></div>
            <div class="onlineshop-app__wrapper"></div>
        </section>`
    )
}

export default class AppView {
    constructor() {
        this._element = null;
    }

    getTemplate() {
        return createAppTemplate();
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
