import * as React from 'react';
import setRef from '../setRef';

export default function useForkRef(refA: any, refB: any) {
  return React.useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }
    return (refValue: any) => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}
