import cn from 'classnames';
import csstype from 'csstype';
import React, { forwardRef, HTMLAttributes } from 'react';
import styles from './styles.module.scss';
export * from './GridTypes';

export interface GridProps {
  container?: boolean;
  spacing?: number;
  item?: boolean;
  nowrap?: boolean;
  direction?: csstype.FlexDirectionProperty;
  justifyContent?: csstype.JustifyContentProperty;
  alignItem?: csstype.AlignItemsProperty;
  className?: string;
  children?: string | React.ReactNode;
  xs?: string | number | boolean;
  sm?: string | number | boolean;
  md?: string | number | boolean;
  lg?: string | number | boolean;
  xl?: string | number | boolean;
  component?: React.ElementType;
  id?: string;
  [key: string]: any;
}

interface GridDefaultProps {
  component: React.ElementType;
  container: boolean;
  item: boolean;
  nowrap: boolean;
  direction: csstype.FlexDirectionProperty;
}

const defaultProps: GridDefaultProps = {
  component: 'div',
  container: false,
  item: false,
  nowrap: false,
  direction: 'row',
};

export const Grid = forwardRef((props: GridProps, ref: any) => {
  const {
    component: Component,
    className,
    container,
    item,
    nowrap,
    direction,
    justifyContent,
    alignItem,
    xs,
    lg,
    xl,
    md,
    sm,
    spacing,
    ...rest
  } = { ...defaultProps, ...props };

  const classOfComponent = cn(className, {
    [styles.grid]: container,
    [styles.item]: item,
    [styles.wrap]: !nowrap,
    [styles[direction]]: direction && !!direction,
    [styles[`s-${spacing}`]]: !!spacing,
    [styles[`justify-${justifyContent}`]]: !!justifyContent,
    [styles[`align-${alignItem}`]]: !!alignItem,
    [styles[`xs-${xs}`]]: xs !== undefined,
    [styles[`sm-${sm}`]]: sm !== undefined,
    [styles[`md-${md}`]]: md !== undefined,
    [styles[`lg-${lg}`]]: lg !== undefined,
    [styles[`xl-${xl}`]]: xl !== undefined,
  });

  return <Component ref={ref} className={classOfComponent} {...rest} />;
});

export default Grid;
