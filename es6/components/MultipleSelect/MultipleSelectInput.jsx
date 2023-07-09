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
import React, { forwardRef, Fragment } from 'react';
import Typography, { TypoTypes } from '../Typography';
import styles from './styles.module.scss';
const defaultProps = {
    component: 'input',
    placeholder: '',
    className: ''
};
const MultiSelectInput = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, onClick, display, placeholder } = _a, rest = __rest(_a, ["component", "className", "onClick", "display", "placeholder"]);
    return (<Fragment>
        <div className={cn(styles.select, styles[`multiple-select-size-${rest.size}`], className, {
        [styles.disabled]: rest.disabled,
        [styles.placeholder]: !display
    })} ref={ref} onClick={onClick}>
          <Typography truncate={1} type={TypoTypes.sub} className={cn(styles['label-text'], styles[`label-size-${rest.size}`])}>
            {display ? display : placeholder}
          </Typography>
        </div>
        <Component {...rest} type="hidden"/>
      </Fragment>);
});
export default React.memo(MultiSelectInput);
//# sourceMappingURL=MultipleSelectInput.jsx.map