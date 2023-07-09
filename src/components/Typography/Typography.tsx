import cn from 'classnames';
import React, { forwardRef, MutableRefObject } from 'react';
import styles from './styles.module.scss';
import { TypoSizes, TypoTypes, TypoWeights } from './TypoTypes';
export * from './TypoTypes';

type Props = {
  component?: React.ElementType;
  type?: TypoTypes;
  weight?: TypoWeights;
  size?: TypoSizes;
  truncate?: number;
  className?: string;
  ref?: MutableRefObject<HTMLElement>;
  nowrap?: boolean;
  [key: string]: any;
};

interface TypoDefaultProps {
  component: React.ElementType;
  type: TypoTypes;
  weight: TypoWeights;
  size: TypoSizes;
  nowrap: boolean;
}

const defaultProps: TypoDefaultProps = {
  component: 'span',
  type: TypoTypes.default,
  weight: TypoWeights.regular,
  size: TypoSizes.body2,
  nowrap: false,
};

export const Typography = forwardRef((props: Props, ref) => {
  const { component: Component, className, size, type, weight, truncate, nowrap, ...rest } = {
    ...defaultProps,
    ...props,
  };

  const classOfComponent = cn(className, styles['root'], {
    [styles.truncate]: truncate && truncate > 0,
    [styles[`truncate-${truncate}`]]: truncate && truncate > 0,
    [styles[`size-${size}`]]: size,
    [styles[`weight-${weight}`]]: weight,
    [styles[`type-${type}`]]: type,
    [styles['nowrap']]: nowrap,
  });

  return <Component ref={ref} className={classOfComponent} {...rest} />;
});

export default Typography;
