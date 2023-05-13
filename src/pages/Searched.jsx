import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import NewsContext from "../context/NewsContext";

function Searched() {
  const { addFavourite, searchedArticles } = useContext(NewsContext);

  if (searchedArticles.length === 0) {
    return (
      <div className="section-container">
        <h3 className="section-container-header">Search for articles above!</h3>
      </div>
    );
  } else {
    return (
      <div className="section-container">
        <ToastContainer />
        <h3 className="section-container-header">SEARCH</h3>
        <div className="news-wrapper">
          {searchedArticles.map((article, index) => {
            return (
              <div key={index} className="article-card">
                <input type="checkbox" id="check" className="checkbox" hidden />
                <label htmlFor="check" className="article-card-favourites">
                  {/*
                    When searching, articles are fetched from NewsApi, not NYTimes Api (as other articles).
                    Different APIs have different article property names.
                    When adding to favorites that results in an app crash because the favorites section uses BasicComponent.
                    Also as favorite articles are stored in local storage, the app can't be reloaded without cleaning the local storage.
                    As a temporary solution next button has a "disabled" attribute.
  
                    */}

                  <button
                    onClick={function () {
                      addFavourite(article);
                    }}
                    className="article-card-favourites-button"
                    id="article-card-favourites-button"
                    disabled
                  >
                    <i className="fas fa-thin fa-star" id="star"></i>
                  </button>
                </label>
                {article.urlToImage ? (
                  <img
                    src={`${article.urlToImage}`}
                    alt="search"
                    className="article-card-img"
                  />
                ) : (
                  <img
                    src={require("../components/assets/noImage.jpg")}
                    alt="science"
                    className="article-card-img"
                  />
                )}

                <div className="article-card-description">
                  <strong className="article-card-description-title">
                    {article.title}
                  </strong>
                  <br></br>
                  <br></br>

                  <p className="article-card-description-author">
                    {article.author}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Searched;
