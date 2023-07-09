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
var capitalize_1 = __importDefault(require("@App/utils/capitalize"));
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var TabIndicator = React.forwardRef(function TabIndicator(props, ref) {
    var _a;
    var className = props.className, color = props.color, orientation = props.orientation, other = __rest(props, ["className", "color", "orientation"]);
    return (<span className={classnames_1.default(styles_module_scss_1.default.root, (_a = {},
        _a[styles_module_scss_1.default.vertical] = orientation === 'vertical',
        _a), styles_module_scss_1.default["color" + capitalize_1.default(color)], className)} ref={ref} {...other}/>);
});
exports.default = TabIndicator;
//# sourceMappingURL=index.jsx.map