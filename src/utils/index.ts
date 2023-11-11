import { Color } from "colorthief";

export const update = (oldObject: object, updatedProperties: object) => {
  return { ...oldObject, ...updatedProperties };
};

export const getSliced = (cast: any[], count: number = 10) =>
  cast.slice(0, count);

export const getUnitsFormatedNumber = (number: number, divider: string) => {
  const num = number.toString();
  const hundreds = [];
  const numLength = num.length;
  const hundredsCount = Math.floor(numLength / 3);
  let start = "";

  if (numLength % 3 != 0) {
    start = num.substr(0, numLength % 3) + divider;
  }

  for (let i = 1; i <= hundredsCount; i++) {
    hundreds.push(num.substr(numLength - i * 3, 3));
  }

  return start + hundreds.reverse().join(divider);
};

interface FormatTextOptions {
  sentences?: number;
  words?: number;
}

export const formatText = (
  text: string,
  options: FormatTextOptions
): string => {
  const { sentences, words } = options;

  let _text = text;
  const textLength = text.length;

  if (sentences) {
    _text = _text.split(".").slice(0, sentences).join(".");
  }

  if (words) {
    _text = _text.split(" ").slice(0, words).join(" ");
  }

  const hasChanged = textLength > _text.length;

  const result = hasChanged ? _text + "..." : _text;

  return result;
};

export const rgbToHsl = (r: number, g: number, b: number) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;
  return [
    60 * h < 0 ? 60 * h + 360 : 60 * h,
    100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
    (100 * (2 * l - s)) / 2,
  ];
};

export const getAdjustedGradientColor = (mainColor: Color) => {
  const colorHsl = rgbToHsl(...mainColor);
  colorHsl[2] = 20;
  return `${colorHsl[0]}, ${colorHsl[1]}%, ${colorHsl[2]}%`;
};
