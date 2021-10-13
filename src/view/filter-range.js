import {createElement} from "../utils/render";

const createFilterRangeTemplate = () => {
    return (
        `<div class="filter__range">
            <label for="range">Цена, ₽</label>
            <input class="price-range__value" id="range" type="number" value="" step="any">
            <div id="slider"></div>
        </div>`
    )
}

export default class FilterRangeView {
    constructor() {
        this._element = null;
    }

    getTemplate() {
        return createFilterRangeTemplate();
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