import cn from 'classnames';
import React, { forwardRef, Fragment } from 'react';
import Typography, { TypoTypes } from '../Typography';
import styles from './styles.module.scss';

type Props = {
  display: React.ReactNode;
  disabled: boolean;
  size: string;
  onClick: () => void;
  [key: string]: any;
};

interface DefaultProps {
  component: React.ElementType;
  placeholder: string;
  className: string;
  [key: string]: any;
}

const defaultProps: DefaultProps = {
  component: 'input',
  placeholder: '',
  className: ''
};

const MultiSelectInput = forwardRef<HTMLInputElement, Props>(
  (props, ref): any => {
    const {
      component: Component,
      className,
      onClick,
      display,
      placeholder,
      ...rest
    } = {
      ...defaultProps,
      ...props
    };

    return (
      <Fragment>
        <div
          className={cn(
            styles.select,
            styles[`multiple-select-size-${rest.size}`],
            className,
            {
              [styles.disabled]: rest.disabled,
              [styles.placeholder]: !display
            }
          )}
          ref={ref}
          onClick={onClick}
        >
          <Typography
            truncate={1}
            type={TypoTypes.sub}
            className={cn(
              styles['label-text'],
              styles[`label-size-${rest.size}`]
            )}
          >
            {display ? display : placeholder}
          </Typography>
        </div>
        <Component {...rest} type="hidden" />
      </Fragment>
    );
  }
);

export default React.memo(MultiSelectInput);
