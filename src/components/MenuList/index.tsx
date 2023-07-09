import csstype from 'csstype';
import React from 'react';
import List from '../List';

type MenuListProps = {
  direction?: csstype.FlexDirectionProperty;
  disabled?: boolean;
  className: string;
  children: React.ReactNode;
  [key: string]: any;
};

interface MenuListDefaultProps {
  component: React.ElementType;
  direction: csstype.FlexDirectionProperty;
}

const defaultProps: MenuListDefaultProps = {
  component: 'ul',
  direction: 'column',
};

export const MenuList = React.forwardRef((props: MenuListProps, ref: any) => {
  const { className, children, ...rest } = {
    ...defaultProps,
    ...props,
  };

  return (
    <List role="menu" ref={ref} className={className} {...rest}>
      {children}
    </List>
  );
});

export default MenuList;
