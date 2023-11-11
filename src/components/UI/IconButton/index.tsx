import { IconButtonProps } from "@mui/material";

import { StyledIconButton } from "./styled";

export const IconButton = (props: IconButtonProps) => {
  const { children, ...rest } = props;

  return <StyledIconButton {...rest}>{children}</StyledIconButton>;
};
