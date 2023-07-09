import { formatNumberInputValue } from '@App/utils/numberFormat';
import _get from 'lodash/get';
import React, { forwardRef, useState } from 'react';
import { Controller } from 'react-hook-form';
import Input from '../Input';

interface Props {
  name: string;
  min: number;
  max: number;
  value?: number;
  onChange: any;
  [key: string]: any;
}

const defaultProps = {
  defaultValue: ''
};

const NumberOnly = forwardRef((props: Props, ref) => {
  const [value, setValue] = useState(
    formatNumberInputValue(_get(props, 'value'))
  );
  const { min, max, onChange, ...rest } = { ...defaultProps, ...props };

  const _handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: React.EventHandler<any>
  ) => {
    const previousValue = value;
    const newValue = _get(e, 'target.value');
    const previousNumber: number = previousValue;
    const newNumber: number = newValue;

    const isMaxRange = newNumber > Number.MAX_SAFE_INTEGER;
    const isLessThanMin =
      min !== null &&
      typeof min !== 'undefined' &&
      newNumber < min &&
      newNumber.toString().trim() !== '';
    const isGreaterThanMax =
      max !== null &&
      typeof max !== 'undefined' &&
      newNumber > max &&
      newNumber.toString().trim() !== '';
    if (
      isNaN(newNumber) ||
      (!isNaN(newNumber) && (isMaxRange || isLessThanMin))
    ) {
      setValue(previousNumber);
      if (onChange) {
        onChange(previousNumber);
      }
      return;
    }
    if (isGreaterThanMax) {
      setValue(max);
      if (onChange) {
        onChange(max);
      }
      return;
    }
    setValue(newNumber);
    if (onChange) {
      onChange(newNumber);
    }
    return;
  };

  return (
    <Input
      {...rest}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        _handleInputChange(e, onChange)
      }
      value={value}
    />
  );
});

export default NumberOnly;
