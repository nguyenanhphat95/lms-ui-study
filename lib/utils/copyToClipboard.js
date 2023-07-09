"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var isBrowser_1 = __importDefault(require("@App/utils/isBrowser"));
var copyToClipboard = function (text) {
    if (!isBrowser_1.default()) {
        return;
    }
    if (typeof document === 'undefined') {
        return;
    }
    var el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    var selected = document.getSelection().rangeCount > 0
        ? document.getSelection().getRangeAt(0)
        : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
};
exports.default = copyToClipboard;
//# sourceMappingURL=copyToClipboard.js.map