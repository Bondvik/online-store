import {RenderPosition, SortLabel} from "./constants";
import {createAppTemplate} from "./view/app";
import {createAppFilterTemplate} from "./view/app-filter";
import {createFilterCategoriesTemplate} from "./view/filter-categories";
import {createFilterRangeTemplate} from "./view/filter-range";
import {createNoUiSliderTemplate} from "./nouislider";
import {createFilterEstateTemplate} from "./view/filter-estate";
import {createFilterCameraTemplate} from "./view/filter-camera";
import {createFilterLaptopTemplate} from "./view/filter-laptop";
import {createFilterCarTemplate} from "./view/filter-car";
import {createAppResultsTemplate} from "./view/app-results";
import {createResultsHeadTemplate} from "./view/results-head";
import {createSortingOrderTemplate} from "./view/sorting-order";
import {createSortingFavoritesTemplate} from "./view/sorting-favorites";
import {createResultsListTemplate} from "./view/results-list";
import {createProductTemplate} from "./view/product";
import {createProduct} from "./data";
import {sortProducts} from "./utils";

const PRODUCT_COUNT = 5;

const products = new Array(PRODUCT_COUNT).fill().map(createProduct);

const render = (container, element, position) => {
    container.insertAdjacentHTML(position, element)
}

const mainElement = document.querySelector('main');
render(mainElement, createAppTemplate(), RenderPosition.AFTERBEGIN);

const appWrapperElement = document.querySelector('.onlineshop-app__wrapper');
render(appWrapperElement, createAppFilterTemplate(), RenderPosition.AFTERBEGIN);
render(appWrapperElement, createAppResultsTemplate(), RenderPosition.BEFOREEND);

//Фильтр
const filterFormElement = document.querySelector('.filter__form');

const filterButtonElement = filterFormElement.querySelector('.filter__button');
render(filterButtonElement, createFilterCategoriesTemplate(), RenderPosition.BEFOREBEGIN);
render(filterButtonElement, createFilterRangeTemplate(), RenderPosition.BEFOREBEGIN);
render(filterButtonElement, createFilterEstateTemplate(), RenderPosition.BEFOREBEGIN);
render(filterButtonElement, createFilterCameraTemplate(), RenderPosition.BEFOREBEGIN);
render(filterButtonElement, createFilterLaptopTemplate(), RenderPosition.BEFOREBEGIN);
render(filterButtonElement, createFilterCarTemplate(), RenderPosition.BEFOREBEGIN);

const sliderElement = document.querySelector('#slider');
createNoUiSliderTemplate(sliderElement);

//Результаты
const resultsElement = document.querySelector('.onlineshop-app__results');
render(resultsElement, createResultsHeadTemplate(), RenderPosition.AFTERBEGIN);


//Сортировка товаров: Популярные | Дешёвые | Новые
const resultsHeadElement = document.querySelector('.results__head');
render(resultsHeadElement, createSortingOrderTemplate(), RenderPosition.BEFOREEND);

//Сортировка товаров по избранному
const fromElement = document.querySelector('.sorting__form');
render(fromElement, createSortingFavoritesTemplate(), RenderPosition.BEFOREEND);

//Вывод списка товаров
render(resultsElement, createResultsListTemplate(), RenderPosition.BEFOREEND);
const resultsListElement = document.querySelector('.results__list');
for (let i = 0; i < PRODUCT_COUNT; i++) {
    render(resultsListElement, createProductTemplate(products[i]), RenderPosition.BEFOREEND)
}