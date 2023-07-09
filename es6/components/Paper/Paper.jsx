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
import React, { forwardRef } from 'react';
import { PaperRadius } from './PaperTypes';
import styles from './styles.module.scss';
export * from './PaperTypes';
const defaultProps = {
    component: 'div',
    radius: PaperRadius.regular,
    elevation: 0,
};
export const Paper = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, elevation, radius } = _a, rest = __rest(_a, ["component", "className", "elevation", "radius"]);
    const classOfComponent = cn(styles.paper, className, {
        [styles[`radius-${String(radius)}`]]: radius,
        [styles[`elevation-${String(elevation)}`]]: !!elevation,
    });
    return <Component {...rest} className={classOfComponent} ref={ref}/>;
});
export default Paper;
//# sourceMappingURL=Paper.jsx.map