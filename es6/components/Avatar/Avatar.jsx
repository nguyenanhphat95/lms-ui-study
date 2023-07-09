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
function useLoaded({ src, srcSet }) {
    const [loaded, setLoaded] = React.useState(null);
    React.useEffect(() => {
        if (!src && !srcSet) {
            return undefined;
        }
        setLoaded(false);
        let active = true;
        const image = new Image();
        image.src = src;
        image.srcSet = srcSet;
        image.onload = () => {
            if (!active) {
                return;
            }
            setLoaded('loaded');
        };
        image.onerror = () => {
            if (!active) {
                return;
            }
            setLoaded('error');
        };
        return () => {
            active = false;
        };
    }, [src, srcSet]);
    return loaded;
}
export const Avatar = React.forwardRef(function Avatar(props, ref) {
    const { alt, children: childrenProp, className, component: Component = 'div', imgProps, sizes, src, srcSet, variant = 'circular' } = props, other = __rest(props, ["alt", "children", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"]);
    let children = null;
    const loaded = useLoaded({ src, srcSet });
    const hasImg = src || srcSet;
    const hasImgNotFailing = hasImg && loaded !== 'error';
    if (src && hasImgNotFailing) {
        children = (<img alt={alt} src={src} srcSet={srcSet} sizes={sizes} className={styles.img} {...imgProps}/>);
    }
    else if (childrenProp != null) {
        children = childrenProp;
    }
    else if (hasImg && alt) {
        children = alt[0];
    }
    else {
        children = <img className={styles.fallback} src="/static/images/defaultAvatar.png"/>;
    }
    return (<Component className={cn(styles.root, styles.system, styles[variant], {
        [styles.colorDefault]: !hasImgNotFailing,
    }, className)} ref={ref} {...other}>
      {children}
    </Component>);
});
export default Avatar;
//# sourceMappingURL=Avatar.jsx.map