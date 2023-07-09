var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import useEnhancedEffect from '@App/utils/hooks/useEnhancedEffect';
import setRef from '@App/utils/setRef';
import { createPopper } from '@popperjs/core';
import useForkRef from '@rooks/use-fork-ref';
import React, { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, } from 'react';
import Portal, { PortalIds } from '../Portal';
export * from './PopperTypes';
function getAnchorEl(anchorEl) {
    return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}
export const Popper = forwardRef((props, ref) => {
    const { anchorEl, children, container, popperOptions, popperRef: popperRefProp } = props, rest = __rest(props, ["anchorEl", "children", "container", "popperOptions", "popperRef"]);
    const tooltipRef = useRef(null);
    const ownRef = useForkRef(tooltipRef, ref);
    const popperRef = useRef(null);
    const handlePopperRef = useForkRef(popperRef, popperRefProp);
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
    const handleRef = useCallback((node) => {
        setRef(ownRef, node);
        handleOpen();
    }, [ownRef, handleOpen]);
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
    return (<Portal id={PortalIds.tooltip}>
      <div ref={handleRef} {...rest}>
        {children}
      </div>
    </Portal>);
});
export default Popper;
//# sourceMappingURL=index.jsx.map