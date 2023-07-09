import cn from 'classnames';
import React, { forwardRef, HTMLProps } from 'react';
import styles from './styles.module.scss';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  component: React.ElementType;
  className?: string;
}

interface ButtonBaseDefaultProps {
  component: React.ElementType;
}

const defaultProps: ButtonBaseDefaultProps = {
  component: 'button'
};

export const ButtonBase = forwardRef((props: ButtonProps, ref) => {
  const { component: Component, className, ...rest } = {
    ...defaultProps,
    ...props
  };

  const classOfComponent = cn(styles.btn, className);

  return <Component {...rest} ref={ref} className={classOfComponent} />;
});

ButtonBase.displayName = 'ButtonBase';

export default ButtonBase;
