import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {useState} from 'react'

import Header from './Components/Header';
import NavBar from './Components/Nav';
import Articles from './Components/Articles';
import ArticleById from './Components/Article_by_id';
import Comments from './Components/Comments';

import AreYouLoggedIn from './Components/LoginDirector';

function App() {

  const [sortBy, setSortBy] = useState("created_at");

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar setSortBy={setSortBy}/>
        <AreYouLoggedIn>
          <Routes>
            <Route path="/" element={<Articles sortBy={sortBy} setSortBy={setSortBy}/>}/>
            <Route path="/articles" element={<Articles sortBy={sortBy} setSortBy={setSortBy}/>} />
            <Route path="/articles/:topic" element={<Articles sortBy={sortBy} setSortBy={setSortBy}/>} />
            <Route path="/articles/:topic/:id" element={<ArticleById />} />
            <Route path="/articles/:topic/:id/comments" element={<Comments />} />
            </Routes> 
          </AreYouLoggedIn>
      </div>
    </BrowserRouter>
  );
}

export default App;
