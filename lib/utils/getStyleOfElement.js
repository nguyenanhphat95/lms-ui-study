"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getStyleOfElement = function (el, prop) {
    return getComputedStyle(el, null).getPropertyValue(prop);
};
exports.default = getStyleOfElement;
//# sourceMappingURL=getStyleOfElement.js.map