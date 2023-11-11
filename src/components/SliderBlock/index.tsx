import { DetailedHTMLProps, HTMLAttributes } from "react";
import classNames from "classnames";

import { Slider } from "../Slider";
import { SliderProps } from "../Slider/types";
import { Message } from "../UI/Message";
import { Spinner } from "../UI/Spinner";

import s from "./styles.module.css";

interface Props {
  title: string;
  wrapperProps?: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  sliderProps: SliderProps;
  message?: string;
  isLoading?: boolean;
}

export const SliderBlock = (props: Props) => {
  const {
    sliderProps,
    title,
    wrapperProps,
    isLoading,
    message = "Here is no data yet",
  } = props;

  const { className: wrapperClassName } = wrapperProps || {};

  let content: JSX.Element | null = null;

  if (isLoading && sliderProps.slides.length === 0) {
    content = <Spinner />;
  } else if (sliderProps.slides.length === 0) {
    content = <Message text={message} />;
  } else {
    content = <Slider {...sliderProps} />;
  }

  return (
    <section
      {...wrapperProps}
      className={classNames(s.SliderBlock, wrapperClassName)}
    >
      <h2 className="main-heading">{title}</h2>
      {content}
    </section>
  );
};
