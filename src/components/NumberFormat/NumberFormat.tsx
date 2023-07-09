import React, { HTMLAttributes } from 'react';
import NumberFormat from 'react-number-format';
import Input, { InputSizes } from '../Input';

interface Props extends HTMLAttributes<HTMLElement> {
  min?: number;
  max?: number;
  size?: InputSizes;
  thousandSeparator?: string;
  decimalSeparator?: string | boolean;
  decimalPrecision?: number;
  decimalScale?: number;
  [key: string]: any;
}

const defaultProps = {
  thousandSeparator: ',',
  decimalSeparator: '.',
  decimalPrecision: 2,
  decimalScale: 2,
};

const NumberFormatWrapper = (props: Props) => {
  const {
    min,
    max,
    thousandSeparator,
    decimalSeparator,
    decimalPrecision,
    decimalScale,
    ...rest
  } = { ...defaultProps, ...props };

  return (
    // @ts-ignore
    <NumberFormat
      thousandSeparator={thousandSeparator}
      decimalSeparator={decimalSeparator}
      decimalPrecision={decimalPrecision}
      decimalScale={decimalScale}
      customInput={Input}
      isAllowed={(values: any) => {
        const { formattedValue, floatValue } = values;
        if (formattedValue === '') return true;
        else if (max && floatValue > max) return false;
        else if (min && floatValue < min) return false;
        return true;
      }}
      allowNegative={false}
      {...rest}
    />
  );
};

export default NumberFormatWrapper;
