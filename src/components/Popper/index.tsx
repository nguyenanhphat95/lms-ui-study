import useEnhancedEffect from '@App/utils/hooks/useEnhancedEffect';
import setRef from '@App/utils/setRef';
import { createPopper } from '@popperjs/core';
import useForkRef from '@rooks/use-fork-ref';
import React, {
  FC,
  forwardRef,
  Ref,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import Portal, { PortalIds } from '../Portal';

export * from './PopperTypes';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function getAnchorEl(anchorEl: any) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

type PopperProps = any;

export type PopperComponent = FC<PopperProps>;

export const Popper = forwardRef((props: PopperProps, ref: Ref<any>) => {
  const { anchorEl, children, container, popperOptions, popperRef: popperRefProp, ...rest } = props;
  const tooltipRef = useRef<HTMLElement>(null);
  // @ts-ignore
  const ownRef = useForkRef(tooltipRef, ref);
  const popperRef = useRef(null);
  const handlePopperRef = useForkRef(
    // @ts-ignore
    popperRef,
    popperRefProp,
  ) as any;
  const handlePopperRefRef = useRef(handlePopperRef);
  useEnhancedEffect(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  useImperativeHandle(popperRefProp, () => popperRef.current, []);

  useEffect(() => {
    if (popperRef.current) {
      popperRef.current.update();
    }
  });

  const handleOpen = useCallback(() => {
    if (!tooltipRef.current || !anchorEl) {
      return;
    }

    if (popperRef.current) {
      popperRef.current.destroy();
      handlePopperRefRef.current(null);
    }

    const popper = createPopper(getAnchorEl(anchorEl), tooltipRef.current, popperOptions);
    handlePopperRefRef.current(popper);
  }, [anchorEl, popperOptions]);

  const handleRef = useCallback(
    (node) => {
      // @ts-ignore
      setRef(ownRef, node);
      handleOpen();
    },
    [ownRef, handleOpen],
  );

  const handleClose = () => {
    if (!popperRef.current) {
      return;
    }

    popperRef.current.destroy();
    handlePopperRefRef.current(null);
  };

  useEffect(() => {
    handleOpen();
  }, [handleOpen]);

  useEffect(() => {
    return () => {
      handleClose();
    };
  }, []);

  return (
    <Portal id={PortalIds.tooltip}>
      <div ref={handleRef} {...rest}>
        {children}
      </div>
    </Portal>
  );
});

export default Popper;
