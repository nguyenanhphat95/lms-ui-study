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
const defaultProps = {
    component: 'div',
};
export const TabPanel = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, value, index } = _a, rest = __rest(_a, ["component", "className", "value", "index"]);
    if (value !== index) {
        return null;
    }
    return <Component {...rest} className={className}/>;
};
export default TabPanel;
//# sourceMappingURL=index.jsx.map