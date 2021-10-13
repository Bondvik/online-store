import {createElement} from "../utils/render";

const createNoFavoritesTemplate = () => {
    return (
        `<div class="results__info favourites hidden">
            <p class="favourites__empty-message">У вас пока нет избранных товаров. Чтобы отметить товар, кликните на сердечко в карточке объявления.</p>
            <p class="favourites__notion">Вы можете вернуться к списку всех товаров, кликнув ещё раз на&nbsp;«Показать избранные»</p>
        </div>`
    )
}

export default class NoFavoritesView {
    constructor() {
        this._element = null;
    }

    getTemplate() {
        return createNoFavoritesTemplate();
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