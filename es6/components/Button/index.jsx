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
import Spinner from "lms-icons/components/Spinner";
import cn from "classnames";
import React, { forwardRef } from "react";
import ButtonBase from "../ButtonBase";
import Icon from "../Icon";
import { ButtonColors, ButtonSizes } from "./ButtonColors";
import styles from "./styles.module.scss";
export * from "./ButtonColors";
const defaultProps = {
    component: "button",
    disabled: false,
    fullWidth: true,
    loading: false,
    color: ButtonColors.primary,
    buttonSize: ButtonSizes.md,
    chip: false,
};
export const Button = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, color, buttonSize, className, children, disabled, activated, fullWidth, loading, icon, chip } = _a, rest = __rest(_a, ["component", "color", "buttonSize", "className", "children", "disabled", "activated", "fullWidth", "loading", "icon", "chip"]);
    const shouldUseIcon = !!icon || !!loading;
    const classOfComponent = cn(styles.btn, styles[`color-${color}`], styles[`size-${buttonSize}`], className, {
        [styles.disabled]: disabled,
        [styles.activated]: activated,
        [styles.spinning]: loading,
        [styles["full-width"]]: fullWidth,
        [styles["use-icon"]]: shouldUseIcon,
        [styles.chip]: chip,
    });
    const contentOfButton = shouldUseIcon ? (<Icon className={styles.icon} component={loading ? Spinner : icon}/>) : (children);
    return (<ButtonBase {...rest} ref={ref} component={Component} disabled={disabled} className={classOfComponent}>
      {contentOfButton}
    </ButtonBase>);
});
Button.displayName = "Button";
export default Button;
//# sourceMappingURL=index.jsx.map