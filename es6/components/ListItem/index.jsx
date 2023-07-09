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
import DownArrow from "lms-icons/components/DownArrow";
import cn from "classnames";
import React, { forwardRef, useCallback } from "react";
import ListItemAction from "../ListItemAction";
import styles from "./styles.module.scss";
const defaultProps = {
    component: "div",
    disabled: false,
    activated: false,
    open: false,
    classes: {
        wrapper: "",
        content: "",
    },
};
export const ListItem = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, disabled, children, activated, open, classes } = _a, rest = __rest(_a, ["component", "className", "disabled", "children", "activated", "open", "classes"]);
    const classOfWrapper = cn(styles.item, className, {
        [styles.disabled]: !!disabled,
        [styles.activated]: !!activated,
        [classes.wrapper]: !!classes.wrapper,
    });
    const classOfContent = cn(styles.content, {
        [styles[`content-size-${rest.size}`]]: !!rest.size,
    }, {
        [classes.content]: !!classes.content,
    });
    const openIsBool = open === undefined || typeof open === "boolean";
    const contentOfToggle = openIsBool && (<ListItemAction icon={DownArrow} className={open ? styles["icon-open"] : ""}/>);
    const handleOnClick = useCallback((event) => {
        if (disabled)
            return;
        if (rest.onClick) {
            rest.onClick(event);
        }
    }, [rest.onClick, disabled]);
    return (<li ref={ref} className={classOfWrapper}>
      <Component {...rest} className={classOfContent} onClick={handleOnClick}>
        {children}
        
      </Component>
    </li>);
});
export default ListItem;
//# sourceMappingURL=index.jsx.map