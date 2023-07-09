import React, { forwardRef } from 'react';

type InputBaseProps = {
  component: React.ElementType;
};

interface InputBaseDefaultProps {
  component: React.ElementType;
}

const defaultProps: InputBaseDefaultProps = {
  component: 'input'
};

export const InputBase = forwardRef((props: InputBaseProps, ref: any) => {
  const { component: Component, ...rest } = {
    ...defaultProps,
    ...props
  };
  return <Component {...rest} ref={ref} />;
});

InputBase.displayName = 'InputBase';

export default InputBase;
