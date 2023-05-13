import { useState, useEffect, useContext } from "react";
import Spinner from "../components/shared/Spinner";
import ArticlesComponent from "../components/shared/ArticlesComponent";
import NewsContext from "../context/NewsContext";

function Science() {
  const { getNews, data } = useContext(NewsContext);
  const [loading, setLoading] = useState(true);

  const urlScience = `https://api.nytimes.com/svc/news/v3/content/nyt/science.json?api-key=5Mzr2Dy7me2rLZT4uwoPTK7jVh5opui5`;

  useEffect(() => {
    getNews(urlScience);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <ArticlesComponent data={data} category="SCIENCE" />
      )}
    </>
  );
}

export default Science;
