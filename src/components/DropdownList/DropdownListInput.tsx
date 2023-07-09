import cn from 'classnames';
import React, { Fragment } from 'react';
import { InputProps } from '../Input';
import Typography, { TypoTypes } from '../Typography';
import styles from './styles.module.scss';

export interface DropdownListInputProps extends InputProps {
  display: React.ReactNode;
}

interface DropdownListInputDefaultProps {
  component: React.ElementType;
}
const defaultProps: DropdownListInputDefaultProps = {
  component: 'input'
};

const DropdownListInput = React.forwardRef(
  (_props: DropdownListInputProps, ref: any): any => {
    const {
      component: Component,
      className,
      onClick,
      display,
      placeholder,
      ...rest
    } = {
      ...defaultProps,
      ..._props
    };

    const isDisplayPlaceholder = Array.isArray(display) && display.length === 0;

    return (
      <Fragment>
        <div
          className={cn(
            styles.select,
            styles[`select-size-${rest.size}`],
            className,
            {
              [styles.disabled]: rest.disabled,
              [styles.placeholder]: isDisplayPlaceholder
            }
          )}
          ref={ref}
          onClick={onClick}
        >
          {isDisplayPlaceholder ? (
            <Typography
              truncate={1}
              type={TypoTypes.inherit}
              className={cn(
                styles['label-text'],
                styles[`label-size-${rest.size}`]
              )}
            >
              {placeholder}
            </Typography>
          ) : (
            <Typography
              truncate={1}
              type={TypoTypes.inherit}
              className={cn(
                styles['label-text'],
                styles[`label-size-${rest.size}`]
              )}
            >
              {display}
            </Typography>
          )}
        </div>
        <Component {...rest} type="hidden" />
      </Fragment>
    );
  }
);

DropdownListInput.displayName = 'DropdownListInput';

export default DropdownListInput;
