import cn from 'classnames';
import React, { forwardRef } from 'react';
import { RadioProps } from '../Radio/Radio';
import RadioGroupContext from './RadioGroupContext';
import styles from './styles.module.scss';
export { default as RadioGroupContext } from './RadioGroupContext';

type RadioGroupProps = {
  selected: string | number | boolean;
  name: RadioProps['name'];
  onChange: RadioProps['onChange'];
  disabled: RadioProps['disabled'];
  className?: string;
  children: string | React.ReactNode;
  [key: string]: any;
};

interface RadioGroupDefaultProps {
  component: React.ElementType;
  disabled: boolean;
}

const defaultProps: RadioGroupDefaultProps = {
  component: 'div',
  disabled: false
};

export const RadioGroup = forwardRef((props: RadioGroupProps, ref) => {
  const {
    component: Component,
    className,
    name,
    disabled,
    selected,
    onChange,
    children,
    ...rest
  } = {
    ...defaultProps,
    ...props
  };

  const classOfComponent = cn(styles.root, className, {
    [styles.disabled]: disabled
  });

  const context: any = {
    name,
    disabled,
    selected,
    onChange
  };

  return (
    <Component {...rest} ref={ref} className={classOfComponent}>
      <RadioGroupContext.Provider value={context}>
        {children}
      </RadioGroupContext.Provider>
    </Component>
  );
});

export default RadioGroup;
