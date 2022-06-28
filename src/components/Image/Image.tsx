import { DetailedHTMLProps, FC, ImgHTMLAttributes, useState } from "react";

import { ImagesEndpoints } from "../../api/imagesEndpoints";
import ImagePlaceholder from "./ImagePlaceholder";
import { ImageVariants } from "../../types/common";
import s from "./Image.module.css";

interface ImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  type?: ImageVariants;
  path?: string | null;
}

const Image: FC<ImageProps> = (props) => {
  const { path, src, type = "image", ...rest } = props;

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

export default Image;
