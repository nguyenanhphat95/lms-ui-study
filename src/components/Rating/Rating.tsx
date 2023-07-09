import cn from 'classnames';
import _memoize from 'lodash/memoize';
import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface Props {
  component?: React.ElementType;
  rate?: number;
  size?: number;
}

const defaultProps = {
  component: 'div',
  rate: 0,
  size: 10,
};

const getRateValue = _memoize((rate: number) => {
  return Math.round((20 * rate) / 5);
});

export const Rating = (props: Props) => {
  const {
    component: Component = 'div',
    className = null,
    style = null,
    rate = 0,
    size,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };

  return (
    <Component className={cn(styles.rating, className)} style={style} {...rest}>
      {!rate && <div className={cn(styles.stars, styles.empty)} style={{ fontSize: size }} />}
      {rate > 0 && (
        <div
          className={cn(styles.stars, styles[`star${getRateValue(rate)}`])}
          style={{ fontSize: size }}
        />
      )}
    </Component>
  );
};

export default Rating;
