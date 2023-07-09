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
export * from './GridTypes';
const defaultProps = {
    component: 'div',
    container: false,
    item: false,
    nowrap: false,
    direction: 'row',
};
export const Grid = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, container, item, nowrap, direction, justifyContent, alignItem, xs, lg, xl, md, sm, spacing } = _a, rest = __rest(_a, ["component", "className", "container", "item", "nowrap", "direction", "justifyContent", "alignItem", "xs", "lg", "xl", "md", "sm", "spacing"]);
    const classOfComponent = cn(className, {
        [styles.grid]: container,
        [styles.item]: item,
        [styles.wrap]: !nowrap,
        [styles[direction]]: direction && !!direction,
        [styles[`s-${spacing}`]]: !!spacing,
        [styles[`justify-${justifyContent}`]]: !!justifyContent,
        [styles[`align-${alignItem}`]]: !!alignItem,
        [styles[`xs-${xs}`]]: xs !== undefined,
        [styles[`sm-${sm}`]]: sm !== undefined,
        [styles[`md-${md}`]]: md !== undefined,
        [styles[`lg-${lg}`]]: lg !== undefined,
        [styles[`xl-${xl}`]]: xl !== undefined,
    });
    return <Component ref={ref} className={classOfComponent} {...rest}/>;
});
export default Grid;
//# sourceMappingURL=Grid.jsx.map