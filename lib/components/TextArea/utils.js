"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneStyleOfTextArea = exports.getLineHeight = exports.getBoxSize = void 0;
var getStyleOfElement_1 = __importDefault(require("@App/utils/getStyleOfElement"));
var entriesOfStyles = Object.entries({
    paddingTop: 'padding-top',
    paddingBottom: 'padding-bottom',
    borderTopWidth: 'border-top-width',
    borderBottomWidth: 'border-bottom-width',
});
var getBoxSize = function (el) {
    if (!el) {
        return 0;
    }
    var boxSizing = getStyleOfElement_1.default(el, 'box-sizing');
    var isBorderBox = boxSizing === 'border-box';
    if (!isBorderBox) {
        return 0;
    }
    var sizesOfInput = entriesOfStyles.reduce(function (acc, _a) {
        var _b;
        var _c = __read(_a, 2), key = _c[0], value = _c[1];
        return Object.assign(acc, (_b = {},
            _b[key] = parseInt(getStyleOfElement_1.default(el, value), 10),
            _b));
    }, {});
    var totalHeight = [
        sizesOfInput.paddingTop,
        sizesOfInput.paddingBottom,
        sizesOfInput.borderTopWidth,
        sizesOfInput.borderBottomWidth,
    ].reduce(function (acc, size) { return acc + size; }, 0);
    return totalHeight;
};
exports.getBoxSize = getBoxSize;
var DEFAULT_LINE_HEIGHT = 18;
var getLineHeight = function (el) {
    if (!el) {
        return DEFAULT_LINE_HEIGHT;
    }
    var lineHeight = parseInt(getStyleOfElement_1.default(el, 'line-height'), 10);
    return Number.isNaN(lineHeight) ? DEFAULT_LINE_HEIGHT : lineHeight;
};
exports.getLineHeight = getLineHeight;
var cloneStyleOfTextArea = function (targetEl, fromEl) {
    targetEl.style.width = getStyleOfElement_1.default(fromEl, 'width');
    targetEl.style.fontSize = getStyleOfElement_1.default(fromEl, 'font-size');
    targetEl.style.fontWeight = getStyleOfElement_1.default(fromEl, 'font-weight');
    targetEl.style.padding = getStyleOfElement_1.default(fromEl, 'padding');
    targetEl.style.border = getStyleOfElement_1.default(fromEl, 'border');
    targetEl.style.boxSizing = getStyleOfElement_1.default(fromEl, 'box-sizing');
};
exports.cloneStyleOfTextArea = cloneStyleOfTextArea;
//# sourceMappingURL=utils.js.map