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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clsx_1 = __importDefault(require("clsx"));
var React = __importStar(require("react"));
var StepperContext_1 = __importDefault(require("../Stepper/StepperContext"));
var StepContext_1 = __importDefault(require("./StepContext"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var Step = React.forwardRef(function Step(props, ref) {
    var _a;
    var activeProp = props.active, children = props.children, className = props.className, completedProp = props.completed, disabledProp = props.disabled, _b = props.expanded, expanded = _b === void 0 ? false : _b, index = props.index, last = props.last, other = __rest(props, ["active", "children", "className", "completed", "disabled", "expanded", "index", "last"]);
    var _c = React.useContext(StepperContext_1.default), activeStep = _c.activeStep, connector = _c.connector, alternativeLabel = _c.alternativeLabel, orientation = _c.orientation, nonLinear = _c.nonLinear;
    var _d = __read([
        activeProp,
        completedProp,
        disabledProp
    ], 3), _e = _d[0], active = _e === void 0 ? false : _e, _f = _d[1], completed = _f === void 0 ? false : _f, _g = _d[2], disabled = _g === void 0 ? false : _g;
    if (activeStep === index) {
        active = activeProp !== undefined ? activeProp : true;
    }
    else if (!nonLinear && activeStep > index) {
        completed = completedProp !== undefined ? completedProp : true;
    }
    else if (!nonLinear && activeStep < index) {
        disabled = disabledProp !== undefined ? disabledProp : true;
    }
    var contextValue = React.useMemo(function () { return ({
        index: index,
        last: last,
        expanded: expanded,
        icon: index + 1,
        active: active,
        completed: completed,
        disabled: disabled
    }); }, [index, last, expanded, active, completed, disabled]);
    var newChildren = (<div className={clsx_1.default(styles_module_scss_1.default.root, styles_module_scss_1.default[orientation], (_a = {},
        _a[styles_module_scss_1.default.alternativeLabel] = alternativeLabel,
        _a[styles_module_scss_1.default.completed] = completed,
        _a), className)} ref={ref} {...other}>
      {connector && alternativeLabel && index !== 0 ? connector : null}
      {children}
    </div>);
    return (<StepContext_1.default.Provider value={contextValue}>
      {connector && !alternativeLabel && index !== 0 ? (<React.Fragment>
          {connector}
          {newChildren}
        </React.Fragment>) : (newChildren)}
    </StepContext_1.default.Provider>);
});
exports.default = Step;
//# sourceMappingURL=index.jsx.map