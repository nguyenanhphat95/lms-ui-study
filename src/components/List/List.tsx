import cn from 'classnames';
import csstype from 'csstype';
import React from 'react';
import styles from './styles.module.scss';

type ListProps = {
  direction?: csstype.FlexDirectionProperty;
  className: string;
  [key: string]: any;
};

interface ListDefaultProps {
  component: React.ElementType;
  direction: csstype.FlexDirectionProperty;
}

const defaultProps: ListDefaultProps = { component: 'ul', direction: 'column' };

export const List = (props: ListProps) => {
  const { component: Component, className, direction, ...rest } = {
    ...defaultProps,
    ...props,
  };

  const classOfComponent = cn(styles.list, className, styles[`direction-${direction}`]);

  return <Component {...rest} className={classOfComponent} />;
};

export default List;
