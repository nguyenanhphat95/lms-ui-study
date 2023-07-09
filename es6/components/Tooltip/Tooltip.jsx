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
import useForkRef from '@App/utils/hooks/useForkRef';
import React, { cloneElement, forwardRef, Fragment, useEffect, useMemo, useRef, useState, } from 'react';
import Popper, { PopperPlacements } from '../Popper';
import styles from './styles.module.scss';
export * from './TooltipTypes';
const defaultProps = {
    component: Popper,
    enterDelay: 0,
    leaveDelay: 0,
    placement: PopperPlacements.top,
};
const defaultPopperOptions = {
    modifiers: [
        {
            name: 'arrow',
            options: {
                element: '[data-popper-arrow]',
                padding: 10,
            },
        },
        {
            name: 'offset',
            options: {
                offset: [0, 10],
            },
        },
    ],
};
let hystersisOpen = false;
let hystersisTimer = null;
export const Tooltip = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, placement, content, children, enterDelay, leaveDelay } = _a, rest = __rest(_a, ["component", "placement", "content", "children", "enterDelay", "leaveDelay"]);
    const [anchorEl, setAnchorEl] = useState();
    const ownerRef = useForkRef(setAnchorEl, ref);
    const hasChildRef = !children && children.ref;
    const handleRef = hasChildRef ? useForkRef(children.ref, ownerRef) : ownerRef;
    const closeTimer = useRef();
    const enterTimer = useRef();
    const leaveTimer = useRef();
    const touchTimer = useRef();
    const [open, setOpenState] = useState(false);
    useEffect(() => {
        return () => {
            clearTimeout(closeTimer.current);
            clearTimeout(enterTimer.current);
            clearTimeout(leaveTimer.current);
            clearTimeout(touchTimer.current);
        };
    }, []);
    const handleOpen = (event) => {
        clearTimeout(hystersisTimer);
        hystersisOpen = true;
        setOpenState(true);
    };
    const handleEnter = (event) => {
        const _childrenProps = children.props;
        if (event.type === 'mouseover' &&
            _childrenProps.onMouseOver &&
            event.currentTarget === anchorEl) {
            _childrenProps.onMouseOver(event);
        }
        clearTimeout(enterTimer.current);
        clearTimeout(leaveTimer.current);
        if (enterDelay && !hystersisOpen) {
            event.persist();
            enterTimer.current = setTimeout(() => {
                handleOpen(event);
            }, enterDelay);
        }
        else {
            handleOpen(event);
        }
    };
    const handleClose = (event) => {
        clearTimeout(hystersisTimer);
        hystersisTimer = setTimeout(() => {
            hystersisOpen = false;
        }, 500);
        setOpenState(false);
    };
    const handleLeave = (event) => {
        clearTimeout(enterTimer.current);
        clearTimeout(leaveTimer.current);
        event.persist();
        leaveTimer.current = setTimeout(() => {
            handleClose(event);
        }, leaveDelay);
    };
    const childrenProps = {
        onMouseOver: handleEnter,
        onMouseLeave: handleLeave,
    };
    const popperOptions = useMemo(() => (Object.assign(Object.assign({}, defaultPopperOptions), { placement })), [placement]);
    return (<Fragment>
      {cloneElement(children, Object.assign({ ref: handleRef }, childrenProps))}
      {open && (<Component ref={ref} className={styles.tooltip} popperOptions={popperOptions} anchorEl={anchorEl} {...rest}>
          <>
            {content}
            <div className={styles.arrow} data-popper-arrow/>
          </>
        </Component>)}
    </Fragment>);
});
export default Tooltip;
//# sourceMappingURL=Tooltip.jsx.map