import clsx from 'clsx';
import * as React from 'react';
import StepperContext from '../Stepper/StepperContext';
import StepContext from './StepContext';
import styles from './styles.module.scss';

export interface StepProps extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  children?: React.ReactNode;
  completed?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  index?: number | any;
  last?: boolean;
}

const Step = React.forwardRef(function Step(props: StepProps, ref: any) {
  const {
    active: activeProp,
    children,
    className,
    completed: completedProp,
    disabled: disabledProp,
    expanded = false,
    index,
    last,
    ...other
  } = props;

  const {
    activeStep,
    connector,
    alternativeLabel,
    orientation,
    nonLinear
  } = React.useContext(StepperContext);

  let [active = false, completed = false, disabled = false] = [
    activeProp,
    completedProp,
    disabledProp
  ];

  if (activeStep === index) {
    active = activeProp !== undefined ? activeProp : true;
  } else if (!nonLinear && activeStep > index) {
    completed = completedProp !== undefined ? completedProp : true;
  } else if (!nonLinear && activeStep < index) {
    disabled = disabledProp !== undefined ? disabledProp : true;
  }

  const contextValue = React.useMemo(
    () => ({
      index,
      last,
      expanded,
      icon: index + 1,
      active,
      completed,
      disabled
    }),
    [index, last, expanded, active, completed, disabled]
  );

  const newChildren = (
    <div
      className={clsx(
        styles.root,
        styles[orientation],
        {
          [styles.alternativeLabel]: alternativeLabel,
          [styles.completed]: completed
        },
        className
      )}
      ref={ref}
      {...other}
    >
      {connector && alternativeLabel && index !== 0 ? connector : null}
      {children}
    </div>
  );

  return (
    <StepContext.Provider value={contextValue}>
      {connector && !alternativeLabel && index !== 0 ? (
        <React.Fragment>
          {connector}
          {newChildren}
        </React.Fragment>
      ) : (
        newChildren
      )}
    </StepContext.Provider>
  );
});

export default Step;
