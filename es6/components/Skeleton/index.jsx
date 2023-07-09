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
import * as React from 'react';
import styles from './styles.module.scss';
export var SkeletonRadius;
(function (SkeletonRadius) {
    SkeletonRadius["none"] = "none";
    SkeletonRadius["light"] = "light";
    SkeletonRadius["regular"] = "regular";
    SkeletonRadius["bold"] = "bold";
    SkeletonRadius["max"] = "max";
})(SkeletonRadius || (SkeletonRadius = {}));
const Skeleton = React.forwardRef(function Skeleton(props, ref) {
    const { animation = 'wave', className, component: Component = 'div', height, style, variant = 'text', width, radius = SkeletonRadius.regular } = props, other = __rest(props, ["animation", "className", "component", "height", "style", "variant", "width", "radius"]);
    const hasChildren = Boolean(other.children);
    return (<Component ref={ref} className={cn(styles.root, styles[variant], {
        [styles[animation]]: animation !== false,
        [styles.withChildren]: hasChildren,
        [styles.fitContent]: hasChildren && !width,
        [styles.heightAuto]: hasChildren && !height,
        [styles[`radius-${String(radius)}`]]: radius,
    }, className)} {...other} style={Object.assign({ width,
        height }, style)}/>);
});
export default Skeleton;
//# sourceMappingURL=index.jsx.map