import compose from '@App/utils/compose';
import useImageFallback from '@App/utils/hooks/useImageFallback';
import cn from 'classnames';
import React, { HTMLAttributes, useEffect } from 'react';
import LazyLoadImage from './../LazyLoadImage';
import styles from './styles.module.scss';

interface ImageProps extends HTMLAttributes<HTMLElement> {
  fallback?: string;
  src: string;
  alt?: string;
}

export const Image = (props: ImageProps) => {
  const { fallback, src, alt, onError, className, ...rest } = props;
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

  return (
    <img
      alt={alt}
      src={sourceOfImage}
      onError={handleOnError}
      className={imageClassName}
      {...rest}
    />
  );
};

const WrapperLazyLoadImage = (props: any) => {
  const { src, lazyload, fallback } = props;
  const customProps = { ...props };
  if (customProps.src) {
    delete customProps.src;
  }
  if (lazyload) {
    if (customProps.lazyload) {
      delete customProps.lazyload;
    }
    const dataSrc = src || fallback;
    return <LazyLoadImage data-src={dataSrc} {...customProps} />;
  }
  return <Image {...props} />;
};

export default WrapperLazyLoadImage;
