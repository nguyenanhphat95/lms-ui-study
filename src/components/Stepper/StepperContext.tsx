import * as React from 'react';
import { Size } from './index';
interface StepperContextValue<T = any> {
  active?: boolean;
  disabled?: boolean;
  completed?: boolean;
  alternativeLabel?: boolean;
  orientation?: string | any;
  activeStep?: number | any;
  connector?: React.ReactElement;
  nonLinear?: boolean;
  size?: Size;
}

const StepperContext = React.createContext<StepperContextValue>({});

export default StepperContext;
