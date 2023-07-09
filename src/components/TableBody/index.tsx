import cn from 'classnames';
import React, { forwardRef } from 'react';
import styles from './styles.module.scss';

type TableBodyProps = {
  className?: string;
  [key: string]: any;
};

interface TableBodyDefaultProps {
  component: React.ElementType;
}

const defaultProps: TableBodyDefaultProps = {
  component: 'tbody',
};

export const TableBody = forwardRef((props: TableBodyProps, ref: any) => {
  const { component: Component, className, ...rest } = {
    ...defaultProps,
    ...props,
  };
  return <Component {...rest} className={cn(styles.tableBody, className)} ref={ref} />;
});

export default TableBody;
