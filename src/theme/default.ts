import { ThemeOptions } from "@mui/material";

const primary = "#5200df";
const secondary = "#f5f5f5";
const warning = "#FFC260";
const success = "#27ae60";
const error = "#980070";
const text = "#f5f5f5";
const background = "#121212";

export const defaultTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    error: {
      main: error,
    },
    warning: {
      main: warning,
    },
    success: {
      main: success,
    },
    text: {
      primary: text,
    },
    background: {
      default: background,
    },
  },
};
