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
import StepContext from '../Step/StepContext';
import StepperContext from '../Stepper/StepperContext';
import styles from './styles.module.scss';
const StepConnector = React.forwardRef(function StepConnector(props, ref) {
    const { className, size } = props, other = __rest(props, ["className", "size"]);
    const { alternativeLabel, orientation } = React.useContext(StepperContext);
    const { active, disabled, completed } = React.useContext(StepContext);
    return (<div className={cn(styles.root, styles[orientation], {
        [styles.alternativeLabel]: alternativeLabel,
        [styles.active]: active,
        [styles.completed]: completed,
        [styles.disabled]: disabled
    }, className)} ref={ref} {...other}>
      <span className={cn(styles['line-connector'], {
        [styles.lineHorizontal]: orientation === 'horizontal',
        [styles.lineVertical]: orientation === 'vertical'
    }, styles[`vertical-${size}`])}/>
    </div>);
});
export default StepConnector;
//# sourceMappingURL=index.jsx.map