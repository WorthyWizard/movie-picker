import React from 'react';

import { ImagesEndpoints } from '../../common/utils';
 
import s from './Image.module.css';

const Image = ({ path = '', type, alt = '', style = {} }) => {
  
  let src = null;

  switch(type) {
    case 'backdrop':
      src = ImagesEndpoints.backdrop + path;
      break;
    case 'poster':
      src = ImagesEndpoints.poster + path;
      break;
    case 'profile':
      src = ImagesEndpoints.profile + path;
      break;
    case 'logo':
      src = ImagesEndpoints.logo + path;
      break;
    default:
      src = path;
  }

  return <img className={s.Image} src={src} alt={alt} style={{...style}} draggable='false' />;
};

export default Image;