import {createElement} from "../utils/render";

const createFilterCategoriesTemplate = () => {
    return (
        `<div class="filter__select-wrapper">
            <label for="categories">Категория товаров</label>
            <select id="categories" name="categories">
                <option value="all" selected>Все</option>
                <option value="estate">Недвижимость</option>
                <option value="laptops">Ноутбуки</option>
                <option value="camera">Фотоаппараты</option>
                <option value="cars">Автомобили</option>
            </select>
            <svg width="14" height="8" viewBox="0 0 14 8" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L7 5.58579L12.2929 0.292893C12.6834 -0.0976311 13.3166 -0.0976311 13.7071 0.292893C14.0976 0.683417 14.0976 1.31658 13.7071 1.70711L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z" />
            </svg>
        </div>`
    )
}

export default class FilterCategoriesView {
    constructor() {
        this._element = null;
    }

    getTemplate() {
        return createFilterCategoriesTemplate();
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