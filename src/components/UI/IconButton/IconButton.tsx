import { ButtonProps, IconButtonProps } from "@mui/material";
import { FC } from "react";
import { StyledIconButton } from "./styled";

interface DefaultIconButtonProps extends IconButtonProps {}

const DefaultIconButton: FC<DefaultIconButtonProps> = (props) => {
  const { children, ...rest } = props;
  return <StyledIconButton {...rest}>{children}</StyledIconButton>;
};

export default DefaultIconButton;
