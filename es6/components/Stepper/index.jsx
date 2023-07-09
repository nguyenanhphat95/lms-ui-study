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
import StepConnector from '../StepConnector';
import StepperContext from './StepperContext';
import styles from './styles.module.scss';
const Stepper = React.forwardRef(function Stepper(props, ref) {
    const defaultConnector = <StepConnector size={props.size || 'md'}/>;
    const { activeStep = 0, alternativeLabel = false, children, className, connector = defaultConnector, nonLinear = false, orientation = 'horizontal', size = 'md' } = props, rest = __rest(props, ["activeStep", "alternativeLabel", "children", "className", "connector", "nonLinear", "orientation", "size"]);
    const childrenArray = React.Children.toArray(children);
    const steps = childrenArray.map((step, index) => {
        return React.cloneElement(step, Object.assign({ index, last: index + 1 === childrenArray.length, size }, step.props));
    });
    const contextValue = React.useMemo(() => ({
        activeStep,
        alternativeLabel,
        connector,
        nonLinear,
        orientation,
        size
    }), [activeStep, alternativeLabel, connector, nonLinear, orientation, size]);
    return (<StepperContext.Provider value={contextValue}>
      <div className={cn(styles.root, styles[orientation], {
        [styles.alternativeLabel]: alternativeLabel
    }, className)} ref={ref} {...rest}>
        {steps}
      </div>
    </StepperContext.Provider>);
});
export default Stepper;
//# sourceMappingURL=index.jsx.map