import useEnhancedEffect from '@App/utils/hooks/useEnhancedEffect';
import React from 'react';

export default function useEventCallback(fn: Function) {
  const ref = React.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  // @ts-ignore
  return React.useCallback((...args) => (0, ref.current)(...args), []);
}
