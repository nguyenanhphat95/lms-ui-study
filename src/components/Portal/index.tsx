import usePortal from '@App/utils/hooks/usePortal';
import React, { FC } from 'react';
import { createPortal } from 'react-dom';

export enum PortalIds {
  popover = 'tpl-popover',
  modal = 'tpl-modal',
  toast = 'tpl-toast',
  tooltip = 'tpl-tooltip',
}

const checkIsBrowser = (isIncludeJest = false) => {
  const isRunOnNode =
    typeof process !== 'undefined' && typeof process.versions.node !== 'undefined';
  const isRunOnBrowser = typeof window === 'object';
  if (isIncludeJest) {
    return isRunOnBrowser;
  }

  if (!isIncludeJest && !isRunOnNode) {
    return true;
  }

  return false;
};

export type PortalProps = {
  id: PortalIds | string;
  children: React.ReactNode;
};

const Portal: FC<PortalProps> = ({ id, children }: PortalProps) => {
  const isBrowser = checkIsBrowser();
  if (!isBrowser) {
    return null;
  }
  const element = usePortal(id);
  return createPortal(children, element);
};

export default Portal;
