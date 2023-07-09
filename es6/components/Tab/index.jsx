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
import React, { useContext } from 'react';
import { TabContext, TabOrientation } from '../Tabs';
import Typography, { TypoSizes, TypoTypes, TypoWeights } from '../Typography';
import styles from './styles.module.scss';
import { TabLabelPlacement } from './TabTypes';
const defaultProps = {
    component: 'li',
    disabled: false,
    fullWidth: true,
    border: true,
    orientation: TabOrientation.horizontal,
};
export const Tab = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, className, size: _size, disabled, fullWidth, index, border, label, labelPlacement, children, orientation } = _a, rest = __rest(_a, ["component", "className", "size", "disabled", "fullWidth", "index", "border", "label", "labelPlacement", "children", "orientation"]);
    const context = useContext(TabContext);
    const activated = context.value === index;
    const size = _size || context.size;
    const classOfComponent = cn(styles.root, {
        [styles[`size-${size}`]]: size,
        [styles.activated]: activated,
        [styles.disabled]: disabled,
        [styles['full-width']]: fullWidth,
        [styles.border]: border,
        [styles[orientation]]: !!orientation,
    }, className);
    function handleClick() {
        if (context && context.onChange) {
            context.onChange(index);
        }
    }
    const shouldUseTag = !!label;
    let contentOfTab = children;
    if (shouldUseTag) {
        contentOfTab = [
            <Typography key="label" weight={TypoWeights.inherit} variant={TypoSizes.inherit} type={TypoTypes.inherit} className={styles.label}>
        {label}
      </Typography>,
        ];
        if (labelPlacement === TabLabelPlacement.right) {
            contentOfTab.reverse();
        }
    }
    return (<Component {...rest} onClick={handleClick} className={classOfComponent}>
      {contentOfTab}
    </Component>);
};
export default Tab;
export * from './TabTypes';
//# sourceMappingURL=index.jsx.map