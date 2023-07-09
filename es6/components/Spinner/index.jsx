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
import SpinnerIcon from "lms-icons/components/Spinner";
import Icon from "./../Icon";
import React from "react";
import styles from "./styles.module.scss";
const defaultProps = {};
const Spinner = React.forwardRef((props) => {
    const rest = __rest(Object.assign(Object.assign({}, defaultProps), props), []);
    return <Icon component={SpinnerIcon} className={styles.root}/>;
});
export default Spinner;
//# sourceMappingURL=index.jsx.map