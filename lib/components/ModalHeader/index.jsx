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
exports.ModalHeader = void 0;
var Close_1 = __importDefault(require("lms-icons/components/Close"));
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var Icon_1 = __importDefault(require("../Icon"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var defaultProps = {
    component: "div",
};
var ModalHeader = function (props) {
    var _a = __assign(__assign({}, defaultProps), props), Component = _a.component, className = _a.className, onClose = _a.onClose, children = _a.children, rest = __rest(_a, ["component", "className", "onClose", "children"]);
    var _renderButtonClose = onClose && (<span className={styles_module_scss_1.default.close} onClick={onClose} role="presentation">
      <Icon_1.default component={Close_1.default} color="unset" width={16} height={16}/>
    </span>);
    return (<Component {...rest} className={classnames_1.default(styles_module_scss_1.default["root"], className)}>
      <span className={styles_module_scss_1.default.title}>{children}</span>
      
    </Component>);
};
exports.ModalHeader = ModalHeader;
exports.default = exports.ModalHeader;
//# sourceMappingURL=index.jsx.map