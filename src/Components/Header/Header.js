import "./Header.css";

export default function Header() {
  return (
    <header>
      <h1 className='app-title'>NewsFlow</h1>
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
