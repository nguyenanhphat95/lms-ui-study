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
var StepperContext_1 = __importDefault(require("../Stepper/StepperContext"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var StepConnector = React.forwardRef(function StepConnector(props, ref) {
    var _a, _b;
    var className = props.className, size = props.size, other = __rest(props, ["className", "size"]);
    var _c = React.useContext(StepperContext_1.default), alternativeLabel = _c.alternativeLabel, orientation = _c.orientation;
    var _d = React.useContext(StepContext_1.default), active = _d.active, disabled = _d.disabled, completed = _d.completed;
    return (<div className={classnames_1.default(styles_module_scss_1.default.root, styles_module_scss_1.default[orientation], (_a = {},
        _a[styles_module_scss_1.default.alternativeLabel] = alternativeLabel,
        _a[styles_module_scss_1.default.active] = active,
        _a[styles_module_scss_1.default.completed] = completed,
        _a[styles_module_scss_1.default.disabled] = disabled,
        _a), className)} ref={ref} {...other}>
      <span className={classnames_1.default(styles_module_scss_1.default['line-connector'], (_b = {},
        _b[styles_module_scss_1.default.lineHorizontal] = orientation === 'horizontal',
        _b[styles_module_scss_1.default.lineVertical] = orientation === 'vertical',
        _b), styles_module_scss_1.default["vertical-" + size])}/>
    </div>);
});
exports.default = StepConnector;
//# sourceMappingURL=index.jsx.map