import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className='search-bar'>
      <input className='search-input' placeholder='Search article by headline'/>
      <button className='search-button'>SEARCH</button>
    </div>
  )
}