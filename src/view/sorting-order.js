import {SortLabel} from "../constants";
import {createElement} from "../utils/render";

const createSortingOrderTemplate = () => {
    return (
        `<div class="results__sorting sorting">
            <form class="sorting__form">
               <fieldset class="sorting__order">
                  <legend>Показать сначала:</legend>
                  <ul class="sorting__order-list">
                     <li class="sorting__order-tab" data-label="${SortLabel.POPULAR}">
                       <input class="visually-hidden" type="radio" name="sorting-order" value="popular" id="sort-popular" checked>
                       <label for="sort-popular">Популярные</label>
                     </li>
                     <li class="sorting__order-tab" data-label="${SortLabel.CHEAP}">
                        <input class="visually-hidden" type="radio" name="sorting-order" value="cheap" id="sort-cheap">
                        <label for="sort-cheap">Дешёвые</label>
                     </li>
                     <li class="sorting__order-tab" data-label="${SortLabel.NEW}">
                        <input class="visually-hidden" type="radio" name="sorting-order" value="cheap" id="sort-new">
                        <label for="sort-new">Новые</label>
                     </li>
                  </ul>
               </fieldset>
            </form>
        </div>`
    )
}

export default class SortingOrderView {
    constructor() {
        this._element = null;
    }

    getTemplate() {
        return createSortingOrderTemplate();
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