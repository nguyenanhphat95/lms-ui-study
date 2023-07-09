import cx from 'classnames';
import React, { forwardRef, useCallback, useContext } from 'react';
import ListItem from '../../ListItem';
import MenuContext from '../MenuContext';
import styles from './styles.module.scss';

export type MenuItemProps = {
  disabled?: boolean;
  activated?: boolean;
  size?: string;
  className?: string;
  onClick: (e: React.MouseEventHandler<HTMLElement>) => void;
  [key: string]: any;
};

interface MenuItemDefaultProps {
  component: React.ElementType;
}

const defaultProps: MenuItemDefaultProps = {
  component: 'a',
};

export const MenuItem = forwardRef((props: MenuItemProps, ref) => {
  const { className, ...rest } = {
    ...defaultProps,
    ...props,
  };

  const menuContext = useContext(MenuContext);

  const classOfComponent = cx(styles.menuItem, className, {
    [styles.disabled]: !!rest.disabled,
  });

  const handleOnClick = useCallback(
    (event: React.MouseEventHandler<HTMLElement>) => {
      if (rest.onClick) {
        rest.onClick(event);
      }
      if (menuContext) {
        menuContext.close();
      }
    },
    [rest.onClick],
  );

  return <ListItem {...rest} ref={ref} className={classOfComponent} onClick={handleOnClick} />;
});

export default MenuItem;
