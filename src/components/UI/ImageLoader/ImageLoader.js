import React from 'react';

import s from './ImageLoader.module.css';
import Image from '../../Image/Image';

const ImageLoader = ({ path }) => {
  return <Image className={s.ImageLoader} path={path} type='loader' />;
};

export default ImageLoader;