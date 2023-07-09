import cn from 'classnames';
import React, { forwardRef } from 'react';
import { InputSizes } from '../Input';
import styles from './styles.module.scss';

interface InputAdornmentProps {
  size?: InputSizes;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e) => void;
}

interface InputAdornmentDefaultProps {
  component: React.ElementType;
  size: InputSizes;
}

const defaultProps: InputAdornmentDefaultProps = {
  component: 'div',
  size: InputSizes.lg
};

export const InputAdornment = forwardRef((_props: InputAdornmentProps, ref) => {
  const { component: Component, className, size, ...rest } = {
    ...defaultProps,
    ..._props
  };

  const classOfComponent = cn(
    styles.addon,
    {
      [styles[`addon-size-${size}`]]: !!size
    },
    className
  );

  return <Component {...rest} ref={ref} className={classOfComponent} />;
});

export default InputAdornment;
