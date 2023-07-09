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
import DropdownList from '../DropdownList';
import Typography, { TypoSizes, TypoWeights } from '../Typography';
import styles from './styles.module.scss';
const defaultProps = {
    component: DropdownList,
};
const DropdownListField = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, note, label, fieldId, dropdownListClassName, children } = _a, rest = __rest(_a, ["component", "className", "note", "label", "fieldId", "dropdownListClassName", "children"]);
    const classOfComponent = cn(styles['text-field'], styles[`color-${rest.color}`], className);
    const keyOfField = fieldId || `field-${rest.name}`;
    const _renderLabel = label && (<Typography size={TypoSizes.body2} className={styles.label} component="label" htmlFor={keyOfField} weight={TypoWeights.bold}>
      {label}
    </Typography>);
    const _renderDropdownList = (<Component id={keyOfField} ref={ref} className={dropdownListClassName} {...rest}>
      {children}
    </Component>);
    const _renderNote = note && (<Typography size={TypoSizes.caption} className={styles.note}>
      {note}
    </Typography>);
    return (<div className={classOfComponent}>
      {_renderLabel}
      {_renderDropdownList}
      {_renderNote}
    </div>);
});
export default DropdownListField;
//# sourceMappingURL=index.jsx.map