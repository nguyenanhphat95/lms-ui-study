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
import ChevronDown from "lms-icons/components/ChevronDown";
import ChevronUp from "lms-icons/components/ChevronUp";
import cn from "classnames";
import _get from "lodash-es/get";
import React, { forwardRef, useCallback, useMemo, useRef, useState, } from "react";
import Icon from "../Icon";
import Input from "../Input";
import InputAdornment from "../InputAdornment";
import Menu from "../Menu";
import DropdownListContext from "./DropdownListContext";
import DropdownListInput from "./DropdownListInput";
import styles from "./styles.module.scss";
const defaultProps = {
    component: Input,
};
function calculatePopoverStyle(ref) {
    if (!ref) {
        return {};
    }
    const width = Math.max(ref.getBoundingClientRect().width, 80);
    return {
        width: `${width}px`,
    };
}
function checkIsUsePlaceholder(value) {
    return value === undefined || value === null;
}
export const DropdownList = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, children, onChange, onClick, onBlur, onFocus, menuClassName, className, placeholder } = _a, rest = __rest(_a, ["component", "children", "onChange", "onClick", "onBlur", "onFocus", "menuClassName", "className", "placeholder"]);
    const wrapperRef = useRef();
    const popoverStyle = useRef(null);
    const [open, setOpen] = useState(false);
    const handleOpen = useCallback((e) => {
        if (!open && !rest.disabled) {
            popoverStyle.current = calculatePopoverStyle(wrapperRef.current);
            setOpen(true);
        }
        if (onFocus) {
            onFocus(e);
        }
        if (onClick) {
            return onClick(e);
        }
    }, [rest.disabled]);
    const handleClose = useCallback((e) => {
        setOpen(false);
        if (onBlur) {
            return onBlur(e);
        }
    }, []);
    const dropdownListContext = useMemo(() => ({
        onChange: (value) => {
            return onChange(value);
        },
        value: rest.value,
    }), [handleClose, onChange, rest.value]);
    const afterInput = useMemo(() => (<InputAdornment size={rest.size} onClick={handleOpen} className={styles[`addon-size-${rest.size}`]}>
          <Icon className={styles.icon} component={open ? ChevronUp : ChevronDown}/>
        </InputAdornment>), [open, rest.disabled]);
    const display = checkIsUsePlaceholder(rest.value)
        ? placeholder
        : React.Children.toArray(children)
            .filter((child) => _get(child, "props.value") === rest.value)
            .map((child) => {
            if (typeof child === "string") {
                return child;
            }
            const innerChild = child.props.children;
            if (typeof innerChild === "string") {
                return innerChild;
            }
            return "";
        });
    return (<>
        <Input {...rest} className={cn(className, styles.input, { [styles["is-open"]]: open })} onClick={handleOpen} component={DropdownListInput} afterInput={afterInput} display={display} ref={ref} readOnly wrapperRef={wrapperRef}/>
        {open && (<Menu anchorRef={wrapperRef} onClose={handleClose} menuClassName={menuClassName} style={popoverStyle.current}>
            <DropdownListContext.Provider value={dropdownListContext}>
              {children}
            </DropdownListContext.Provider>
          </Menu>)}
      </>);
});
DropdownList.displayName = "DropdownList";
export default DropdownList;
//# sourceMappingURL=index.jsx.map