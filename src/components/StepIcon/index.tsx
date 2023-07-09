import cn from 'classnames';
import * as React from 'react';
import Typography, { TypoWeights } from '../Typography';
import { Size } from '../Stepper';
import styles from './styles.module.scss';

export interface StepIconProps {
  active?: boolean;
  completed?: boolean;
  error?: boolean;
  icon: React.ReactNode;
  className?: string;
  size: Size;

  classNameActive?: string;
  classNameCompleted?: string;
  classNameDefault?: string;
}

// @ts-ignore
const StepIcon = React.forwardRef<HTMLElement, StepIconProps>((props, ref) => {
  const {
    active = false,
    className: classNameProp,
    completed = false,
    error = false,
    icon,
    classNameActive,
    classNameCompleted,
    classNameDefault,
    ...rest
  } = props;

  if (typeof icon === 'number' || typeof icon === 'string') {
    const className = cn(
      classNameProp,
      styles.root,

      classNameActive ? classNameActive : active && styles.active,
      classNameCompleted ? classNameCompleted : completed && styles.completed,
      classNameDefault ? classNameDefault : styles.default,
      styles[`size-${rest.size}`]
    );

    return (
      <Typography
        weight={TypoWeights.bold}
        className={className}
        ref={ref}
        {...rest}
      >
        {icon}
      </Typography>
    );
  }

  return icon;
});

export default StepIcon;
