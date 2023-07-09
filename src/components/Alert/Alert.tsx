import cn from 'classnames';
import React from 'react';
import Typography, { TypoTypes } from '../Typography';
import styles from './styles.module.scss';

export enum AlertTypes {
  Warning = 'highlight',
  Error = 'alert'
}

interface Props {
  type?: AlertTypes;
  children?: any;
}

const defaultProps: Props = {
  type: AlertTypes.Warning
};

const Alert = React.forwardRef((props: Props, ref: React.Ref<any>) => {
  const { type, children, ...rest } = { ...defaultProps, ...props };
  const classOfRoot = cn(styles['root'], {
    [styles[`type-${type}`]]: type
  });
  return (
    <div className={classOfRoot} {...rest}>
      <Typography type={TypoTypes.invert}>{children}</Typography>
    </div>
  );
});

export default Alert;
