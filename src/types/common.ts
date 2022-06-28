import { SwiperProps } from "swiper/react";

export type ImageVariants =
  | "backdrop"
  | "poster"
  | "profile"
  | "logo"
  | "loading"
  | "image";

export type MovieControlsTypes = "watchlist" | "restricted" | "full";

export type VideoTypes = "youtube";

export interface SliderProps extends SwiperProps {
  slides: JSX.Element[] | [];
}
