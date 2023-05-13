import Header from "./components/Header";
import Navbar from "./components/Navbar";
import LatestNewsWidget from "./components/LatestNewsWidget";
import "./scss/App.scss";

import { NewsProvider } from "./context/NewsContext";

function App() {
  return (
    <NewsProvider>
      <Header />
      <Navbar />
      <LatestNewsWidget />
    </NewsProvider>
  );
}

export default App;
