import cn from 'classnames';
import React, { useMemo } from 'react';
import { BackdropTypes } from '../Backdrop/BackdropTypes';
import MenuList from '../MenuList';
import Popover from '../Popover';
import { PopperPlacements } from '../Popper';
import MenuContext from './MenuContext';
import styles from './styles.module.scss';

export type MenuProps = {
  onClose: any;
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

interface MenuDefaultProps {
  component: React.ElementType;
  placement: PopperPlacements;
}

const defaultProps: MenuDefaultProps = {
  component: Popover,
  placement: PopperPlacements.bottom,
};

export const Menu = (props: MenuProps) => {
  const { component: Component, className, children, onClose, ...rest } = {
    ...defaultProps,
    ...props,
  };

  const classOfComponent = cn(styles.menu, className);
  const menuContext = useMemo(() => ({ close: onClose }), []);

  return (
    <Component
      backdrop={BackdropTypes.transparent}
      className={classOfComponent}
      onClose={onClose}
      {...rest}>
      <MenuContext.Provider value={menuContext}>
        <MenuList>{children}</MenuList>
      </MenuContext.Provider>
    </Component>
  );
};

export default Menu;
