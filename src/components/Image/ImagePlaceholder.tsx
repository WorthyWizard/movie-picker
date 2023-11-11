import { MdOutlineAccountCircle } from "react-icons/md";

import { ImageVariants } from "../../types/common";

import s from "./styles.module.css";

interface Props {
  type: ImageVariants;
}

export const ImagePlaceholder = (props: Props) => {
  const { type } = props;

  let placeholder: JSX.Element | null = null;

  switch (type) {
    case "profile":
      placeholder = <MdOutlineAccountCircle />;
      break;
  }

  return <div className={s.Placeholder}>{placeholder}</div>;
};
