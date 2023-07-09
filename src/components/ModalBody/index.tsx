import cn from 'classnames';
import React, { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

type Props = HTMLAttributes<HTMLElement>;

interface DefaultProps {
  component: React.ElementType;
}

const defaultProps: DefaultProps = {
  component: 'div',
};

export const ModalBody = (props: Props) => {
  const { component: Component, className, ...rest } = {
    ...defaultProps,
    ...props,
  };

  return <Component {...rest} className={cn(styles['root'], className)} />;
};

export default ModalBody;
