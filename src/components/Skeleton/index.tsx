import cn from 'classnames';
import * as React from 'react';
import styles from './styles.module.scss';

export enum SkeletonRadius {
  none = 'none',
  light = 'light',
  regular = 'regular',
  bold = 'bold',
  max = 'max',
}

export interface SkeletonProps extends React.HTMLAttributes<HTMLElement> {
  animation?: 'pulse' | 'wave' | false;
  children?: React.ReactNode;
  height?: number | string;
  variant?: string;
  width?: number | string;
  component?: React.ElementType;
  radius?: SkeletonRadius;
}

const Skeleton = React.forwardRef(function Skeleton(props: SkeletonProps, ref) {
  const {
    animation = 'wave',
    className,
    component: Component = 'div',
    height,
    style,
    variant = 'text',
    width,
    radius = SkeletonRadius.regular,
    ...other
  } = props;

  const hasChildren = Boolean(other.children);

  return (
    <Component
      ref={ref}
      className={cn(
        styles.root,
        styles[variant],
        {
          // @ts-ignore
          [styles[animation]]: animation !== false,
          [styles.withChildren]: hasChildren,
          [styles.fitContent]: hasChildren && !width,
          [styles.heightAuto]: hasChildren && !height,
          [styles[`radius-${String(radius)}`]]: radius,
        },
        className,
      )}
      {...other}
      style={{
        width,
        height,
        ...style,
      }}
    />
  );
});

export default Skeleton;
