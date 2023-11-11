import { nanoid } from "nanoid";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";

import { SliderProps } from "./types";

import "swiper/css";
import s from "./styles.module.css";

export const Slider = (props: SliderProps) => {
  const { slides, slidesPerView, ...rest } = props;

  const randomId = nanoid(5);
  const nextElId = randomId + "nextEl";
  const prevElId = randomId + "prevEl";

  const sliderPerGroup = typeof slidesPerView === "string" ? 4 : slidesPerView;

  return (
    <div className={s.Slider}>
      <Swiper
        slidesPerGroup={sliderPerGroup}
        speed={600}
        spaceBetween={50}
        modules={[Navigation]}
        navigation={{
          prevEl: `#${s.SliderPrev}-${prevElId}`,
          nextEl: `#${s.SliderNext}-${nextElId}`,
        }}
        slidesPerView={slidesPerView}
        {...rest}
      >
        {slides?.map((slide, i) => (
          <SwiperSlide key={`slide-${i}`}>{slide}</SwiperSlide>
        ))}
      </Swiper>
      <div
        id={`${s.SliderPrev}-${prevElId}`}
        className={`swiper-button-prev ${s.SliderPrev}`}
      ></div>
      <div
        id={`${s.SliderNext}-${nextElId}`}
        className={`swiper-button-next ${s.SliderNext}`}
      ></div>
    </div>
  );
};
