import './ArticlesContainer.css';
import newsData from '../../newsData.json';
import ArticleCard from '../ArticleCard/ArticleCard';
import {v4 as uuid} from 'uuid';
import { Link } from 'react-router-dom';

export default function ArticlesContainer() {
  const articles = newsData.articles;
  const articleCards = articles.map(article => {
    const {urlToImage, title, description, publishedAt} = article;
    const id = uuid();
    return (
      <Link to={id}>
      <ArticleCard 
        key={id}
        id={id}
        description={description}
        title={title}
        imgSrc={urlToImage}
        date={publishedAt}
        article={article}
      />
      </Link>
    );
  }
  );

  return (
    <div className='article-cards-container'>
      {articleCards}
    </div>
  );
}