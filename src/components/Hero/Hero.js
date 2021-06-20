import React from 'react';

import s from './Hero.module.css';

const Hero = ({ text, styles }) => {

  return (
    <section className={s.HeroBlock} style={{...styles}}>
      <div className={s.HeroBlockInner}>
        <p className={s.HeroText}>{text}</p>
      </div>
      <div className={s.DarkBackdrop}></div>
    </section>
  );
};

export default Hero;