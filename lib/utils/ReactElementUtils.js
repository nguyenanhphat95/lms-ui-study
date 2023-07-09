"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.measureElement = exports.getStyleProps = exports.getElementHeight = void 0;
var react_dom_1 = __importDefault(require("react-dom"));
var lodash_1 = __importDefault(require("lodash"));
var getElementHeight = function (element) {
    return element ? element.getBoundingClientRect().height : 0;
};
exports.getElementHeight = getElementHeight;
var getStyleProps = function (styleKeys, props) {
    var styleProps = {};
    styleKeys.forEach(function (key) {
        var value = props[key];
        if (value) {
            styleProps["data-" + lodash_1.default.kebabCase(key)] = value;
        }
    });
    return styleProps;
};
exports.getStyleProps = getStyleProps;
var measureElement = function (element) {
    var DOMNode = element && react_dom_1.default.findDOMNode(element);
    var width = DOMNode ? DOMNode.offsetWidth : 0;
    var height = DOMNode ? DOMNode.offsetHeight : 0;
    return {
        width: width,
        height: height
    };
};
exports.measureElement = measureElement;
//# sourceMappingURL=ReactElementUtils.js.map