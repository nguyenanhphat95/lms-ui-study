## Basic

```jsx

import { SwiperSlide } from 'swiper/react';
import { Swiper } from '@fundoo/ui';

<Swiper
  slidesPerView={2.5}
  spaceBetween={24}
  speed={1000}
  watchSlidesVisibility
  watchSlidesProgress
  pagination={{ clickable: true }}
>
  <SwiperSlide>
    <img
      alt="Slide1"
      src="https://via.placeholder.com/600x200.png?text=Slide1"
    />
  </SwiperSlide>
  <SwiperSlide>
    <img
      alt="Slide2"
      src="https://via.placeholder.com/600x200.png?text=Slide2"
    />
  </SwiperSlide>
  <SwiperSlide>
    <img
      alt="Slide3"
      src="https://via.placeholder.com/600x200.png?text=Slide3"
    />
  </SwiperSlide>
  <SwiperSlide>
    <img
      alt="Slide4"
      src="https://via.placeholder.com/600x200.png?text=Slide4"
    />
  </SwiperSlide>
  <SwiperSlide>
    <img
      alt="Slide5"
      src="https://via.placeholder.com/600x200.png?text=Slide5"
    />
  </SwiperSlide>
</Swiper>


```
