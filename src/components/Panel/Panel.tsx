import cn from 'classnames';
import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

interface PanelProps extends HTMLAttributes<HTMLElement> {
  border?: boolean;
  borderRadius?: boolean;
}

interface PanelDefaultProps {
  component: React.ElementType;
  border: boolean;
  borderRadius: boolean;
}

const defaultProps: PanelDefaultProps = {
  component: 'div',
  border: true,
  borderRadius: true,
};

const Panel = (props: PanelProps) => {
  const { component: Component, className, border, borderRadius, ...rest } = {
    ...defaultProps,
    ...props,
  };

  const classOfComponent = cn(
    styles.panel,
    {
      [styles.border]: border,
      [styles['border-radius']]: borderRadius,
    },
    className,
  );
  return <Component {...rest} className={classOfComponent} />;
};

export default Panel;
