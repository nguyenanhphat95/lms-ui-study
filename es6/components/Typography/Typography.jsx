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
import styles from './styles.module.scss';
import { TypoSizes, TypoTypes, TypoWeights } from './TypoTypes';
export * from './TypoTypes';
const defaultProps = {
    component: 'span',
    type: TypoTypes.default,
    weight: TypoWeights.regular,
    size: TypoSizes.body2,
    nowrap: false,
};
export const Typography = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, size, type, weight, truncate, nowrap } = _a, rest = __rest(_a, ["component", "className", "size", "type", "weight", "truncate", "nowrap"]);
    const classOfComponent = cn(className, styles['root'], {
        [styles.truncate]: truncate && truncate > 0,
        [styles[`truncate-${truncate}`]]: truncate && truncate > 0,
        [styles[`size-${size}`]]: size,
        [styles[`weight-${weight}`]]: weight,
        [styles[`type-${type}`]]: type,
        [styles['nowrap']]: nowrap,
    });
    return <Component ref={ref} className={classOfComponent} {...rest}/>;
});
export default Typography;
//# sourceMappingURL=Typography.jsx.map