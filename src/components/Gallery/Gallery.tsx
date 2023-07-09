import RightArrowV3 from "lms-icons/components/RightArrowV3";
import cn from "classnames";
import _isEmpty from "lodash/isEmpty";
import React, { useCallback } from "react";
import ImageGallery from "react-image-gallery";
import Icon from "../Icon";
import Image from "../Image";
import styles from "./styles.module.scss";

export interface IGalleryImage {
  original?: string;
  thumbnail?: string;
  originalClass?: string;
}

interface Props {
  images?: { url: string }[];
  className?: string;
  [key: string]: any;
}

const defaultProps: Props = {
  images: [],
  lazyLoad: true,
  showPlayButton: false,
};

const Gallery = React.forwardRef((props: Props, ref: React.Ref<any>) => {
  const { images, className, ...rest } = { ...defaultProps, ...props };
  const refOfRoot: any = ref || React.useRef(null);

  const formatGalleryImages = useCallback(() => {
    return images.map((x: { url: string }) => ({
      original: x.url,
      thumbnail: x.url,
      thumbnailClass: styles["wrapper-image-thumbnail"],
    }));
  }, [images]);

  function _renderThumbInner(image: IGalleryImage) {
    return (
      <Image className={styles["image-thumbnail"]} src={image.thumbnail} />
    );
  }

  function _handleClickImage() {
    if (refOfRoot && refOfRoot.current && refOfRoot.current.fullScreen) {
      refOfRoot.current.fullScreen();
    }
  }

  const _renderLeftNav = (onClick, disabled) => {
    return (
      <Icon
        onClick={onClick}
        component={RightArrowV3}
        className={cn(styles["left-arrow"], styles["arrow"])}
      />
    );
  };

  const _renderRightNav = (onClick, disabled) => {
    return (
      <Icon
        onClick={onClick}
        component={RightArrowV3}
        className={cn(styles["right-arrow"], styles["arrow"])}
      />
    );
  };

  const classOfRoot = cn(styles["root"], className);
  if (!_isEmpty(images)) {
    return (
      <ImageGallery
        ref={refOfRoot}
        items={formatGalleryImages()}
        additionalClass={classOfRoot}
        renderThumbInner={_renderThumbInner}
        onClick={_handleClickImage}
        renderLeftNav={_renderLeftNav}
        renderRightNav={_renderRightNav}
        {...rest}
      />
    );
  }
  return null;
});

export default React.memo(Gallery);
