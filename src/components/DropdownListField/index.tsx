import cn from 'classnames';
import React, { forwardRef } from 'react';
import DropdownList from '../DropdownList';
import Typography, { TypoSizes, TypoWeights } from '../Typography';
import styles from './styles.module.scss';

type DropdownListFieldProps = {
  label: string;
  name: string;
  note?: React.ReactNode;
  fieldId?: string;
  className?: string;
  dropdownListClassName?: string;
  children?: React.ReactNode;
  color: string;
  [key: string]: any;
};

interface DropdownListDefaultProps {
  component: React.ElementType;
}

const defaultProps: DropdownListDefaultProps = {
  component: DropdownList,
};

const DropdownListField = forwardRef((props: DropdownListFieldProps, ref) => {
  const {
    component: Component,
    className,
    note,
    label,
    fieldId,
    dropdownListClassName,
    children,
    ...rest
  } = { ...defaultProps, ...props };

  const classOfComponent = cn(styles['text-field'], styles[`color-${rest.color}`], className);

  const keyOfField = fieldId || `field-${rest.name}`;

  const _renderLabel = label && (
    <Typography
      size={TypoSizes.body2}
      className={styles.label}
      component="label"
      htmlFor={keyOfField}
      weight={TypoWeights.bold}>
      {label}
    </Typography>
  );

  const _renderDropdownList = (
    <Component id={keyOfField} ref={ref} className={dropdownListClassName} {...rest}>
      {children}
    </Component>
  );

  const _renderNote = note && (
    <Typography size={TypoSizes.caption} className={styles.note}>
      {note}
    </Typography>
  );

  return (
    <div className={classOfComponent}>
      {_renderLabel}
      {_renderDropdownList}
      {_renderNote}
    </div>
  );
});

export default DropdownListField;
