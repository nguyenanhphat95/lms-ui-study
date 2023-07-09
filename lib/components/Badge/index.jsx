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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var capitalize_1 = __importDefault(require("@App/utils/capitalize"));
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var Badge = React.forwardRef(function Badge(props, ref) {
    var _a;
    var _b = __assign({}, props), _c = _b.anchorOrigin, anchorOrigin = _c === void 0 ? {
        vertical: 'top',
        horizontal: 'right',
    } : _c, badgeContent = _b.badgeContent, children = _b.children, className = _b.className, badgeClassName = _b.badgeClassName, _d = _b.color, color = _d === void 0 ? 'default' : _d, _e = _b.component, ComponentProp = _e === void 0 ? 'span' : _e, invisibleProp = _b.invisible, _f = _b.max, max = _f === void 0 ? 99 : _f, _g = _b.overlap, overlap = _g === void 0 ? 'rectangle' : _g, _h = _b.showZero, showZero = _h === void 0 ? false : _h, _j = _b.variant, variant = _j === void 0 ? 'standard' : _j, other = __rest(_b, ["anchorOrigin", "badgeContent", "children", "className", "badgeClassName", "color", "component", "invisible", "max", "overlap", "showZero", "variant"]);
    var invisible = invisibleProp;
    if (invisibleProp == null &&
        ((badgeContent === 0 && !showZero) || (badgeContent == null && variant !== 'dot'))) {
        invisible = true;
    }
    var displayValue = '';
    if (variant !== 'dot') {
        displayValue = badgeContent > max ? max + "+" : badgeContent;
    }
    return (<ComponentProp className={classnames_1.default(styles_module_scss_1.default.root, className)} ref={ref} {...other}>
      {children}
      <span className={classnames_1.default(badgeClassName, styles_module_scss_1.default.badge, styles_module_scss_1.default["" + anchorOrigin.horizontal + capitalize_1.default(anchorOrigin.vertical) + "}"], styles_module_scss_1.default["anchorOrigin" + capitalize_1.default(anchorOrigin.vertical) + capitalize_1.default(anchorOrigin.horizontal) + capitalize_1.default(overlap)], (_a = {},
        _a[styles_module_scss_1.default["color" + capitalize_1.default(color)]] = color !== 'default',
        _a[styles_module_scss_1.default.invisible] = invisible,
        _a[styles_module_scss_1.default.dot] = variant === 'dot',
        _a))}>
        {displayValue}
      </span>
    </ComponentProp>);
});
exports.default = Badge;
//# sourceMappingURL=index.jsx.map