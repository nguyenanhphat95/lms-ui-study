import { createContext } from 'react';
import { TabSizes } from './TabsTypes';

interface TabContextValue<T = any> {
  value?: T;
  size?: TabSizes;
  onChange?: (value: T) => void;
}

export const TabContext = createContext<TabContextValue>({});
