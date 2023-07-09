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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Modal = void 0;
var useCheckMobile_1 = __importDefault(require("@App/utils/hooks/useCheckMobile"));
var useClickOutside_1 = __importDefault(require("@App/utils/hooks/useClickOutside"));
var useKeydown_1 = __importDefault(require("@App/utils/hooks/useKeydown"));
var CloseCircle_1 = __importDefault(require("lms-icons/components/CloseCircle"));
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var Backdrop_1 = __importDefault(require("../Backdrop"));
var Grid_1 = __importDefault(require("../Grid"));
var Icon_1 = require("../Icon");
var Paper_1 = __importStar(require("../Paper"));
var Portal_1 = __importStar(require("../Portal"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var defaultProps = {
    component: Paper_1.default,
    xs: 12,
    sm: 12,
    md: 6,
    lg: 6,
    xl: 4,
};
exports.Modal = react_1.forwardRef(function (props, ref) {
    var _a = __assign(__assign({}, defaultProps), props), Component = _a.component, backdropClassname = _a.backdropClassname, children = _a.children, onClose = _a.onClose, xl = _a.xl, lg = _a.lg, md = _a.md, sm = _a.sm, xs = _a.xs, className = _a.className, rest = __rest(_a, ["component", "backdropClassname", "children", "onClose", "xl", "lg", "md", "sm", "xs", "className"]);
    var _b = __read(useClickOutside_1.default(onClose), 2), onParentClick = _b[0], onChildClick = _b[1];
    useKeydown_1.default(27, onClose);
    var mobile = useCheckMobile_1.default();
    return (<Portal_1.default id={Portal_1.PortalIds.modal}>
      <Backdrop_1.default className={backdropClassname} onClick={onParentClick}>
        <div className={styles_module_scss_1.default.modal}>
          <Grid_1.default container spacing={4} justifyContent="space-around">
            <Grid_1.default item xl={xl} lg={lg} md={md} sm={sm} xs={xs}>
              <Grid_1.default container spacing={3} direction={mobile ? "column-reverse" : "row"}>
                <Grid_1.default item xs={true}>
                  <Component className={classnames_1.default(styles_module_scss_1.default.content, className)} onClick={onChildClick} elevation={2} radius={Paper_1.PaperRadius.max} {...rest} ref={ref}>
                    {children}
                  </Component>
                </Grid_1.default>
                {onClose && (<Grid_1.default item xs="auto">
                    <Grid_1.default container justifyContent="flex-end">
                      <Grid_1.default item xs="auto">
                        <Icon_1.Icon className={styles_module_scss_1.default["icon"]} component={CloseCircle_1.default}/>
                      </Grid_1.default>
                    </Grid_1.default>
                  </Grid_1.default>)}
              </Grid_1.default>
            </Grid_1.default>
          </Grid_1.default>
        </div>
      </Backdrop_1.default>
    </Portal_1.default>);
});
exports.default = exports.Modal;
//# sourceMappingURL=Modal.jsx.map