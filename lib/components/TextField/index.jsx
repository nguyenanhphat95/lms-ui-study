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
exports.TextField = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var Input_1 = __importDefault(require("../Input"));
var Typography_1 = __importStar(require("../Typography"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var defaultProps = {
    component: Input_1.default,
    type: Typography_1.TypoTypes.default,
    labelProps: {},
};
exports.TextField = react_1.forwardRef(function (props, ref) {
    var _a = __assign(__assign({}, defaultProps), props), Component = _a.component, className = _a.className, note = _a.note, label = _a.label, fieldId = _a.fieldId, inputClassName = _a.inputClassName, labelProps = _a.labelProps, afterLabel = _a.afterLabel, rest = __rest(_a, ["component", "className", "note", "label", "fieldId", "inputClassName", "labelProps", "afterLabel"]);
    var classOfComponent = classnames_1.default(styles_module_scss_1.default['text-field'], styles_module_scss_1.default["color-" + rest.color], className);
    var keyOfField = fieldId || "field-" + rest.name;
    var _renderLabel = label && (<react_1.default.Fragment>
      <Typography_1.default size={Typography_1.TypoSizes.body2} className={styles_module_scss_1.default.label} component="label" htmlFor={keyOfField} weight={Typography_1.TypoWeights.bold} {...labelProps}>
        {label}
        {afterLabel}
      </Typography_1.default>
    </react_1.default.Fragment>);
    var _renderInput = (<Component id={keyOfField} ref={ref} inputClassName={inputClassName} autoComplete="off" {...rest}/>);
    var _renderNote = note && (<Typography_1.default size={Typography_1.TypoSizes.caption} className={styles_module_scss_1.default.note}>
      {note}
    </Typography_1.default>);
    return (<div className={classOfComponent}>
      {_renderLabel}
      {_renderInput}
      {_renderNote}
    </div>);
});
exports.default = react_1.memo(exports.TextField);
//# sourceMappingURL=index.jsx.map