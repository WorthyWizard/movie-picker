import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { setupStore } from "./store/store";
import { CssBaseline, ThemeProvider } from "@mui/material";
import themes from "./theme";

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

const root = createRoot(document.getElementById("root")!);

root.render(app);
