import React, { useState } from 'react';

import { ImagesEndpoints } from '../../common/utils';
import ImagePlaceholder from './ImagePlaceholder';
import s from './Image.module.css';

const Image = ({ path = '', type, alt = '', style = {} }) => {

  const [ isLoaded, setIsLoaded ] = useState(false);
  
  let src = null;

  if(!path) {
    return <ImagePlaceholder type={type} />;
  }

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
  
  return (
    <>
      { !isLoaded && <div className={s.ImagePreloader}><div></div></div> }
      <img className={s.Image} onLoad={() => setIsLoaded(true)} src={src} alt={alt} style={{...style}} draggable='false' />
    </>
  );
};

export default Image;