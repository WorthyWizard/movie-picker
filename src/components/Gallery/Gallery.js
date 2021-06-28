import React from "react";

import s from './Gallery.module.css';
import { getFilteredImages } from '../../common/utils';
import Image from '../../components/Image/Image';

const Gallery = ({ images }) => {

  const imagesArray = getFilteredImages(images).slice(0, 4).map(image => <Image path={image.file_path} type='backdrop' />);

  return (
    <div className={s.Gallery}>
      <div className={s.GalleryInner}>
        {imagesArray}
      </div>
    </div>
  );
};

export default Gallery;
