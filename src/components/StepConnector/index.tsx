import cn from 'classnames';
import * as React from 'react';
import { HTMLAttributes } from 'react';
import StepContext from '../Step/StepContext';
import StepperContext from '../Stepper/StepperContext';
import styles from './styles.module.scss';

export type StepConnectorIcon = React.ReactElement | string | number;

export interface StepConnectorProps extends HTMLAttributes<HTMLDivElement> {
  size: string;
}

const StepConnector = React.forwardRef(function StepConnector(
  props: StepConnectorProps,
  ref: any
) {
  const { className, size, ...other } = props;

  const { alternativeLabel, orientation } = React.useContext(StepperContext);
  const { active, disabled, completed } = React.useContext(StepContext);

  return (
    <div
      className={cn(
        styles.root,
        styles[orientation],
        {
          [styles.alternativeLabel]: alternativeLabel,
          [styles.active]: active,
          [styles.completed]: completed,
          [styles.disabled]: disabled
        },
        className
      )}
      ref={ref}
      {...other}
    >
      <span
        className={cn(
          styles['line-connector'],
          {
            [styles.lineHorizontal]: orientation === 'horizontal',
            [styles.lineVertical]: orientation === 'vertical'
          },
          styles[`vertical-${size}`]
        )}
      />
    </div>
  );
});

export default StepConnector;
