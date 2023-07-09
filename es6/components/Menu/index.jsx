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
import cn from 'classnames';
import React, { useMemo } from 'react';
import { BackdropTypes } from '../Backdrop/BackdropTypes';
import MenuList from '../MenuList';
import Popover from '../Popover';
import { PopperPlacements } from '../Popper';
import MenuContext from './MenuContext';
import styles from './styles.module.scss';
const defaultProps = {
    component: Popover,
    placement: PopperPlacements.bottom,
};
export const Menu = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, children, onClose } = _a, rest = __rest(_a, ["component", "className", "children", "onClose"]);
    const classOfComponent = cn(styles.menu, className);
    const menuContext = useMemo(() => ({ close: onClose }), []);
    return (<Component backdrop={BackdropTypes.transparent} className={classOfComponent} onClose={onClose} {...rest}>
      <MenuContext.Provider value={menuContext}>
        <MenuList>{children}</MenuList>
      </MenuContext.Provider>
    </Component>);
};
export default Menu;
//# sourceMappingURL=index.jsx.map