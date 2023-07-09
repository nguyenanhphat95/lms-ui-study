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
import capitalize from '@App/utils/capitalize';
import cn from 'classnames';
import * as React from 'react';
import styles from './styles.module.scss';
const Badge = React.forwardRef(function Badge(props, ref) {
    const _a = Object.assign({}, props), { anchorOrigin = {
        vertical: 'top',
        horizontal: 'right',
    }, badgeContent, children, className, badgeClassName, color = 'default', component: ComponentProp = 'span', invisible: invisibleProp, max = 99, overlap = 'rectangle', showZero = false, variant = 'standard' } = _a, other = __rest(_a, ["anchorOrigin", "badgeContent", "children", "className", "badgeClassName", "color", "component", "invisible", "max", "overlap", "showZero", "variant"]);
    let invisible = invisibleProp;
    if (invisibleProp == null &&
        ((badgeContent === 0 && !showZero) || (badgeContent == null && variant !== 'dot'))) {
        invisible = true;
    }
    let displayValue = '';
    if (variant !== 'dot') {
        displayValue = badgeContent > max ? `${max}+` : badgeContent;
    }
    return (<ComponentProp className={cn(styles.root, className)} ref={ref} {...other}>
      {children}
      <span className={cn(badgeClassName, styles.badge, styles[`${anchorOrigin.horizontal}${capitalize(anchorOrigin.vertical)}}`], styles[`anchorOrigin${capitalize(anchorOrigin.vertical)}${capitalize(anchorOrigin.horizontal)}${capitalize(overlap)}`], {
        [styles[`color${capitalize(color)}`]]: color !== 'default',
        [styles.invisible]: invisible,
        [styles.dot]: variant === 'dot',
    })}>
        {displayValue}
      </span>
    </ComponentProp>);
});
export default Badge;
//# sourceMappingURL=index.jsx.map