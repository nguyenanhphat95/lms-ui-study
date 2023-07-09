import cn from 'classnames';
import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

export interface IconProps extends HTMLAttributes<HTMLElement> {
  component?: React.ReactNode;
  width?: string | number;
  height?: string | number;
  children?: React.ReactNode;
  [key: string]: any;
}

interface IconDefaultProps {
  component: any;
  width?: number;
  height?: number;
}

const defaultProps: IconDefaultProps = {
  component: 'svg',
  width: 24,
  height: 24
};

export const Icon = React.forwardRef((props: IconProps, ref) => {
  const { component: Component, className, ...rest } = {
    ...defaultProps,
    ...props
  };
  const classOfComponent = cn(styles.icon, className);

  return (
    <Component
      ref={ref}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...rest}
      className={classOfComponent}
    />
  );
});

export default Icon;
