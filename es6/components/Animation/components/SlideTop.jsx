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
import React from 'react';
const SlideTop = (_a) => {
    var { children, duration, component } = _a, rest = __rest(_a, ["children", "duration", "component"]);
    const Component = motion[component];
    return (<Component initial={{ opacity: 0, y: '17.5%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '17.5%' }} transition={{
        duration,
        type: 'spring',
        stiffness: 275,
        damping: 17.5,
    }} {...rest}>
      {children}
    </Component>);
};
SlideTop.displayName = 'SlideTop';
export default SlideTop;
//# sourceMappingURL=SlideTop.jsx.map