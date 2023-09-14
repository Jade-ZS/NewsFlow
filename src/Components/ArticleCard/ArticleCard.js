import './ArticleCard.css';

export default function ArticleCard({article}) {
  const {urlToImage, title, description, formatDate} = article;
  return (
    <div className='article-card'>
      <img className='cover-img' alt='News Cover' src={urlToImage}/>
        <h1>{title}</h1>
      <p>{description}</p>
      <p className='date-text'>{formatDate}</p>
    </div>
  );
}