import React from "react";

import s from './Video.module.css';

const Video = ({ path, width }) => {
  return (
    <div className={s.Video}>
      <iframe className={s.VideoFrame} width={`${width}px`} height={`${width / 1.78}px`}
        src={`https://www.youtube.com/embed/${path}`} frameBorder="0" allowFullScreen={true} loading='lazy'>
      </iframe>
    </div>
  );
};

export default Video;
