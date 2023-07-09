import cn from 'classnames';
import React, { forwardRef, HTMLAttributes } from 'react';
import { PaperRadius } from './PaperTypes';
import styles from './styles.module.scss';
export * from './PaperTypes';

type Elevation = 0 | 1 | 2 | 3 | 4;

export interface PaperProps extends HTMLAttributes<HTMLElement> {
  radius?: PaperRadius;
  onClick?: React.EventHandler<React.SyntheticEvent>;
  elevation?: Elevation;
  component?: React.ElementType;
}

interface PaperDefaultProps {
  component: React.ElementType;
  radius: PaperRadius;
  elevation: Elevation;
}

const defaultProps: PaperDefaultProps = {
  component: 'div',
  radius: PaperRadius.regular,
  elevation: 0,
};

export const Paper = forwardRef((props: PaperProps, ref) => {
  const { component: Component, className, elevation, radius, ...rest } = {
    ...defaultProps,
    ...props,
  };

  const classOfComponent = cn(styles.paper, className, {
    [styles[`radius-${String(radius)}`]]: radius,
    [styles[`elevation-${String(elevation)}`]]: !!elevation,
  });

  return <Component {...rest} className={classOfComponent} ref={ref} />;
});

export default Paper;
