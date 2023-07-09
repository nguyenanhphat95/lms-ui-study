import cn from 'classnames';
import React from 'react';

export type TableHeaderProps = {
  className?: string;
  [key: string]: any;
};

interface TableHeaderDefaultProps {
  component: React.ElementType;
}

const defaultProps: TableHeaderDefaultProps = {
  component: 'thead'
};

export const TableHeader = (props: TableHeaderProps) => {
  const { component: Component, className, ...rest } = {
    ...defaultProps,
    ...props
  };

  return <Component {...rest} className={className} />;
};

export default TableHeader;
