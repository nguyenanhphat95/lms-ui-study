import React, { forwardRef } from 'react';
import NumberFormat from 'react-number-format';
import { formatPercent } from './utils';

interface InputPercentFormatProps {
  format?: (value: string) => any;
}

interface InputPercentFormatDefaultProps {
  component: React.ElementType;
  format: (value: string) => any;
}

const defaultProps: InputPercentFormatDefaultProps = {
  component: NumberFormat,
  format: formatPercent
};

export const InputPercentFormat = forwardRef(
  (props: InputPercentFormatProps, ref: any) => {
    const { component: Component, ...rest } = {
      ...defaultProps,
      ...props
    };

    return <Component {...rest} ref={ref} />;
  }
);

InputPercentFormat.displayName = 'InputPercentFormat';

export default InputPercentFormat;
