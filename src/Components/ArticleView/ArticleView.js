import './ArticleView.css';
import { useParams } from 'react-router-dom';

export default function ArticleView({articles}) {
  const { id } = useParams();
  const article = articles.filter(article => article.id.includes(id))[0];
  const {source, author, title, description, url, urlToImage, formatDate, content} = article;
  return (
    <div className='article-view'>
      <h1 className='title'>{title}</h1>
      <img src={urlToImage} alt='Cover'/>
      <a href={url}>source</a>
      <p>{author}</p>
      <p>{formatDate}</p>
      <p>{source.name}</p>
      <p className='description'>{description}</p>
      <p className='content'>{content}</p>
    </div>

  )
}