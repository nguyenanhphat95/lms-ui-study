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
exports.Collapse = void 0;
var classnames_1 = __importDefault(require("classnames"));
var react_1 = __importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
function getAutoHeightDuration(height) {
    if (!height) {
        return 0;
    }
    var constant = height / 36;
    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
}
function getTransitionProps(props, options) {
    var timeout = props.timeout, _a = props.style, style = _a === void 0 ? {} : _a;
    return {
        duration: style.transitionDuration || typeof timeout === 'number'
            ? timeout
            : timeout[options.mode] || 0,
        delay: style.transitionDelay,
    };
}
var defaultProps = {
    component: 'div',
    collapsedHeight: 0,
    timeout: 300,
};
exports.Collapse = react_1.forwardRef(function (props, ref) {
    var _a = __assign(__assign({}, defaultProps), props), children = _a.children, className = _a.className, collapsedHeightProp = _a.collapsedHeight, Component = _a.component, inProp = _a.in, onEnter = _a.onEnter, onEntered = _a.onEntered, onEntering = _a.onEntering, onExit = _a.onExit, onExiting = _a.onExiting, style = _a.style, timeout = _a.timeout, rest = __rest(_a, ["children", "className", "collapsedHeight", "component", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExiting", "style", "timeout"]);
    var timer = react_1.useRef(null);
    var wrapperRef = react_1.useRef(null);
    var autoTransitionDuration = react_1.useRef(null);
    var collapsedHeight = collapsedHeightProp + "px";
    react_1.useEffect(function () {
        return function () {
            clearTimeout(timer.current);
        };
    }, []);
    var handleEnter = function (node, isAppearing) {
        node.style.height = collapsedHeight;
        if (onEnter) {
            onEnter(node, isAppearing);
        }
    };
    var handleEntering = function (node, isAppearing) {
        var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
        var transitionDuration = getTransitionProps({ style: style, timeout: timeout }, {
            mode: 'enter',
        }).duration;
        if (timeout === 'auto') {
            var duration2 = getAutoHeightDuration(wrapperHeight);
            node.style.transitionDuration = duration2 + "ms";
            autoTransitionDuration.current = duration2;
        }
        else {
            node.style.transitionDuration =
                typeof transitionDuration === 'string' ? transitionDuration : transitionDuration + "ms";
        }
        node.style.height = wrapperHeight + "px";
        if (onEntering) {
            onEntering(node, isAppearing);
        }
    };
    var handleEntered = function (node, isAppearing) {
        node.style.height = 'auto';
        if (onEntered) {
            onEntered(node, isAppearing);
        }
    };
    var handleExit = function (node) {
        var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
        node.style.height = wrapperHeight + "px";
        if (onExit) {
            onExit(node);
        }
    };
    var handleExiting = function (node) {
        var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
        var transitionDuration = getTransitionProps({ style: style, timeout: timeout }, {
            mode: 'exit',
        }).duration;
        if (timeout === 'auto') {
            var duration2 = getAutoHeightDuration(wrapperHeight);
            node.style.transitionDuration = duration2 + "ms";
            autoTransitionDuration.current = duration2;
        }
        else {
            node.style.transitionDuration =
                typeof transitionDuration === 'string' ? transitionDuration : transitionDuration + "ms";
        }
        node.style.height = collapsedHeight;
        if (onExiting) {
            onExiting(node);
        }
    };
    var addEndListener = function (_, next) {
        if (timeout === 'auto') {
            timer.current = setTimeout(next, autoTransitionDuration.current || 0);
        }
    };
    return (<react_transition_group_1.Transition in={inProp} onEnter={handleEnter} onEntered={handleEntered} onEntering={handleEntering} onExit={handleExit} onExiting={handleExiting} addEndListener={addEndListener} timeout={timeout === 'auto' ? null : timeout} {...rest}>
      {function (state, childProps) {
        var _a;
        return (<Component ref={ref} className={classnames_1.default(styles_module_scss_1.default.collapse, className, (_a = {},
            _a[styles_module_scss_1.default.entered] = state === 'entered',
            _a[styles_module_scss_1.default.hidden] = state === 'exited' && !inProp && collapsedHeight === '0px',
            _a))} style={__assign({ minHeight: collapsedHeight }, style)} {...childProps}>
          <div className={styles_module_scss_1.default.wrapper} ref={wrapperRef}>
            <div className={styles_module_scss_1.default.wrapperInner}>{children}</div>
          </div>
        </Component>);
    }}
    </react_transition_group_1.Transition>);
});
exports.default = exports.Collapse;
//# sourceMappingURL=Collapse.jsx.map