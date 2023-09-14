import './App.css';
import Header from '../Header/Header';
import ArticlesContainer from '../ArticlesContainer/ArticlesContainer';
import ArticleView from '../ArticleView/ArticleView';
import { Route, Routes } from 'react-router-dom';
import newsData from '../../newsData.json';
import {v4 as uuid} from 'uuid';
// import { useState } from 'react'

function App() {
  let articles = newsData.articles.map(article => {return {...article, id: `${article.publishedAt}-${article.title.split(' ').join('-')}`}});

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/'>
        <Route index  element={<ArticlesContainer articles={articles}/>} />
        <Route path=':id' element={<ArticleView articles={articles}/>}/>
      </Route>

      </Routes>
    </div>
  );
}

export default App;
