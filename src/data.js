import {getRandomNumber} from "./utils";
import {nanoid} from "nanoid";

const estates = [
    {
        "name": "Двушка в центре Питера",
        "price": 30000000,
        "coordinates": [
            59.938784,
            30.323126
        ],
        "seller": {
            "fullname": "Бюро Семёна",
            "rating": 4.7
        },
        "description": "Просторная двушка в центре Питера. Без кухни, зато в историческом здании. Внизу много кафешек, поесть можно и там. Есть выход на крышу, с которой виден весь город. В собственности больше трёх лет.",
        "address": {
            "city": "Санкт-Петербург",
            "street": "ул.Большая Конюшенная",
            "building": "д.19"
        },
        "publish-date": "1576773899132",
        "category": "Недвижимость",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_1_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_1_2.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_1_3.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_1_4.png"
        ],
        "filters": {
            "type": "flat",
            "area": 120,
            "rooms-count": 2
        }
    },
    {
        "name": "Студия для аскетов",
        "price": 5000000,
        "coordinates": [
            52.334955,
            104.267437
        ],
        "seller": {
            "fullname": "Марья Андреевна",
            "rating": 3
        },
        "description": "Студия с лаконичным дизайном возле Ангары. Квартира небольшая, но в ней есть всё необходимое для комфортной одинокой жизни. Балкона нет, зато есть большое окно, выходящее во двор. На подоконник часто прилетают голуби, вы сможете с ними подружиться.",
        "address": {
            "city": "Иркутск",
            "street": "ул. Полярная",
            "building": "д.95А"
        },
        "publish-date": "1557122399389",
        "category": "Недвижимость",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_4_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_4_2.png"
        ],
        "filters": {
            "type": "flat",
            "area": 20,
            "rooms-count": 1
        }
    },
    {
        "name": "Апартаменты для фрилансера",
        "price": 3000000,
        "coordinates": [
            56.034606,
            92.890391
        ],
        "seller": {
            "fullname": "Марина Недвижимость",
            "rating": 4.1
        },
        "description": "Уютные апартаменты в центре города. Большие окна, много света. Нет кабинета, но за кухонных столом удобно работать. Есть небольшая комната для приёма гостей.",
        "address": {
            "city": "Красноярск",
            "street": "ул. Шахтёров",
            "building": "д.33Б"
        },
        "publish-date": "1608220822265",
        "category": "Недвижимость",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_5_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_5_2.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/apt_5_3.png"
        ],
        "filters": {
            "type": "apartment",
            "area": 50,
            "rooms-count": 2
        }
    },
];

const cars = [
    {
        "name": "BMW 5 серии б/у",
        "price": 3370000,
        "coordinates": [
            55.653558,
            37.586329
        ],
        "seller": {
            "fullname": "Пётр Квят",
            "rating": 4.1
        },
        "description": "В хорошем состоянии, пробег 100000 км, в аварии не попадала, есть подушки безопасности. Зимнюю резину отдам в подарок.",
        "address": {
            "city": "Москва",
            "street": "ул. Одесская",
            "building": "д.22 корпус 4"
        },
        "publish-date": "1541068467135",
        "category": "Автомобиль",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_1_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_1_2.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_1_3.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_1_4.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_1_5.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_1_6.png"
        ],
        "filters": {
            "production-year": 2016,
            "transmission": "auto",
            "body-type": "sedan"
        }
    },
    {
        "name": "Новый Porsche Panamera",
        "price": 6942000,
        "coordinates": [
            55.653558,
            37.586329
        ],
        "seller": {
            "fullname": "Пётр Квят",
            "rating": 4.1
        },
        "description": "Новенький Porshе с кожаным салоном, парктроником, электроприводом передних сидений. Есть подогрев зеркал, усилитель руля и камера заднего вида.",
        "address": {
            "city": "Москва",
            "street": "ул. Одесская",
            "building": "д.22 корпус 4"
        },
        "publish-date": "1589079707835",
        "category": "Автомобиль",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_2_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_2_2.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_2_3.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_2_4.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_2_5.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_2_6.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_2_7.png"
        ],
        "filters": {
            "production-year": 2019,
            "transmission": "auto",
            "body-type": "universal"
        }
    },
    {
        "name": "Opel Corsa D",
        "price": 195000,
        "coordinates": [
            59.851385,
            30.026907
        ],
        "seller": {
            "fullname": "Прокатчик тачек",
            "rating": 3.9
        },
        "description": "Пробег 225000 км, состояние хорошее, коррозии нет. Сзади новые амортизаторы, обновлена подвеска. Есть подушки безопасности.",
        "address": {
            "city": "Санкт-Петербург",
            "street": "ул. Львовская",
            "building": "д.19 корпус 2"
        },
        "publish-date": "1566579599795",
        "category": "Автомобиль",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_5_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_5_2.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/car_5_3.png"
        ],
        "filters": {
            "production-year": 2008,
            "transmission": "mechanic",
            "body-type": "hatchback"
        }
    },
];

