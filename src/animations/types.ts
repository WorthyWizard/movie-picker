import { CSSProperties } from "react";
import { PlainStyle, Style } from "react-motion";

export interface AnimationStructure {
  from: PlainStyle;
  to: Style;
  getStyle: (interpolatedStyle: PlainStyle) => CSSProperties;
}
