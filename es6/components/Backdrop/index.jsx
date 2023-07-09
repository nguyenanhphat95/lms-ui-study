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
import { BackdropTypes } from './BackdropTypes';
import styles from './styles.module.scss';
export * from './BackdropTypes';
const defaultProps = {
    component: 'div',
    type: BackdropTypes.grey,
};
export const Backdrop = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, type } = _a, rest = __rest(_a, ["component", "className", "type"]);
    return (<Component className={cn(styles.backdrop, className, {
        [styles[type]]: !!styles[type],
    })} {...rest}/>);
};
export default Backdrop;
//# sourceMappingURL=index.jsx.map