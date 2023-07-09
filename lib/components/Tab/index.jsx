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
exports.Tab = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var Tabs_1 = require("../Tabs");
var Typography_1 = __importStar(require("../Typography"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var TabTypes_1 = require("./TabTypes");
var defaultProps = {
    component: 'li',
    disabled: false,
    fullWidth: true,
    border: true,
    orientation: Tabs_1.TabOrientation.horizontal,
};
var Tab = function (props) {
    var _a;
    var _b = __assign(__assign({}, defaultProps), props), Component = _b.component, className = _b.className, _size = _b.size, disabled = _b.disabled, fullWidth = _b.fullWidth, index = _b.index, border = _b.border, label = _b.label, labelPlacement = _b.labelPlacement, children = _b.children, orientation = _b.orientation, rest = __rest(_b, ["component", "className", "size", "disabled", "fullWidth", "index", "border", "label", "labelPlacement", "children", "orientation"]);
    var context = react_1.useContext(Tabs_1.TabContext);
    var activated = context.value === index;
    var size = _size || context.size;
    var classOfComponent = classnames_1.default(styles_module_scss_1.default.root, (_a = {},
        _a[styles_module_scss_1.default["size-" + size]] = size,
        _a[styles_module_scss_1.default.activated] = activated,
        _a[styles_module_scss_1.default.disabled] = disabled,
        _a[styles_module_scss_1.default['full-width']] = fullWidth,
        _a[styles_module_scss_1.default.border] = border,
        _a[styles_module_scss_1.default[orientation]] = !!orientation,
        _a), className);
    function handleClick() {
        if (context && context.onChange) {
            context.onChange(index);
        }
    }
    var shouldUseTag = !!label;
    var contentOfTab = children;
    if (shouldUseTag) {
        contentOfTab = [
            <Typography_1.default key="label" weight={Typography_1.TypoWeights.inherit} variant={Typography_1.TypoSizes.inherit} type={Typography_1.TypoTypes.inherit} className={styles_module_scss_1.default.label}>
        {label}
      </Typography_1.default>,
        ];
        if (labelPlacement === TabTypes_1.TabLabelPlacement.right) {
            contentOfTab.reverse();
        }
    }
    return (<Component {...rest} onClick={handleClick} className={classOfComponent}>
      {contentOfTab}
    </Component>);
};
exports.Tab = Tab;
exports.default = exports.Tab;
__exportStar(require("./TabTypes"), exports);
//# sourceMappingURL=index.jsx.map