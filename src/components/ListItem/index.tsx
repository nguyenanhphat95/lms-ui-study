import DownArrow from "lms-icons/components/DownArrow";
import cn from "classnames";
import React, { forwardRef, useCallback } from "react";
import ListItemAction from "../ListItemAction";
import styles from "./styles.module.scss";

interface ListItemClass {
  wrapper: string;
  content: string;
}

interface ListItemProps {
  disabled?: boolean;
  children?: React.ReactNode;
  activated?: boolean;
  open?: boolean;
  classes: ListItemClass;
  size?: string;
  className: string;
  onClick: (e: React.MouseEventHandler<HTMLElement>) => void;
  [key: string]: any;
}

interface ListItemDefaultProps {
  component: React.ElementType;
  disabled: boolean;
  activated: boolean;
  open: boolean;
  classes: ListItemClass;
}

const defaultProps: ListItemDefaultProps = {
  component: "div",
  disabled: false,
  activated: false,
  open: false,
  classes: {
    wrapper: "",
    content: "",
  },
};

export const ListItem = forwardRef((props: ListItemProps, ref: any) => {
  const {
    component: Component,
    className,
    disabled,
    children,
    activated,
    open,
    classes,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };

  const classOfWrapper = cn(styles.item, className, {
    [styles.disabled]: !!disabled,
    [styles.activated]: !!activated,
    [classes.wrapper]: !!classes.wrapper,
  });
  const classOfContent = cn(
    styles.content,
    {
      [styles[`content-size-${rest.size}`]]: !!rest.size,
    },
    {
      [classes.content]: !!classes.content,
    }
  );

  const openIsBool = open === undefined || typeof open === "boolean";
  const contentOfToggle = openIsBool && (
    <ListItemAction
      icon={DownArrow}
      className={open ? styles["icon-open"] : ""}
    />
  );

  const handleOnClick = useCallback(
    (event: React.MouseEventHandler<HTMLElement>) => {
      if (disabled) return;
      if (rest.onClick) {
        rest.onClick(event);
      }
    },
    [rest.onClick, disabled]
  );

  return (
    <li ref={ref} className={classOfWrapper}>
      <Component {...rest} className={classOfContent} onClick={handleOnClick}>
        {children}
        {/* {contentOfToggle} */}
      </Component>
    </li>
  );
});

export default ListItem;
