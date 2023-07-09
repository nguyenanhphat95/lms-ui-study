import React, { HTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { AspectRatios } from './types';

export * from './types';

interface AspectRatioProps {
  ratio?: AspectRatios;
  component?: string;
  className?: string;
}

const defaultProps = {
  component: 'div'
};

export const AspectRatio = (props: AspectRatioProps) => {
  const { component: Component, className, ratio, ...rest } = {
    ...defaultProps,
    ...props
  };

  const classOfRoot = cn(styles.aspectRatio, className, {
    [styles[`ratio-${String(ratio)}`]]: ratio
  });

  // @ts-ignore
  return <Component {...rest} className={classOfRoot} />;
};

AspectRatio.displayName = 'AspectRatio';

export default AspectRatio;
