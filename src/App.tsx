import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import Router from "./router/Router";
import "./App.css";

function App() {
  return (
    <div id="page">
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
