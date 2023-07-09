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
import List from '../List';
const defaultProps = {
    component: 'ul',
    direction: 'column',
};
export const MenuList = React.forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { className, children } = _a, rest = __rest(_a, ["className", "children"]);
    return (<List role="menu" ref={ref} className={className} {...rest}>
      {children}
    </List>);
});
export default MenuList;
//# sourceMappingURL=index.jsx.map