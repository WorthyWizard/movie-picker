import { HTMLAttributeAnchorTarget } from "react";
import { ButtonProps } from "@mui/material";

import { StyledButton } from "./styled";

interface Props extends ButtonProps {
  target?: HTMLAttributeAnchorTarget;
}

export const Button = (props: Props) => {
  const { children, ...rest } = props;
  return <StyledButton {...rest}>{children}</StyledButton>;
};
