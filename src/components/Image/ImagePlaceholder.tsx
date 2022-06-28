import React, { FC } from "react";

import s from "./Image.module.css";
import { ImageVariants } from "../../types/common";
import { MdOutlineAccountCircle } from "react-icons/md";

interface ImagePlaceholderProps {
  type: ImageVariants;
}

const ImagePlaceholder: FC<ImagePlaceholderProps> = ({ type }) => {
  let placeholder: JSX.Element | null = null;

  switch (type) {
    case "profile":
      placeholder = <MdOutlineAccountCircle />;
      break;
  }

  return <div className={s.Placeholder}>{placeholder}</div>;
};

export default ImagePlaceholder;
