import React from "react";

import s from './Gallery.module.css';
import { getFilteredImages } from '../../common/utils';
import Image from '../../components/Image/Image';

const Gallery = ({ images }) => {

  let styles = {};
  let length = images.length;
  let filteredImages = getFilteredImages(images).slice(0, 4).map((image, i) => <Image key={`gallery-img-${i}`} path={image.file_path} type='backdrop' />);;

  switch(length) {
    case 1:
      filteredImages = <Image path={images[0].file_path} type='backdrop' />;
      break;
    case 2:
      styles = {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateRows: '400px',
        gridTemplateAreas: "'img1 img2'"
      }
      break;
    case 3:
      styles = {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridTemplateAreas: "'img1 img2' 'img3 img3'"
      }
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
