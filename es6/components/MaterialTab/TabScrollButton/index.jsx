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
import RightArrow from "lms-icons/components/RightArrow";
import { Icon } from "../../Icon";
import cn from "classnames";
import * as React from "react";
import styles from "./styles.module.scss";
const TabScrollButton = React.forwardRef(function TabScrollButton(props, ref) {
    const { className: classNameProp, direction, orientation, disabled } = props, other = __rest(props, ["className", "direction", "orientation", "disabled"]);
    return (<div className={cn(styles.root, {
        [styles.vertical]: orientation === "vertical",
        [styles.disabled]: disabled,
    }, classNameProp)} ref={ref} role={null} tabIndex={null} {...other}>
      {direction === "left" ? (<Icon component={RightArrow} style={{
        transform: "rotate(180deg)",
    }} width={16} height={16}/>) : (<Icon component={RightArrow} width={16} height={16}/>)}
    </div>);
});
export default TabScrollButton;
//# sourceMappingURL=index.jsx.map