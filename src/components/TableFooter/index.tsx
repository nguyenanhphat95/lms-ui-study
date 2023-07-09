import cn from 'classnames';
import React from 'react';

type TableFooterProps = {
  className: string;
  [key: string]: any;
};

interface TableFooterDefaultProps {
  component: React.ElementType;
}

const defaultProps: TableFooterDefaultProps = {
  component: 'tfoot',
};

export const TableFooter = (props: TableFooterProps) => {
  const { component: Component, className, ...rest } = {
    ...defaultProps,
    ...props,
  };

  return <Component {...rest} className={className} />;
};

export default TableFooter;
