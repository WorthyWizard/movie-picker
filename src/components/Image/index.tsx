import { DetailedHTMLProps, ImgHTMLAttributes, useState } from "react";

import { ImagesEndpoints } from "../../api/imagesEndpoints";
import { ImageVariants } from "../../types/common";

import { ImagePlaceholder } from "./ImagePlaceholder";

import s from "./styles.module.css";

interface Props
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  type?: ImageVariants;
  path?: string | null;
}

export const Image = (props: Props) => {
  const { path, type = "image", ...rest } = props;

  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  let imageSrc = "";

  if (!path) {
    return <ImagePlaceholder type={type} />;
  }

  switch (type) {
    case "backdrop":
      imageSrc = ImagesEndpoints.backdrop + path;
      break;
    case "poster":
      imageSrc = ImagesEndpoints.poster + path;
      break;
    case "profile":
      imageSrc = ImagesEndpoints.profile + path;
      break;
    case "logo":
      imageSrc = ImagesEndpoints.logo + path;
      break;
    case "image":
    default:
      imageSrc = path;
  }

  const onImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && (
        <div className={s.ImagePreloader}>
          <div></div>
        </div>
      )}
      <img
        onLoad={onImageLoad}
        src={imageSrc}
        draggable="false"
        className={s.Image}
        {...rest}
      />
    </>
  );
};
