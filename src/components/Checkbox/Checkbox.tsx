import React, {
  forwardRef,
  HTMLAttributes,
  useCallback,
  useContext,
  useMemo,
  useRef
} from 'react';
import { CheckBoxGroupContext } from '../CheckboxGroup';
import Icon, { IconProps } from '../Icon';
import Input from '../Input';
import styles from './styles.module.scss';
import { getIconByStatus, getStatusOfCheckbox } from './utils';
export * from './CheckboxTypes';
import cn from 'classnames';
import compose from '@App/utils/compose';

export interface CheckboxProps extends HTMLAttributes<HTMLElement> {
  name?: string;
  iconRef?: React.Ref<unknown>;
  iconProps?: IconProps;
  checked?: boolean;
  value?: string;
  onChange?: React.EventHandler<React.SyntheticEvent>;
  isIntermediate?: boolean;
  disabled?: boolean;
}

interface CheckboxDefaultProps {
  component: React.ElementType;
  disabled: boolean;
}

const defaultProps: CheckboxDefaultProps = {
  component: 'label',
  disabled: false
};

export const Checkbox = forwardRef((props: CheckboxProps, ref) => {
  const {
    component: Component,
    className,
    disabled,
    onChange,
    value,
    checked,
    isIntermediate,
    name,
    iconRef,
    iconProps,
    children,
    ...rest
  } = { ...defaultProps, ...props };

  const context = useContext(CheckBoxGroupContext);
  const checkboxName = name || context.name;
  const isDisabled = disabled || context.disabled;
  const checkIsBoolean = typeof checked === 'boolean';
  const isChecked = checkIsBoolean
    ? checked
    : (context.selected || []).includes(value);
  const onChangeComposed = useCallback(compose(onChange, context.onChange), [
    onChange,
    context.onChange
  ]);

  const refOfInput = useRef();
  const statusOfCheckbox = getStatusOfCheckbox(isChecked, isIntermediate);
  const iconOfCheckbox = getIconByStatus(statusOfCheckbox);

  const classOfRoot = cn(styles.root, className, {
    [styles.disabled]: isDisabled,
    [styles.checked]: isChecked,
    [styles.intermediate]: isIntermediate
  });

  const _children = useMemo(
    () => children && <span className={styles.content}>{children}</span>,
    [children, styles.content]
  );

  return (
    <Component {...rest} ref={ref} className={classOfRoot} role="checkbox">
      <Icon
        ref={iconRef}
        className={styles.icon}
        component={iconOfCheckbox}
        {...iconProps}
      />
      {_children}
      <Input
        readOnly
        type="checkbox"
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

export default Checkbox;
