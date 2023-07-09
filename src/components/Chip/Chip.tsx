import capitalize from "@App/utils/capitalize";
import useForkRef from "@App/utils/hooks/useForkRef";
import cn from "classnames";
import _get from "lodash/get";
import * as React from "react";
import { HTMLAttributes } from "react";
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

function isDeleteKeyboardEvent(keyboardEvent: KeyboardEvent) {
  return keyboardEvent.key === "Backspace" || keyboardEvent.key === "Delete";
}

export interface ChipProps extends HTMLAttributes<HTMLElement> {
  avatar?: React.ReactElement;
  icon?: React.ReactElement;
  label?: React.ReactNode | string;
  clickable?: boolean;
  color?: ChipColors;
  deleteIcon?: React.ReactElement;
  disabled?: boolean;
  onDelete?: React.EventHandler<any>;
  size?: ChipSizes;
  variant?: ChipVariants;
  component?: any;
  textProps?: any;
}

export interface ChipDefaultProps extends HTMLAttributes<HTMLElement> {
  clickable: true;
  color: ChipColors;
  size: ChipSizes;
  variant: ChipVariants;
  textProps: any;
}

const defaultProps = {
  clickable: true,
  color: ChipColors.default,
  size: ChipSizes.medium,
  variant: ChipVariants.default,
};

/**
 * Chips represent complex entities in small blocks, such as a contact.
 */
const Chip = React.forwardRef(function Chip(props: ChipProps, ref) {
  const {
    avatar: avatarProp,
    className,
    clickable: clickableProp,
    color,
    component: ComponentProp,
    deleteIcon: deleteIconProp,
    disabled = false,
    icon: iconProp,
    label,
    onClick,
    onDelete,
    onKeyDown,
    onKeyUp,
    size,
    variant,
    textProps,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };

  const chipRef = React.useRef<any>(null);
  const handleRef = useForkRef(chipRef, ref);

  const handleDeleteIconClick = (event: KeyboardEvent | any) => {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();
    if (onDelete) {
      onDelete(event);
    }
  };

  const handleKeyDown = (event: KeyboardEvent | any) => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  const handleKeyUp = (event: KeyboardEvent | any) => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      } else if (event.key === "Escape" && chipRef.current) {
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
  const moreProps =
    Component === Button
      ? {
          component: "div",
        }
      : {};

  let deleteIcon: any = null;
  if (onDelete) {
    const customClasses = cn({
      [styles.deleteIconSmall]: small,
      [styles[`deleteIconColor${capitalize(color)}`]]:
        color !== "default" && variant !== ChipVariants.outlined,
      [styles[`deleteIconOutlinedColor${capitalize(color)}`]]:
        color !== "default" && variant === ChipVariants.outlined,
    });

    deleteIcon =
      deleteIconProp && React.isValidElement(deleteIconProp) ? (
        React.cloneElement(deleteIconProp, {
          className: cn(
            _get(deleteIconProp, "props.className"),
            styles.deleteIcon,
            customClasses
          ),
          onClick: handleDeleteIconClick,
        } as any)
      ) : (
        <span onClick={handleDeleteIconClick}>
          <Icon
            component={Close}
            className={cn(styles.deleteIcon, customClasses)}
            width="10"
            height={10}
          />
        </span>
      );
  }

  let avatar: any = null;
  if (avatarProp && React.isValidElement(avatarProp)) {
    avatar = React.cloneElement(avatarProp, {
      className: cn(styles.avatar, (avatarProp.props as any).className, {
        [styles.avatarSmall]: small,
        [styles[`avatarColor${capitalize(color)}`]]: color !== "default",
      }),
    } as any);
  }

  let icon: any = null;
  if (iconProp && React.isValidElement(iconProp)) {
    icon = React.cloneElement(iconProp, {
      className: cn(styles.icon, (iconProp.props as any).className, {
        [styles.iconSmall]: small,
        [styles[`iconColor${capitalize(color)}`]]: color !== "default",
      }),
    } as any);
  }

  return (
    <Component
      className={cn(
        styles.root,
        styles[variant],
        {
          [styles.disabled]: disabled,
          [styles.sizeSmall]: small,
          [styles[`color${capitalize(color)}`]]: color !== "default",
          [styles.clickable]: clickable,
          [styles[`clickableColor${capitalize(color)}`]]:
            clickable && color !== "default",
          [styles.deletable]: onDelete,
          [styles[`deletableColor${capitalize(color)}`]]:
            onDelete && color !== "default",
          [styles.outlinedPrimary]:
            variant === ChipVariants.outlined && color === "primary",
          [styles.outlinedSecondary]:
            variant === ChipVariants.outlined && color === "secondary",
        },
        className
      )}
      disabled={clickable && disabled ? true : undefined}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      ref={handleRef}
      {...moreProps}
      {...rest}
    >
      {avatar || icon}
      <Typography
        className={cn(styles.label, {
          [styles.labelSmall]: small,
        })}
        {...textProps}
      >
        {label}
      </Typography>
      {deleteIcon}
    </Component>
  );
});

export default Chip;
