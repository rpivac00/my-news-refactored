import { useState, useEffect, useContext } from "react";
import Spinner from "../components/shared/Spinner";
import ArticlesComponent from "../components/shared/ArticlesComponent";
import NewsContext from "../context/NewsContext";

function General() {
  const { getNews, data } = useContext(NewsContext);
  const [loading, setLoading] = useState(true);
  const urlGeneral = `https://api.nytimes.com/svc/news/v3/content/nyt/world.json?api-key=5Mzr2Dy7me2rLZT4uwoPTK7jVh5opui5`;

  useEffect(() => {
    getNews(urlGeneral);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <ArticlesComponent data={data} category={"GENERAL"} />
      )}
    </>
  );
}

export default General;
