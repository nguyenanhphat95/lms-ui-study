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
exports.MaterialTab = void 0;
var index_1 = require("@App/index");
var capitalize_1 = __importDefault(require("@App/utils/capitalize"));
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var defaultProps = {
    component: 'div'
};
exports.MaterialTab = React.forwardRef(function Tab(props, ref) {
    var _a;
    var _b = __assign(__assign({}, defaultProps), props), className = _b.className, _c = _b.disabled, disabled = _c === void 0 ? false : _c, fullWidth = _b.fullWidth, icon = _b.icon, indicator = _b.indicator, label = _b.label, onChange = _b.onChange, onClick = _b.onClick, onFocus = _b.onFocus, selected = _b.selected, selectionFollowsFocus = _b.selectionFollowsFocus, _d = _b.textColor, textColor = _d === void 0 ? 'inherit' : _d, value = _b.value, _e = _b.wrapped, wrapped = _e === void 0 ? false : _e, Component = _b.component, other = __rest(_b, ["className", "disabled", "fullWidth", "icon", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped", "component"]);
    var handleClick = function (event) {
        if (onChange) {
            onChange(event, value);
        }
        if (onClick) {
            onClick(event);
        }
    };
    var handleFocus = function (event) {
        if (selectionFollowsFocus && !selected && onChange) {
            onChange(event, value);
        }
        if (onFocus) {
            onFocus(event);
        }
    };
    return (<Component className={classnames_1.default(styles_module_scss_1.default.root, styles_module_scss_1.default["textColor" + capitalize_1.default(textColor)], (_a = {},
        _a[styles_module_scss_1.default.disabled] = disabled,
        _a[styles_module_scss_1.default.selected] = selected,
        _a[styles_module_scss_1.default.labelIcon] = label && icon,
        _a[styles_module_scss_1.default.fullWidth] = fullWidth,
        _a[styles_module_scss_1.default.wrapped] = wrapped,
        _a), className)} ref={ref} role="tab" aria-selected={selected} onClick={handleClick} onFocus={handleFocus} tabIndex={selected ? 0 : -1} {...other}>
      <index_1.Typography size={index_1.TypoSizes.body1} className={styles_module_scss_1.default.wrapper} type={index_1.TypoTypes.primary} weight={selected ? index_1.TypoWeights.bold : index_1.TypoWeights.inherit}>
        {icon}
        {label}
      </index_1.Typography>
      {indicator}
    </Component>);
});
exports.default = exports.MaterialTab;
//# sourceMappingURL=index.jsx.map