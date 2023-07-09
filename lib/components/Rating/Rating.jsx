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
exports.Rating = void 0;
var classnames_1 = __importDefault(require("classnames"));
var memoize_1 = __importDefault(require("lodash/memoize"));
var react_1 = __importDefault(require("react"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var defaultProps = {
    component: 'div',
    rate: 0,
    size: 10,
};
var getRateValue = memoize_1.default(function (rate) {
    return Math.round((20 * rate) / 5);
});
var Rating = function (props) {
    var _a = __assign(__assign({}, defaultProps), props), _b = _a.component, Component = _b === void 0 ? 'div' : _b, _c = _a.className, className = _c === void 0 ? null : _c, _d = _a.style, style = _d === void 0 ? null : _d, _e = _a.rate, rate = _e === void 0 ? 0 : _e, size = _a.size, rest = __rest(_a, ["component", "className", "style", "rate", "size"]);
    return (<Component className={classnames_1.default(styles_module_scss_1.default.rating, className)} style={style} {...rest}>
      {!rate && <div className={classnames_1.default(styles_module_scss_1.default.stars, styles_module_scss_1.default.empty)} style={{ fontSize: size }}/>}
      {rate > 0 && (<div className={classnames_1.default(styles_module_scss_1.default.stars, styles_module_scss_1.default["star" + getRateValue(rate)])} style={{ fontSize: size }}/>)}
    </Component>);
};
exports.Rating = Rating;
exports.default = exports.Rating;
//# sourceMappingURL=Rating.jsx.map