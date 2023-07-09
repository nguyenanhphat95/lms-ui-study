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
import cx from 'classnames';
import React, { forwardRef, memo } from 'react';
import Input from '../Input';
import Typography, { TypoSizes, TypoTypes, TypoWeights } from '../Typography';
import styles from './styles.module.scss';
const defaultProps = {
    component: Input,
    type: TypoTypes.default,
    labelProps: {},
};
export const TextField = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, note, label, fieldId, inputClassName, labelProps, afterLabel } = _a, rest = __rest(_a, ["component", "className", "note", "label", "fieldId", "inputClassName", "labelProps", "afterLabel"]);
    const classOfComponent = cx(styles['text-field'], styles[`color-${rest.color}`], className);
    const keyOfField = fieldId || `field-${rest.name}`;
    const _renderLabel = label && (<React.Fragment>
      <Typography size={TypoSizes.body2} className={styles.label} component="label" htmlFor={keyOfField} weight={TypoWeights.bold} {...labelProps}>
        {label}
        {afterLabel}
      </Typography>
    </React.Fragment>);
    const _renderInput = (<Component id={keyOfField} ref={ref} inputClassName={inputClassName} autoComplete="off" {...rest}/>);
    const _renderNote = note && (<Typography size={TypoSizes.caption} className={styles.note}>
      {note}
    </Typography>);
    return (<div className={classOfComponent}>
      {_renderLabel}
      {_renderInput}
      {_renderNote}
    </div>);
});
export default memo(TextField);
//# sourceMappingURL=index.jsx.map