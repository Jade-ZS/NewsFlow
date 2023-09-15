import "./Header.css";
import { Link, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [, setSearchParam] = useSearchParams();
  
  const handleSearch = () => {
    if (!searchInput.length) {
      alert('This field cannot be empty');
      return;
    }
    setSearchParam({'search': searchInput});
    setSearchInput('');
  }

  return (
    <header>
      <Link to='/'>
        <h1 className='app-title'>NewsFlow</h1>
      </Link>
      <img className='menu-icon'  src={require('../../Assets/menu.png')}/>
      <div className="search-bar">
        <input
          className="search-input"
          placeholder="Search by headline"
          onChange={e => setSearchInput(e.target.value)}
          value={searchInput}
        />
        <button className="search-button" onClick={handleSearch}>SEARCH</button>
      </div>
    </header>
  );
}
