import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';

import s from './Slider.module.css';

SwiperCore.use([Navigation]);

const Slider = ({ movies, id }) => {

  return (
    <div className={s.Slider}>
      <Swiper 
        slidesPerView={5}
        spaceBetween={50}
        navigation={{
          prevEl: `#${s.SliderPrev}-${id}`,
          nextEl: `#${s.SliderNext}-${id}`,
        }}
      >
        { movies.map(slide => <SwiperSlide>{slide}</SwiperSlide>) }
      </Swiper>
      <div id={`${s.SliderPrev}-${id}`} className={`swiper-button-prev ${s.SliderPrev}`}></div>
      <div id={`${s.SliderNext}-${id}`} className={`swiper-button-next ${s.SliderNext}`}></div>
    </div>
  );
};

export default Slider;