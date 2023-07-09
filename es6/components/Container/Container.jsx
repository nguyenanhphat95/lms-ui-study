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
import { ContainerSizes } from './types';
export * from './types';
export { ContainerSizes };
const defaultProps = {
    component: 'div',
    width: ContainerSizes.auto,
    fluid: false,
};
export const Container = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, width, fluid } = _a, rest = __rest(_a, ["component", "className", "width", "fluid"]);
    const classOfComponent = cn(styles.container, className, {
        [styles[`max-${width}`]]: width !== ContainerSizes.auto,
        [styles.fluid]: fluid,
    });
    return <Component className={classOfComponent} {...rest}/>;
};
export default Container;
//# sourceMappingURL=Container.jsx.map