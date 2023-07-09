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
import React from 'react';
import SwiperCore, { Autoplay, Lazy, Navigation, Pagination, Thumbs, Virtual, Controller } from 'swiper';
import { Swiper as SwiperReact } from 'swiper/react';
import styles from './styles.module.scss';
import { PaginationTypes } from './SwiperTypes';
const defaultProps = {
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
const Swiper = (props) => {
    const _a = Object.assign(Object.assign({}, defaultProps), props), { component: Component, children, className, loop, centeredSlides, speed, slidesPerView, spaceBetween, autoplay, pagination, virtual, lazy } = _a, rest = __rest(_a, ["component", "children", "className", "loop", "centeredSlides", "speed", "slidesPerView", "spaceBetween", "autoplay", "pagination", "virtual", "lazy"]);
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
    return (<Component className={classOfSwiper}>
      <SwiperReact centeredSlides={centeredSlides} loop={!virtual && loop} virtual={virtual} speed={speed} slidesPerView={slidesPerView} spaceBetween={spaceBetween} autoplay={autoplay} pagination={pagination} lazy={lazy} {...rest}>
        {children}
      </SwiperReact>
    </Component>);
};
Swiper.displayName = 'Swiper';
export { PaginationTypes };
export default Swiper;
//# sourceMappingURL=index.jsx.map