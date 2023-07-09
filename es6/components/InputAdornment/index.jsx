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
import { InputSizes } from '../Input';
import styles from './styles.module.scss';
const defaultProps = {
    component: 'div',
    size: InputSizes.lg
};
export const InputAdornment = forwardRef((_props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), _props), { component: Component, className, size } = _a, rest = __rest(_a, ["component", "className", "size"]);
    const classOfComponent = cn(styles.addon, {
        [styles[`addon-size-${size}`]]: !!size
    }, className);
    return <Component {...rest} ref={ref} className={classOfComponent}/>;
});
export default InputAdornment;
//# sourceMappingURL=index.jsx.map