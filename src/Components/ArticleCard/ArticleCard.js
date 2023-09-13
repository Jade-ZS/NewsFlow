import './ArticleCard.css';

export default function ArticleCard({imgSrc, title, description, date, article, id}) {
  const localDate = new Date(date).toString().split(' ');
  const timeZone = `${localDate[6][1]}${localDate[7][0]}${localDate[8][0]}`;
  localDate.splice(5, 4, timeZone);
  const formatDate = `${localDate[0]}, ${localDate[1]} ${localDate[2]}, ${localDate[3]}, ${localDate[4]} ${localDate[5]}`;

  return (
    <div className='article-card'>
      <img className='cover-img' alt='News Cover' src={imgSrc}/>
        <h1>{title}</h1>
      <p>{description}</p>
      <p className='date-text'>{formatDate}</p>
    </div>
  );
}