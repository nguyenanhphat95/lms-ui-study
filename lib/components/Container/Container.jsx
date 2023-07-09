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
exports.Container = exports.ContainerSizes = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var types_1 = require("./types");
Object.defineProperty(exports, "ContainerSizes", { enumerable: true, get: function () { return types_1.ContainerSizes; } });
__exportStar(require("./types"), exports);
var defaultProps = {
    component: 'div',
    width: types_1.ContainerSizes.auto,
    fluid: false,
};
var Container = function (props) {
    var _a;
    var _b = __assign(__assign({}, defaultProps), props), Component = _b.component, className = _b.className, width = _b.width, fluid = _b.fluid, rest = __rest(_b, ["component", "className", "width", "fluid"]);
    var classOfComponent = classnames_1.default(styles_module_scss_1.default.container, className, (_a = {},
        _a[styles_module_scss_1.default["max-" + width]] = width !== types_1.ContainerSizes.auto,
        _a[styles_module_scss_1.default.fluid] = fluid,
        _a));
    return <Component className={classOfComponent} {...rest}/>;
};
exports.Container = Container;
exports.default = exports.Container;
//# sourceMappingURL=Container.jsx.map