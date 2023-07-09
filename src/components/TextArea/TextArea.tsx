import _get from 'lodash-es/get';
import React from 'react';
import Input, { InputSizes } from '../Input';
import { useAutoHeight } from './hook';
import { getBoxSize, getLineHeight } from './utils';

type TextAreaProps = {
  maxRows?: number;
  minRows?: number;
  ref?: React.Ref<any>;
  style?: { [key: string]: any };
  [key: string]: any;
};

interface TextAreaDefaultProps {
  component: React.ElementType;
  minRows: number;
  maxRows?: number;
  size: InputSizes;
}

const defaultProps: TextAreaDefaultProps = {
  component: 'textarea',
  minRows: 5,
  maxRows: Infinity,
  size: InputSizes.lg
};

export const TextArea = (props: TextAreaProps) => {
  const { minRows, maxRows, ...rest } = {
    ...defaultProps,
    ...props
  };

  const [otherInput, detailsOfSize] = useAutoHeight({ refInput: rest.ref });
  const elementOfInput = rest.ref && (rest.ref as any).current;
  const lineHeight = getLineHeight(elementOfInput);
  const minHeight = lineHeight + getBoxSize(elementOfInput);

  const rowsOfInput = Math.min(
    Math.max(detailsOfSize.linesNumber, minRows),
    maxRows
  );

  return (
    <>
      <Input
        rows={rowsOfInput}
        style={{
          ...rest.style,
          minHeight,
          overflow: _get(detailsOfSize, 'overflow')
        }}
        {...rest}
      />
      {otherInput}
    </>
  );
};

export default TextArea;
