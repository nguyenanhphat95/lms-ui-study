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
import React from 'react';
import { Grid } from '../Grid';
import Portal, { PortalIds } from '../Portal';
import Typography, { TypoSizes, TypoTypes, TypoWeights } from '../Typography';
import styles from './styles.module.scss';
const defaultProps = {
    component: 'div',
    justifyContent: 'center',
};
export const Toast = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, justifyContent, children } = _a, rest = __rest(_a, ["component", "className", "justifyContent", "children"]);
    const toastContent = typeof children === 'string' ? (<Typography className={styles.content} size={TypoSizes.body2} weight={TypoWeights.bold} type={TypoTypes.invert}>
        {children}
      </Typography>) : (children);
    return (<Portal id={PortalIds.toast}>
      <div className={styles.wrapper}>
        <Grid container spacing={4} justifyContent={justifyContent}>
          <Grid item xs="auto">
            <Component className={cn(styles.toast, className)} {...rest}>
              {toastContent}
            </Component>
          </Grid>
        </Grid>
      </div>
    </Portal>);
};
export default Toast;
//# sourceMappingURL=Toast.jsx.map