import './App.css';
import Header from '../Header/Header';
import ArticlesContainer from '../ArticlesContainer/ArticlesContainer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<ArticlesContainer />}/>
      </Routes>
    </div>
  );
}

export default App;
