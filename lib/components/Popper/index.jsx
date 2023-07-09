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
exports.Popper = void 0;
var useEnhancedEffect_1 = __importDefault(require("@App/utils/hooks/useEnhancedEffect"));
var setRef_1 = __importDefault(require("@App/utils/setRef"));
var core_1 = require("@popperjs/core");
var use_fork_ref_1 = __importDefault(require("@rooks/use-fork-ref"));
var react_1 = __importStar(require("react"));
var Portal_1 = __importStar(require("../Portal"));
__exportStar(require("./PopperTypes"), exports);
function getAnchorEl(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}
exports.Popper = react_1.forwardRef(function (props, ref) {
    var anchorEl = props.anchorEl, children = props.children, container = props.container, popperOptions = props.popperOptions, popperRefProp = props.popperRef, rest = __rest(props, ["anchorEl", "children", "container", "popperOptions", "popperRef"]);
    var tooltipRef = react_1.useRef(null);
    var ownRef = use_fork_ref_1.default(tooltipRef, ref);
    var popperRef = react_1.useRef(null);
    var handlePopperRef = use_fork_ref_1.default(popperRef, popperRefProp);
    var handlePopperRefRef = react_1.useRef(handlePopperRef);
    useEnhancedEffect_1.default(function () {
        handlePopperRefRef.current = handlePopperRef;
    }, [handlePopperRef]);
    react_1.useImperativeHandle(popperRefProp, function () { return popperRef.current; }, []);
    react_1.useEffect(function () {
        if (popperRef.current) {
            popperRef.current.update();
        }
    });
    var handleOpen = react_1.useCallback(function () {
        if (!tooltipRef.current || !anchorEl) {
            return;
        }
        if (popperRef.current) {
            popperRef.current.destroy();
            handlePopperRefRef.current(null);
        }
        var popper = core_1.createPopper(getAnchorEl(anchorEl), tooltipRef.current, popperOptions);
        handlePopperRefRef.current(popper);
    }, [anchorEl, popperOptions]);
    var handleRef = react_1.useCallback(function (node) {
        setRef_1.default(ownRef, node);
        handleOpen();
    }, [ownRef, handleOpen]);
    var handleClose = function () {
        if (!popperRef.current) {
            return;
        }
        popperRef.current.destroy();
        handlePopperRefRef.current(null);
    };
    react_1.useEffect(function () {
        handleOpen();
    }, [handleOpen]);
    react_1.useEffect(function () {
        return function () {
            handleClose();
        };
    }, []);
    return (<Portal_1.default id={Portal_1.PortalIds.tooltip}>
      <div ref={handleRef} {...rest}>
        {children}
      </div>
    </Portal_1.default>);
});
exports.default = exports.Popper;
//# sourceMappingURL=index.jsx.map