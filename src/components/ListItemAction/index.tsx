import cn from 'classnames';
import React, { useMemo } from 'react';
import Icon from '../Icon';
import styles from './styles.module.scss';

interface ListItemActionProps {
  icon?: React.ElementType;
  iconClassName?: string;
  className: string;
  children?: React.ReactNode;
  component?: React.ElementType | string;
  [key: string]: any;
}

const defaultProps = {
  component: 'div'
};

export const ListItemAction = (props: ListItemActionProps) => {
  const {
    component: Component,
    className,
    children,
    icon,
    iconClassName,
    ...rest
  } = {
    ...defaultProps,
    ...props
  };

  const classOfComponent = cn(styles.listItemAction, className);
  const contentOfChildren = useMemo(
    () =>
      !icon ? (
        children
      ) : (
        <Icon className={cn(styles.icon, iconClassName)} component={icon} />
      ),
    [icon, children]
  );

  return (
    <Component {...rest} className={classOfComponent}>
      {contentOfChildren}
    </Component>
  );
};

export default ListItemAction;
