import { DetailedHTMLProps, FC, HTMLAttributes, memo } from "react";
import classNames from "classnames";
import Slider from "./Slider";
import s from "./SliderBlock.module.css";
import Spinner from "../UI/Spinner/Spinner";
import Message from "../UI/Message/Message";
import { SliderProps } from "@/types/common";

interface SliderBlockProps {
  title: string;
  wrapperProps?: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
  sliderProps: SliderProps;
  message?: string;
  isLoading?: boolean;
}

const SliderBlock: FC<SliderBlockProps> = (props) => {
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

export default memo(SliderBlock);
