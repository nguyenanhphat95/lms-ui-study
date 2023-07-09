import React from 'react';
import { SwiperSlide } from 'swiper/react';

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const defaultProps: Props = {};

export const SwiperItem = (props: Props) => {
  const { children, className } = {
    ...defaultProps,
    ...props,
  };

  return <SwiperSlide className={className}>{children}</SwiperSlide>;
};

export default SwiperSlide;
