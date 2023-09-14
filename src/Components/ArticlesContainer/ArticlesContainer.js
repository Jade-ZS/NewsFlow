import "./ArticlesContainer.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Link, useSearchParams } from "react-router-dom";

export default function ArticlesContainer({ articles }) {
  const [searchParam] = useSearchParams();

  // const getSearchResult 

  const searchInput = searchParam.get('search');
  const articleCards = articles.map((article) => {
    const { urlToImage, title, description, publishedAt, id } = article;
    return (
      <Link to={id} key={id}>
        <ArticleCard
          id={id}
          description={description}
          title={title}
          imgSrc={urlToImage}
          date={publishedAt}
          article={article}
        />
      </Link>
    );
  });

  return <div className="article-cards-container">{articleCards}</div>;
}
