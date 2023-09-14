import "./Header.css";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to='/'>
        <h1 className='app-title'>NewsFlow</h1>
      </Link>
      <div className="search-bar">
        <input
          className="search-input"
          placeholder="Search article by headline"
        />
        <button className="search-button">SEARCH</button>
      </div>
    </header>
  );
}
