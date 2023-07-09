import Spinner from "lms-icons/components/Spinner";
import cn from "classnames";
import React, { forwardRef, HTMLProps } from "react";
import ButtonBase from "../ButtonBase";
import Icon from "../Icon";
import { ButtonColors, ButtonSizes } from "./ButtonColors";
import styles from "./styles.module.scss";

export * from "./ButtonColors";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  /**
   * color of button
   * Enum: `primary`, `secondary`, `ghost`.
   */
  color?: ButtonColors;
  /**
   * Size of button
   * For text: `xl`, `lg`, `md`, `sm`, `xs`.
   * For icon: `xl`, `lg`, `md`.
   */
  buttonSize?: ButtonSizes;
  /**
   * Disabled attribute
   */
  disabled?: boolean;
  /**
   * Use full width, default is `true`
   */
  fullWidth?: boolean;
  /**
   * Type attribute
   */
  type?: string;
  /**
   * Handle event on click button
   */
  onClick?: (event: React.SyntheticEvent) => void;
  /**
   * Use button icon, pass value to `Icon` component.
   * Note: if set `icon`, children of component will not display!
   */
  icon?: React.ElementType<unknown>;
  /**
   * Set component is `activated`
   */
  activated?: boolean;
  /**
   * Set component is `loading`
   */
  loading?: boolean;
  /**
   * Set button rounded
   */
  chip?: boolean;
}

interface ButtonDefaultProps {
  component: React.ElementType;
  disabled: boolean;
  fullWidth: boolean;
  loading: boolean;
  color: ButtonColors;
  buttonSize: ButtonSizes;
  className?: string;
  children?: React.ElementType;
  activated?: boolean;
  icon?: React.ElementType;
  chip?: boolean;
}

const defaultProps: ButtonDefaultProps = {
  component: "button",
  disabled: false,
  fullWidth: true,
  loading: false,
  color: ButtonColors.primary,
  buttonSize: ButtonSizes.md,
  chip: false,
};

export const Button = forwardRef((props: ButtonProps, ref) => {
  const {
    component: Component,
    color,
    buttonSize,
    className,
    children,
    disabled,
    activated,
    fullWidth,
    loading,
    icon,
    chip,
    ...rest
  } = { ...defaultProps, ...props };

  const shouldUseIcon = !!icon || !!loading;

  const classOfComponent = cn(
    styles.btn,
    styles[`color-${color}`],
    styles[`size-${buttonSize}`],
    className,
    {
      [styles.disabled]: disabled,
      [styles.activated]: activated,
      [styles.spinning]: loading,
      [styles["full-width"]]: fullWidth,
      [styles["use-icon"]]: shouldUseIcon,
      [styles.chip]: chip,
    }
  );

  const contentOfButton = shouldUseIcon ? (
    <Icon className={styles.icon} component={loading ? Spinner : icon} />
  ) : (
    children
  );

  return (
    <ButtonBase
      {...rest}
      ref={ref}
      component={Component}
      disabled={disabled}
      className={classOfComponent}
    >
      {contentOfButton} update new 3
    </ButtonBase>
  );
});

Button.displayName = "Button";

export default Button;
