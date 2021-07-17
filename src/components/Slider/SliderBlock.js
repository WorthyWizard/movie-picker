import React from 'react';

import Slider from '../../components/Slider/Slider';
import s from './SliderBlock.module.css';
import Spinner from '../UI/Spinner/Spinner';
import Message from '../UI/Message/Message';

const SliderBlock = ({ title, data, id, className, slidesPerView, isLoading, placeholderText = 'Here is no data yet' }) => {

  let content = null;

  if(isLoading && data.length === 0) {
    content = <Spinner />;
  } else if(data.length === 0) {
    content = <Message text={placeholderText} />
  } else {
    content = <Slider id={id} data={data} slidesPerView={slidesPerView} />;
  }

  return (
    <section className={`${s.SliderBlock} ${className}`}>
      <h2 className={`main-heading`}>{title}</h2>
      { content }
    </section>
  );
};

export default SliderBlock;