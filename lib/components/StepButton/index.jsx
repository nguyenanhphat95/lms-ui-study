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
var Button_1 = __importDefault(require("../Button"));
var StepContext_1 = __importDefault(require("../Step/StepContext"));
var StepLabel_1 = __importDefault(require("../StepLabel"));
var StepperContext_1 = __importDefault(require("../Stepper/StepperContext"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var StepButton = React.forwardRef(function StepButton(props, ref) {
    var children = props.children, className = props.className, icon = props.icon, optional = props.optional, other = __rest(props, ["children", "className", "icon", "optional"]);
    var disabled = React.useContext(StepContext_1.default).disabled;
    var orientation = React.useContext(StepperContext_1.default).orientation;
    var childProps = {
        icon: icon,
        optional: optional
    };
    var child = <StepLabel_1.default {...childProps}>{children}</StepLabel_1.default>;
    return (<Button_1.default disabled={disabled} className={classnames_1.default(styles_module_scss_1.default.root, styles_module_scss_1.default[orientation], className)} ref={ref} {...other}>
      {child}
    </Button_1.default>);
});
exports.default = StepButton;
//# sourceMappingURL=index.jsx.map