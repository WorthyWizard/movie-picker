import { CSSProperties, DetailedHTMLProps, FC, HTMLAttributes } from "react";

import s from "./Hero.module.css";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  text: string;
}

const Hero: FC<Props> = ({ text, ...rest }) => {
  return (
    <section className={s.HeroBlock} {...rest}>
      <div className={s.HeroBlockInner}>
        <p className={s.HeroText}>{text}</p>
      </div>
      <div className={s.DarkBackdrop}></div>
    </section>
  );
};

export default Hero;
