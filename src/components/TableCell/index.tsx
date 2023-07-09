import cn from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

export enum TableCellAligns {
  inherit = 'inherit',
  left = 'left',
  center = 'center',
  right = 'right',
  justify = 'justify',
}

export type TableCellProps = {
  inHeader?: boolean;
  align?: string;
  width?: string | number;
  colSpan?: number | string;
  className?: string;
  [key: string]: any;
};

interface TableCellDefaultProps {
  component: React.ElementType;
  inHeader: boolean;
  align: TableCellAligns;
}

const defaultProps: TableCellDefaultProps = {
  component: 'td',
  inHeader: false,
  align: TableCellAligns.inherit,
};

export const TableCell = (props: TableCellProps) => {
  const { component, className, inHeader, align, ...rest } = {
    ...defaultProps,
    ...props,
  };

  const Component = (inHeader ? 'th' : component) || 'td';
  const tableBodyClassName = cn(styles.cell, className, align && styles[`align-${String(align)}`]);
  return <Component {...rest} className={tableBodyClassName} />;
};

export default TableCell;
