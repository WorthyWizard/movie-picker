import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Router from "./router/Router";
import "./App.css";
import { Firebase, useAuthentication } from "./features/firebase";
import { GlobalContextProvider } from "./context/GlobalContext";
import { LocalStorageItem } from "./features/localStorage";
import { WatchlistLSMovie } from "./types/movie/transformed";
import Initialization from "./components/Initialization";

function App() {
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
}

export default App;
