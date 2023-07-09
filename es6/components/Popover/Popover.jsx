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
import useClickOutside from '@App/utils/hooks/useClickOutside';
import useKeydown from '@App/utils/hooks/useKeydown';
import cn from 'classnames';
import noop from 'lodash/noop';
import React, { forwardRef, useMemo } from 'react';
import Backdrop, { BackdropTypes } from '../Backdrop';
import Paper from '../Paper';
import Popper, { PopperPlacements } from '../Popper';
import styles from './styles.module.scss';
export * from './PopoverTypes';
const defaultProps = {
    component: 'div',
    placement: PopperPlacements.bottom,
    backdrop: BackdropTypes.transparent
};
const defaultPopperOptions = {
    modifiers: [
        {
            name: 'offset',
            options: {
                offset: [0, 8]
            }
        }
    ]
};
export const Popover = forwardRef((_props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), _props), { component: Component, children, placement, className, anchorEl, anchorRef, menuClassName, backdrop, onClose, backdropClassName, backdropProps } = _a, rest = __rest(_a, ["component", "children", "placement", "className", "anchorEl", "anchorRef", "menuClassName", "backdrop", "onClose", "backdropClassName", "backdropProps"]);
    const [onParentClick, onChildClick] = useClickOutside(onClose);
    useKeydown(27, onClose || noop);
    const popperOptions = useMemo(() => (Object.assign(Object.assign({}, defaultPopperOptions), { placement })), [placement]);
    const anchor = anchorEl || anchorRef.current;
    if (anchor) {
        return (<Backdrop onClick={onParentClick} type={backdrop} className={backdropClassName} {...backdropProps}>
        <Popper component={Component} className={cn(styles.popover, className)} popperOptions={popperOptions} ref={ref} anchorEl={anchor} {...rest}>
          <Paper elevation={2} className={menuClassName} onClick={onChildClick}>
            {children}
          </Paper>
        </Popper>
      </Backdrop>);
    }
    return null;
});
export default Popover;
//# sourceMappingURL=Popover.jsx.map