import dayjs from "dayjs";
const duration = require('dayjs/plugin/duration');
const relativeTime = require('dayjs/plugin/relativeTime');

const ONE_DAY = 1;
const ONE_WEEK_DAYS = 7;
const ONE_DAY_HOURS = 24;

const getTitleByHours = (number) => {
    if (number === 1 || number === 21) {
        return 'час'
    } else if (number >=2 && number <= 20) {
        return 'часов'
    } else if (number === 22 || number === 23) {
        return 'часа'
    }
}

const monthsTitle = [
    `января`,
    `февраля`,
    `марта`,
    `апреля`,
    `мая`,
    `июня`,
    `июля`,
    `августа`,
    `сентября`,
    `октября`,
    `ноября`,
    `декабря`,
];

const daysByOneWeek = {
    1: `день`,
    2: `дня`,
    3: `дня`,
    4: `дня`,
    5: `дней`,
    6: `дней`,
    7: `дней`,
};

export const getPublishDate = (date) => {
    dayjs.extend(duration);
    dayjs.extend(relativeTime);
    const currentDate = dayjs();
    const publishDate = dayjs(Number(date));
    const diff = currentDate.diff(publishDate);

    const years = dayjs.duration(diff).years();
    const months = dayjs.duration(diff).months();
    const days = dayjs.duration(diff).days();
    const hours = dayjs.duration(diff).hours();
    const minutes = dayjs.duration(diff).minutes();

    if (days === 0 && hours === 0) {
        return `${dayjs.duration(minutes, "minutes").get('minutes')} назад`
    } else if (days === 0 && (hours > 0 && hours < ONE_DAY_HOURS)) {
        return `${dayjs.duration(hours, "hours").get('hours')} ${getTitleByHours(dayjs.duration(hours, "hours").get('hours'))} назад`
    } else if (days > ONE_DAY && days <= ONE_WEEK_DAYS) {
        return `${dayjs.duration(days, "days").get('days')} ${daysByOneWeek[dayjs.duration(days, "days").get('days')]
        } назад`
    } else if (years === 0) {
        return `${dayjs.duration(months, "months").get('months')} ${monthsTitle[dayjs.duration(months, "months").get('months')]
        }`
    } else if (years > 0) {
        return `${dayjs.duration(months, "months").get('months')} ${monthsTitle[dayjs.duration(months, "months").get('months')]
        } ${publishDate.get('years')} года`
    }
};

