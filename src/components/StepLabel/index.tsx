import cn from 'classnames';
import * as React from 'react';
import StepContext from '../Step/StepContext';
import StepIcon, { StepIconProps } from '../StepIcon';
import StepperContext from '../Stepper/StepperContext';
import Typography, { TypoWeights } from '../Typography';
import styles from './styles.module.scss';

export interface StepLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  error?: boolean;
  icon?: React.ReactNode;
  optional?: React.ReactNode;
  StepIconComponent?: React.ElementType;
  StepIconProps?: Partial<StepIconProps>;
  noSpacingY?: boolean;
}

const StepLabel = React.forwardRef(function StepLabel(
  props: StepLabelProps,
  ref: any
) {
  const {
    children,
    className,
    error = false,
    noSpacingY = false,
    optional,
    StepIconComponent: StepIconComponentProp,
    StepIconProps,
    ...other
  } = props;

  const { alternativeLabel, orientation, size } = React.useContext(
    StepperContext
  );
  const { active, disabled, completed, icon } = React.useContext(StepContext);

  let StepIconComponent: any = StepIconComponentProp;

  if (icon && !StepIconComponent) {
    StepIconComponent = StepIcon;
  }

  return (
    <span
      className={cn(
        styles.root,
        styles[orientation],
        {
          [styles.disabled]: disabled,
          [styles.alternativeLabel]: alternativeLabel,
          [styles.error]: error
        },
        className,
        noSpacingY && styles.noSpacingY
      )}
      ref={ref}
      {...other}
    >
      {icon || StepIconComponent ? (
        <span
          className={cn(styles.iconContainer, {
            [styles.alternativeLabel]: alternativeLabel
          })}
        >
          <StepIconComponent
            completed={completed}
            active={active}
            error={error}
            icon={icon}
            size={size}
            {...StepIconProps}
          />
        </span>
      ) : null}
      <span className={styles.labelContainer}>
        {children ? (
          <Typography
            weight={TypoWeights.medium}
            className={cn(
              styles.label,
              {
                [styles.alternativeLabel]: alternativeLabel,
                [styles.completed]: completed,
                [styles.active]: active,
                [styles.error]: error
              },
              styles[`size-${size}`]
            )}
          >
            {children}
          </Typography>
        ) : null}
        {optional}
      </span>
    </span>
  );
});

export default StepLabel;
