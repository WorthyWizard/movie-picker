import { FC } from "react";
import s from "./Gallery.module.css";
import { getFilteredImages } from "../../utils/transform/movieData";
import Image from "../Image/Image";
import { Image as ImageType } from "../../types/movie/rawTypes";

interface Props {
  images: ImageType[];
}

const Gallery: FC<Props> = (props) => {
  const { images } = props;

  let styles = {};

  let filteredImages: JSX.Element | JSX.Element[] = getFilteredImages(images)
    .slice(0, 4)
    .map((image, i) => (
      <Image key={`gallery-img-${i}`} path={image.file_path} type="backdrop" />
    ));

  switch (images.length) {
    case 1:
      filteredImages = <Image path={images[0].file_path} type="backdrop" />;
      styles = {
        gridTemplateColumns: "unset",
        gridTemplateRows: "unset",
        gridTemplateAreas: "unset",
      };
      break;
    case 2:
      styles = {
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateRows: "400px",
        gridTemplateAreas: "'img1 img2'",
      };
      break;
    case 3:
      styles = {
        gridTemplateColumns: "repeat(2, 1fr)",
        gridTemplateAreas: "'img1 img2' 'img3 img3'",
      };
      break;
  }

  return (
    <div className={s.Gallery}>
      <div className={s.GalleryInner} style={styles}>
        {filteredImages}
      </div>
    </div>
  );
};

export default Gallery;
