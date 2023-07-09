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
import cn from 'classnames';
import React from 'react';
import Typography, { TypoTypes } from '../Typography';
import styles from './styles.module.scss';
export var AlertTypes;
(function (AlertTypes) {
    AlertTypes["Warning"] = "highlight";
    AlertTypes["Error"] = "alert";
})(AlertTypes || (AlertTypes = {}));
const defaultProps = {
    type: AlertTypes.Warning
};
const Alert = React.forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { type, children } = _a, rest = __rest(_a, ["type", "children"]);
    const classOfRoot = cn(styles['root'], {
        [styles[`type-${type}`]]: type
    });
    return (<div className={classOfRoot} {...rest}>
      <Typography type={TypoTypes.invert}>{children}</Typography>
    </div>);
});
export default Alert;
//# sourceMappingURL=Alert.jsx.map