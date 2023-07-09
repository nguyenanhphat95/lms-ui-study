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
import React, { forwardRef, useMemo, useRef } from 'react';
import Input from '../Input';
import styles from './styles.module.scss';
import { SwitchColors } from './SwitchTypes';
export * from './SwitchTypes';
const defaultProps = {
    component: 'label',
    color: SwitchColors.primary,
    disabled: false
};
export const Switch = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, disabled, onChange, checked, name, color, iconRef, iconProps, children } = _a, rest = __rest(_a, ["component", "className", "disabled", "onChange", "checked", "name", "color", "iconRef", "iconProps", "children"]);
    const refOfInput = useRef();
    const classOfRoot = cn(styles.root, className, {
        [styles.disabled]: disabled,
        [styles.checked]: checked,
        [styles[color]]: !!color
    });
    const _children = useMemo(() => children && <span className={styles.content}>{children}</span>, [children, styles.content]);
    return (<Component {...rest} ref={ref} className={classOfRoot} role="checkbox">
      <div className={styles.icon}>
        <div className={styles.dot}/>
        <div className={styles.nav}>
          
        </div>
      </div>
      {_children}
      <Input readOnly type="checkbox" ref={refOfInput} name={name} className={styles.input} checked={checked} onChange={onChange}/>
    </Component>);
});
export default Switch;
//# sourceMappingURL=index.jsx.map