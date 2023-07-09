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
import { motion } from 'framer-motion';
import React, { useMemo } from 'react';
import _merge from 'lodash-es/merge';
const defaultProps = {
    component: 'div',
    className: null,
    staggerChildren: 0.1
};
const LIST_VARIANTS = {
    visible: {
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.1
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            when: 'afterChildren'
        }
    }
};
export const AnimationList = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component, staggerChildren, children } = _a, rest = __rest(_a, ["component", "staggerChildren", "children"]);
    const Framer = motion[component];
    const variants = useMemo(() => _merge({}, LIST_VARIANTS, {
        visible: { transition: { staggerChildren } }
    }), [staggerChildren]);
    return (<Framer initial="hidden" animate="visible" variants={variants} {...rest}>
      {children}
    </Framer>);
};
AnimationList.displayName = 'AnimationList';
export default AnimationList;
//# sourceMappingURL=List.jsx.map