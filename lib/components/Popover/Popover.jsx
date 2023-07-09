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
exports.Popover = void 0;
var useClickOutside_1 = __importDefault(require("@App/utils/hooks/useClickOutside"));
var useKeydown_1 = __importDefault(require("@App/utils/hooks/useKeydown"));
var classnames_1 = __importDefault(require("classnames"));
var noop_1 = __importDefault(require("lodash/noop"));
var react_1 = __importStar(require("react"));
var Backdrop_1 = __importStar(require("../Backdrop"));
var Paper_1 = __importDefault(require("../Paper"));
var Popper_1 = __importStar(require("../Popper"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
__exportStar(require("./PopoverTypes"), exports);
var defaultProps = {
    component: 'div',
    placement: Popper_1.PopperPlacements.bottom,
    backdrop: Backdrop_1.BackdropTypes.transparent
};
var defaultPopperOptions = {
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 8]
            }
        }
    ]
};
exports.Popover = react_1.forwardRef(function (_props, ref) {
    var _a = __assign(__assign({}, defaultProps), _props), Component = _a.component, children = _a.children, placement = _a.placement, className = _a.className, anchorEl = _a.anchorEl, anchorRef = _a.anchorRef, menuClassName = _a.menuClassName, backdrop = _a.backdrop, onClose = _a.onClose, backdropClassName = _a.backdropClassName, backdropProps = _a.backdropProps, rest = __rest(_a, ["component", "children", "placement", "className", "anchorEl", "anchorRef", "menuClassName", "backdrop", "onClose", "backdropClassName", "backdropProps"]);
    var _b = __read(useClickOutside_1.default(onClose), 2), onParentClick = _b[0], onChildClick = _b[1];
    useKeydown_1.default(27, onClose || noop_1.default);
    var popperOptions = react_1.useMemo(function () { return (__assign(__assign({}, defaultPopperOptions), { placement: placement })); }, [placement]);
    var anchor = anchorEl || anchorRef.current;
    if (anchor) {
        return (<Backdrop_1.default onClick={onParentClick} type={backdrop} className={backdropClassName} {...backdropProps}>
        <Popper_1.default component={Component} className={classnames_1.default(styles_module_scss_1.default.popover, className)} popperOptions={popperOptions} ref={ref} anchorEl={anchor} {...rest}>
          <Paper_1.default elevation={2} className={menuClassName} onClick={onChildClick}>
            {children}
          </Paper_1.default>
        </Popper_1.default>
      </Backdrop_1.default>);
    }
    return null;
});
exports.default = exports.Popover;
//# sourceMappingURL=Popover.jsx.map