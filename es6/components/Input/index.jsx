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
import { getArrayOf } from '@App/utils/getArrayOf';
import cn from 'classnames';
import React, { forwardRef } from 'react';
import InputBase from '../InputBase';
import { InputColors, InputSizes } from './InputTypes';
import styles from './styles.module.scss';
export * from './InputTypes';
export { InputSizes, InputColors };
const defaultProps = {
    component: InputBase,
    size: InputSizes.lg,
    color: InputColors.primary
};
export const Input = forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, color, beforeInput, afterInput, wrapperRef } = _a, rest = __rest(_a, ["component", "className", "color", "beforeInput", "afterInput", "wrapperRef"]);
    const classOfRoot = cn(styles.root, styles[`color-${color}`], className, rest.disabled && styles.disabled);
    const beforeInputs = getArrayOf(beforeInput);
    const afterInputs = getArrayOf(afterInput);
    const classOfInputBase = cn(styles.input, styles[`size-${rest.size}`], beforeInputs.length > 0 && styles['has-before'], afterInputs.length > 0 && styles['has-after'], rest.disabled && styles.disabled);
    return (<div className={classOfRoot} role="presentation" ref={wrapperRef}>
      {beforeInputs.map((component, index) => React.cloneElement(component, {
        key: index.toString(),
        disabled: rest.disabled,
        size: rest.size
    }))}
      <Component {...rest} ref={ref} className={classOfInputBase}/>
      {afterInputs.map((component, index) => React.cloneElement(component, {
        key: index.toString(),
        disabled: rest.disabled,
        size: rest.size
    }))}
    </div>);
});
Input.displayName = 'Input';
export default Input;
//# sourceMappingURL=index.jsx.map