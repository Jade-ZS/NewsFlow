import './ArticleCard.css';

export default function ArticleCard({imgSrc, title, description, date, article}) {
  return (
    <div className='article-card'>
      <img className='cover-img' alt='News Cover' src={imgSrc}/>
      <h1>{title}</h1>
      <p>{description}</p>
      <p className='date-text'>{date}</p>
    </div>
  );
}