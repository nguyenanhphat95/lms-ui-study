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
var capitalize_1 = __importDefault(require("@App/utils/capitalize"));
var useForkRef_1 = __importDefault(require("@App/utils/hooks/useForkRef"));
var classnames_1 = __importDefault(require("classnames"));
var get_1 = __importDefault(require("lodash/get"));
var React = __importStar(require("react"));
var Button_1 = __importDefault(require("../Button"));
var Typography_1 = __importDefault(require("../Typography"));
var ChipColors_1 = require("./ChipColors");
var ChipSizes_1 = require("./ChipSizes");
var ChipVariants_1 = require("./ChipVariants");
var styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
var Close_1 = __importDefault(require("lms-icons/components/Close"));
var Icon_1 = __importDefault(require("../Icon"));
__exportStar(require("./ChipColors"), exports);
__exportStar(require("./ChipSizes"), exports);
__exportStar(require("./ChipVariants"), exports);
function isDeleteKeyboardEvent(keyboardEvent) {
    return keyboardEvent.key === "Backspace" || keyboardEvent.key === "Delete";
}
var defaultProps = {
    clickable: true,
    color: ChipColors_1.ChipColors.default,
    size: ChipSizes_1.ChipSizes.medium,
    variant: ChipVariants_1.ChipVariants.default,
};
var Chip = React.forwardRef(function Chip(props, ref) {
    var _a, _b, _c, _d, _e;
    var _f = __assign(__assign({}, defaultProps), props), avatarProp = _f.avatar, className = _f.className, clickableProp = _f.clickable, color = _f.color, ComponentProp = _f.component, deleteIconProp = _f.deleteIcon, _g = _f.disabled, disabled = _g === void 0 ? false : _g, iconProp = _f.icon, label = _f.label, onClick = _f.onClick, onDelete = _f.onDelete, onKeyDown = _f.onKeyDown, onKeyUp = _f.onKeyUp, size = _f.size, variant = _f.variant, textProps = _f.textProps, rest = __rest(_f, ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "textProps"]);
    var chipRef = React.useRef(null);
    var handleRef = useForkRef_1.default(chipRef, ref);
    var handleDeleteIconClick = function (event) {
        event.stopPropagation();
        if (onDelete) {
            onDelete(event);
        }
    };
    var handleKeyDown = function (event) {
        if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
            event.preventDefault();
        }
        if (onKeyDown) {
            onKeyDown(event);
        }
    };
    var handleKeyUp = function (event) {
        if (event.currentTarget === event.target) {
            if (onDelete && isDeleteKeyboardEvent(event)) {
                onDelete(event);
            }
            else if (event.key === "Escape" && chipRef.current) {
                chipRef.current.blur();
            }
        }
        if (onKeyUp) {
            onKeyUp(event);
        }
    };
    var clickable = clickableProp !== false && onClick ? true : clickableProp;
    var small = size === "small";
    var Component = ComponentProp || (clickable || onDelete ? "div" : "div");
    var moreProps = Component === Button_1.default
        ? {
            component: "div",
        }
        : {};
    var deleteIcon = null;
    if (onDelete) {
        var customClasses = classnames_1.default((_a = {},
            _a[styles_module_scss_1.default.deleteIconSmall] = small,
            _a[styles_module_scss_1.default["deleteIconColor" + capitalize_1.default(color)]] = color !== "default" && variant !== ChipVariants_1.ChipVariants.outlined,
            _a[styles_module_scss_1.default["deleteIconOutlinedColor" + capitalize_1.default(color)]] = color !== "default" && variant === ChipVariants_1.ChipVariants.outlined,
            _a));
        deleteIcon =
            deleteIconProp && React.isValidElement(deleteIconProp) ? (React.cloneElement(deleteIconProp, {
                className: classnames_1.default(get_1.default(deleteIconProp, "props.className"), styles_module_scss_1.default.deleteIcon, customClasses),
                onClick: handleDeleteIconClick,
            })) : (<span onClick={handleDeleteIconClick}>
          <Icon_1.default component={Close_1.default} className={classnames_1.default(styles_module_scss_1.default.deleteIcon, customClasses)} width="10" height={10}/>
        </span>);
    }
    var avatar = null;
    if (avatarProp && React.isValidElement(avatarProp)) {
        avatar = React.cloneElement(avatarProp, {
            className: classnames_1.default(styles_module_scss_1.default.avatar, avatarProp.props.className, (_b = {},
                _b[styles_module_scss_1.default.avatarSmall] = small,
                _b[styles_module_scss_1.default["avatarColor" + capitalize_1.default(color)]] = color !== "default",
                _b)),
        });
    }
    var icon = null;
    if (iconProp && React.isValidElement(iconProp)) {
        icon = React.cloneElement(iconProp, {
            className: classnames_1.default(styles_module_scss_1.default.icon, iconProp.props.className, (_c = {},
                _c[styles_module_scss_1.default.iconSmall] = small,
                _c[styles_module_scss_1.default["iconColor" + capitalize_1.default(color)]] = color !== "default",
                _c)),
        });
    }
    return (<Component className={classnames_1.default(styles_module_scss_1.default.root, styles_module_scss_1.default[variant], (_d = {},
        _d[styles_module_scss_1.default.disabled] = disabled,
        _d[styles_module_scss_1.default.sizeSmall] = small,
        _d[styles_module_scss_1.default["color" + capitalize_1.default(color)]] = color !== "default",
        _d[styles_module_scss_1.default.clickable] = clickable,
        _d[styles_module_scss_1.default["clickableColor" + capitalize_1.default(color)]] = clickable && color !== "default",
        _d[styles_module_scss_1.default.deletable] = onDelete,
        _d[styles_module_scss_1.default["deletableColor" + capitalize_1.default(color)]] = onDelete && color !== "default",
        _d[styles_module_scss_1.default.outlinedPrimary] = variant === ChipVariants_1.ChipVariants.outlined && color === "primary",
        _d[styles_module_scss_1.default.outlinedSecondary] = variant === ChipVariants_1.ChipVariants.outlined && color === "secondary",
        _d), className)} disabled={clickable && disabled ? true : undefined} onClick={onClick} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} ref={handleRef} {...moreProps} {...rest}>
      {avatar || icon}
      <Typography_1.default className={classnames_1.default(styles_module_scss_1.default.label, (_e = {},
        _e[styles_module_scss_1.default.labelSmall] = small,
        _e))} {...textProps}>
        {label}
      </Typography_1.default>
      {deleteIcon}
    </Component>);
});
exports.default = Chip;
//# sourceMappingURL=Chip.jsx.map