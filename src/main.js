import {RenderPosition} from "./constants";
import {renderElement, renderTemplate} from "./utils/render";
import {createProduct} from "./data";
import AppView from "./view/app";

import AppFilterView from "./view/app-filter";
import FilterCategoriesView from "./view/filter-categories";
import FilterRangeView from "./view/filter-range";
import NoUiSliderView from "./view/nouislider";
import FilterEstateView from "./view/filter-estate";
import FilterCameraView from "./view/filter-camera";
import FilterLaptopView from "./view/filter-laptop";
import FilterCarView from "./view/filter-car";

import AppResultsView from "./view/app-results";
import ResultsHeadView from "./view/results-head";
import SortingOrderView from "./view/sorting-order";
import SortingFavoritesView from "./view/sorting-favorites";
import ResultsListView from "./view/results-list";
import ProductView from "./view/product";

const PRODUCT_COUNT = 5;

const products = new Array(PRODUCT_COUNT).fill().map(createProduct);

const mainElement = document.querySelector('main');
renderElement(mainElement, new AppView().getElement(), RenderPosition.AFTERBEGIN);

const appWrapperElement = document.querySelector('.onlineshop-app__wrapper');
renderElement(appWrapperElement, new AppFilterView().getElement(), RenderPosition.AFTERBEGIN);
renderElement(appWrapperElement, new AppResultsView().getElement(), RenderPosition.BEFOREEND);

//Фильтр
const filterFormElement = document.querySelector('.filter__form');
const filterButtonElement = filterFormElement.querySelector('.filter__button');

renderTemplate(filterButtonElement, new FilterCategoriesView().getTemplate(), RenderPosition.BEFOREBEGIN);
renderTemplate(filterButtonElement, new FilterRangeView().getTemplate(), RenderPosition.BEFOREBEGIN);
renderTemplate(filterButtonElement, new FilterEstateView().getTemplate(), RenderPosition.BEFOREBEGIN);
renderTemplate(filterButtonElement, new FilterCameraView().getTemplate(), RenderPosition.BEFOREBEGIN);
renderTemplate(filterButtonElement, new FilterLaptopView().getTemplate(), RenderPosition.BEFOREBEGIN);
renderTemplate(filterButtonElement, new FilterCarView().getTemplate(), RenderPosition.BEFOREBEGIN);

//Ползунок
const sliderElement = document.querySelector('#slider');
new NoUiSliderView(sliderElement, products).createSlider();

//Результаты
const resultsElement = document.querySelector('.onlineshop-app__results');
renderElement(resultsElement, new ResultsHeadView().getElement(), RenderPosition.AFTERBEGIN);

//Сортировка товаров: Популярные | Дешёвые | Новые
const resultsHeadElement = document.querySelector('.results__head');
renderElement(resultsHeadElement, new SortingOrderView().getElement(), RenderPosition.BEFOREEND);

//Сортировка товаров по избранному
const fromElement = document.querySelector('.sorting__form');
renderElement(fromElement, new SortingFavoritesView().getElement(), RenderPosition.BEFOREEND);

//Вывод списка товаров
renderElement(resultsElement, new ResultsListView().getElement(), RenderPosition.BEFOREEND);
const resultsListElement = document.querySelector('.results__list');
for (let i = 0; i < PRODUCT_COUNT; i++) {
    renderElement(resultsListElement, new ProductView(products[i]).getElement(), RenderPosition.BEFOREEND)
}