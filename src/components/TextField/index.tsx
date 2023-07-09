import cx from 'classnames';
import React, { forwardRef, memo } from 'react';
import Input from '../Input';
import Typography, { TypoSizes, TypoTypes, TypoWeights } from '../Typography';
import styles from './styles.module.scss';

type TextFieldProps = {
  label: string;
  name: string;
  note?: React.ReactNode;
  fieldId?: string;
  className?: string;
  inputClassName?: string;
  color?: string;
  labelProps?: { [key: string]: string };
  afterLabel?: string | React.ReactNode;
  [key: string]: any;
};

interface TextFieldDefaultProps {
  component: React.ElementType;
  type: string;
  labelProps: any;
}

const defaultProps: TextFieldDefaultProps = {
  component: Input,
  type: TypoTypes.default,
  labelProps: {},
};

export const TextField = forwardRef((props: TextFieldProps, ref) => {
  const {
    component: Component,
    className,
    note,
    label,
    fieldId,
    inputClassName,
    labelProps,
    afterLabel,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  };

  const classOfComponent = cx(styles['text-field'], styles[`color-${rest.color}`], className);
  const keyOfField = fieldId || `field-${rest.name}`;

  const _renderLabel = label && (
    <React.Fragment>
      <Typography
        size={TypoSizes.body2}
        className={styles.label}
        component="label"
        htmlFor={keyOfField}
        weight={TypoWeights.bold}
        {...labelProps}>
        {label}
        {afterLabel}
      </Typography>
    </React.Fragment>
  );

  const _renderInput = (
    <Component
      id={keyOfField}
      ref={ref}
      inputClassName={inputClassName}
      autoComplete="off"
      {...rest}
    />
  );

  const _renderNote = note && (
    <Typography size={TypoSizes.caption} className={styles.note}>
      {note}
    </Typography>
  );

  return (
    <div className={classOfComponent}>
      {_renderLabel}
      {_renderInput}
      {_renderNote}
    </div>
  );
});

export default memo(TextField);
