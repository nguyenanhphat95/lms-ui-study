var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import NumberFormat from 'react-number-format';
import Input from '../Input';
const defaultProps = {
    thousandSeparator: ',',
    decimalSeparator: '.',
    decimalPrecision: 2,
    decimalScale: 2,
};
const NumberFormatWrapper = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { min, max, thousandSeparator, decimalSeparator, decimalPrecision, decimalScale } = _a, rest = __rest(_a, ["min", "max", "thousandSeparator", "decimalSeparator", "decimalPrecision", "decimalScale"]);
    return (<NumberFormat thousandSeparator={thousandSeparator} decimalSeparator={decimalSeparator} decimalPrecision={decimalPrecision} decimalScale={decimalScale} customInput={Input} isAllowed={(values) => {
        const { formattedValue, floatValue } = values;
        if (formattedValue === '')
            return true;
        else if (max && floatValue > max)
            return false;
        else if (min && floatValue < min)
            return false;
        return true;
    }} allowNegative={false} {...rest}/>);
};
export default NumberFormatWrapper;
//# sourceMappingURL=NumberFormat.jsx.map