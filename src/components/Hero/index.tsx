import { DetailedHTMLProps, HTMLAttributes } from "react";

import s from "./styles.module.css";

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  text: string;
}

export const Hero = (props: Props) => {
  const { text, ...rest } = props;

  return (
    <section className={s.HeroBlock} {...rest}>
      <div className={s.HeroBlockInner}>
        <p className={s.HeroText}>{text}</p>
      </div>
      <div className={s.DarkBackdrop}></div>
    </section>
  );
};
