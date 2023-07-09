import cn from 'classnames';
import React, { forwardRef, useMemo, useRef } from 'react';
import Input from '../Input';
import styles from './styles.module.scss';
import { SwitchColors } from './SwitchTypes';
export * from './SwitchTypes';

export type SwitchProps = {
  name?: string;
  color?: SwitchColors;
  iconRef?: React.Ref<unknown>;
  iconProps?: { [key: string]: string };
  checked?: boolean;
  onChange?: React.EventHandler<React.SyntheticEvent>;
  disabled?: boolean;
  className?: string;
  children?: string | React.ReactNode;
};

interface SwitchDefaultProps {
  component: React.ElementType;
  color: SwitchColors;
  disabled: boolean;
}

const defaultProps: SwitchDefaultProps = {
  component: 'label',
  color: SwitchColors.primary,
  disabled: false
};

export const Switch = forwardRef((props: SwitchProps, ref) => {
  const {
    component: Component,
    className,
    disabled,
    onChange,
    checked,
    name,
    color,
    iconRef,
    iconProps,
    children,
    ...rest
  } = { ...defaultProps, ...props };

  const refOfInput = useRef();

  const classOfRoot = cn(styles.root, className, {
    [styles.disabled]: disabled,
    [styles.checked]: checked,
    [styles[color]]: !!color
  });

  const _children = useMemo(
    () => children && <span className={styles.content}>{children}</span>,
    [children, styles.content]
  );

  // const _getCheckedIcon = useMemo(() => (checked ? CheckboxChecked : CheckboxUncheck), [checked]);

  return (
    <Component {...rest} ref={ref} className={classOfRoot} role="checkbox">
      <div className={styles.icon}>
        <div className={styles.dot} />
        <div className={styles.nav}>
          {/* <Icon component={_getCheckedIcon} className={styles.mark} /> */}
        </div>
      </div>
      {_children}
      <Input
        readOnly
        type="checkbox"
        ref={refOfInput}
        name={name}
        className={styles.input}
        checked={checked}
        onChange={onChange}
      />
    </Component>
  );
});

export default Switch;
