import React from 'react';

import s from './Hero.module.css';

const Hero = ({ text, background }) => {

  const backgroundStyles = {};

  if(background) {
    backgroundStyles.backgroundImage = `url(${background})`;
  }

  return (
    <section className={s.HeroBlock} style={backgroundStyles}>
      <div className={s.HeroBlockInner}>
        <p className={s.HeroText}>{text}</p>
      </div>
      <div className={s.DarkBackdrop}></div>
    </section>
  );
};

export default Hero;