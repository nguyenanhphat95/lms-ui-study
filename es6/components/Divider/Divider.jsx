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
import React from 'react';
import { DividerOrientation, DividerType, DividerSizes } from './DividerTypes';
import styles from './styles.module.scss';
export { DividerOrientation, DividerType, DividerSizes };
const defaultProps = {
    component: 'hr',
    type: DividerType.line,
    orientation: DividerOrientation.horizontal,
    size: DividerSizes.fullWidth,
};
export const Divider = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, type, orientation, size, absolute, flexItem } = _a, rest = __rest(_a, ["component", "className", "type", "orientation", "size", "absolute", "flexItem"]);
    const dividerClassName = cn(styles.divider, {
        [styles[String(type)]]: !!type,
        [styles[size]]: size !== DividerSizes.fullWidth,
        [styles.absolute]: !!absolute,
        [styles.flexItem]: !!flexItem,
        [styles.vertical]: orientation === DividerOrientation.vertical,
    }, className);
    return <Component {...rest} className={dividerClassName}/>;
};
export default Divider;
//# sourceMappingURL=Divider.jsx.map