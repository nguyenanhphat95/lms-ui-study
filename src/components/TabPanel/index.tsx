import cn from 'classnames';
import React from 'react';

type TabPanelProps = {
  value: string | number;
  index: string | number;
  className?: string;
};

interface TabPanelDefaultProps {
  component: React.ElementType;
}

const defaultProps: TabPanelDefaultProps = {
  component: 'div',
};

export const TabPanel = (props: TabPanelProps) => {
  const { component: Component, className, value, index, ...rest } = {
    ...defaultProps,
    ...props,
  };
  if (value !== index) {
    return null;
  }
  return <Component {...rest} className={className} />;
};

export default TabPanel;
