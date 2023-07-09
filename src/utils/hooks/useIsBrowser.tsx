import React from 'react';

export const useIsBrowser = () => {
  return React.useMemo(() => typeof document !== 'undefined', [typeof document]);
};
