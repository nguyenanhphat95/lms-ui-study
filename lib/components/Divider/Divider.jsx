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
exports.Divider = exports.DividerSizes = exports.DividerType = exports.DividerOrientation = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var DividerTypes_1 = require("./DividerTypes");
Object.defineProperty(exports, "DividerOrientation", { enumerable: true, get: function () { return DividerTypes_1.DividerOrientation; } });
Object.defineProperty(exports, "DividerType", { enumerable: true, get: function () { return DividerTypes_1.DividerType; } });
Object.defineProperty(exports, "DividerSizes", { enumerable: true, get: function () { return DividerTypes_1.DividerSizes; } });
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var defaultProps = {
    component: 'hr',
    type: DividerTypes_1.DividerType.line,
    orientation: DividerTypes_1.DividerOrientation.horizontal,
    size: DividerTypes_1.DividerSizes.fullWidth,
};
var Divider = function (props) {
    var _a;
    var _b = __assign(__assign({}, defaultProps), props), Component = _b.component, className = _b.className, type = _b.type, orientation = _b.orientation, size = _b.size, absolute = _b.absolute, flexItem = _b.flexItem, rest = __rest(_b, ["component", "className", "type", "orientation", "size", "absolute", "flexItem"]);
    var dividerClassName = classnames_1.default(styles_module_scss_1.default.divider, (_a = {},
        _a[styles_module_scss_1.default[String(type)]] = !!type,
        _a[styles_module_scss_1.default[size]] = size !== DividerTypes_1.DividerSizes.fullWidth,
        _a[styles_module_scss_1.default.absolute] = !!absolute,
        _a[styles_module_scss_1.default.flexItem] = !!flexItem,
        _a[styles_module_scss_1.default.vertical] = orientation === DividerTypes_1.DividerOrientation.vertical,
        _a), className);
    return <Component {...rest} className={dividerClassName}/>;
};
exports.Divider = Divider;
exports.default = exports.Divider;
//# sourceMappingURL=Divider.jsx.map