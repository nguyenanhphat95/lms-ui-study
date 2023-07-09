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
import cx from 'classnames';
import React, { forwardRef, useCallback, useContext } from 'react';
import ListItem from '../../ListItem';
import MenuContext from '../MenuContext';
import styles from './styles.module.scss';
const defaultProps = {
    component: 'a',
};
export const MenuItem = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { className } = _a, rest = __rest(_a, ["className"]);
    const menuContext = useContext(MenuContext);
    const classOfComponent = cx(styles.menuItem, className, {
        [styles.disabled]: !!rest.disabled,
    });
    const handleOnClick = useCallback((event) => {
        if (rest.onClick) {
            rest.onClick(event);
        }
        if (menuContext) {
            menuContext.close();
        }
    }, [rest.onClick]);
    return <ListItem {...rest} ref={ref} className={classOfComponent} onClick={handleOnClick}/>;
});
export default MenuItem;
//# sourceMappingURL=index.jsx.map