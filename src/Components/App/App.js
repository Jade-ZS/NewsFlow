import './App.css';
import Header from '../Header/Header';
import ArticlesContainer from '../ArticlesContainer/ArticlesContainer';
import ArticleView from '../ArticleView/ArticleView';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/'>
        <Route index  element={<ArticlesContainer />} />
        <Route path=':id' element={ArticleView}/>
      </Route>

      </Routes>
    </div>
  );
}

export default App;
