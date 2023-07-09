import isBrowser from '@App/utils/isBrowser';
import useEventListener from './useEventListener';
export default function useKeydown(allowCode, fn, element) {
    const onKeydown = (event) => {
        const allowList = !Array.isArray(allowCode) ? [allowCode] : allowCode;
        const shouldBreak = !allowList.includes(event.keyCode);
        if (shouldBreak)
            return;
        fn(event);
    };
    const getWindow = !isBrowser() ? undefined : window;
    const el = element || getWindow;
    const destroy = useEventListener(el, 'keydown', onKeydown);
    return destroy;
}
//# sourceMappingURL=useKeydown.js.map