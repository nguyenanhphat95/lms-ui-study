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
exports.SkeletonRadius = void 0;
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var SkeletonRadius;
(function (SkeletonRadius) {
    SkeletonRadius["none"] = "none";
    SkeletonRadius["light"] = "light";
    SkeletonRadius["regular"] = "regular";
    SkeletonRadius["bold"] = "bold";
    SkeletonRadius["max"] = "max";
})(SkeletonRadius = exports.SkeletonRadius || (exports.SkeletonRadius = {}));
var Skeleton = React.forwardRef(function Skeleton(props, ref) {
    var _a;
    var _b = props.animation, animation = _b === void 0 ? 'wave' : _b, className = props.className, _c = props.component, Component = _c === void 0 ? 'div' : _c, height = props.height, style = props.style, _d = props.variant, variant = _d === void 0 ? 'text' : _d, width = props.width, _e = props.radius, radius = _e === void 0 ? SkeletonRadius.regular : _e, other = __rest(props, ["animation", "className", "component", "height", "style", "variant", "width", "radius"]);
    var hasChildren = Boolean(other.children);
    return (<Component ref={ref} className={classnames_1.default(styles_module_scss_1.default.root, styles_module_scss_1.default[variant], (_a = {},
        _a[styles_module_scss_1.default[animation]] = animation !== false,
        _a[styles_module_scss_1.default.withChildren] = hasChildren,
        _a[styles_module_scss_1.default.fitContent] = hasChildren && !width,
        _a[styles_module_scss_1.default.heightAuto] = hasChildren && !height,
        _a[styles_module_scss_1.default["radius-" + String(radius)]] = radius,
        _a), className)} {...other} style={__assign({ width: width,
        height: height }, style)}/>);
});
exports.default = Skeleton;
//# sourceMappingURL=index.jsx.map