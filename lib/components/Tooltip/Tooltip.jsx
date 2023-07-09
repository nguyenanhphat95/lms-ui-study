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
exports.Tooltip = void 0;
var useForkRef_1 = __importDefault(require("@App/utils/hooks/useForkRef"));
var react_1 = __importStar(require("react"));
var Popper_1 = __importStar(require("../Popper"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
__exportStar(require("./TooltipTypes"), exports);
var defaultProps = {
    component: Popper_1.default,
    enterDelay: 0,
    leaveDelay: 0,
    placement: Popper_1.PopperPlacements.top,
};
var defaultPopperOptions = {
    modifiers: [
        {
            name: 'arrow',
            options: {
                element: '[data-popper-arrow]',
                padding: 10,
            },
        },
        {
            name: 'offset',
            options: {
                offset: [0, 10],
            },
        },
    ],
};
var hystersisOpen = false;
var hystersisTimer = null;
exports.Tooltip = react_1.forwardRef(function (props, ref) {
    var _a = __assign(__assign({}, defaultProps), props), Component = _a.component, placement = _a.placement, content = _a.content, children = _a.children, enterDelay = _a.enterDelay, leaveDelay = _a.leaveDelay, rest = __rest(_a, ["component", "placement", "content", "children", "enterDelay", "leaveDelay"]);
    var _b = __read(react_1.useState(), 2), anchorEl = _b[0], setAnchorEl = _b[1];
    var ownerRef = useForkRef_1.default(setAnchorEl, ref);
    var hasChildRef = !children && children.ref;
    var handleRef = hasChildRef ? useForkRef_1.default(children.ref, ownerRef) : ownerRef;
    var closeTimer = react_1.useRef();
    var enterTimer = react_1.useRef();
    var leaveTimer = react_1.useRef();
    var touchTimer = react_1.useRef();
    var _c = __read(react_1.useState(false), 2), open = _c[0], setOpenState = _c[1];
    react_1.useEffect(function () {
        return function () {
            clearTimeout(closeTimer.current);
            clearTimeout(enterTimer.current);
            clearTimeout(leaveTimer.current);
            clearTimeout(touchTimer.current);
        };
    }, []);
    var handleOpen = function (event) {
        clearTimeout(hystersisTimer);
        hystersisOpen = true;
        setOpenState(true);
    };
    var handleEnter = function (event) {
        var _childrenProps = children.props;
        if (event.type === 'mouseover' &&
            _childrenProps.onMouseOver &&
            event.currentTarget === anchorEl) {
            _childrenProps.onMouseOver(event);
        }
        clearTimeout(enterTimer.current);
        clearTimeout(leaveTimer.current);
        if (enterDelay && !hystersisOpen) {
            event.persist();
            enterTimer.current = setTimeout(function () {
                handleOpen(event);
            }, enterDelay);
        }
        else {
            handleOpen(event);
        }
    };
    var handleClose = function (event) {
        clearTimeout(hystersisTimer);
        hystersisTimer = setTimeout(function () {
            hystersisOpen = false;
        }, 500);
        setOpenState(false);
    };
    var handleLeave = function (event) {
        clearTimeout(enterTimer.current);
        clearTimeout(leaveTimer.current);
        event.persist();
        leaveTimer.current = setTimeout(function () {
            handleClose(event);
        }, leaveDelay);
    };
    var childrenProps = {
        onMouseOver: handleEnter,
        onMouseLeave: handleLeave,
    };
    var popperOptions = react_1.useMemo(function () { return (__assign(__assign({}, defaultPopperOptions), { placement: placement })); }, [placement]);
    return (<react_1.Fragment>
      {react_1.cloneElement(children, __assign({ ref: handleRef }, childrenProps))}
      {open && (<Component ref={ref} className={styles_module_scss_1.default.tooltip} popperOptions={popperOptions} anchorEl={anchorEl} {...rest}>
          <>
            {content}
            <div className={styles_module_scss_1.default.arrow} data-popper-arrow/>
          </>
        </Component>)}
    </react_1.Fragment>);
});
exports.default = exports.Tooltip;
//# sourceMappingURL=Tooltip.jsx.map