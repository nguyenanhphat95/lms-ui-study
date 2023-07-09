import { useCallback, useRef } from 'react';
export default function useClickOutside(callback) {
    const refEvent = useRef({ shouldPreventEvent: false });
    const onParentClick = useCallback((event) => {
        if (refEvent.current.shouldPreventEvent) {
            refEvent.current.shouldPreventEvent = false;
            return;
        }
        if (callback) {
            callback(event);
        }
    }, [refEvent, callback]);
    const onChildClick = useCallback(() => {
        refEvent.current.shouldPreventEvent = true;
    }, [refEvent]);
    return [onParentClick, onChildClick];
}
//# sourceMappingURL=useClickOutside.js.map