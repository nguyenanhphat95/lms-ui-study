"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Box = void 0;
var classnames_1 = __importDefault(require("classnames"));
var merge_1 = __importDefault(require("lodash/merge"));
var react_1 = __importDefault(require("react"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var camelCaseToKebabCase = function (str) {
    return str
        .split('')
        .map(function (letter, idx) {
        return letter.toUpperCase() === letter
            ? "" + (idx !== 0 ? '-' : '') + letter.toLowerCase()
            : letter;
    })
        .join('');
};
function memoize(fn) {
    var cache = {};
    return function (arg) {
        if (cache[arg] === undefined) {
            cache[arg] = fn(arg);
        }
        return cache[arg];
    };
}
var spacingKeys = [
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
var properties = {
    m: 'margin',
    p: 'padding',
};
var directions = {
    t: 'Top',
    r: 'Right',
    b: 'Bottom',
    l: 'Left',
    x: ['Left', 'Right'],
    y: ['Top', 'Bottom'],
};
var aliases = {
    marginX: 'mx',
    marginY: 'my',
    paddingX: 'px',
    paddingY: 'py',
};
var getCssProperties = memoize(function (prop) {
    if (prop.length > 2) {
        if (aliases[prop]) {
            prop = aliases[prop];
        }
        else {
            return [prop];
        }
    }
    var _a = __read(prop.split(''), 2), a = _a[0], b = _a[1];
    var property = properties[a];
    var direction = directions[b] || '';
    return Array.isArray(direction) ? direction.map(function (dir) { return property + dir; }) : [property + direction];
});
function getValue(propValue) {
    if (typeof propValue === 'string') {
        return propValue;
    }
    var transformed = Math.abs(propValue);
    if (propValue >= 0) {
        return transformed;
    }
    return -transformed;
}
function getStyleFromPropValue(cssProperties, breakpoint) {
    return function (propValue) {
        return cssProperties.reduce(function (acc, cssProperty) {
            var spacingKey = camelCaseToKebabCase(cssProperty);
            var spacingValue = getValue(propValue);
            var spacingClassName = breakpoint
                ? styles_module_scss_1.default["spacing-" + breakpoint + "-" + spacingKey + "-" + spacingValue]
                : styles_module_scss_1.default["spacing-" + spacingKey + "-" + spacingValue];
            acc[spacingClassName] = !!spacingValue;
            return acc;
        }, {});
    };
}
function spacing(props, breakpoint) {
    return Object.keys(props)
        .map(function (prop) {
        if (!spacingKeys.includes(prop)) {
            return null;
        }
        var cssProperties = getCssProperties(prop);
        var styleFromPropValue = getStyleFromPropValue(cssProperties, breakpoint);
        var propValue = props[prop];
        return styleFromPropValue(propValue);
    })
        .reduce(merge_1.default, {});
}
var defaultProps = {
    component: 'div',
};
var defaultBreakpoint = ['xs', 'sm', 'md', 'lg', 'xl'];
var Box = function (props) {
    var allProps = __assign(__assign({}, defaultProps), props);
    var Component = allProps.component, className = allProps.className, xs = allProps.xs, sm = allProps.sm, md = allProps.md, xl = allProps.xl, style = allProps.style, children = allProps.children, rest = __rest(allProps, ["component", "className", "xs", "sm", "md", "xl", "style", "children"]);
    var styledBreakPoint = defaultBreakpoint.map(function (key) {
        return spacing(Object.assign({}, allProps[key]), key);
    });
    var classOfComponent = classnames_1.default.apply(void 0, __spread([styles_module_scss_1.default.Box,
        spacing(Object.assign({}, rest))], styledBreakPoint, [className]));
    return (<Component className={classOfComponent} style={style}>
      {children}
    </Component>);
};
exports.Box = Box;
exports.Box.displayName = 'Box';
exports.default = exports.Box;
//# sourceMappingURL=Box.jsx.map