import './ErrorDisplay.css';
import { Navigate } from 'react-router-dom';

export default function ErrorDisplay() {
  return (
    <div className='error-display'>
      <h1>Ooopsy...Page Not Found</h1>
      <img src='https://i.gifer.com/jU.gif' alt='crying face'/>
      <p>We are sorry, it seems that something went wrong</p>
    </div>
  );
}