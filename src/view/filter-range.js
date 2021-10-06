export const createFilterRangeTemplate = () => {
    return (
        `<div class="filter__range">
            <label for="range">Цена, ₽</label>
            <input class="price-range__value" id="range" type="number" value="" step="any">
            <div id="slider"></div>
        </div>`
    )
}