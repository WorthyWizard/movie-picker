import { createTheme, responsiveFontSizes, ThemeOptions } from "@mui/material";

import { defaultTheme } from "./default";

const overrides: ThemeOptions = {
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
    fontSize: 18,
  },
};

export const themes = {
  default: responsiveFontSizes(createTheme({ ...defaultTheme, ...overrides })),
};
