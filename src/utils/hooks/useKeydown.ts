import isBrowser from '@App/utils/isBrowser';
import { SyntheticEvent } from 'react';
import useEventListener from './useEventListener';

export default function useKeydown(
  allowCode: number | number[],
  fn: (event: SyntheticEvent) => void,
  element?: HTMLElement
) {
  const onKeydown = (event: any) => {
    const allowList = !Array.isArray(allowCode) ? [allowCode] : allowCode;

    const shouldBreak = !allowList.includes(event.keyCode);
    if (shouldBreak) return;

    fn(event);
  };

  const getWindow = !isBrowser() ? undefined : (window as Window);
  const el: any = element || getWindow;
  const destroy = useEventListener(el, 'keydown', onKeydown);
  return destroy;
}
