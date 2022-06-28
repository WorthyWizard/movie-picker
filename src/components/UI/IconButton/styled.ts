import { IconButton, styled } from "@mui/material";

export const StyledIconButton = styled(IconButton)(({ theme, color }) => {
  const { palette } = theme;
  let bgColor: typeof color = "primary";

  if (color && color !== "inherit" && color !== "default") {
    bgColor = color;
  }

  return {
    color: palette[bgColor].main,
    backgroundColor: "#fff",
    ":hover": {
      backgroundColor: palette[bgColor].main,
      color: palette.text.primary,
    },
    transition: "background-color 0.4s, color 0.4s",
  };
});
