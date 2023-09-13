import './ArticleView.css';
import { useParams } from 'react-router-dom';

export default function ArticleView() {
  const { id } = useParams();

  return (
    <h1>article view {id}</h1>
  )
}