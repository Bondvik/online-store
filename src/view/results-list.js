import {createElement} from "../utils/render";

const createResultsListTemplate = () => {
    return (
        `<ul class="results__list">
        </ul>`
    )
}

export default class ResultsListView {
    constructor() {
        this._element = null;
    }

    getTemplate() {
        return createResultsListTemplate();
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