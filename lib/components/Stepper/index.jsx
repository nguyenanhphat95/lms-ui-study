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
var React = __importStar(require("react"));
var StepConnector_1 = __importDefault(require("../StepConnector"));
var StepperContext_1 = __importDefault(require("./StepperContext"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var Stepper = React.forwardRef(function Stepper(props, ref) {
    var _a;
    var defaultConnector = <StepConnector_1.default size={props.size || 'md'}/>;
    var _b = props.activeStep, activeStep = _b === void 0 ? 0 : _b, _c = props.alternativeLabel, alternativeLabel = _c === void 0 ? false : _c, children = props.children, className = props.className, _d = props.connector, connector = _d === void 0 ? defaultConnector : _d, _e = props.nonLinear, nonLinear = _e === void 0 ? false : _e, _f = props.orientation, orientation = _f === void 0 ? 'horizontal' : _f, _g = props.size, size = _g === void 0 ? 'md' : _g, rest = __rest(props, ["activeStep", "alternativeLabel", "children", "className", "connector", "nonLinear", "orientation", "size"]);
    var childrenArray = React.Children.toArray(children);
    var steps = childrenArray.map(function (step, index) {
        return React.cloneElement(step, __assign({ index: index, last: index + 1 === childrenArray.length, size: size }, step.props));
    });
    var contextValue = React.useMemo(function () { return ({
        activeStep: activeStep,
        alternativeLabel: alternativeLabel,
        connector: connector,
        nonLinear: nonLinear,
        orientation: orientation,
        size: size
    }); }, [activeStep, alternativeLabel, connector, nonLinear, orientation, size]);
    return (<StepperContext_1.default.Provider value={contextValue}>
      <div className={classnames_1.default(styles_module_scss_1.default.root, styles_module_scss_1.default[orientation], (_a = {},
        _a[styles_module_scss_1.default.alternativeLabel] = alternativeLabel,
        _a), className)} ref={ref} {...rest}>
        {steps}
      </div>
    </StepperContext_1.default.Provider>);
});
exports.default = Stepper;
//# sourceMappingURL=index.jsx.map