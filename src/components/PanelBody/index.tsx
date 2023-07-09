import cn from 'classnames';
import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

type PanelBodyProps = HTMLAttributes<HTMLElement>;

interface PanelBodyDefaultProps {
  component: React.ElementType;
}

const defaultProps: PanelBodyDefaultProps = {
  component: 'div',
};

export const PanelBody = (props: PanelBodyProps) => {
  const { component: Component, className, ...rest } = {
    ...defaultProps,
    ...props,
  };

  return <Component {...rest} className={cn(styles.panelBody, className)} />;
};

export default PanelBody;
