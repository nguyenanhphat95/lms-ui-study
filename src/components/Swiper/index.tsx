import cn from 'classnames';
import React from 'react';
import SwiperCore, {
  Autoplay,
  Lazy,
  Navigation,
  Pagination,
  Thumbs,
  Virtual,
  Controller
} from 'swiper';
import { Swiper as SwiperReact } from 'swiper/react';
import { SwiperOptions } from 'swiper/types/swiper-options';
import styles from './styles.module.scss';
import { PaginationTypes } from './SwiperTypes';

interface SwiperProps {
  component: React.ElementType;
  loop: boolean;
  virtual: boolean;
  centeredSlides: boolean;
  speed: number;
  slidesPerView: number;
  spaceBetween: number;
  autoplay: SwiperOptions['autoplay'];
  pagination: SwiperOptions['pagination'];
  lazy: SwiperOptions['lazy'];
  className?: string;
  children?: React.ElementType;
}

const defaultProps: SwiperProps = {
  component: 'div',
  centeredSlides: true,
  speed: 300,
  slidesPerView: 1,
  spaceBetween: 50,
  loop: false,
  autoplay: false,
  pagination: false,
  lazy: false,
  virtual: false
};

const Swiper = (props: SwiperProps) => {
  const {
    component: Component,
    children,
    className,
    loop,
    centeredSlides,
    speed,
    slidesPerView,
    spaceBetween,
    autoplay,
    pagination,
    virtual,
    lazy,
    ...rest
  } = { ...defaultProps, ...props };

  SwiperCore.use([
    Autoplay,
    Pagination,
    Virtual,
    Lazy,
    Navigation,
    Thumbs,
    Controller
  ]);

  const classOfSwiper = cn(styles.swiper, className, {
    [styles['has-pagination-bullet']]: pagination
  });

  return (
    <Component className={classOfSwiper}>
      <SwiperReact
        centeredSlides={centeredSlides}
        loop={!virtual && loop}
        virtual={virtual}
        speed={speed}
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        autoplay={autoplay}
        pagination={pagination}
        lazy={lazy}
        {...rest}
      >
        {children}
      </SwiperReact>
    </Component>
  );
};

Swiper.displayName = 'Swiper';

export { PaginationTypes };
export default Swiper;
