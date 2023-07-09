import cn from 'classnames';
import React from 'react';
import styles from './styles.module.scss';
import { ContainerSizes } from './types';
export * from './types';
export { ContainerSizes };

type ContainerProps = {
  container?: boolean;
  width?: ContainerSizes;
  fluid?: boolean;
  className?: any;
  children?: any;
};

interface ContainerDefaultProps {
  component: React.ElementType;
  width: ContainerSizes;
  fluid: boolean;
}

const defaultProps: ContainerDefaultProps = {
  component: 'div',
  width: ContainerSizes.auto,
  fluid: false,
};

export const Container = (props: ContainerProps) => {
  const { component: Component, className, width, fluid, ...rest } = {
    ...defaultProps,
    ...props,
  };

  const classOfComponent = cn(styles.container, className, {
    [styles[`max-${width}`]]: width !== ContainerSizes.auto,
    [styles.fluid]: fluid,
  });

  return <Component className={classOfComponent} {...rest} />;
};

export default Container;
