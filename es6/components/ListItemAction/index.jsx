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
import Icon from '../Icon';
import styles from './styles.module.scss';
const defaultProps = {
    component: 'div'
};
export const ListItemAction = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, children, icon, iconClassName } = _a, rest = __rest(_a, ["component", "className", "children", "icon", "iconClassName"]);
    const classOfComponent = cn(styles.listItemAction, className);
    const contentOfChildren = useMemo(() => !icon ? (children) : (<Icon className={cn(styles.icon, iconClassName)} component={icon}/>), [icon, children]);
    return (<Component {...rest} className={classOfComponent}>
      {contentOfChildren}
    </Component>);
};
export default ListItemAction;
//# sourceMappingURL=index.jsx.map