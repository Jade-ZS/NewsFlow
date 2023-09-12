import './ArticleCard.css';

export default function ArticleCard({imgSrc, headline, description, date}) {
  return (
    <div className='article-card'>
      <img className='cover-img' alt='News Cover' src={imgSrc}/>
      <h1>{headline}</h1>
      <p>{description}</p>
      <p>{date}</p>
    </div>
  );
}