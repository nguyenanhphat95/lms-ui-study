import { getArrayOf } from '@App/utils/getArrayOf';
import cn from 'classnames';
import React, { forwardRef, HTMLAttributes, MutableRefObject } from 'react';
import InputBase from '../InputBase';
import { InputColors, InputSizes } from './InputTypes';
import styles from './styles.module.scss';

export * from './InputTypes';
export { InputSizes, InputColors };

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  color?: InputColors;
  size?: InputSizes;
  beforeInput?: React.ReactNode;
  afterInput?: React.ReactNode;
  wrapperRef?: MutableRefObject<HTMLDivElement>;
  className?: string;
  disabled?: boolean;
  rows?: number;
  readOnly?: boolean;
  tabIndex?: number;
  type?: string;
  name?: string;
  [key: string]: any;
}

interface InputDefaultProps {
  component: React.ElementType;
  color: InputColors;
  size: InputSizes;
}

const defaultProps: InputDefaultProps = {
  component: InputBase,
  size: InputSizes.lg,
  color: InputColors.primary
};

export const Input = forwardRef((props: InputProps, ref: any) => {
  const {
    component: Component,
    className,
    color,
    beforeInput,
    afterInput,
    wrapperRef,
    ...rest
  } = {
    ...defaultProps,
    ...props
  };

  const classOfRoot = cn(
    styles.root,
    styles[`color-${color}`],
    className,
    rest.disabled && styles.disabled
  );

  const beforeInputs = getArrayOf(beforeInput);
  const afterInputs = getArrayOf(afterInput);

  const classOfInputBase = cn(
    styles.input,
    styles[`size-${rest.size}`],
    beforeInputs.length > 0 && styles['has-before'],
    afterInputs.length > 0 && styles['has-after'],
    rest.disabled && styles.disabled
  );

  return (
    <div className={classOfRoot} role="presentation" ref={wrapperRef}>
      {beforeInputs.map((component, index) =>
        // @ts-ignore
        React.cloneElement(component, {
          key: index.toString(),
          disabled: rest.disabled,
          size: rest.size
        })
      )}
      <Component {...rest} ref={ref} className={classOfInputBase} />
      {afterInputs.map((component, index) =>
        // @ts-ignore
        React.cloneElement(component, {
          key: index.toString(),
          disabled: rest.disabled,
          size: rest.size
        })
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
