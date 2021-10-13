import {RenderPosition} from "./constants";
import {render} from "./utils/render";
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
import ProductModalView from "./view/product-modal";

const PRODUCT_COUNT = 5;

const products = new Array(PRODUCT_COUNT).fill().map(createProduct);

const renderProduct = (resultsListElement, product) => {
    const productComponent = new ProductView(product);
    const productModalComponent = new ProductModalView(product);
    render(resultsListElement, productComponent.getElement(), RenderPosition.BEFOREEND);
}

const mainElement = document.querySelector('main');
render(mainElement, new AppView().getElement(), RenderPosition.AFTERBEGIN);

const appWrapperElement = document.querySelector('.onlineshop-app__wrapper');
render(appWrapperElement, new AppFilterView().getElement(), RenderPosition.AFTERBEGIN);
render(appWrapperElement, new AppResultsView().getElement(), RenderPosition.BEFOREEND);

//Фильтр
const filterFormElement = document.querySelector('.filter__form');
const filterButtonElement = filterFormElement.querySelector('.filter__button');

render(filterButtonElement, new FilterCategoriesView().getElement(), RenderPosition.BEFOREBEGIN);
render(filterButtonElement, new FilterRangeView().getElement(), RenderPosition.BEFOREBEGIN);
render(filterButtonElement, new FilterEstateView().getElement(), RenderPosition.BEFOREBEGIN);
render(filterButtonElement, new FilterCameraView().getElement(), RenderPosition.BEFOREBEGIN);
render(filterButtonElement, new FilterLaptopView().getElement(), RenderPosition.BEFOREBEGIN);
render(filterButtonElement, new FilterCarView().getElement(), RenderPosition.BEFOREBEGIN);

//Ползунок
const sliderElement = document.querySelector('#slider');
new NoUiSliderView(sliderElement, products).createSlider();

//Результаты
const resultsElement = document.querySelector('.onlineshop-app__results');
render(resultsElement, new ResultsHeadView().getElement(), RenderPosition.AFTERBEGIN);

//Сортировка товаров: Популярные | Дешёвые | Новые
const resultsHeadElement = document.querySelector('.results__head');
render(resultsHeadElement, new SortingOrderView().getElement(), RenderPosition.BEFOREEND);

//Сортировка товаров по избранному
const fromElement = document.querySelector('.sorting__form');
render(fromElement, new SortingFavoritesView().getElement(), RenderPosition.BEFOREEND);

//Вывод списка товаров
render(resultsElement, new ResultsListView().getElement(), RenderPosition.BEFOREEND);
const resultsListElement = document.querySelector('.results__list');
for (let i = 0; i < PRODUCT_COUNT; i++) {
    renderProduct(resultsListElement, products[i]);
}