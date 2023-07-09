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
import React, { forwardRef } from 'react';
import NumberFormat from 'react-number-format';
import { formatPercent } from './utils';
const defaultProps = {
    component: NumberFormat,
    format: formatPercent
};
export const InputPercentFormat = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component } = _a, rest = __rest(_a, ["component"]);
    return <Component {...rest} ref={ref}/>;
});
InputPercentFormat.displayName = 'InputPercentFormat';
export default InputPercentFormat;
//# sourceMappingURL=index.jsx.map