const laptops = [
    {
        "name": "MacBook Pro 13 2011 года",
        "price": 13000,
        "coordinates": [
            53.446529,
            41.807836
        ],
        "seller": {
            "fullname": "Вася",
            "rating": 4
        },
        "description": "В хорошем состоянии, аккумулятор держит около трёх часов. Есть две небольшие вмятины на крышке, на работу никак не влияют. Царапин нет. В подарок отдам пластиковый чехол.",
        "address": {
            "city": "Моршанск",
            "street": "ул. Сакко и Ванцетти",
            "building": "д.74"
        },
        "publish-date": "1578569567046",
        "category": "Ноутбук",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/laptop_1_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/laptop_1_2.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/laptop_1_3.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/laptop_1_4.png"
        ],
        "filters": {
            "type": "-",
            "ram-value": 4,
            "screen-size": 13,
            "cpu-type": "i5"
        }
    },
    {
        "name": "Apple MacBook Air 13",
        "price": 25000,
        "coordinates": [
            55.180722,
            61.427949
        ],
        "seller": {
            "fullname": "Максим",
            "rating": 4.5
        },
        "description": "На гарантии. Куплен 3 месяца назад за 65990 рублей. Нужно заменить матрицу. Продаю из-за ненадобности. Всё работает идеально. Кроме экрана. Готов поменять на айфон.",
        "address": {
            "city": "Челябинск",
            "street": "ул.Артиллерийская",
            "building": "д.53"
        },
        "publish-date": "1566890933376",
        "category": "Ноутбук",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/laptop_2_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/laptop_2_2.png"
        ],
        "filters": {
            "type": "-",
            "ram-value": 4,
            "screen-size": 13,
            "cpu-type": "i5"
        }
    },
    {
        "name": "Ноутбук Asus GTX 860",
        "price": 21900,
        "coordinates": [
            55.75092,
            36.965827
        ],
        "seller": {
            "fullname": "Идеальный ноутбук",
            "rating": 4.2
        },
        "description": "Популярный Asus N-серии, отлично справится с любыми задачами. К тому же имеет FullHD матрицу. Торопитесь, такая привлекательная цена будет ещё две недели! К ноутбуку подарим мышку!",
        "address": {
            "city": "садовое товарищество Хуторок",
            "street": "ул. Берёзовая",
            "building": "д.140"
        },
        "publish-date": "1595208829319",
        "category": "Ноутбук",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/laptop_3_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/laptop_3_2.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/laptop_3_3.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/laptop_3_4.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/laptop_3_5.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/laptop_3_6.png"
        ],
        "filters": {
            "type": "home",
            "ram-value": 8,
            "screen-size": 15.6,
            "cpu-type": "i7"
        }
    },
];

const cameras = [
    {
        "name": "Фотоаппарат Nikon D610",
        "price": 85000,
        "coordinates": [
            55.75206,
            36.959008
        ],
        "seller": {
            "fullname": "Карина",
            "rating": 3.3
        },
        "description": "Профессиональная полнокадровая фотокамера. Фотографии с разрешением 6016х4016 px. Запись видео с разрешением 1920х1080. Съемка 6 кадров в сек. Съемные объективы. Автофокусировка. В комплекте флешки на 64 и 16 гб, зарядник для батареек.",
        "address": {
            "city": "коттеджный посёлок Николин Ручей",
            "street": "ул. Рябиновая",
            "building": "д.13"
        },
        "publish-date": "1580770800663",
        "category": "Фотоаппарат",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/cam_1_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/cam_1_2.png"
        ],
        "filters": {
            "type": "slr",
            "matrix-resolution": "-",
            "supporting": "full-hd"
        }
    },
    {
        "name": "Фотоаппарат Sony NEX-5",
        "price": 10000,
        "coordinates": [
            51.787424,
            55.122216
        ],
        "seller": {
            "fullname": "Пётр",
            "rating": 2.9
        },
        "description": "2 аккумулятора, зарядное, 2 объектива. Чехол для фотоаппарата. Активно не использовали, сняли свадьбу и выпускной, после этого лежит без дела. На двух объективах сразу поставили фильтр Flama.",
        "address": {
            "city": "Оренбург",
            "street": "проспект Победы",
            "building": "д.116"
        },
        "publish-date": "1558596738466",
        "category": "Фотоаппарат",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/cam_2_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/cam_2_2.png"
        ],
        "filters": {
            "type": "digital",
            "matrix-resolution": 14.2,
            "supporting": "full-hd"
        }
    },
    {
        "name": "Nikon D3100 Kit 18-5",
        "price": 9000,
        "coordinates": [
            54.731851,
            55.9634526
        ],
        "seller": {
            "fullname": "Юлия Михалева",
            "rating": 4.3
        },
        "description": "Отлично подходит для изучения азов фотографии. Прост в обращении, неприхотлив. Не бит, не крашен, в экстремальных ситуациях не был, под дождем не мок. На объективе есть защитный фильтр. В комплекте зарядка и чехол Lowepro. Установочный диск, документы и коробка потеряны, не знаю, где их найти.",
        "address": {
            "city": "Уфа",
            "street": "ул. Пархоменко",
            "building": "д.82"
        },
        "publish-date": "1582638029924",
        "category": "Фотоаппарат",
        "photos": [
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/cam_3_1.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/cam_3_2.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/cam_3_3.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/cam_3_4.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/cam_3_5.png",
            "https://assets.htmlacademy.ru/content/projects/1-trading-floor/cam_3_6.png"
        ],
        "filters": {
            "type": "slr",
            "matrix-resolution": "-",
            "supporting": "-"
        }
    },
];

const data = [estates, cars, laptops, cameras];

export const createProduct = () => {
    const randomData = data[getRandomNumber(0, data.length - 1)];
    return Object.assign({},
        randomData[getRandomNumber(0, randomData.length - 1)],
        {
            "id": nanoid(),
            "isFavorite": Boolean(getRandomNumber(0, 1))
        })
}
