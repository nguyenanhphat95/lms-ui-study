import cn from 'classnames';
import React, { forwardRef } from 'react';
import { CheckboxProps } from '../Checkbox';
import Context from './checkbox-group-context';
import styles from './styles.module.scss';
export { default as CheckBoxGroupContext } from './checkbox-group-context';

type CheckboxGroupProps = {
  name?: string;
  selected: string[];
  onChange: CheckboxProps['onChange'];
  disabled?: CheckboxProps['disabled'];
  className?: string;
  children?: string | React.ReactNode;
};

interface CheckboxGroupDefaultProps {
  component: React.ElementType;
  disabled: boolean;
}

const defaultProps: CheckboxGroupDefaultProps = {
  component: 'div',
  disabled: false,
};

export const CheckboxGroup = forwardRef((props: CheckboxGroupProps, ref) => {

  const {
    component: Component,
    className,
    disabled,
    selected,
    onChange,
    children,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classOfComponent = cn(styles.root, className, {
    [styles.disabled]: disabled,
  })

  const context = {
    disabled,
    selected,
    onChange,
  }

  return (
    <Component {...rest} ref={ref} className={classOfComponent}>
      <Context.Provider value={context}>{children}</Context.Provider>
    </Component>
  )

});

export default CheckboxGroup;
