import cn from 'classnames';
import React from 'react';
import styles from './styles.module.scss';
import { TabContext } from './TabContext';
import { TabOrientation, TabSizes } from './TabsTypes';

export { TabContext } from './TabContext';
export * from './TabsTypes';

interface TabsProps {
  onChange: (selected: any) => void;
  value: any;
  size?: TabSizes;
  className?: string;
  children?: React.ReactNode;
  orientation?: TabOrientation;
}

interface TabsDefaultProps {
  component: React.ElementType;
  size: TabSizes;
  orientation: TabOrientation;
}

const defaultProps: TabsDefaultProps = {
  component: 'div',
  size: TabSizes.md,
  orientation: TabOrientation.horizontal,
};

export const Tabs = (props: TabsProps) => {
  const { component: Component, className, onChange, value, size, orientation, ...rest } = {
    ...defaultProps,
    ...props,
  };
  return (
    <TabContext.Provider value={{ onChange, value, size }}>
      <Component
        {...rest}
        className={cn(
          styles.tabs,
          {
            [styles[orientation]]: !!orientation,
          },
          className,
        )}
      />
    </TabContext.Provider>
  );
};

export default Tabs;
