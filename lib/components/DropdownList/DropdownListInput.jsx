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
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var Typography_1 = __importStar(require("../Typography"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var defaultProps = {
    component: 'input'
};
var DropdownListInput = react_1.default.forwardRef(function (_props, ref) {
    var _a;
    var _b = __assign(__assign({}, defaultProps), _props), Component = _b.component, className = _b.className, onClick = _b.onClick, display = _b.display, placeholder = _b.placeholder, rest = __rest(_b, ["component", "className", "onClick", "display", "placeholder"]);
    var isDisplayPlaceholder = Array.isArray(display) && display.length === 0;
    return (<react_1.Fragment>
        <div className={classnames_1.default(styles_module_scss_1.default.select, styles_module_scss_1.default["select-size-" + rest.size], className, (_a = {},
        _a[styles_module_scss_1.default.disabled] = rest.disabled,
        _a[styles_module_scss_1.default.placeholder] = isDisplayPlaceholder,
        _a))} ref={ref} onClick={onClick}>
          {isDisplayPlaceholder ? (<Typography_1.default truncate={1} type={Typography_1.TypoTypes.inherit} className={classnames_1.default(styles_module_scss_1.default['label-text'], styles_module_scss_1.default["label-size-" + rest.size])}>
              {placeholder}
            </Typography_1.default>) : (<Typography_1.default truncate={1} type={Typography_1.TypoTypes.inherit} className={classnames_1.default(styles_module_scss_1.default['label-text'], styles_module_scss_1.default["label-size-" + rest.size])}>
              {display}
            </Typography_1.default>)}
        </div>
        <Component {...rest} type="hidden"/>
      </react_1.Fragment>);
});
DropdownListInput.displayName = 'DropdownListInput';
exports.default = DropdownListInput;
//# sourceMappingURL=DropdownListInput.jsx.map