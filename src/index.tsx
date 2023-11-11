import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { App } from "./App";
import { setupStore } from "./store";
import { themes } from "./themes";

const store = setupStore();

const app = (
  <ThemeProvider theme={themes.default}>
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        <App />
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

createRoot(document.getElementById("root")!).render(app);
