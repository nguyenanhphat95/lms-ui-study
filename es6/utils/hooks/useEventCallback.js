import useEnhancedEffect from '@App/utils/hooks/useEnhancedEffect';
import React from 'react';
export default function useEventCallback(fn) {
    const ref = React.useRef(fn);
    useEnhancedEffect(() => {
        ref.current = fn;
    });
    return React.useCallback((...args) => (0, ref.current)(...args), []);
}
//# sourceMappingURL=useEventCallback.js.map