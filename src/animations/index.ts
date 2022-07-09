import { presets, spring } from "react-motion";
import { AnimationStructure } from "./types";

export const slideUp: AnimationStructure = {
  from: {
    x: 30,
    opacity: 0.3,
  },
  to: {
    x: spring(0, { damping: 30 }),
    opacity: spring(1, { damping: 25 }),
  },
  getStyle: (to) => ({
    transform: `translateY(${to.x}px)`,
    opacity: to.opacity,
  }),
};

export const slideLeft: AnimationStructure = {
  from: {
    x: 50,
    opacity: 0.3,
  },
  to: {
    x: spring(0, { damping: 30 }),
    opacity: spring(1, { damping: 25 }),
  },
  getStyle: (to) => ({
    transform: `translateX(${to.x}px)`,
    opacity: to.opacity,
  }),
};
