import { SyntheticEvent, useCallback, useRef } from 'react';

export default function useClickOutside(callback: (event?: SyntheticEvent) => void) {
  const refEvent = useRef({ shouldPreventEvent: false });

  const onParentClick = useCallback(
    (event: SyntheticEvent) => {
      if (refEvent.current.shouldPreventEvent) {
        refEvent.current.shouldPreventEvent = false;
        return;
      }
      if (callback) {
        callback(event);
      }
    },
    [refEvent, callback],
  );

  const onChildClick = useCallback(() => {
    refEvent.current.shouldPreventEvent = true;
  }, [refEvent]);

  return [onParentClick, onChildClick];
}
