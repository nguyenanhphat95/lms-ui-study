import cn from 'classnames';
import React from 'react';
import { DividerOrientation, DividerType, DividerSizes } from './DividerTypes';
import styles from './styles.module.scss';
export { DividerOrientation, DividerType, DividerSizes };

export type DividerProps = {
  type?: DividerType;
  absolute?: boolean;
  flexItem?: boolean;
  orientation?: DividerOrientation;
  className?: string;
  size?: DividerSizes;
};

interface DividerDefaultProps {
  component: React.ElementType;
  type: DividerType;
  orientation: DividerOrientation;
  size: DividerSizes;
}

const defaultProps: DividerDefaultProps = {
  component: 'hr',
  type: DividerType.line,
  orientation: DividerOrientation.horizontal,
  size: DividerSizes.fullWidth,
};

export const Divider = (props: DividerProps) => {
  const {
    component: Component,
    className,
    type,
    orientation,
    size,
    absolute,
    flexItem,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };

  const dividerClassName = cn(
    styles.divider,
    {
      [styles[String(type)]]: !!type,
      [styles[size]]: size !== DividerSizes.fullWidth,
      [styles.absolute]: !!absolute,
      [styles.flexItem]: !!flexItem,
      [styles.vertical]: orientation === DividerOrientation.vertical,
    },
    className,
  );

  return <Component {...rest} className={dividerClassName} />;
};

export default Divider;
