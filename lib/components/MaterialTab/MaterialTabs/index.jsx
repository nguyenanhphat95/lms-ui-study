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
var debounce_1 = __importDefault(require("@App/utils/debounce"));
var animate_1 = __importDefault(require("@App/utils/animations/animate"));
var useEventCallback_1 = __importDefault(require("@App/utils/hooks/useEventCallback"));
var ownerWindow_1 = __importDefault(require("@App/utils/ownerWindow"));
var ScrollLeft_1 = require("@App/utils/ScrollLeft");
var TabScrollButton_1 = __importDefault(require("../TabScrollButton"));
var clsx_1 = __importDefault(require("clsx"));
var React = __importStar(require("react"));
var react_is_1 = require("react-is");
var ScrollbarSize_1 = __importDefault(require("../ScrollbarSize"));
var TabIndicator_1 = __importDefault(require("../TabIndicator"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var MaterialTabs = React.forwardRef(function MaterialTabs(props, ref) {
    var _a, _b, _c;
    var ariaLabel = props["aria-label"], ariaLabelledBy = props["aria-labelledby"], action = props.action, _d = props.centered, centered = _d === void 0 ? false : _d, childrenProp = props.children, className = props.className, _e = props.component, Component = _e === void 0 ? 'div' : _e, _f = props.indicatorColor, indicatorColor = _f === void 0 ? 'secondary' : _f, onChange = props.onChange, _g = props.orientation, orientation = _g === void 0 ? 'horizontal' : _g, _h = props.ScrollButtonComponent, ScrollButtonComponent = _h === void 0 ? TabScrollButton_1.default : _h, _j = props.scrollButtons, scrollButtons = _j === void 0 ? 'auto' : _j, selectionFollowsFocus = props.selectionFollowsFocus, _k = props.TabIndicatorProps, TabIndicatorProps = _k === void 0 ? {} : _k, TabScrollButtonProps = props.TabScrollButtonProps, _l = props.textColor, textColor = _l === void 0 ? 'inherit' : _l, value = props.value, _m = props.variant, variant = _m === void 0 ? 'standard' : _m, other = __rest(props, ['aria-label', 'aria-labelledby', "action", "centered", "children", "className", "component", "indicatorColor", "onChange", "orientation", "ScrollButtonComponent", "scrollButtons", "selectionFollowsFocus", "TabIndicatorProps", "TabScrollButtonProps", "textColor", "value", "variant"]);
    var scrollable = variant === 'scrollable';
    var isRtl = false;
    var vertical = orientation === 'vertical';
    var scrollStart = vertical ? 'scrollTop' : 'scrollLeft';
    var start = vertical ? 'top' : 'left';
    var end = vertical ? 'bottom' : 'right';
    var clientSize = vertical ? 'clientHeight' : 'clientWidth';
    var size = vertical ? 'height' : 'width';
    if (process.env.NODE_ENV !== 'production') {
        if (centered && scrollable) {
            console.error('You can not use the `centered={true}` and `variant="scrollable"` properties in same time');
        }
    }
    var _o = __read(React.useState(false), 2), mounted = _o[0], setMounted = _o[1];
    var _p = __read(React.useState({}), 2), indicatorStyle = _p[0], setIndicatorStyle = _p[1];
    var _q = __read(React.useState({
        start: false,
        end: false,
    }), 2), displayScroll = _q[0], setDisplayScroll = _q[1];
    var _r = __read(React.useState({
        overflow: 'hidden',
        marginBottom: null,
    }), 2), scrollerStyle = _r[0], setScrollerStyle = _r[1];
    var valueToIndex = new Map();
    var tabsRef = React.useRef(null);
    var tabListRef = React.useRef(null);
    var getTabsMeta = function () {
        var tabsNode = tabsRef.current;
        var tabsMeta;
        if (tabsNode) {
            var rect = tabsNode.getBoundingClientRect();
            tabsMeta = {
                clientWidth: tabsNode.clientWidth,
                scrollLeft: tabsNode.scrollLeft,
                scrollTop: tabsNode.scrollTop,
                scrollLeftNormalized: ScrollLeft_1.getNormalizedScrollLeft(tabsNode, 'ltr'),
                scrollWidth: tabsNode.scrollWidth,
                top: rect.top,
                bottom: rect.bottom,
                left: rect.left,
                right: rect.right,
            };
        }
        var tabMeta;
        if (tabsNode && value !== false) {
            var children_1 = tabListRef.current.children;
            if (children_1.length > 0) {
                var tab = children_1[valueToIndex.get(value)];
                if (process.env.NODE_ENV !== 'production') {
                    if (!tab) {
                        console.error('tab is not valid');
                    }
                }
                tabMeta = tab ? tab.getBoundingClientRect() : null;
            }
        }
        return { tabsMeta: tabsMeta, tabMeta: tabMeta };
    };
    var updateIndicatorState = useEventCallback_1.default(function () {
        var _a;
        var _b = getTabsMeta(), tabsMeta = _b.tabsMeta, tabMeta = _b.tabMeta;
        var startValue = 0;
        if (tabMeta && tabsMeta) {
            if (vertical) {
                startValue = tabMeta.top - tabsMeta.top + tabsMeta.scrollTop;
            }
            else {
                var correction = isRtl
                    ? tabsMeta.scrollLeftNormalized + tabsMeta.clientWidth - tabsMeta.scrollWidth
                    : tabsMeta.scrollLeft;
                startValue = tabMeta.left - tabsMeta.left + correction;
            }
        }
        var newIndicatorStyle = (_a = {},
            _a[start] = startValue,
            _a[size] = tabMeta ? tabMeta[size] : 0,
            _a);
        if (isNaN(indicatorStyle[start]) || isNaN(indicatorStyle[size])) {
            setIndicatorStyle(newIndicatorStyle);
        }
        else {
            var dStart = Math.abs(indicatorStyle[start] - newIndicatorStyle[start]);
            var dSize = Math.abs(indicatorStyle[size] - newIndicatorStyle[size]);
            if (dStart >= 1 || dSize >= 1) {
                setIndicatorStyle(newIndicatorStyle);
            }
        }
    });
    var scroll = function (scrollValue) {
        animate_1.default(scrollStart, tabsRef.current, scrollValue);
    };
    var moveTabsScroll = function (delta) {
        var scrollValue = tabsRef.current[scrollStart];
        if (vertical) {
            scrollValue += delta;
        }
        else {
            scrollValue += delta * (isRtl ? -1 : 1);
            scrollValue *= isRtl && ScrollLeft_1.detectScrollType() === 'reverse' ? -1 : 1;
        }
        scroll(scrollValue);
    };
    var handleStartScrollClick = function () {
        moveTabsScroll(-tabsRef.current[clientSize]);
    };
    var handleEndScrollClick = function () {
        moveTabsScroll(tabsRef.current[clientSize]);
    };
    var handleScrollbarSizeChange = React.useCallback(function (scrollbarHeight) {
        setScrollerStyle({
            overflow: null,
            marginBottom: -scrollbarHeight,
        });
    }, []);
    var getConditionalElements = function () {
        var _a, _b;
        var conditionalElements = {};
        conditionalElements.scrollbarSizeListener = scrollable ? (<ScrollbarSize_1.default className={styles_module_scss_1.default.scrollable} onChange={handleScrollbarSizeChange}/>) : null;
        var scrollButtonsActive = displayScroll.start || displayScroll.end;
        var showScrollButtons = scrollable &&
            ((scrollButtons === 'auto' && scrollButtonsActive) ||
                scrollButtons === 'desktop' ||
                scrollButtons === 'on');
        conditionalElements.scrollButtonStart = showScrollButtons ? (<ScrollButtonComponent orientation={orientation} direction={isRtl ? 'right' : 'left'} onClick={handleStartScrollClick} disabled={!displayScroll.start} className={clsx_1.default(styles_module_scss_1.default.scrollButtons, (_a = {},
            _a[styles_module_scss_1.default.scrollButtonsDesktop] = scrollButtons !== 'on',
            _a))} {...TabScrollButtonProps}/>) : null;
        conditionalElements.scrollButtonEnd = showScrollButtons ? (<ScrollButtonComponent orientation={orientation} direction={isRtl ? 'left' : 'right'} onClick={handleEndScrollClick} disabled={!displayScroll.end} className={clsx_1.default(styles_module_scss_1.default.scrollButtons, (_b = {},
            _b[styles_module_scss_1.default.scrollButtonsDesktop] = scrollButtons !== 'on',
            _b))} {...TabScrollButtonProps}/>) : null;
        return conditionalElements;
    };
    var scrollSelectedIntoView = useEventCallback_1.default(function () {
        var _a = getTabsMeta(), tabsMeta = _a.tabsMeta, tabMeta = _a.tabMeta;
        if (!tabMeta || !tabsMeta) {
            return;
        }
        if (tabMeta[start] < tabsMeta[start]) {
            var nextScrollStart = tabsMeta[scrollStart] + (tabMeta[start] - tabsMeta[start]);
            scroll(nextScrollStart);
        }
        else if (tabMeta[end] > tabsMeta[end]) {
            var nextScrollStart = tabsMeta[scrollStart] + (tabMeta[end] - tabsMeta[end]);
            scroll(nextScrollStart);
        }
    });
    var updateScrollButtonState = useEventCallback_1.default(function () {
        if (scrollable && scrollButtons !== 'off') {
            var _a = tabsRef.current, scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
            var showStartScroll = void 0;
            var showEndScroll = void 0;
            if (vertical) {
                showStartScroll = scrollTop > 1;
                showEndScroll = scrollTop < scrollHeight - clientHeight - 1;
            }
            else {
                var scrollLeft = ScrollLeft_1.getNormalizedScrollLeft(tabsRef.current, 'rtl');
                showStartScroll = isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
                showEndScroll = !isRtl ? scrollLeft < scrollWidth - clientWidth - 1 : scrollLeft > 1;
            }
            if (showStartScroll !== displayScroll.start || showEndScroll !== displayScroll.end) {
                setDisplayScroll({ start: showStartScroll, end: showEndScroll });
            }
        }
    });
    React.useEffect(function () {
        var handleResize = debounce_1.default(function () {
            updateIndicatorState();
            updateScrollButtonState();
        }, 10);
        var win = ownerWindow_1.default(tabsRef.current);
        win.addEventListener('resize', handleResize);
        return function () {
            win.removeEventListener('resize', handleResize);
        };
    }, [updateIndicatorState, updateScrollButtonState]);
    var handleTabsScroll = React.useCallback(function () {
        debounce_1.default(function () {
            updateScrollButtonState();
        }, 10);
    }, []);
    React.useEffect(function () {
        setMounted(true);
    }, []);
    React.useEffect(function () {
        updateIndicatorState();
        updateScrollButtonState();
    });
    React.useEffect(function () {
        scrollSelectedIntoView();
    }, [scrollSelectedIntoView, indicatorStyle]);
    React.useImperativeHandle(action, function () { return ({
        updateIndicator: updateIndicatorState,
        updateScrollButtons: updateScrollButtonState,
    }); }, [updateIndicatorState, updateScrollButtonState]);
    var indicator = (<TabIndicator_1.default className={styles_module_scss_1.default.indicator} orientation={orientation} color={indicatorColor} {...TabIndicatorProps} style={__assign(__assign({}, indicatorStyle), TabIndicatorProps.style)}/>);
    var childIndex = 0;
    var children = React.Children.map(childrenProp, function (child) {
        if (!React.isValidElement(child)) {
            return null;
        }
        if (process.env.NODE_ENV !== 'production') {
            if (react_is_1.isFragment(child)) {
                console.log('child is not valid');
            }
        }
        var childValue = child.props.value === undefined ? childIndex : child.props.value;
        valueToIndex.set(childValue, childIndex);
        var selected = childValue === value;
        childIndex += 1;
        return React.cloneElement(child, {
            fullWidth: variant === 'fullWidth',
            indicator: selected && !mounted && indicator,
            selected: selected,
            selectionFollowsFocus: selectionFollowsFocus,
            onChange: onChange,
            textColor: textColor,
            value: childValue,
        });
    });
    var handleKeyDown = function (event) {
        var target = event.target;
        var role = target.getAttribute('role');
        if (role !== 'tab') {
            return;
        }
        var newFocusTarget = null;
        var previousItemKey = orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
        var nextItemKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';
        switch (event.key) {
            case previousItemKey:
                newFocusTarget = target.previousElementSibling || tabListRef.current.lastChild;
                break;
            case nextItemKey:
                newFocusTarget = target.nextElementSibling || tabListRef.current.firstChild;
                break;
            case 'Home':
                newFocusTarget = tabListRef.current.firstChild;
                break;
            case 'End':
                newFocusTarget = tabListRef.current.lastChild;
                break;
            default:
                break;
        }
        if (newFocusTarget !== null) {
            newFocusTarget.focus();
            event.preventDefault();
        }
    };
    var conditionalElements = getConditionalElements();
    return (<Component className={clsx_1.default(styles_module_scss_1.default.root, (_a = {},
        _a[styles_module_scss_1.default.vertical] = vertical,
        _a), className)} ref={ref} {...other}>
      {conditionalElements.scrollButtonStart}
      {conditionalElements.scrollbarSizeListener}
      <div className={clsx_1.default(styles_module_scss_1.default.scroller, (_b = {},
        _b[styles_module_scss_1.default.fixed] = !scrollable,
        _b[styles_module_scss_1.default.scrollable] = scrollable,
        _b))} style={scrollerStyle} ref={tabsRef} onScroll={handleTabsScroll}>
        <div aria-label={ariaLabel} aria-labelledby={ariaLabelledBy} className={clsx_1.default(styles_module_scss_1.default.flexContainer, (_c = {},
        _c[styles_module_scss_1.default.flexContainerVertical] = vertical,
        _c[styles_module_scss_1.default.centered] = centered && !scrollable,
        _c))} onKeyDown={handleKeyDown} ref={tabListRef} role="tablist">
          {children}
        </div>
        {mounted && indicator}
      </div>
      {conditionalElements.scrollButtonEnd}
    </Component>);
});
exports.default = MaterialTabs;
//# sourceMappingURL=index.jsx.map