import { GlobalContextProvider } from "./context/GlobalContext";
import { Firebase, useAuthentication } from "./features/firebase";
import { LocalStorageItem } from "./features/localStorage";
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { WatchlistLSMovie } from "./types/movie/transformed";
import { Initialization } from "./components";
import { Router } from "./router";

import "./App.css";

export const App = () => {
  const { user, isAuthenticated } = useAuthentication();

  const watchlistLS = new LocalStorageItem<WatchlistLSMovie[]>("watchlist", []);
  const watchlistDB = new Firebase(`users/${user?.uid}/watchlist`);

  return (
    <div id="page">
      <Header />
      <main>
        <GlobalContextProvider
          watchlistLS={watchlistLS}
          watchlistDB={watchlistDB}
        >
          {isAuthenticated && <Initialization />}
          <Router />
        </GlobalContextProvider>
      </main>
      <Footer />
    </div>
  );
};
