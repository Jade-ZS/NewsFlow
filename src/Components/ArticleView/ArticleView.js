import "./ArticleView.css";
import { useParams, Navigate } from "react-router-dom";

export default function ArticleView({ articles }) {
  const { id } = useParams();
  const article = articles.filter((article) => article.id.includes(id))[0];
  const renderCard = (article) => {
    const {
      source,
      author,
      title,
      description,
      url,
      urlToImage,
      formatDate,
      content,
    } = article;
    return (
      <div className="article-view-container">
        <div className="blue-circle" />
        <div className="article-view">
          <h1 className="title">{title}</h1>
          <div className="writer-info">
            <p>By {author}</p>
            <p className='divider'>•</p>
            <p>Published at {formatDate}</p>
          </div>
          <img src={urlToImage} alt="Cover" />
          <p className="description">{description}</p>
          <p className="content">{content}</p>
          <button className="source-button">
            <a href={url}>
              <p className="button-text">
                read the full article at {source.name}
              </p>
            </a>
          </button>
        </div>
      </div>
    );
  };

  return <>{!article ? <Navigate to="*" /> : renderCard(article)}</>;
}
