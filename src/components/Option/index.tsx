import _get from 'lodash/get';
import React, { useContext } from 'react';
import DropdownListContext from '../DropdownList/DropdownListContext';
import { InputSizes } from '../Input';
import ListItemText from '../ListItemText';
import MenuItem from '../Menu/MenuItem';

export type OptionProps = {
  key?: number | string;
  value?: any;
  size?: InputSizes;
  children: React.ReactNode | any;
  disabled?: boolean;
  [key: string]: any;
};

interface OptionDefaultProps {
  component: React.ElementType;
}

const defaultProps: OptionDefaultProps = {
  component: MenuItem
};

export const Option: React.FunctionComponent<OptionProps> = (
  props: OptionProps
) => {
  const { component: Component, value: valueProps, children, ...rest } = {
    ...defaultProps,
    ...props
  };

  const dropdownListContext = useContext(DropdownListContext);

  function handleClick() {
    if (
      dropdownListContext &&
      !rest.disabled &&
      valueProps !== dropdownListContext.value
    ) {
      dropdownListContext.onChange(
        valueProps,
        children.toString() || valueProps
      );
    }
  }

  const activated = _get(dropdownListContext, 'value') === valueProps;
  return (
    <Component
      {...rest}
      onClick={handleClick}
      activated={activated}
      size={rest.size}
    >
      <ListItemText size={rest.size}>{children}</ListItemText>
    </Component>
  );
};

export default Option;
