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
exports.Toast = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importDefault(require("react"));
var Grid_1 = require("../Grid");
var Portal_1 = __importStar(require("../Portal"));
var Typography_1 = __importStar(require("../Typography"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var defaultProps = {
    component: 'div',
    justifyContent: 'center',
};
var Toast = function (props) {
    var _a = __assign(__assign({}, defaultProps), props), Component = _a.component, className = _a.className, justifyContent = _a.justifyContent, children = _a.children, rest = __rest(_a, ["component", "className", "justifyContent", "children"]);
    var toastContent = typeof children === 'string' ? (<Typography_1.default className={styles_module_scss_1.default.content} size={Typography_1.TypoSizes.body2} weight={Typography_1.TypoWeights.bold} type={Typography_1.TypoTypes.invert}>
        {children}
      </Typography_1.default>) : (children);
    return (<Portal_1.default id={Portal_1.PortalIds.toast}>
      <div className={styles_module_scss_1.default.wrapper}>
        <Grid_1.Grid container spacing={4} justifyContent={justifyContent}>
          <Grid_1.Grid item xs="auto">
            <Component className={classnames_1.default(styles_module_scss_1.default.toast, className)} {...rest}>
              {toastContent}
            </Component>
          </Grid_1.Grid>
        </Grid_1.Grid>
      </div>
    </Portal_1.default>);
};
exports.Toast = Toast;
exports.default = exports.Toast;
//# sourceMappingURL=Toast.jsx.map