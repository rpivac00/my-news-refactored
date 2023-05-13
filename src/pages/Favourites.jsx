import { useContext } from "react";
import NewsContext from "../context/NewsContext";
import ArticlesComponent from "../components/shared/ArticlesComponent";

function Favourites() {
  const { favouritesArray } = useContext(NewsContext);

  if (favouritesArray.length === 0) {
    return (
      <div className="section-container">
        <h3 className="section-container-header">
          There is still no favourites...
        </h3>
      </div>
    );
  } else {
    return (
      <ArticlesComponent
        data={favouritesArray}
        category="FAVORITES"
        isFavourite={true}
      />
    );
  }
}

export default Favourites;
