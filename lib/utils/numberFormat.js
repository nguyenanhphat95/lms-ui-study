"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatNumberRemoveFloatCharacter = exports.formatNumberHasDecimal = exports.removeOddSymbolFromNumberString = exports.parseToFloat = exports.parseToInt = exports.formatNumberInputValue = exports.formatNumber = void 0;
var formatNumber = function (number, separatorSym) {
    if (separatorSym === void 0) { separatorSym = ','; }
    if (typeof number !== 'number') {
        return '';
    }
    else if (number === 0) {
        return '0';
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separatorSym);
};
exports.formatNumber = formatNumber;
var formatNumberInputValue = function (inputString) {
    if (typeof inputString !== 'string') {
        return inputString;
    }
    inputString = inputString.replace(/[-,.]/g, '');
    return parseToInt(inputString);
};
exports.formatNumberInputValue = formatNumberInputValue;
var formatNumberRemoveFloatCharacter = function (inputString) {
    if (typeof inputString !== 'string') {
        return inputString;
    }
    return parseToFloat(inputString.replace(/[-,]/g, ''));
};
exports.formatNumberRemoveFloatCharacter = formatNumberRemoveFloatCharacter;
var formatNumberHasDecimal = function (inputString) {
    if (typeof inputString !== 'string') {
        return inputString;
    }
    return parseToFloat(inputString);
};
exports.formatNumberHasDecimal = formatNumberHasDecimal;
var parseToInt = function (number) {
    if (!number) {
        return '';
    }
    return parseInt(number, 10);
};
exports.parseToInt = parseToInt;
var parseToFloat = function (number) {
    if (!number) {
        return '';
    }
    return parseFloat(number);
};
exports.parseToFloat = parseToFloat;
var removeOddSymbolFromNumberString = function (string) {
    return string ? string.replace(/([^\d|\-|,])/g, '') : '';
};
exports.removeOddSymbolFromNumberString = removeOddSymbolFromNumberString;
//# sourceMappingURL=numberFormat.js.map