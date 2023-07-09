import cn from 'classnames';
import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface PanelFooterProps extends HTMLAttributes<HTMLElement> {
  component: React.ElementType;
  className?: string;
  [key: string]: any;
}

interface PanelFooterDefaultProps extends HTMLAttributes<HTMLElement> {
  component: React.ElementType;
}

const defaultProps: PanelFooterDefaultProps = {
  component: 'div',
};

export const PanelFooter = (props: PanelFooterProps) => {
  const { component: Component, className, ...rest } = {
    ...defaultProps,
    ...props,
  };

  return <Component {...rest} className={cn(styles.panelFooter, className)} />;
};

export default PanelFooter;
