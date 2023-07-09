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
var Typography_1 = __importStar(require("../Typography"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var StepIcon = React.forwardRef(function (props, ref) {
    var _a = props.active, active = _a === void 0 ? false : _a, classNameProp = props.className, _b = props.completed, completed = _b === void 0 ? false : _b, _c = props.error, error = _c === void 0 ? false : _c, icon = props.icon, classNameActive = props.classNameActive, classNameCompleted = props.classNameCompleted, classNameDefault = props.classNameDefault, rest = __rest(props, ["active", "className", "completed", "error", "icon", "classNameActive", "classNameCompleted", "classNameDefault"]);
    if (typeof icon === 'number' || typeof icon === 'string') {
        var className = classnames_1.default(classNameProp, styles_module_scss_1.default.root, classNameActive ? classNameActive : active && styles_module_scss_1.default.active, classNameCompleted ? classNameCompleted : completed && styles_module_scss_1.default.completed, classNameDefault ? classNameDefault : styles_module_scss_1.default.default, styles_module_scss_1.default["size-" + rest.size]);
        return (<Typography_1.default weight={Typography_1.TypoWeights.bold} className={className} ref={ref} {...rest}>
        {icon}
      </Typography_1.default>);
    }
    return icon;
});
exports.default = StepIcon;
//# sourceMappingURL=index.jsx.map