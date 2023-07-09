import cn from 'classnames';
import * as React from 'react';
import { ReactChildren } from 'react';
import StepConnector from '../StepConnector';
import StepperContext from './StepperContext';
import styles from './styles.module.scss';

export type Orientation = 'horizontal' | 'vertical';
export type Size = 'xs' | 'sm' | 'md' | 'lg';

export interface StepperProps {
  activeStep?: number;
  alternativeLabel?: boolean;
  children?: React.ReactNode;
  connector?: React.ReactElement<any, any>;
  nonLinear?: boolean;
  orientation?: Orientation;
  className?: string;
  size: Size;
}

const Stepper = React.forwardRef(function Stepper(
  props: StepperProps,
  ref: any
) {
  const defaultConnector = <StepConnector size={props.size || 'md'} />;

  const {
    activeStep = 0,
    alternativeLabel = false,
    children,
    className,
    connector = defaultConnector,
    nonLinear = false,
    orientation = 'horizontal',
    size = 'md',
    ...rest
  } = props;
  const childrenArray = React.Children.toArray(children);
  const steps = childrenArray.map((step: ReactChildren | any, index) => {
    return React.cloneElement(step, {
      index,
      last: index + 1 === childrenArray.length,
      size,
      ...step.props
    });
  });
  const contextValue = React.useMemo(
    () => ({
      activeStep,
      alternativeLabel,
      connector,
      nonLinear,
      orientation,
      size
    }),
    [activeStep, alternativeLabel, connector, nonLinear, orientation, size]
  );

  return (
    <StepperContext.Provider value={contextValue}>
      <div
        className={cn(
          styles.root,
          styles[orientation],
          {
            [styles.alternativeLabel]: alternativeLabel
          },
          className
        )}
        ref={ref}
        {...rest}
      >
        {steps}
      </div>
    </StepperContext.Provider>
  );
});

export default Stepper;
