import React from 'react';

import Slider from '../../components/Slider/Slider';
import s from './SliderBlock.module.css';

const SliderBlock = ({ title, data, id, className, slidesPerView }) => {

  return (
    <section className={`${s.SliderBlock} ${className}`}>
      <h2 className={`main-heading`}>{title}</h2>
      <Slider id={id} data={data} slidesPerView={slidesPerView} />
    </section>
  );
};

export default SliderBlock;