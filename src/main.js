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
import {renderTemplate} from "./utils/render";

const PRODUCT_COUNT = 5;

const products = new Array(PRODUCT_COUNT).fill().map(createProduct);

const mainElement = document.querySelector('main');
renderTemplate(mainElement, createAppTemplate(), RenderPosition.AFTERBEGIN);

const appWrapperElement = document.querySelector('.onlineshop-app__wrapper');
renderTemplate(appWrapperElement, createAppFilterTemplate(), RenderPosition.AFTERBEGIN);
renderTemplate(appWrapperElement, createAppResultsTemplate(), RenderPosition.BEFOREEND);

//Фильтр
const filterFormElement = document.querySelector('.filter__form');

const filterButtonElement = filterFormElement.querySelector('.filter__button');
renderTemplate(filterButtonElement, createFilterCategoriesTemplate(), RenderPosition.BEFOREBEGIN);
renderTemplate(filterButtonElement, createFilterRangeTemplate(), RenderPosition.BEFOREBEGIN);
renderTemplate(filterButtonElement, createFilterEstateTemplate(), RenderPosition.BEFOREBEGIN);
renderTemplate(filterButtonElement, createFilterCameraTemplate(), RenderPosition.BEFOREBEGIN);
renderTemplate(filterButtonElement, createFilterLaptopTemplate(), RenderPosition.BEFOREBEGIN);
renderTemplate(filterButtonElement, createFilterCarTemplate(), RenderPosition.BEFOREBEGIN);

const sliderElement = document.querySelector('#slider');
createNoUiSliderTemplate(sliderElement, products);

//Результаты
const resultsElement = document.querySelector('.onlineshop-app__results');
renderTemplate(resultsElement, createResultsHeadTemplate(), RenderPosition.AFTERBEGIN);


//Сортировка товаров: Популярные | Дешёвые | Новые
const resultsHeadElement = document.querySelector('.results__head');
renderTemplate(resultsHeadElement, createSortingOrderTemplate(), RenderPosition.BEFOREEND);

//Сортировка товаров по избранному
const fromElement = document.querySelector('.sorting__form');
renderTemplate(fromElement, createSortingFavoritesTemplate(), RenderPosition.BEFOREEND);

//Вывод списка товаров
renderTemplate(resultsElement, createResultsListTemplate(), RenderPosition.BEFOREEND);
const resultsListElement = document.querySelector('.results__list');
for (let i = 0; i < PRODUCT_COUNT; i++) {
    renderTemplate(resultsListElement, createProductTemplate(products[i]), RenderPosition.BEFOREEND)
}