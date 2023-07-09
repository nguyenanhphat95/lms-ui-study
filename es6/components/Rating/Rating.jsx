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
import _memoize from 'lodash/memoize';
import React from 'react';
import styles from './styles.module.scss';
const defaultProps = {
    component: 'div',
    rate: 0,
    size: 10,
};
const getRateValue = _memoize((rate) => {
    return Math.round((20 * rate) / 5);
});
export const Rating = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component = 'div', className = null, style = null, rate = 0, size } = _a, rest = __rest(_a, ["component", "className", "style", "rate", "size"]);
    return (<Component className={cn(styles.rating, className)} style={style} {...rest}>
      {!rate && <div className={cn(styles.stars, styles.empty)} style={{ fontSize: size }}/>}
      {rate > 0 && (<div className={cn(styles.stars, styles[`star${getRateValue(rate)}`])} style={{ fontSize: size }}/>)}
    </Component>);
};
export default Rating;
//# sourceMappingURL=Rating.jsx.map