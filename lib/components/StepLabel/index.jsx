"use strict";
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
var React = __importStar(require("react"));
var StepContext_1 = __importDefault(require("../Step/StepContext"));
var StepIcon_1 = __importDefault(require("../StepIcon"));
var StepperContext_1 = __importDefault(require("../Stepper/StepperContext"));
var Typography_1 = __importStar(require("../Typography"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var StepLabel = React.forwardRef(function StepLabel(props, ref) {
    var _a, _b, _c;
    var children = props.children, className = props.className, _d = props.error, error = _d === void 0 ? false : _d, _e = props.noSpacingY, noSpacingY = _e === void 0 ? false : _e, optional = props.optional, StepIconComponentProp = props.StepIconComponent, StepIconProps = props.StepIconProps, other = __rest(props, ["children", "className", "error", "noSpacingY", "optional", "StepIconComponent", "StepIconProps"]);
    var _f = React.useContext(StepperContext_1.default), alternativeLabel = _f.alternativeLabel, orientation = _f.orientation, size = _f.size;
    var _g = React.useContext(StepContext_1.default), active = _g.active, disabled = _g.disabled, completed = _g.completed, icon = _g.icon;
    var StepIconComponent = StepIconComponentProp;
    if (icon && !StepIconComponent) {
        StepIconComponent = StepIcon_1.default;
    }
    return (<span className={classnames_1.default(styles_module_scss_1.default.root, styles_module_scss_1.default[orientation], (_a = {},
        _a[styles_module_scss_1.default.disabled] = disabled,
        _a[styles_module_scss_1.default.alternativeLabel] = alternativeLabel,
        _a[styles_module_scss_1.default.error] = error,
        _a), className, noSpacingY && styles_module_scss_1.default.noSpacingY)} ref={ref} {...other}>
      {icon || StepIconComponent ? (<span className={classnames_1.default(styles_module_scss_1.default.iconContainer, (_b = {},
        _b[styles_module_scss_1.default.alternativeLabel] = alternativeLabel,
        _b))}>
          <StepIconComponent completed={completed} active={active} error={error} icon={icon} size={size} {...StepIconProps}/>
        </span>) : null}
      <span className={styles_module_scss_1.default.labelContainer}>
        {children ? (<Typography_1.default weight={Typography_1.TypoWeights.medium} className={classnames_1.default(styles_module_scss_1.default.label, (_c = {},
        _c[styles_module_scss_1.default.alternativeLabel] = alternativeLabel,
        _c[styles_module_scss_1.default.completed] = completed,
        _c[styles_module_scss_1.default.active] = active,
        _c[styles_module_scss_1.default.error] = error,
        _c), styles_module_scss_1.default["size-" + size])}>
            {children}
          </Typography_1.default>) : null}
        {optional}
      </span>
    </span>);
});
exports.default = StepLabel;
//# sourceMappingURL=index.jsx.map