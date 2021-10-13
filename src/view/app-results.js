import {createElement} from "../utils/render";

const createAppResultsTemplate = () => {
    return (
        `<section class="onlineshop-app__results results">
         </section>`
    )
}

export default class AppResultsView {
    constructor() {
        this._element = null;
    }

    getTemplate() {
        return createAppResultsTemplate();
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