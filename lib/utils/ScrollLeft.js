"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNormalizedScrollLeft = exports.detectScrollType = void 0;
var isBrowser_1 = __importDefault(require("@App/utils/isBrowser"));
var cachedType;
function detectScrollType() {
    if (cachedType) {
        return cachedType;
    }
    if (isBrowser_1.default()) {
        var dummy = document.createElement('div');
        var container = document.createElement('div');
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
exports.detectScrollType = detectScrollType;
function getNormalizedScrollLeft(element, direction) {
    var scrollLeft = element.scrollLeft;
    if (direction !== 'rtl') {
        return scrollLeft;
    }
    var type = detectScrollType();
    switch (type) {
        case 'negative':
            return element.scrollWidth - element.clientWidth + scrollLeft;
        case 'reverse':
            return element.scrollWidth - element.clientWidth - scrollLeft;
        default:
            return scrollLeft;
    }
}
exports.getNormalizedScrollLeft = getNormalizedScrollLeft;
//# sourceMappingURL=ScrollLeft.js.map