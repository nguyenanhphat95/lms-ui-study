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
const Fade = (_a) => {
    var { children, duration, component } = _a, rest = __rest(_a, ["children", "duration", "component"]);
    const Component = motion[component];
    return (<Component initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{
        duration,
    }} {...rest}>
      {children}
    </Component>);
};
Fade.displayName = 'Fade';
export default Fade;
//# sourceMappingURL=Fade.jsx.map