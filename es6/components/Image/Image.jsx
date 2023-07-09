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
import compose from '@App/utils/compose';
import useImageFallback from '@App/utils/hooks/useImageFallback';
import cn from 'classnames';
import React, { useEffect } from 'react';
import LazyLoadImage from './../LazyLoadImage';
import styles from './styles.module.scss';
export const Image = (props) => {
    const { fallback, src, alt, onError, className } = props, rest = __rest(props, ["fallback", "src", "alt", "onError", "className"]);
    const [sourceOfImage, onFallback] = useImageFallback(src, fallback);
    useEffect(() => {
        const isMissingSource = !src;
        const isDiffFallback = sourceOfImage !== fallback;
        const shouldCallFallback = isMissingSource && isDiffFallback;
        if (shouldCallFallback) {
            onFallback();
        }
    }, [src, sourceOfImage, fallback]);
    const handleOnError = compose(onFallback, onError);
    const imageClassName = cn(styles.image, className);
    return (<img alt={alt} src={sourceOfImage} onError={handleOnError} className={imageClassName} {...rest}/>);
};
const WrapperLazyLoadImage = (props) => {
    const { src, lazyload, fallback } = props;
    const customProps = Object.assign({}, props);
    if (customProps.src) {
        delete customProps.src;
    }
    if (lazyload) {
        if (customProps.lazyload) {
            delete customProps.lazyload;
        }
        const dataSrc = src || fallback;
        return <LazyLoadImage data-src={dataSrc} {...customProps}/>;
    }
    return <Image {...props}/>;
};
export default WrapperLazyLoadImage;
//# sourceMappingURL=Image.jsx.map