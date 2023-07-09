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
exports.MenuList = void 0;
var react_1 = __importDefault(require("react"));
var List_1 = __importDefault(require("../List"));
var defaultProps = {
    component: 'ul',
    direction: 'column',
};
exports.MenuList = react_1.default.forwardRef(function (props, ref) {
    var _a = __assign(__assign({}, defaultProps), props), className = _a.className, children = _a.children, rest = __rest(_a, ["className", "children"]);
    return (<List_1.default role="menu" ref={ref} className={className} {...rest}>
      {children}
    </List_1.default>);
});
exports.default = exports.MenuList;
//# sourceMappingURL=index.jsx.map