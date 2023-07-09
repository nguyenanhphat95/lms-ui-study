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
import Button from '../Button';
import StepContext from '../Step/StepContext';
import StepLabel from '../StepLabel';
import StepperContext from '../Stepper/StepperContext';
import styles from './styles.module.scss';
const StepButton = React.forwardRef(function StepButton(props, ref) {
    const { children, className, icon, optional } = props, other = __rest(props, ["children", "className", "icon", "optional"]);
    const { disabled } = React.useContext(StepContext);
    const { orientation } = React.useContext(StepperContext);
    const childProps = {
        icon,
        optional
    };
    const child = <StepLabel {...childProps}>{children}</StepLabel>;
    return (<Button disabled={disabled} className={cn(styles.root, styles[orientation], className)} ref={ref} {...other}>
      {child}
    </Button>);
});
export default StepButton;
//# sourceMappingURL=index.jsx.map