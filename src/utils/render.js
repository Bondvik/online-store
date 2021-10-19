import {RenderPosition} from "../constants";

export const render = (container, element, place) => {
    switch (place) {
        case RenderPosition.AFTERBEGIN:
            container.prepend(element);
            break;
        case RenderPosition.BEFOREEND:
            container.append(element);
            break;
        case RenderPosition.BEFOREBEGIN:
            container.insertAdjacentElement(place, element);
    }
};

export const createElement = (template) => {
    const newElement = document.createElement('div');
    newElement.innerHTML = template;
    return newElement.firstChild;
}

export const remove = (component) => {
    component.getElement().remove();
    component.removeElement();
};

export const replace = (newChild, oldChild) => {
    const parent = oldChild.parentElement;
    if (parent === null || oldChild === null || newChild === null) {
        throw new Error('Can\'t replace unexisting elements');
    }
    parent.replaceChild(newChild, oldChild);
};