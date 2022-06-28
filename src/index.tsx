import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import { setupStore } from "./store/store";
import { CssBaseline, ThemeProvider } from "@mui/material";
import themes from "./theme";
import { GlobalContextProvider } from "./context/GlobalContext";
import { LocalStorageItem } from "./features/localStorage";
import { WatchlistLSMovie } from "./types/movie/transformed";
import { Firebase } from "./features/firebase";

const store = setupStore();
const watchlistLS = new LocalStorageItem<WatchlistLSMovie[]>("watchlist", []);
const watchlistDB = new Firebase("watchlist");

const app = (
  <ThemeProvider theme={themes.default}>
    <Provider store={store}>
      <BrowserRouter>
        <GlobalContextProvider
          watchlistLS={watchlistLS}
          watchlistDB={watchlistDB}
        >
          <CssBaseline />
          <App />
        </GlobalContextProvider>
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);

const root = createRoot(document.getElementById("root")!);

root.render(app);
