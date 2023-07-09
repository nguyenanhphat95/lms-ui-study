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
exports.Typography = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var TypoTypes_1 = require("./TypoTypes");
__exportStar(require("./TypoTypes"), exports);
var defaultProps = {
    component: 'span',
    type: TypoTypes_1.TypoTypes.default,
    weight: TypoTypes_1.TypoWeights.regular,
    size: TypoTypes_1.TypoSizes.body2,
    nowrap: false,
};
exports.Typography = react_1.forwardRef(function (props, ref) {
    var _a;
    var _b = __assign(__assign({}, defaultProps), props), Component = _b.component, className = _b.className, size = _b.size, type = _b.type, weight = _b.weight, truncate = _b.truncate, nowrap = _b.nowrap, rest = __rest(_b, ["component", "className", "size", "type", "weight", "truncate", "nowrap"]);
    var classOfComponent = classnames_1.default(className, styles_module_scss_1.default['root'], (_a = {},
        _a[styles_module_scss_1.default.truncate] = truncate && truncate > 0,
        _a[styles_module_scss_1.default["truncate-" + truncate]] = truncate && truncate > 0,
        _a[styles_module_scss_1.default["size-" + size]] = size,
        _a[styles_module_scss_1.default["weight-" + weight]] = weight,
        _a[styles_module_scss_1.default["type-" + type]] = type,
        _a[styles_module_scss_1.default['nowrap']] = nowrap,
        _a));
    return <Component ref={ref} className={classOfComponent} {...rest}/>;
});
exports.default = exports.Typography;
//# sourceMappingURL=Typography.jsx.map