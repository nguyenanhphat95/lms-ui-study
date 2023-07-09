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
import styles from './styles.module.scss';
const defaultProps = {
    component: 'div',
};
export const ModalFooter = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className } = _a, rest = __rest(_a, ["component", "className"]);
    return <Component {...rest} className={cn(styles['root'], className)}/>;
};
export default ModalFooter;
//# sourceMappingURL=index.jsx.map