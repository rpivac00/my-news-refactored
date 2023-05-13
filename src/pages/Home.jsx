import { useState, useEffect, useContext } from "react";
import ArticlesComponent from "../components/shared/ArticlesComponent";
import Spinner from "../components/shared/Spinner";
import NewsContext from "../context/NewsContext";

function Home() {
  const { data, getNews } = useContext(NewsContext);
  const [loading, setLoading] = useState(true);

  const urlHome = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=5Mzr2Dy7me2rLZT4uwoPTK7jVh5opui5`;

  useEffect(() => {
    getNews(urlHome);
    setLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <ArticlesComponent data={data} category="HOME" />
      )}
    </>
  );
}

export default Home;
