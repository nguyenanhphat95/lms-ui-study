import { START_INDEX } from './const';
export const getRangeOfButton = (currentOfPage, totalOfPage, displayOfButton) => {
    const limitOfButton = displayOfButton - 1;
    const limitPartOfButton = Math.floor(limitOfButton / 2);
    const prevIndex = currentOfPage - limitPartOfButton;
    const otherOfPrev = Math.abs(Math.min(0, prevIndex));
    const nextIndex = currentOfPage + limitPartOfButton;
    const otherOfNext = Math.abs(Math.min(0, totalOfPage - nextIndex));
    const startOfIndex = Math.max(START_INDEX, prevIndex - otherOfNext);
    const endOfIndex = Math.min(totalOfPage, nextIndex + otherOfPrev);
    return {
        start: startOfIndex,
        end: endOfIndex,
    };
};
export const getListOfButton = (range) => {
    const { start, end } = range;
    const listOfButton = [];
    for (let i = start; i <= end; i++) {
        listOfButton.push(i);
    }
    return listOfButton;
};
export const parseNumber = (value) => parseInt(value, 10);
export const getLabelFromIndex = (value) => value;
//# sourceMappingURL=utils.js.map