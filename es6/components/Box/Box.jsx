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
import _merge from 'lodash/merge';
import React from 'react';
import styles from './styles.module.scss';
const camelCaseToKebabCase = (str) => {
    return str
        .split('')
        .map((letter, idx) => {
        return letter.toUpperCase() === letter
            ? `${idx !== 0 ? '-' : ''}${letter.toLowerCase()}`
            : letter;
    })
        .join('');
};
function memoize(fn) {
    const cache = {};
    return (arg) => {
        if (cache[arg] === undefined) {
            cache[arg] = fn(arg);
        }
        return cache[arg];
    };
}
const spacingKeys = [
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
];
const properties = {
    m: 'margin',
    p: 'padding',
};
const directions = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
};
const aliases = {
    marginX: 'mx',
    marginY: 'my',
    paddingX: 'px',
    paddingY: 'py',
};
const getCssProperties = memoize((prop) => {
    if (prop.length > 2) {
        if (aliases[prop]) {
            prop = aliases[prop];
        }
        else {
            return [prop];
        }
    }
    const [a, b] = prop.split('');
    const property = properties[a];
    const direction = directions[b] || '';
    return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
});
function getValue(propValue) {
    if (typeof propValue === 'string') {
        return propValue;
    }
    const transformed = Math.abs(propValue);
    if (propValue >= 0) {
        return transformed;
    }
    return -transformed;
}
function getStyleFromPropValue(cssProperties, breakpoint) {
    return (propValue) => cssProperties.reduce((acc, cssProperty) => {
        const spacingKey = camelCaseToKebabCase(cssProperty);
        const spacingValue = getValue(propValue);
        const spacingClassName = breakpoint
            ? styles[`spacing-${breakpoint}-${spacingKey}-${spacingValue}`]
            : styles[`spacing-${spacingKey}-${spacingValue}`];
        acc[spacingClassName] = !!spacingValue;
        return acc;
    }, {});
}
function spacing(props, breakpoint) {
    return Object.keys(props)
        .map((prop) => {
        if (!spacingKeys.includes(prop)) {
            return null;
        }
        const cssProperties = getCssProperties(prop);
        const styleFromPropValue = getStyleFromPropValue(cssProperties, breakpoint);
        const propValue = props[prop];
        return styleFromPropValue(propValue);
    })
        .reduce(_merge, {});
}
const defaultProps = {
    component: 'div',
};
const defaultBreakpoint = ['xs', 'sm', 'md', 'lg', 'xl'];
export const Box = (props) => {
    const allProps = Object.assign(Object.assign({}, defaultProps), props);
    const { component: Component, className, xs, sm, md, xl, style, children } = allProps, rest = __rest(allProps, ["component", "className", "xs", "sm", "md", "xl", "style", "children"]);
    const styledBreakPoint = defaultBreakpoint.map((key) => spacing(Object.assign({}, allProps[key]), key));
    const classOfComponent = cn(styles.Box, spacing(Object.assign({}, rest)), ...styledBreakPoint, className);
    return (<Component className={classOfComponent} style={style}>
      {children}
    </Component>);
};
Box.displayName = 'Box';
export default Box;
//# sourceMappingURL=Box.jsx.map