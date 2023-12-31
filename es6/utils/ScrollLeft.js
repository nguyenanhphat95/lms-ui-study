import isBrowser from '@App/utils/isBrowser';
let cachedType;
export function detectScrollType() {
    if (cachedType) {
        return cachedType;
    }
    if (isBrowser()) {
        const dummy = document.createElement('div');
        const container = document.createElement('div');
        container.style.width = '10px';
        container.style.height = '1px';
        dummy.appendChild(container);
        dummy.dir = 'rtl';
        dummy.style.fontSize = '14px';
        dummy.style.width = '4px';
        dummy.style.height = '1px';
        dummy.style.position = 'absolute';
        dummy.style.top = '-1000px';
        dummy.style.overflow = 'scroll';
        document.body.appendChild(dummy);
        cachedType = 'reverse';
        if (dummy.scrollLeft > 0) {
            cachedType = 'default';
        }
        else {
            dummy.scrollLeft = 1;
            if (dummy.scrollLeft === 0) {
                cachedType = 'negative';
            }
        }
        document.body.removeChild(dummy);
    }
    return cachedType;
}
export function getNormalizedScrollLeft(element, direction) {
    const scrollLeft = element.scrollLeft;
    if (direction !== 'rtl') {
        return scrollLeft;
    }
    const type = detectScrollType();
    switch (type) {
        case 'negative':
            return element.scrollWidth - element.clientWidth + scrollLeft;
        case 'reverse':
            return element.scrollWidth - element.clientWidth - scrollLeft;
        default:
            return scrollLeft;
    }
}
//# sourceMappingURL=ScrollLeft.js.map