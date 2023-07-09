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
import * as React from 'react';
import Typography, { TypoWeights } from '../Typography';
import styles from './styles.module.scss';
const StepIcon = React.forwardRef((props, ref) => {
    const { active = false, className: classNameProp, completed = false, error = false, icon, classNameActive, classNameCompleted, classNameDefault } = props, rest = __rest(props, ["active", "className", "completed", "error", "icon", "classNameActive", "classNameCompleted", "classNameDefault"]);
    if (typeof icon === 'number' || typeof icon === 'string') {
        const className = cn(classNameProp, styles.root, classNameActive ? classNameActive : active && styles.active, classNameCompleted ? classNameCompleted : completed && styles.completed, classNameDefault ? classNameDefault : styles.default, styles[`size-${rest.size}`]);
        return (<Typography weight={TypoWeights.bold} className={className} ref={ref} {...rest}>
        {icon}
      </Typography>);
    }
    return icon;
});
export default StepIcon;
//# sourceMappingURL=index.jsx.map