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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
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
exports.Radio = void 0;
var compose_1 = __importDefault(require("@App/utils/compose"));
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var Icon_1 = __importDefault(require("../Icon"));
var Input_1 = __importDefault(require("../Input"));
var RadioGroup_1 = require("../RadioGroup");
var Typography_1 = __importDefault(require("../Typography"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var utils_1 = require("./utils");
__exportStar(require("./RadioTypes"), exports);
var defaultProps = {
    component: 'label',
    disabled: false,
    checked: false,
};
exports.Radio = react_1.forwardRef(function (props, ref) {
    var _a;
    var _b = __assign(__assign({}, defaultProps), props), Component = _b.component, className = _b.className, disabled = _b.disabled, onChange = _b.onChange, value = _b.value, checked = _b.checked, name = _b.name, iconRef = _b.iconRef, iconProps = _b.iconProps, children = _b.children, rest = __rest(_b, ["component", "className", "disabled", "onChange", "value", "checked", "name", "iconRef", "iconProps", "children"]);
    var context = react_1.useContext(RadioGroup_1.RadioGroupContext);
    var checkboxName = name || context.name;
    var isDisabled = disabled || context.disabled;
    var checkIsBoolean = typeof checked === 'boolean';
    var isChecked = checkIsBoolean ? checked : context.selected === value;
    var onChangeComposed = react_1.useCallback(compose_1.default(onChange, context.onChange), [
        onChange,
        context.onChange,
    ]);
    var refOfInput = react_1.useRef();
    var statusOfRadio = utils_1.getStatusOfRadio(isChecked);
    var iconOfRadio = utils_1.getIconByStatus(statusOfRadio);
    var classOfRoot = classnames_1.default(styles_module_scss_1.default.root, className, (_a = {},
        _a[styles_module_scss_1.default.disabled] = isDisabled,
        _a[styles_module_scss_1.default.checked] = isChecked,
        _a));
    var _children = react_1.useMemo(function () { return children && <Typography_1.default className={styles_module_scss_1.default.content}>{children}</Typography_1.default>; }, [children, styles_module_scss_1.default.content]);
    return (<Component ref={ref} className={classOfRoot} role="radio" {...rest}>
      <Icon_1.default ref={iconRef} className={styles_module_scss_1.default.icon} component={iconOfRadio} width={16} height={16} {...iconProps}/>
      {_children}
      <Input_1.default readOnly type="radio" ref={refOfInput} name={checkboxName} value={value} className={styles_module_scss_1.default.input} checked={isChecked} onChange={onChangeComposed}/>
    </Component>);
});
exports.default = exports.Radio;
//# sourceMappingURL=Radio.jsx.map