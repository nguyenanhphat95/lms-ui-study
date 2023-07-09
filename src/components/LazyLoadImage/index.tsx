import React, { PureComponent } from 'react';

const onImgError = (event: any, defaultImage: string) => {
  if (event.target.nodeName === 'IMG') {
    event.target.src = defaultImage;
    if (event.target.srcset) {
      event.target.srcset = defaultImage;
    }
    event.target.classList && event.target.classList.add('default');
  }
};

const defaultImg = '/static/images/default.png';
const storedImage: { [key: string]: boolean } = {};

interface IProps {
  default: string;
  alt: string;
  className?: string;
  src?: string;
  fallback?: string;
}

class LazyLoadImage extends PureComponent<IProps> {
  onLoad = (e: any): any => {
    const src = e.target.src;
    if (!storedImage[src]) {
      storedImage[src] = true;
    }
  };

  _customProps(props: any): any {
    let { src, className } = props;
    const { 'data-src': dataSrc, default: defaultSrc, ...rest } = props;
    if (!src) {
      src = defaultSrc || defaultImg;
    }

    if (storedImage[dataSrc]) {
      src = dataSrc;
      className = className && className.replace('lazyload', '');
    }
    return { src, className, 'data-src': dataSrc, ...rest };
  }

  render(): React.ReactNode {
    return (
      <img
        onLoad={this.onLoad}
        onError={e => {
          onImgError(e, this.props.default || defaultImg);
        }}
        alt={this.props.alt}
        {...this._customProps(this.props)}
      />
    );
  }
}

export default LazyLoadImage;
