import {createElement} from "../utils/render";

const createAppFilterTemplate = () => {
    return (
        `<section class="onlineshop-app__filter filter">
            <h2 class="title filter__title">Фильтр</h2>
            <form class="filter__form" action="#" method="post">
                <button class="button filter__button" type="submit">Показать</button>
            </form>
        </section>`
    )
}

export default class AppFilterView {
    constructor() {
        this._element = null;
    }

    getTemplate() {
        return createAppFilterTemplate();
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