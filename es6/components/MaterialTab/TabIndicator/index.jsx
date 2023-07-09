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
const TabIndicator = React.forwardRef(function TabIndicator(props, ref) {
    const { className, color, orientation } = props, other = __rest(props, ["className", "color", "orientation"]);
    return (<span className={cn(styles.root, {
        [styles.vertical]: orientation === 'vertical',
    }, styles[`color${capitalize(color)}`], className)} ref={ref} {...other}/>);
});
export default TabIndicator;
//# sourceMappingURL=index.jsx.map