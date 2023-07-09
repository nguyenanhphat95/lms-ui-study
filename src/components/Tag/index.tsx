import cn from 'classnames';
import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';
import { TagTypes } from './TagTypes';

export interface TagProps extends HTMLAttributes<HTMLElement> {
  type?: string;
}

interface TagDefaultProps {
  component: React.ElementType;
  type: TagTypes.default;
}

export const defaultProps: TagDefaultProps = {
  component: 'span',
  type: TagTypes.default,
};

export const Tag = (props: TagProps) => {
  const { component: Component, type, className, ...rest } = {
    ...defaultProps,
    ...props,
  };

  const classOfComponent = cn(
    styles.tag,
    {
      [styles[`tag-type-${type}`]]: !!type,
    },
    className,
  );

  return <Component className={classOfComponent} {...rest} />;
};

export * from './TagTypes';
export default Tag;
