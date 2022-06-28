import { createTheme, ThemeOptions, responsiveFontSizes } from "@mui/material";
import { defaultTheme } from "./default";

const overrides: ThemeOptions = {
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 18,
  },
};

const themes = {
  default: responsiveFontSizes(createTheme({ ...defaultTheme, ...overrides })),
};

export default themes;
