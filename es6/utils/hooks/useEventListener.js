import isBrowser from '@App/utils/isBrowser';
import useEnhancedEffect from './useEnhancedEffect';
import useEventCallback from './useEventCallback';
const isEventValid = (data, field, type) => data[field] && typeof data[field] === type;
export default function useEventListener(element, event, fn) {
    const getWindow = !isBrowser() ? undefined : window;
    const el = element || getWindow;
    const handler = useEventCallback(fn);
    const destroy = () => isEventValid(el, 'removeEventListener', 'function') &&
        el.removeEventListener(event, handler);
    useEnhancedEffect(() => {
        if (isEventValid(el, 'addEventListener', 'function')) {
            el.addEventListener(event, handler);
        }
        return destroy;
    }, []);
    return destroy;
}
//# sourceMappingURL=useEventListener.js.map