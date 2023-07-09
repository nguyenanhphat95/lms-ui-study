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
import capitalize from "@App/utils/capitalize";
import useForkRef from "@App/utils/hooks/useForkRef";
import cn from "classnames";
import _get from "lodash/get";
import * as React from "react";
import Button from "../Button";
import Typography from "../Typography";
import { ChipColors } from "./ChipColors";
import { ChipSizes } from "./ChipSizes";
import { ChipVariants } from "./ChipVariants";
import styles from "./styles.module.scss";
import Close from "lms-icons/components/Close";
import Icon from "../Icon";
export * from "./ChipColors";
export * from "./ChipSizes";
export * from "./ChipVariants";
function isDeleteKeyboardEvent(keyboardEvent) {
    return keyboardEvent.key === "Backspace" || keyboardEvent.key === "Delete";
}
const defaultProps = {
    clickable: true,
    color: ChipColors.default,
    size: ChipSizes.medium,
    variant: ChipVariants.default,
};
const Chip = React.forwardRef(function Chip(props, ref) {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { avatar: avatarProp, className, clickable: clickableProp, color, component: ComponentProp, deleteIcon: deleteIconProp, disabled = false, icon: iconProp, label, onClick, onDelete, onKeyDown, onKeyUp, size, variant, textProps } = _a, rest = __rest(_a, ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "textProps"]);
    const chipRef = React.useRef(null);
    const handleRef = useForkRef(chipRef, ref);
    const handleDeleteIconClick = (event) => {
        event.stopPropagation();
        if (onDelete) {
            onDelete(event);
        }
    };
    const handleKeyDown = (event) => {
        if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
            event.preventDefault();
        }
        if (onKeyDown) {
            onKeyDown(event);
        }
    };
    const handleKeyUp = (event) => {
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
    const clickable = clickableProp !== false && onClick ? true : clickableProp;
    const small = size === "small";
    const Component = ComponentProp || (clickable || onDelete ? "div" : "div");
    const moreProps = Component === Button
        ? {
            component: "div",
        }
        : {};
    let deleteIcon = null;
    if (onDelete) {
        const customClasses = cn({
            [styles.deleteIconSmall]: small,
            [styles[`deleteIconColor${capitalize(color)}`]]: color !== "default" && variant !== ChipVariants.outlined,
            [styles[`deleteIconOutlinedColor${capitalize(color)}`]]: color !== "default" && variant === ChipVariants.outlined,
        });
        deleteIcon =
            deleteIconProp && React.isValidElement(deleteIconProp) ? (React.cloneElement(deleteIconProp, {
                className: cn(_get(deleteIconProp, "props.className"), styles.deleteIcon, customClasses),
                onClick: handleDeleteIconClick,
            })) : (<span onClick={handleDeleteIconClick}>
          <Icon component={Close} className={cn(styles.deleteIcon, customClasses)} width="10" height={10}/>
        </span>);
    }
    let avatar = null;
    if (avatarProp && React.isValidElement(avatarProp)) {
        avatar = React.cloneElement(avatarProp, {
            className: cn(styles.avatar, avatarProp.props.className, {
                [styles.avatarSmall]: small,
                [styles[`avatarColor${capitalize(color)}`]]: color !== "default",
            }),
        });
    }
    let icon = null;
    if (iconProp && React.isValidElement(iconProp)) {
        icon = React.cloneElement(iconProp, {
            className: cn(styles.icon, iconProp.props.className, {
                [styles.iconSmall]: small,
                [styles[`iconColor${capitalize(color)}`]]: color !== "default",
            }),
        });
    }
    return (<Component className={cn(styles.root, styles[variant], {
        [styles.disabled]: disabled,
        [styles.sizeSmall]: small,
        [styles[`color${capitalize(color)}`]]: color !== "default",
        [styles.clickable]: clickable,
        [styles[`clickableColor${capitalize(color)}`]]: clickable && color !== "default",
        [styles.deletable]: onDelete,
        [styles[`deletableColor${capitalize(color)}`]]: onDelete && color !== "default",
        [styles.outlinedPrimary]: variant === ChipVariants.outlined && color === "primary",
        [styles.outlinedSecondary]: variant === ChipVariants.outlined && color === "secondary",
    }, className)} disabled={clickable && disabled ? true : undefined} onClick={onClick} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} ref={handleRef} {...moreProps} {...rest}>
      {avatar || icon}
      <Typography className={cn(styles.label, {
        [styles.labelSmall]: small,
    })} {...textProps}>
        {label}
      </Typography>
      {deleteIcon}
    </Component>);
});
export default Chip;
//# sourceMappingURL=Chip.jsx.map