import './ArticlesContainer.css';
import newsData from '../../newsData.json';
import ArticleCard from '../ArticleCard/ArticleCard';

export default function ArticlesContainer() {
  const articles = newsData.articles;
  const articleCards = articles.map(article => {
    const {urlToImage, title, description, publishedAt} = article;
    return (
      <ArticleCard 
        description={description}
        title={title}
        imgSrc={urlToImage}
        date={publishedAt}
        article={article}
      />
    );
  }
  );

  return (
    <div className='article-cards-container'>
      {articleCards}
    </div>
  );
}