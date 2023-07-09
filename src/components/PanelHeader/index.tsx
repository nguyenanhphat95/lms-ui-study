import cn from 'classnames';
import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

type PanelHeaderProps = HTMLAttributes<HTMLElement>;

interface PanelHeaderDefaultProps extends HTMLAttributes<HTMLElement> {
  component: React.ElementType;
}

const defaultProps: PanelHeaderDefaultProps = {
  component: 'div',
};

const PanelHeader = (props: PanelHeaderProps) => {
  const { component: Component, className, ...rest } = {
    ...defaultProps,
    ...props,
  };

  return <Component {...rest} className={cn(styles.panelHeader, className)} />;
};

export default PanelHeader;
