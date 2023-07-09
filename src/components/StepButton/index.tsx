import cn from 'classnames';
import * as React from 'react';
import Button from '../Button';
import StepContext from '../Step/StepContext';
import StepLabel from '../StepLabel';
import StepperContext from '../Stepper/StepperContext';
import styles from './styles.module.scss';

export interface StepButtonProps {
  children?: React.ReactNode | any;
  icon?: React.ReactNode;
  optional?: React.ReactNode;
  className?: string;
}

const StepButton = React.forwardRef(function StepButton(
  props: StepButtonProps,
  ref: any
) {
  const { children, className, icon, optional, ...other } = props;
  const { disabled } = React.useContext(StepContext);
  const { orientation } = React.useContext(StepperContext);

  const childProps = {
    icon,
    optional
  };

  const child = <StepLabel {...childProps}>{children}</StepLabel>;

  return (
    <Button
      disabled={disabled}
      className={cn(styles.root, styles[orientation], className)}
      ref={ref}
      {...other}
    >
      {child}
    </Button>
  );
});

export default StepButton;
