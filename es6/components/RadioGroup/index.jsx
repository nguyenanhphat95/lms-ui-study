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
import React, { forwardRef } from 'react';
import RadioGroupContext from './RadioGroupContext';
import styles from './styles.module.scss';
export { default as RadioGroupContext } from './RadioGroupContext';
const defaultProps = {
    component: 'div',
    disabled: false
};
export const RadioGroup = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, name, disabled, selected, onChange, children } = _a, rest = __rest(_a, ["component", "className", "name", "disabled", "selected", "onChange", "children"]);
    const classOfComponent = cn(styles.root, className, {
        [styles.disabled]: disabled
    });
    const context = {
        name,
        disabled,
        selected,
        onChange
    };
    return (<Component {...rest} ref={ref} className={classOfComponent}>
      <RadioGroupContext.Provider value={context}>
        {children}
      </RadioGroupContext.Provider>
    </Component>);
});
export default RadioGroup;
//# sourceMappingURL=index.jsx.map