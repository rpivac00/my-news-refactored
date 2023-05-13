import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  //
  // data array -> fetched articles are stored into
  const [data, setData] = useState([]);

  // searched articles array
  const [searchedArticles, setSearchedArticles] = useState([]);

  //favourites array as state + getting favourites array from local storage if there is any
  const [favouritesArray, setFavouritesArray] = useState(
    !localStorage.getItem("favourites")
      ? []
      : JSON.parse(localStorage.getItem("favourites"))
  );

  //adding to local storage
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favouritesArray));
  }, [favouritesArray]);

  //add favourite function
  const addFavourite = (fav) => {
    if (favouritesArray.includes(fav)) {
      toast("The article has already been added to favourites!");
    } else {
      setFavouritesArray([fav, ...favouritesArray]);
      toast("Article is added to favourites!");
    }
  };
  //remove favourite function
  const removeFavourite = (fav, index) => {
    setFavouritesArray(
      favouritesArray.filter((fav) => fav.created_date !== index)
    );
    toast("Article has been removed from favourites!");
  };

  //getNews fetch function
  const getNews = async (url) => {
    await axios
      .get(url)
      .then((response) => {
        setData(response.data.results);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <NewsContext.Provider
      value={{
        favouritesArray,
        addFavourite,
        removeFavourite,
        getNews,
        data,
        searchedArticles,
        setSearchedArticles,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
