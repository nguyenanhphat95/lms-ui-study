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
var RightArrow_1 = __importDefault(require("lms-icons/components/RightArrow"));
var Icon_1 = require("../../Icon");
var classnames_1 = __importDefault(require("classnames"));
var React = __importStar(require("react"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var TabScrollButton = React.forwardRef(function TabScrollButton(props, ref) {
    var _a;
    var classNameProp = props.className, direction = props.direction, orientation = props.orientation, disabled = props.disabled, other = __rest(props, ["className", "direction", "orientation", "disabled"]);
    return (<div className={classnames_1.default(styles_module_scss_1.default.root, (_a = {},
        _a[styles_module_scss_1.default.vertical] = orientation === "vertical",
        _a[styles_module_scss_1.default.disabled] = disabled,
        _a), classNameProp)} ref={ref} role={null} tabIndex={null} {...other}>
      {direction === "left" ? (<Icon_1.Icon component={RightArrow_1.default} style={{
        transform: "rotate(180deg)",
    }} width={16} height={16}/>) : (<Icon_1.Icon component={RightArrow_1.default} width={16} height={16}/>)}
    </div>);
});
exports.default = TabScrollButton;
//# sourceMappingURL=index.jsx.map