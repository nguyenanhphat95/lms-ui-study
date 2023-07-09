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
exports.Grid = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
__exportStar(require("./GridTypes"), exports);
var defaultProps = {
    component: 'div',
    container: false,
    item: false,
    nowrap: false,
    direction: 'row',
};
exports.Grid = react_1.forwardRef(function (props, ref) {
    var _a;
    var _b = __assign(__assign({}, defaultProps), props), Component = _b.component, className = _b.className, container = _b.container, item = _b.item, nowrap = _b.nowrap, direction = _b.direction, justifyContent = _b.justifyContent, alignItem = _b.alignItem, xs = _b.xs, lg = _b.lg, xl = _b.xl, md = _b.md, sm = _b.sm, spacing = _b.spacing, rest = __rest(_b, ["component", "className", "container", "item", "nowrap", "direction", "justifyContent", "alignItem", "xs", "lg", "xl", "md", "sm", "spacing"]);
    var classOfComponent = classnames_1.default(className, (_a = {},
        _a[styles_module_scss_1.default.grid] = container,
        _a[styles_module_scss_1.default.item] = item,
        _a[styles_module_scss_1.default.wrap] = !nowrap,
        _a[styles_module_scss_1.default[direction]] = direction && !!direction,
        _a[styles_module_scss_1.default["s-" + spacing]] = !!spacing,
        _a[styles_module_scss_1.default["justify-" + justifyContent]] = !!justifyContent,
        _a[styles_module_scss_1.default["align-" + alignItem]] = !!alignItem,
        _a[styles_module_scss_1.default["xs-" + xs]] = xs !== undefined,
        _a[styles_module_scss_1.default["sm-" + sm]] = sm !== undefined,
        _a[styles_module_scss_1.default["md-" + md]] = md !== undefined,
        _a[styles_module_scss_1.default["lg-" + lg]] = lg !== undefined,
        _a[styles_module_scss_1.default["xl-" + xl]] = xl !== undefined,
        _a));
    return <Component ref={ref} className={classOfComponent} {...rest}/>;
});
exports.default = exports.Grid;
//# sourceMappingURL=Grid.jsx.map