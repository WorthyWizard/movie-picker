import { ButtonProps } from "@mui/material";
import { FC, HTMLAttributeAnchorTarget } from "react";
import { StyledButton } from "./styled";

interface DefaultButtonProps extends ButtonProps {
  target?: HTMLAttributeAnchorTarget;
}

const DefaultButton: FC<DefaultButtonProps> = (props) => {
  const { children, ...rest } = props;
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default DefaultButton;
