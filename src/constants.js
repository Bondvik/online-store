export const RenderPosition = {
    BEFOREBEGIN: 'beforebegin',
    AFTERBEGIN: 'afterbegin',
    BEFOREEND: 'beforeend',
    AFTEREND:  'afterend'
}

export const SortLabel = {
    POPULAR: 'popular',
    CHEAP: 'cheap',
    NEW: 'new',
    FAVORITE: 'favorite'
}

const CategoryType = {
    ESTATE: 'Недвижимость',
    LAPTOPS: 'Ноутбук',
    CAMERA: 'Фотоаппарат',
    CARS: 'Автомобиль'
}

const filtersNames = {
    [CategoryType.ESTATE]: {
        'type': `Тип недвижимости`,
        'area': `Площадь, м2`,
        'rooms-count': `Количество комнат`,
    },
    [CategoryType.LAPTOPS]: {
        'type': `Тип ноутбука`,
        'ram-value': `Объем оперативной памяти`,
        'screen-size': `Диагональ экрана`,
        'cpu-type': `Тип процессора`,
    },
    [CategoryType.CAMERA]: {
        'type': `Тип фотоаппарата`,
        'matrix-resolution': `Разрешение матрицы`,
        'supporting': `Разрешение видео`,
    },
    [CategoryType.CARS]: {
        'body-type': `Тип кузова`,
        'transmission': `Коробка передач`,
        'production-year': `Год выпуска`,
    },
}

const filtersValues = {
    [CategoryType.ESTATE]: {
        'flat': `Квартира`,
        'house': `Дом`,
        'apartment': `Апартаменты`,
    },
    [CategoryType.LAPTOPS]: {
        'i3': `Intel Core i3`,
        'i5': `Intel Core i5`,
        'i7': `Intel Core i7`,
        4: `4 Гб`,
        8: `8 Гб`,
        16: `16 Гб`,
        'ultrabook': `Ультрабук`,
        'home': `Домашний ноутбук`,
        'gaming': `Игровой ноутбук`,
    },
    [CategoryType.CAMERA]: {
        'slr': `Зеркальный`,
        'digital': `Цифровой`,
        'mirrorless': `Беззеркальный`,
        'hd': `HD`,
        'full-hd': `Full HD`,
        '4k': `4K`,
        '5k': `5K`,
    },
    [CategoryType.CARS]: {
        'auto': `Автомат`,
        'mechanic': `Механическая`,
        'sedan': `Седан`,
        'universal': `Универсал`,
        'hatchback': `Хэтчбэк`,
        'suv': `Внедорожник`,
        'coupe': `Купэ`,
    },
};

export const getFilterName = (category) => {
    return filtersNames[category];
}

export const getFilterValues = (category, value) => {
    return (filtersValues[category][value]) ? filtersValues[category][value] : value;
}