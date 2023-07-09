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
import RightArrowV3 from "lms-icons/components/RightArrowV3";
import cn from "classnames";
import _isEmpty from "lodash/isEmpty";
import React, { useCallback } from "react";
import ImageGallery from "react-image-gallery";
import Icon from "../Icon";
import Image from "../Image";
import styles from "./styles.module.scss";
const defaultProps = {
    images: [],
    lazyLoad: true,
    showPlayButton: false,
};
const Gallery = React.forwardRef((props, ref) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { images, className } = _a, rest = __rest(_a, ["images", "className"]);
    const refOfRoot = ref || React.useRef(null);
    const formatGalleryImages = useCallback(() => {
        return images.map((x) => ({
            original: x.url,
            thumbnail: x.url,
            thumbnailClass: styles["wrapper-image-thumbnail"],
        }));
    }, [images]);
    function _renderThumbInner(image) {
        return (<Image className={styles["image-thumbnail"]} src={image.thumbnail}/>);
    }
    function _handleClickImage() {
        if (refOfRoot && refOfRoot.current && refOfRoot.current.fullScreen) {
            refOfRoot.current.fullScreen();
        }
    }
    const _renderLeftNav = (onClick, disabled) => {
        return (<Icon onClick={onClick} component={RightArrowV3} className={cn(styles["left-arrow"], styles["arrow"])}/>);
    };
    const _renderRightNav = (onClick, disabled) => {
        return (<Icon onClick={onClick} component={RightArrowV3} className={cn(styles["right-arrow"], styles["arrow"])}/>);
    };
    const classOfRoot = cn(styles["root"], className);
    if (!_isEmpty(images)) {
        return (<ImageGallery ref={refOfRoot} items={formatGalleryImages()} additionalClass={classOfRoot} renderThumbInner={_renderThumbInner} onClick={_handleClickImage} renderLeftNav={_renderLeftNav} renderRightNav={_renderRightNav} {...rest}/>);
    }
    return null;
});
export default React.memo(Gallery);
//# sourceMappingURL=Gallery.jsx.map