import Spinner from "./Spinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import NewsContext from "../../context/NewsContext";

function ArticlesComponent({ data, category, isFavourite }) {
  const { addFavourite, removeFavourite } = useContext(NewsContext);
  return (
    <>
      <div className="section-container">
        <ToastContainer />
        <h3 className="section-container-header">{category}</h3>
        {!data ? (
          <Spinner />
        ) : (
          <div className="news-wrapper">
            {data.map((article, index) => {
              return (
                <div key={article.created_date} className="article-card">
                  <button
                    onClick={function () {
                      isFavourite
                        ? removeFavourite(article, article.created_date)
                        : addFavourite(article);
                    }}
                    className="article-card-favourites-button"
                    id="article-card-favourites-button"
                  >
                    {isFavourite ? (
                      <i className="far fa-solid fa-trash"></i>
                    ) : (
                      <i className="fas fa-thin fa-star"></i>
                    )}
                  </button>

                  {article.multimedia !== null ? (
                    <img
                      src={article.multimedia[1].url}
                      alt={category}
                      className="article-card-img"
                    />
                  ) : (
                    <img
                      src={require("../assets/noImage.jpg")}
                      alt={category}
                      className="article-card-img"
                    />
                  )}

                  <div className="article-card-description">
                    <strong className="article-card-description-title">
                      {article.title.toUpperCase()}
                    </strong>

                    <br></br>
                    <br></br>
                    {article.byline ? (
                      <p className="article-card-description-author">
                        {article.byline}
                      </p>
                    ) : (
                      <p className="article-card-description-author">
                        {article.byline.original}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default ArticlesComponent;
