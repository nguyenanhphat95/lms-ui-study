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
export var AnimationItemTypes;
(function (AnimationItemTypes) {
    AnimationItemTypes["SlideTop"] = "SlideTop";
})(AnimationItemTypes || (AnimationItemTypes = {}));
const animations = new Map().set(AnimationItemTypes.SlideTop, {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: '17.5%' },
    transition: {
        type: 'spring',
        stiffness: 275,
        damping: 17.5
    }
});
const defaultProps = {
    component: 'div',
    className: null
};
export const AnimationItem = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component, type, children } = _a, rest = __rest(_a, ["component", "type", "children"]);
    const Framer = motion[component];
    const variants = animations.get(type);
    return (<Framer {...rest} variants={variants}>
      {children}
    </Framer>);
};
AnimationItem.displayName = 'AnimationItem';
export default AnimationItem;
//# sourceMappingURL=Item.jsx.map