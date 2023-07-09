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
import StepIcon from '../StepIcon';
import StepperContext from '../Stepper/StepperContext';
import Typography, { TypoWeights } from '../Typography';
import styles from './styles.module.scss';
const StepLabel = React.forwardRef(function StepLabel(props, ref) {
    const { children, className, error = false, noSpacingY = false, optional, StepIconComponent: StepIconComponentProp, StepIconProps } = props, other = __rest(props, ["children", "className", "error", "noSpacingY", "optional", "StepIconComponent", "StepIconProps"]);
    const { alternativeLabel, orientation, size } = React.useContext(StepperContext);
    const { active, disabled, completed, icon } = React.useContext(StepContext);
    let StepIconComponent = StepIconComponentProp;
    if (icon && !StepIconComponent) {
        StepIconComponent = StepIcon;
    }
    return (<span className={cn(styles.root, styles[orientation], {
        [styles.disabled]: disabled,
        [styles.alternativeLabel]: alternativeLabel,
        [styles.error]: error
    }, className, noSpacingY && styles.noSpacingY)} ref={ref} {...other}>
      {icon || StepIconComponent ? (<span className={cn(styles.iconContainer, {
        [styles.alternativeLabel]: alternativeLabel
    })}>
          <StepIconComponent completed={completed} active={active} error={error} icon={icon} size={size} {...StepIconProps}/>
        </span>) : null}
      <span className={styles.labelContainer}>
        {children ? (<Typography weight={TypoWeights.medium} className={cn(styles.label, {
        [styles.alternativeLabel]: alternativeLabel,
        [styles.completed]: completed,
        [styles.active]: active,
        [styles.error]: error
    }, styles[`size-${size}`])}>
            {children}
          </Typography>) : null}
        {optional}
      </span>
    </span>);
});
export default StepLabel;
//# sourceMappingURL=index.jsx.map