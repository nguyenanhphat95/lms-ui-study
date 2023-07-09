import React, { forwardRef } from 'react';
import NumberFormat from 'react-number-format';

interface InputMoneyFormatProps {
  thousandSeparator?: string;
  decimalSeparator?: string;
  suffix?: string;
}

interface InputMoneyFormatDefaultProps {
  component: React.ElementType;
  thousandSeparator: string;
  decimalSeparator: string;
  suffix: string;
}

const defaultProps: InputMoneyFormatDefaultProps = {
  component: NumberFormat,
  thousandSeparator: '.',
  decimalSeparator: ',',
  suffix: ' đ'
};

export const InputMoneyFormat = forwardRef(
  (props: InputMoneyFormatProps, ref: any) => {
    const { component: Component, ...rest } = {
      ...defaultProps,
      ...props
    };

    return <Component {...rest} ref={ref} />;
  }
);

InputMoneyFormat.displayName = 'InputMoneyFormat';

export default InputMoneyFormat;
