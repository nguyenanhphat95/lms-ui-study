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
import { Typography, TypoTypes, TypoWeights, TypoSizes } from '@App/index';
import capitalize from '@App/utils/capitalize';
import cn from 'classnames';
import * as React from 'react';
import styles from './styles.module.scss';
const defaultProps = {
    component: 'div'
};
export const MaterialTab = React.forwardRef(function Tab(props, ref) {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { className, disabled = false, fullWidth, icon, indicator, label, onChange, onClick, onFocus, selected, selectionFollowsFocus, textColor = 'inherit', value, wrapped = false, component: Component } = _a, other = __rest(_a, ["className", "disabled", "fullWidth", "icon", "indicator", "label", "onChange", "onClick", "onFocus", "selected", "selectionFollowsFocus", "textColor", "value", "wrapped", "component"]);
    const handleClick = event => {
        if (onChange) {
            onChange(event, value);
        }
        if (onClick) {
            onClick(event);
        }
    };
    const handleFocus = event => {
        if (selectionFollowsFocus && !selected && onChange) {
            onChange(event, value);
        }
        if (onFocus) {
            onFocus(event);
        }
    };
    return (<Component className={cn(styles.root, styles[`textColor${capitalize(textColor)}`], {
        [styles.disabled]: disabled,
        [styles.selected]: selected,
        [styles.labelIcon]: label && icon,
        [styles.fullWidth]: fullWidth,
        [styles.wrapped]: wrapped
    }, className)} ref={ref} role="tab" aria-selected={selected} onClick={handleClick} onFocus={handleFocus} tabIndex={selected ? 0 : -1} {...other}>
      <Typography size={TypoSizes.body1} className={styles.wrapper} type={TypoTypes.primary} weight={selected ? TypoWeights.bold : TypoWeights.inherit}>
        {icon}
        {label}
      </Typography>
      {indicator}
    </Component>);
});
export default MaterialTab;
//# sourceMappingURL=index.jsx.map