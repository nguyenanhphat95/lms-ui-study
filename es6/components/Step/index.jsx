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
import clsx from 'clsx';
import * as React from 'react';
import StepperContext from '../Stepper/StepperContext';
import StepContext from './StepContext';
import styles from './styles.module.scss';
const Step = React.forwardRef(function Step(props, ref) {
    const { active: activeProp, children, className, completed: completedProp, disabled: disabledProp, expanded = false, index, last } = props, other = __rest(props, ["active", "children", "className", "completed", "disabled", "expanded", "index", "last"]);
    const { activeStep, connector, alternativeLabel, orientation, nonLinear } = React.useContext(StepperContext);
    let [active = false, completed = false, disabled = false] = [
        activeProp,
        completedProp,
        disabledProp
    ];
    if (activeStep === index) {
        active = activeProp !== undefined ? activeProp : true;
    }
    else if (!nonLinear && activeStep > index) {
        completed = completedProp !== undefined ? completedProp : true;
    }
    else if (!nonLinear && activeStep < index) {
        disabled = disabledProp !== undefined ? disabledProp : true;
    }
    const contextValue = React.useMemo(() => ({
        index,
        last,
        expanded,
        icon: index + 1,
        active,
        completed,
        disabled
    }), [index, last, expanded, active, completed, disabled]);
    const newChildren = (<div className={clsx(styles.root, styles[orientation], {
        [styles.alternativeLabel]: alternativeLabel,
        [styles.completed]: completed
    }, className)} ref={ref} {...other}>
      {connector && alternativeLabel && index !== 0 ? connector : null}
      {children}
    </div>);
    return (<StepContext.Provider value={contextValue}>
      {connector && !alternativeLabel && index !== 0 ? (<React.Fragment>
          {connector}
          {newChildren}
        </React.Fragment>) : (newChildren)}
    </StepContext.Provider>);
});
export default Step;
//# sourceMappingURL=index.jsx.map