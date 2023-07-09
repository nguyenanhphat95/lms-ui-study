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
import _get from 'lodash/get';
import React, { useContext } from 'react';
import DropdownListContext from '../DropdownList/DropdownListContext';
import ListItemText from '../ListItemText';
import MenuItem from '../Menu/MenuItem';
const defaultProps = {
    component: MenuItem
};
export const Option = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, value: valueProps, children } = _a, rest = __rest(_a, ["component", "value", "children"]);
    const dropdownListContext = useContext(DropdownListContext);
    function handleClick() {
        if (dropdownListContext &&
            !rest.disabled &&
            valueProps !== dropdownListContext.value) {
            dropdownListContext.onChange(valueProps, children.toString() || valueProps);
        }
    }
    const activated = _get(dropdownListContext, 'value') === valueProps;
    return (<Component {...rest} onClick={handleClick} activated={activated} size={rest.size}>
      <ListItemText size={rest.size}>{children}</ListItemText>
    </Component>);
};
export default Option;
//# sourceMappingURL=index.jsx.map