import React from 'react';
import { SwiperSlide } from 'swiper/react';
const defaultProps = {};
export const SwiperItem = (props) => {
    const { children, className } = Object.assign(Object.assign({}, defaultProps), props);
    return <SwiperSlide className={className}>{children}</SwiperSlide>;
};
export default SwiperSlide;
//# sourceMappingURL=index.jsx.map