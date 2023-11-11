import { SwiperProps } from "swiper/react";

export interface SliderProps extends SwiperProps {
  slides: JSX.Element[] | [];
}
