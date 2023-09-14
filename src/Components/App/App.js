import "./App.css";
import Header from "../Header/Header";
import ArticlesContainer from "../ArticlesContainer/ArticlesContainer";
import ArticleView from "../ArticleView/ArticleView";
import { Route, Routes } from "react-router-dom";
import newsData from "../../newsData.json";
import { v4 as uuid } from "uuid";
// import { useState } from 'react'

function App() {
  let articles = newsData.articles.map((article) => {
    const localDate = new Date(article.publishedAt).toString().split(" ");
    const timeZone = `${localDate[6][1]}${localDate[7][0]}${localDate[8][0]}`;
    localDate.splice(5, 4, timeZone);
    const formatDate = `${localDate[0]}, ${localDate[1]} ${localDate[2]}, ${localDate[3]}, ${localDate[4]} ${localDate[5]}`;
    return {
      ...article,
      formatDate,
      id: `${article.publishedAt}-${article.title.split(" ").join("-")}`,
    };
  });

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<ArticlesContainer articles={articles} />} />
          <Route path=":id" element={<ArticleView articles={articles} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
