import compose from '@App/utils/compose';
import cn from 'classnames';
import React, { forwardRef, useCallback, useContext, useMemo, useRef } from 'react';
import Icon from '../Icon';
import Input from '../Input';
import { RadioGroupContext } from '../RadioGroup';
import Typography from '../Typography';
import styles from './styles.module.scss';
import { getIconByStatus, getStatusOfRadio } from './utils';
export * from './RadioTypes';

export type RadioProps = {
  name?: string;
  iconRef?: React.Ref<any>;
  iconProps?: { [key: string]: string };
  checked?: boolean;
  value: string | number | boolean;
  onChange?: React.EventHandler<React.SyntheticEvent>;
  disabled?: boolean;
  className?: string;
  children?: string | React.ReactNode;
};

interface RadioDefaultProps {
  component: React.ElementType;
  disabled: boolean;
  checked: boolean;
}

const defaultProps: RadioDefaultProps = {
  component: 'label',
  disabled: false,
  checked: false,
};

export const Radio = forwardRef((props: RadioProps, ref) => {
  const {
    component: Component,
    className,
    disabled,
    onChange,
    value,
    checked,
    name,
    iconRef,
    iconProps,
    children,
    ...rest
  } = { ...defaultProps, ...props };

  const context = useContext(RadioGroupContext);
  const checkboxName = name || context.name;
  const isDisabled = disabled || context.disabled;
  const checkIsBoolean = typeof checked === 'boolean';
  const isChecked = checkIsBoolean ? checked : context.selected === value;
  const onChangeComposed = useCallback(compose(onChange, context.onChange), [
    onChange,
    context.onChange,
  ]);

  const refOfInput = useRef();
  const statusOfRadio = getStatusOfRadio(isChecked);
  const iconOfRadio = getIconByStatus(statusOfRadio);

  const classOfRoot = cn(styles.root, className, {
    [styles.disabled]: isDisabled,
    [styles.checked]: isChecked,
  });

  const _children = useMemo(
    () => children && <Typography className={styles.content}>{children}</Typography>,
    [children, styles.content],
  );

  return (
    <Component ref={ref} className={classOfRoot} role="radio" {...rest}>
      <Icon
        ref={iconRef}
        className={styles.icon}
        component={iconOfRadio}
        width={16}
        height={16}
        {...iconProps}
      />
      {_children}
      <Input
        readOnly
        type="radio"
        ref={refOfInput}
        name={checkboxName}
        value={value}
        className={styles.input}
        checked={isChecked}
        onChange={onChangeComposed}
      />
    </Component>
  );
});

export default Radio;
