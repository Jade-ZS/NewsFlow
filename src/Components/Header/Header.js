import "./Header.css";
import { Link, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [searchParam, setSearchParam] = useSearchParams();
  
  const handleSearch = () => {
    setSearchParam({'search': searchInput});
  }

  return (
    <header>
      <Link to='/'>
        <h1 className='app-title'>NewsFlow</h1>
      </Link>
      <div className="search-bar">
        <input
          className="search-input"
          placeholder="Search article by headline"
          onChange={e => setSearchInput(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>SEARCH</button>
      </div>
    </header>
  );
}
