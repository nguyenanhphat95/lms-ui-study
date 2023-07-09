import Close from "lms-icons/components/Close";
import cn from "classnames";
import React, { HTMLAttributes } from "react";
import Icon from "../Icon";
import styles from "./styles.module.scss";

interface Props extends HTMLAttributes<HTMLElement> {
  onClose?: () => void;
}

interface DefaultProps {
  component: React.ElementType;
}

const defaultProps: DefaultProps = {
  component: "div",
};

export const ModalHeader: React.FunctionComponent<Props> = (props: Props) => {
  const { component: Component, className, onClose, children, ...rest } = {
    ...defaultProps,
    ...props,
  };

  const _renderButtonClose = onClose && (
    <span className={styles.close} onClick={onClose} role="presentation">
      <Icon component={Close} color="unset" width={16} height={16} />
    </span>
  );

  return (
    <Component {...rest} className={cn(styles["root"], className)}>
      <span className={styles.title}>{children}</span>
      {/* {_renderButtonClose} */}
    </Component>
  );
};

export default ModalHeader;
