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
exports.Button = void 0;
var Spinner_1 = __importDefault(require("lms-icons/components/Spinner"));
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var ButtonBase_1 = __importDefault(require("../ButtonBase"));
var Icon_1 = __importDefault(require("../Icon"));
var ButtonColors_1 = require("./ButtonColors");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
__exportStar(require("./ButtonColors"), exports);
var defaultProps = {
    component: "button",
    disabled: false,
    fullWidth: true,
    loading: false,
    color: ButtonColors_1.ButtonColors.primary,
    buttonSize: ButtonColors_1.ButtonSizes.md,
    chip: false,
};
exports.Button = react_1.forwardRef(function (props, ref) {
    var _a;
    var _b = __assign(__assign({}, defaultProps), props), Component = _b.component, color = _b.color, buttonSize = _b.buttonSize, className = _b.className, children = _b.children, disabled = _b.disabled, activated = _b.activated, fullWidth = _b.fullWidth, loading = _b.loading, icon = _b.icon, chip = _b.chip, rest = __rest(_b, ["component", "color", "buttonSize", "className", "children", "disabled", "activated", "fullWidth", "loading", "icon", "chip"]);
    var shouldUseIcon = !!icon || !!loading;
    var classOfComponent = classnames_1.default(styles_module_scss_1.default.btn, styles_module_scss_1.default["color-" + color], styles_module_scss_1.default["size-" + buttonSize], className, (_a = {},
        _a[styles_module_scss_1.default.disabled] = disabled,
        _a[styles_module_scss_1.default.activated] = activated,
        _a[styles_module_scss_1.default.spinning] = loading,
        _a[styles_module_scss_1.default["full-width"]] = fullWidth,
        _a[styles_module_scss_1.default["use-icon"]] = shouldUseIcon,
        _a[styles_module_scss_1.default.chip] = chip,
        _a));
    var contentOfButton = shouldUseIcon ? (<Icon_1.default className={styles_module_scss_1.default.icon} component={loading ? Spinner_1.default : icon}/>) : (children);
    return (<ButtonBase_1.default {...rest} ref={ref} component={Component} disabled={disabled} className={classOfComponent}>
      {contentOfButton}
    </ButtonBase_1.default>);
});
exports.Button.displayName = "Button";
exports.default = exports.Button;
//# sourceMappingURL=index.jsx.map