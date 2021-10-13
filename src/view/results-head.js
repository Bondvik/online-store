import {createElement} from "../utils/render";

const createResultsHeadTemplate = () => {
    return (
        `<div class="results__head">
            <h2 class="title results__title">Результаты</h2>
        </div>`
    )
}

export default class ResultsHeadView {
    constructor() {
        this._element = null;
    }

    getTemplate() {
        return createResultsHeadTemplate();
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