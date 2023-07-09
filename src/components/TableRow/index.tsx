import React, { forwardRef } from 'react';

type TableRowProps = {
  [key: string]: any;
  className?: string;
};

interface TableRowDefaultProps {
  component: React.ElementType;
}

const defaultProps: TableRowDefaultProps = {
  component: 'tr'
};

export const TableRow = forwardRef((props: TableRowProps, ref: any) => {
  const { component: Component, className, ...rest } = {
    ...defaultProps,
    ...props
  };

  return <Component {...rest} className={className} ref={ref} />;
});

export default TableRow;
