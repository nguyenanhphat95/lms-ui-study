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
exports.DropdownList = void 0;
var ChevronDown_1 = __importDefault(require("lms-icons/components/ChevronDown"));
var ChevronUp_1 = __importDefault(require("lms-icons/components/ChevronUp"));
var classnames_1 = __importDefault(require("classnames"));
var get_1 = __importDefault(require("lodash-es/get"));
var react_1 = __importStar(require("react"));
var Icon_1 = __importDefault(require("../Icon"));
var Input_1 = __importDefault(require("../Input"));
var InputAdornment_1 = __importDefault(require("../InputAdornment"));
var Menu_1 = __importDefault(require("../Menu"));
var DropdownListContext_1 = __importDefault(require("./DropdownListContext"));
var DropdownListInput_1 = __importDefault(require("./DropdownListInput"));
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var defaultProps = {
    component: Input_1.default,
};
function calculatePopoverStyle(ref) {
    if (!ref) {
        return {};
    }
    var width = Math.max(ref.getBoundingClientRect().width, 80);
    return {
        width: width + "px",
    };
}
function checkIsUsePlaceholder(value) {
    return value === undefined || value === null;
}
exports.DropdownList = react_1.forwardRef(function (props, ref) {
    var _a;
    var _b = __assign(__assign({}, defaultProps), props), Component = _b.component, children = _b.children, onChange = _b.onChange, onClick = _b.onClick, onBlur = _b.onBlur, onFocus = _b.onFocus, menuClassName = _b.menuClassName, className = _b.className, placeholder = _b.placeholder, rest = __rest(_b, ["component", "children", "onChange", "onClick", "onBlur", "onFocus", "menuClassName", "className", "placeholder"]);
    var wrapperRef = react_1.useRef();
    var popoverStyle = react_1.useRef(null);
    var _c = __read(react_1.useState(false), 2), open = _c[0], setOpen = _c[1];
    var handleOpen = react_1.useCallback(function (e) {
        if (!open && !rest.disabled) {
            popoverStyle.current = calculatePopoverStyle(wrapperRef.current);
            setOpen(true);
        }
        if (onFocus) {
            onFocus(e);
        }
        if (onClick) {
            return onClick(e);
        }
    }, [rest.disabled]);
    var handleClose = react_1.useCallback(function (e) {
        setOpen(false);
        if (onBlur) {
            return onBlur(e);
        }
    }, []);
    var dropdownListContext = react_1.useMemo(function () { return ({
        onChange: function (value) {
            return onChange(value);
        },
        value: rest.value,
    }); }, [handleClose, onChange, rest.value]);
    var afterInput = react_1.useMemo(function () { return (<InputAdornment_1.default size={rest.size} onClick={handleOpen} className={styles_module_scss_1.default["addon-size-" + rest.size]}>
          <Icon_1.default className={styles_module_scss_1.default.icon} component={open ? ChevronUp_1.default : ChevronDown_1.default}/>
        </InputAdornment_1.default>); }, [open, rest.disabled]);
    var display = checkIsUsePlaceholder(rest.value)
        ? placeholder
        : react_1.default.Children.toArray(children)
            .filter(function (child) { return get_1.default(child, "props.value") === rest.value; })
            .map(function (child) {
            if (typeof child === "string") {
                return child;
            }
            var innerChild = child.props.children;
            if (typeof innerChild === "string") {
                return innerChild;
            }
            return "";
        });
    return (<>
        <Input_1.default {...rest} className={classnames_1.default(className, styles_module_scss_1.default.input, (_a = {}, _a[styles_module_scss_1.default["is-open"]] = open, _a))} onClick={handleOpen} component={DropdownListInput_1.default} afterInput={afterInput} display={display} ref={ref} readOnly wrapperRef={wrapperRef}/>
        {open && (<Menu_1.default anchorRef={wrapperRef} onClose={handleClose} menuClassName={menuClassName} style={popoverStyle.current}>
            <DropdownListContext_1.default.Provider value={dropdownListContext}>
              {children}
            </DropdownListContext_1.default.Provider>
          </Menu_1.default>)}
      </>);
});
exports.DropdownList.displayName = "DropdownList";
exports.default = exports.DropdownList;
//# sourceMappingURL=index.jsx.map