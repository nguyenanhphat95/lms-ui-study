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
import Close from "lms-icons/components/Close";
import cn from "classnames";
import React from "react";
import Icon from "../Icon";
import styles from "./styles.module.scss";
const defaultProps = {
    component: "div",
};
export const ModalHeader = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, onClose, children } = _a, rest = __rest(_a, ["component", "className", "onClose", "children"]);
    const _renderButtonClose = onClose && (<span className={styles.close} onClick={onClose} role="presentation">
      <Icon component={Close} color="unset" width={16} height={16}/>
    </span>);
    return (<Component {...rest} className={cn(styles["root"], className)}>
      <span className={styles.title}>{children}</span>
      
    </Component>);
};
export default ModalHeader;
//# sourceMappingURL=index.jsx.map