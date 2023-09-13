import './ArticleView.css';
import { useParams } from 'react-router-dom';

export default function ArticleView({articles}) {
  const { id } = useParams();
  const article = articles.filter(article => article.id === id)[0];
  const {source, author, title, description, url, urlToImage, publishedAt, content} = article;
  return (
    <div>
      {id}
      <h1>{title}</h1>
      <img src={urlToImage} alt='Cover'/>
      <a href={url}>source</a>
      <p>{author}</p>
      <p>{publishedAt}</p>
      <p>{source.name}</p>
      <p>{description}</p>
      <p>{content}</p>
    </div>

  )
}