import cn from 'classnames';
import React, { forwardRef } from 'react';
import styles from './styles.module.scss';

export type TableProps = {
  className?: string;
  [key: string]: React.ReactNode;
};

interface TableDefaultProps {
  component: React.ElementType;
}

const defaultProps: TableDefaultProps = {
  component: 'table',
};

export const Table = forwardRef((props: TableProps, ref: any) => {
  const { component: Component, className, ...rest } = {
    ...defaultProps,
    ...props,
  };

  return <Component className={cn(className, styles.table)} ref={ref} {...rest} />;
});

export default Table;
