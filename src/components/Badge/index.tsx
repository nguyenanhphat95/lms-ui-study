import capitalize from '@App/utils/capitalize';
import cn from 'classnames';
import * as React from 'react';
import { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

export interface BadgeProps extends HTMLAttributes<HTMLElement> {
  /**
   * The anchor of the badge.
   */
  anchorOrigin?: {
    horizontal: 'left' | 'right';
    vertical: 'bottom' | 'top';
  };
  /**
   * The content rendered within the badge.
   */
  badgeContent?: string | number;
  /**
   * The badge will be added relative to this node.
   */
  children?: any;
  className?: string;
  badgeClassName?: string;
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: 'default' | 'error' | 'primary' | 'secondary';
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component?: React.ElementType;
  /**
   * If `true`, the badge will be invisible.
   */
  invisible?: boolean;
  /**
   * Max count to show.
   */
  max?: number;
  /**
   * Wrapped shape the badge should overlap.
   */
  overlap?: 'circle' | 'rectangle';
  /**
   * Controls whether the badge is hidden when `badgeContent` is zero.
   */
  showZero?: boolean;
  /**
   * The variant to use.
   */
  variant?: 'dot' | 'standard';
}

const Badge = React.forwardRef(function Badge(props: BadgeProps, ref) {
  const {
    anchorOrigin = {
      vertical: 'top',
      horizontal: 'right',
    },
    badgeContent,
    children,
    className,
    badgeClassName,
    color = 'default',
    component: ComponentProp = 'span',
    invisible: invisibleProp,
    max = 99,
    overlap = 'rectangle',
    showZero = false,
    variant = 'standard',
    ...other
  } = {
    ...props,
  };

  let invisible = invisibleProp;

  if (
    invisibleProp == null &&
    ((badgeContent === 0 && !showZero) || (badgeContent == null && variant !== 'dot'))
  ) {
    invisible = true;
  }

  let displayValue: string | number = '';

  if (variant !== 'dot') {
    displayValue = badgeContent > max ? `${max}+` : badgeContent;
  }

  return (
    <ComponentProp className={cn(styles.root, className)} ref={ref} {...other}>
      {children}
      <span
        className={cn(
          badgeClassName,
          styles.badge,
          styles[`${anchorOrigin.horizontal}${capitalize(anchorOrigin.vertical)}}`],
          styles[
            `anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(
              anchorOrigin.horizontal,
            )}${capitalize(overlap)}`
          ],
          {
            [styles[`color${capitalize(color)}`]]: color !== 'default',
            [styles.invisible]: invisible,
            [styles.dot]: variant === 'dot',
          },
        )}>
        {displayValue}
      </span>
    </ComponentProp>
  );
});

export default Badge;
