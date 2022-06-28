import ColorThief, { Color } from "colorthief";
import { useEffect, useState } from "react";

interface ImageColorsHookReturnType {
  color: Color | null;
  palette: Color[] | null;
}

const useImageColors = (url: string): ImageColorsHookReturnType => {
  const [palette, setPalette] = useState<Color[] | null>(null);
  const [color, setColor] = useState<Color | null>(null);

  useEffect(() => {
    main();
  }, []);

  const loadImage = (src: string) => {
    return new Promise<HTMLImageElement>((resolve) => {
      const image = new Image();
      image.crossOrigin = "Anonymous";
      image.referrerPolicy = "no-referrer";
      image.src = `${src}?t=${new Date().getTime()}`;
      image.addEventListener("load", () => {
        resolve(image);
      });
    });
  };

  const main = async () => {
    const colorthief = new ColorThief();
    const image = await loadImage(url);
    const palette = colorthief.getPalette(image);
    const color = colorthief.getColor(image, 5);
    setPalette(palette);
    setColor(color);
  };

  return { color, palette };
};

export default useImageColors;
