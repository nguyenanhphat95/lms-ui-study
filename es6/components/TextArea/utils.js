import getStyleOfElement from '@App/utils/getStyleOfElement';
const entriesOfStyles = Object.entries({
    paddingTop: 'padding-top',
    paddingBottom: 'padding-bottom',
    borderTopWidth: 'border-top-width',
    borderBottomWidth: 'border-bottom-width',
});
export const getBoxSize = (el) => {
    if (!el) {
        return 0;
    }
    const boxSizing = getStyleOfElement(el, 'box-sizing');
    const isBorderBox = boxSizing === 'border-box';
    if (!isBorderBox) {
        return 0;
    }
    const sizesOfInput = entriesOfStyles.reduce((acc, [key, value]) => Object.assign(acc, {
        [key]: parseInt(getStyleOfElement(el, value), 10),
    }), {});
    const totalHeight = [
        sizesOfInput.paddingTop,
        sizesOfInput.paddingBottom,
        sizesOfInput.borderTopWidth,
        sizesOfInput.borderBottomWidth,
    ].reduce((acc, size) => acc + size, 0);
    return totalHeight;
};
const DEFAULT_LINE_HEIGHT = 18;
export const getLineHeight = (el) => {
    if (!el) {
        return DEFAULT_LINE_HEIGHT;
    }
    const lineHeight = parseInt(getStyleOfElement(el, 'line-height'), 10);
    return Number.isNaN(lineHeight) ? DEFAULT_LINE_HEIGHT : lineHeight;
};
export const cloneStyleOfTextArea = (targetEl, fromEl) => {
    targetEl.style.width = getStyleOfElement(fromEl, 'width');
    targetEl.style.fontSize = getStyleOfElement(fromEl, 'font-size');
    targetEl.style.fontWeight = getStyleOfElement(fromEl, 'font-weight');
    targetEl.style.padding = getStyleOfElement(fromEl, 'padding');
    targetEl.style.border = getStyleOfElement(fromEl, 'border');
    targetEl.style.boxSizing = getStyleOfElement(fromEl, 'box-sizing');
};
//# sourceMappingURL=utils.js.map