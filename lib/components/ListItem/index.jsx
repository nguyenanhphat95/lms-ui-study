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
exports.ListItem = void 0;
var DownArrow_1 = __importDefault(require("lms-icons/components/DownArrow"));
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var ListItemAction_1 = __importDefault(require("../ListItemAction"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var defaultProps = {
    component: "div",
    disabled: false,
    activated: false,
    open: false,
    classes: {
        wrapper: "",
        content: "",
    },
};
exports.ListItem = react_1.forwardRef(function (props, ref) {
    var _a, _b, _c;
    var _d = __assign(__assign({}, defaultProps), props), Component = _d.component, className = _d.className, disabled = _d.disabled, children = _d.children, activated = _d.activated, open = _d.open, classes = _d.classes, rest = __rest(_d, ["component", "className", "disabled", "children", "activated", "open", "classes"]);
    var classOfWrapper = classnames_1.default(styles_module_scss_1.default.item, className, (_a = {},
        _a[styles_module_scss_1.default.disabled] = !!disabled,
        _a[styles_module_scss_1.default.activated] = !!activated,
        _a[classes.wrapper] = !!classes.wrapper,
        _a));
    var classOfContent = classnames_1.default(styles_module_scss_1.default.content, (_b = {},
        _b[styles_module_scss_1.default["content-size-" + rest.size]] = !!rest.size,
        _b), (_c = {},
        _c[classes.content] = !!classes.content,
        _c));
    var openIsBool = open === undefined || typeof open === "boolean";
    var contentOfToggle = openIsBool && (<ListItemAction_1.default icon={DownArrow_1.default} className={open ? styles_module_scss_1.default["icon-open"] : ""}/>);
    var handleOnClick = react_1.useCallback(function (event) {
        if (disabled)
            return;
        if (rest.onClick) {
            rest.onClick(event);
        }
    }, [rest.onClick, disabled]);
    return (<li ref={ref} className={classOfWrapper}>
      <Component {...rest} className={classOfContent} onClick={handleOnClick}>
        {children}
        
      </Component>
    </li>);
});
exports.default = exports.ListItem;
//# sourceMappingURL=index.jsx.map