import {RenderPosition} from "../constants";

export const renderTemplate = (container, element, position) => {
    container.insertAdjacentHTML(position, element)
}

export const renderElement = (container, element, place) => {
    switch (place) {
        case RenderPosition.AFTERBEGIN:
            container.prepend(element);
            break;
        case RenderPosition.BEFOREEND:
            container.append(element);
            break;
    }
};

export const createElement = (template) => {
    const newElement = document.createElement('<div>');
    newElement.innerHTML = template;
    return newElement.firstChild;
}