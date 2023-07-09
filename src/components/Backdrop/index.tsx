import cn from 'classnames';
import React from 'react';
import { BackdropTypes } from './BackdropTypes';
import styles from './styles.module.scss';
export * from './BackdropTypes';

type BackdropProps = {
  type?: BackdropTypes;
  className?: string;
  [key: string]: any;
};

interface BackdropDefaultProps {
  component: React.ElementType;
  type: BackdropTypes;
}

const defaultProps: BackdropDefaultProps = {
  component: 'div',
  type: BackdropTypes.grey,
};

export const Backdrop = (props: BackdropProps) => {
  const { component: Component, className, type, ...rest } = {
    ...defaultProps,
    ...props,
  };
  return (
    <Component
      className={cn(styles.backdrop, className, {
        [styles[type]]: !!styles[type],
      })}
      {...rest}
    />
  );
};

export default Backdrop;
