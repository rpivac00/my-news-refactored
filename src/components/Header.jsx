import { useState, useContext } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsContext from "../context/NewsContext";

function Header() {
  const { setSearchedArticles } = useContext(NewsContext);

  const [entry, setEntry] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(entry);
    if (entry === "") {
      toast("Your search has to be at least 1 character long");
    } else toast("Seached articles can be found in Search category");
  };

  async function onSearchSubmit(entry) {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${entry}&apiKey=661cbd66ab42409e912f432b860e6861`
    );

    setSearchedArticles(response.data.articles);
  }

  return (
    <div className="header-container">
      <h1 className="portal-name">MyNews</h1>
      <div className="form-container">
        <form onSubmit={onFormSubmit} className="form-search">
          <input
            type="text"
            placeholder="   🔍  Search News "
            onChange={(event) => setEntry(event.target.value)}
            value={entry}
          />

          <button className="form-search-button">SEARCH</button>
        </form>
      </div>

      <ToastContainer />
    </div>
  );
}

export default Header;
