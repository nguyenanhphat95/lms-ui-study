"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLabelFromIndex = exports.parseNumber = exports.getListOfButton = exports.getRangeOfButton = void 0;
var const_1 = require("./const");
var getRangeOfButton = function (currentOfPage, totalOfPage, displayOfButton) {
    var limitOfButton = displayOfButton - 1;
    var limitPartOfButton = Math.floor(limitOfButton / 2);
    var prevIndex = currentOfPage - limitPartOfButton;
    var otherOfPrev = Math.abs(Math.min(0, prevIndex));
    var nextIndex = currentOfPage + limitPartOfButton;
    var otherOfNext = Math.abs(Math.min(0, totalOfPage - nextIndex));
    var startOfIndex = Math.max(const_1.START_INDEX, prevIndex - otherOfNext);
    var endOfIndex = Math.min(totalOfPage, nextIndex + otherOfPrev);
    return {
        start: startOfIndex,
        end: endOfIndex,
    };
};
exports.getRangeOfButton = getRangeOfButton;
var getListOfButton = function (range) {
    var start = range.start, end = range.end;
    var listOfButton = [];
    for (var i = start; i <= end; i++) {
        listOfButton.push(i);
    }
    return listOfButton;
};
exports.getListOfButton = getListOfButton;
var parseNumber = function (value) { return parseInt(value, 10); };
exports.parseNumber = parseNumber;
var getLabelFromIndex = function (value) { return value; };
exports.getLabelFromIndex = getLabelFromIndex;
//# sourceMappingURL=utils.js.map