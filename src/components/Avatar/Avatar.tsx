import cn from 'classnames';
import * as React from 'react';
import { HTMLAttributes } from 'react';
import styles from './styles.module.scss';

function useLoaded({ src, srcSet }: any) {
  const [loaded, setLoaded] = React.useState<any>(null);

  React.useEffect(() => {
    if (!src && !srcSet) {
      return undefined;
    }

    setLoaded(false);

    let active = true;
    const image: any = new Image();
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

export interface AvatarProps extends HTMLAttributes<HTMLElement> {
  component?: React.ElementType;
  alt?: string;
  imgProps?: { [key: string]: string };
  src?: string;
  srcSet?: string;
  variant?: string;
  sizes?: any;
}

export const Avatar = React.forwardRef(function Avatar(props: AvatarProps, ref) {
  const {
    alt,
    children: childrenProp,
    className,
    component: Component = 'div',
    imgProps,
    sizes,
    src,
    srcSet,
    variant = 'circular',
    ...other
  } = props;

  let children: any = null;

  // Use a hook instead of onError on the img element to support server-side rendering.
  const loaded = useLoaded({ src, srcSet });
  const hasImg = src || srcSet;
  const hasImgNotFailing = hasImg && loaded !== 'error';

  if (src && hasImgNotFailing) {
    children = (
      <img alt={alt} src={src} srcSet={srcSet} sizes={sizes} className={styles.img} {...imgProps} />
    );
  } else if (childrenProp != null) {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = <img className={styles.fallback} src="/static/images/defaultAvatar.png" />;
  }

  return (
    <Component
      className={cn(
        styles.root,
        styles.system,
        styles[variant],
        {
          [styles.colorDefault]: !hasImgNotFailing,
        },
        className,
      )}
      ref={ref}
      {...other}>
      {children}
    </Component>
  );
});

export default Avatar;
