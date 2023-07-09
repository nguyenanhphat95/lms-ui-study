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
import React from 'react';
import Fade from './components/Fade';
import ScaleIn from './components/ScaleIn';
import ScaleOut from './components/ScaleOut';
import SlideLeft from './components/SlideLeft';
import SlideRight from './components/SlideRight';
import SlideTop from './components/SlideTop';
export var AnimationTypes;
(function (AnimationTypes) {
    AnimationTypes["Fade"] = "Fade";
    AnimationTypes["SlideTop"] = "SlideTop";
    AnimationTypes["SlideRight"] = "SlideRight";
    AnimationTypes["SlideLeft"] = "SlideLeft";
    AnimationTypes["ScaleIn"] = "ScaleIn";
    AnimationTypes["ScaleOut"] = "ScaleOut";
})(AnimationTypes || (AnimationTypes = {}));
const animations = new Map()
    .set(AnimationTypes.Fade, Fade)
    .set(AnimationTypes.SlideTop, SlideTop)
    .set(AnimationTypes.SlideRight, SlideRight)
    .set(AnimationTypes.SlideLeft, SlideLeft)
    .set(AnimationTypes.ScaleIn, ScaleIn)
    .set(AnimationTypes.ScaleOut, ScaleOut);
const defaultProps = {
    component: 'div',
    className: null
};
export const Animation = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component, type, children } = _a, rest = __rest(_a, ["component", "type", "children"]);
    const Framer = animations.get(type);
    return (<Framer {...rest} component={component}>
      {children}
    </Framer>);
};
Animation.displayName = 'Animation';
export default Animation;
//# sourceMappingURL=index.jsx.map