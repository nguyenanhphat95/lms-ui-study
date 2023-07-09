import * as React from 'react';

interface StepContextValue<T = any> {
  active?: boolean;
  disabled?: boolean;
  completed?: boolean;
  icon?: string | number;
}

const StepContext = React.createContext<StepContextValue>({});

export default StepContext;
