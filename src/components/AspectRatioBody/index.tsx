import cn from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

interface AspectRatioBodyTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P & {};
  defaultComponent: D;
}

type AspectRatioBodyProps = {
  className: string;
};

interface AspectRatioBodyDefaultProps {
  component: React.ElementType;
}

const defaultProps: AspectRatioBodyDefaultProps = {
  component: 'div'
};

export const AspectRatioBody = (_props: AspectRatioBodyProps) => {
  const { component: Component, className, ...rest } = {
    ...defaultProps,
    ..._props
  };

  const classOfRoot = cn(styles.aspectRatioBody, className);

  return <Component {...rest} className={classOfRoot} />;
};

AspectRatioBody.displayName = 'AspectRatioBody';

export default AspectRatioBody;
