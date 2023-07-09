const formatNumber = (number, separatorSym = ',') => {
    if (typeof number !== 'number') {
        return '';
    }
    else if (number === 0) {
        return '0';
    }
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separatorSym);
};
const formatNumberInputValue = (inputString) => {
    if (typeof inputString !== 'string') {
        return inputString;
    }
    inputString = inputString.replace(/[-,.]/g, '');
    return parseToInt(inputString);
};
const formatNumberRemoveFloatCharacter = (inputString) => {
    if (typeof inputString !== 'string') {
        return inputString;
    }
    return parseToFloat(inputString.replace(/[-,]/g, ''));
};
const formatNumberHasDecimal = (inputString) => {
    if (typeof inputString !== 'string') {
        return inputString;
    }
    return parseToFloat(inputString);
};
const parseToInt = (number) => {
    if (!number) {
        return '';
    }
    return parseInt(number, 10);
};
const parseToFloat = (number) => {
    if (!number) {
        return '';
    }
    return parseFloat(number);
};
const removeOddSymbolFromNumberString = (string) => string ? string.replace(/([^\d|\-|,])/g, '') : '';
export { formatNumber, formatNumberInputValue, parseToInt, parseToFloat, removeOddSymbolFromNumberString, formatNumberHasDecimal, formatNumberRemoveFloatCharacter, };
//# sourceMappingURL=numberFormat.js.map