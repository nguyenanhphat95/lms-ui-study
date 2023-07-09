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
import React, { forwardRef, useCallback, useContext, useMemo, useRef } from 'react';
import { CheckBoxGroupContext } from '../CheckboxGroup';
import Icon from '../Icon';
import Input from '../Input';
import styles from './styles.module.scss';
import { getIconByStatus, getStatusOfCheckbox } from './utils';
export * from './CheckboxTypes';
import cn from 'classnames';
import compose from '@App/utils/compose';
const defaultProps = {
    component: 'label',
    disabled: false
};
export const Checkbox = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, disabled, onChange, value, checked, isIntermediate, name, iconRef, iconProps, children } = _a, rest = __rest(_a, ["component", "className", "disabled", "onChange", "value", "checked", "isIntermediate", "name", "iconRef", "iconProps", "children"]);
    const context = useContext(CheckBoxGroupContext);
    const checkboxName = name || context.name;
    const isDisabled = disabled || context.disabled;
    const checkIsBoolean = typeof checked === 'boolean';
    const isChecked = checkIsBoolean
        ? checked
        : (context.selected || []).includes(value);
    const onChangeComposed = useCallback(compose(onChange, context.onChange), [
        onChange,
        context.onChange
    ]);
    const refOfInput = useRef();
    const statusOfCheckbox = getStatusOfCheckbox(isChecked, isIntermediate);
    const iconOfCheckbox = getIconByStatus(statusOfCheckbox);
    const classOfRoot = cn(styles.root, className, {
        [styles.disabled]: isDisabled,
        [styles.checked]: isChecked,
        [styles.intermediate]: isIntermediate
    });
    const _children = useMemo(() => children && <span className={styles.content}>{children}</span>, [children, styles.content]);
    return (<Component {...rest} ref={ref} className={classOfRoot} role="checkbox">
      <Icon ref={iconRef} className={styles.icon} component={iconOfCheckbox} {...iconProps}/>
      {_children}
      <Input readOnly type="checkbox" ref={refOfInput} name={checkboxName} value={value} className={styles.input} checked={isChecked} onChange={onChangeComposed}/>
    </Component>);
});
export default Checkbox;
//# sourceMappingURL=Checkbox.jsx.map