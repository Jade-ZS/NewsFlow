import "./ArticlesContainer.css";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Link, useSearchParams, redirect } from "react-router-dom";

export default function ArticlesContainer({ articles }) {
  const [searchParam] = useSearchParams();

  const renderArticleCards = (articles) => articles.map((article) => {
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

  const getSearchResult = () => {
    const searchInput = searchParam.get('search');
    if (!searchInput) {
      return renderArticleCards(articles);
    } else {
      const searchResult = articles.filter(article => article.title.toLowerCase().includes(searchInput.toLowerCase()));
      return searchResult.length ? renderArticleCards(searchResult) : <p>No matching article was found... Please try a different keyword</p>
    }
  }

  return <div className="article-cards-container">{getSearchResult()}</div>;
}
