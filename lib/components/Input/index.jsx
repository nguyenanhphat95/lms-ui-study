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
exports.Input = exports.InputColors = exports.InputSizes = void 0;
var getArrayOf_1 = require("@App/utils/getArrayOf");
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var InputBase_1 = __importDefault(require("../InputBase"));
var InputTypes_1 = require("./InputTypes");
Object.defineProperty(exports, "InputColors", { enumerable: true, get: function () { return InputTypes_1.InputColors; } });
Object.defineProperty(exports, "InputSizes", { enumerable: true, get: function () { return InputTypes_1.InputSizes; } });
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
__exportStar(require("./InputTypes"), exports);
var defaultProps = {
    component: InputBase_1.default,
    size: InputTypes_1.InputSizes.lg,
    color: InputTypes_1.InputColors.primary
};
exports.Input = react_1.forwardRef(function (props, ref) {
    var _a = __assign(__assign({}, defaultProps), props), Component = _a.component, className = _a.className, color = _a.color, beforeInput = _a.beforeInput, afterInput = _a.afterInput, wrapperRef = _a.wrapperRef, rest = __rest(_a, ["component", "className", "color", "beforeInput", "afterInput", "wrapperRef"]);
    var classOfRoot = classnames_1.default(styles_module_scss_1.default.root, styles_module_scss_1.default["color-" + color], className, rest.disabled && styles_module_scss_1.default.disabled);
    var beforeInputs = getArrayOf_1.getArrayOf(beforeInput);
    var afterInputs = getArrayOf_1.getArrayOf(afterInput);
    var classOfInputBase = classnames_1.default(styles_module_scss_1.default.input, styles_module_scss_1.default["size-" + rest.size], beforeInputs.length > 0 && styles_module_scss_1.default['has-before'], afterInputs.length > 0 && styles_module_scss_1.default['has-after'], rest.disabled && styles_module_scss_1.default.disabled);
    return (<div className={classOfRoot} role="presentation" ref={wrapperRef}>
      {beforeInputs.map(function (component, index) {
        return react_1.default.cloneElement(component, {
            key: index.toString(),
            disabled: rest.disabled,
            size: rest.size
        });
    })}
      <Component {...rest} ref={ref} className={classOfInputBase}/>
      {afterInputs.map(function (component, index) {
        return react_1.default.cloneElement(component, {
            key: index.toString(),
            disabled: rest.disabled,
            size: rest.size
        });
    })}
    </div>);
});
exports.Input.displayName = 'Input';
exports.default = exports.Input;
//# sourceMappingURL=index.jsx.map