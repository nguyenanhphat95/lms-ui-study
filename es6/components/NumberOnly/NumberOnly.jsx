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
import { formatNumberInputValue } from '@App/utils/numberFormat';
import _get from 'lodash/get';
import React, { forwardRef, useState } from 'react';
import Input from '../Input';
const defaultProps = {
    defaultValue: ''
};
const NumberOnly = forwardRef((props, ref) => {
    const [value, setValue] = useState(formatNumberInputValue(_get(props, 'value')));
    const _a = Object.assign(Object.assign({}, defaultProps), props), { min, max, onChange } = _a, rest = __rest(_a, ["min", "max", "onChange"]);
    const _handleInputChange = (e, onChange) => {
        const previousValue = value;
        const newValue = _get(e, 'target.value');
        const previousNumber = previousValue;
        const newNumber = newValue;
        const isMaxRange = newNumber > Number.MAX_SAFE_INTEGER;
        const isLessThanMin = min !== null &&
            typeof min !== 'undefined' &&
            newNumber < min &&
            newNumber.toString().trim() !== '';
        const isGreaterThanMax = max !== null &&
            typeof max !== 'undefined' &&
            newNumber > max &&
            newNumber.toString().trim() !== '';
        if (isNaN(newNumber) ||
            (!isNaN(newNumber) && (isMaxRange || isLessThanMin))) {
            setValue(previousNumber);
            if (onChange) {
                onChange(previousNumber);
            }
            return;
        }
        if (isGreaterThanMax) {
            setValue(max);
            if (onChange) {
                onChange(max);
            }
            return;
        }
        setValue(newNumber);
        if (onChange) {
            onChange(newNumber);
        }
        return;
    };
    return (<Input {...rest} onChange={(e) => _handleInputChange(e, onChange)} value={value}/>);
});
export default NumberOnly;
//# sourceMappingURL=NumberOnly.jsx.map