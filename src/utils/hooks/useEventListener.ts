import isBrowser from '@App/utils/isBrowser';
import useEnhancedEffect from './useEnhancedEffect';
import useEventCallback from './useEventCallback';

const isEventValid = (data: any, field: string, type: string): boolean =>
  data[field] && typeof data[field] === type;

export default function useEventListener(
  element: HTMLElement | Window,
  event: string,
  fn: any
) {
  const getWindow = !isBrowser() ? undefined : (window as Window);
  const el = element || getWindow;

  const handler = useEventCallback(fn);
  const destroy = () =>
    isEventValid(el, 'removeEventListener', 'function') &&
    el.removeEventListener(event, handler as any);

  useEnhancedEffect((): any => {
    if (isEventValid(el, 'addEventListener', 'function')) {
      el.addEventListener(event, handler as any);
    }
    return destroy;
  }, []);

  return destroy;
}
