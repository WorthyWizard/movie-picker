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
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
      >
        {
          movies.map(slide => <SwiperSlide>{slide}</SwiperSlide>)
        }

        <div className={`swiper-button-prev ${s.SliderPrev}`}></div>
        <div className={`swiper-button-next ${s.SliderNext}`}></div>
      </Swiper>
    </div>
  );
};

export default Slider;