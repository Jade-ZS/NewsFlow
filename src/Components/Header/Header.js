import "./Header.css";
import { Link, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Header() {
  const {innerWidth: width, innerHeight: height} = window;
  const [searchInput, setSearchInput] = useState("");
  const [, setSearchParam] = useSearchParams();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    if (width < height) {
      setIsPortrait(false)
    } else {
      setIsPortrait(true)
    }
  }, [width, height])

  const handleSearch = () => {
    if (!searchInput.length) {
      alert("This field cannot be empty");
      return;
    }
    setSearchParam({ search: searchInput });
    setSearchInput("");
  };

  const handleMenu = () => {
    setShowSearchBar(prev => !prev);
  };

  const searchBar = (
    <div className="search-bar">
      <input
        className="search-input"
        placeholder="Search by headline"
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
      />
      <button className="search-button" onClick={handleSearch}>
        SEARCH
      </button>
    </div>
  );

  const dropDown = (
    <div className='drop-down'>
      {searchBar}
    </div>
  );

  return (
    <header>
      <Link to="/">
        <h1 className="app-title">NewsFlow</h1>
      </Link>
      <img 
        className='menu-icon'
        src={require("../../Assets/menu.png")} 
        alt='menu'
        onClick={handleMenu}
      />
      {searchBar}
      {dropDown}
    </header>
  );
}
