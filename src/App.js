import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Components/Header';
import NavBar from './Components/Nav';
import Articles from './Components/Articles';
import ArticleById from './Components/Article_by_id';
import Comments from './Components/Comments';
import { UserProvider } from './Context/UserContext';
import {useState} from 'react'
import { useContext } from "react";
import { UserContext } from "../Context/UserContext"

function App() {

  const [sortBy, setSortBy] = useState("created_at");

  const { isLoggedIn } = useContext(UserContext)

  return (
    <UserProvider>
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar setSortBy={setSortBy}/>
          <Routes>
            <Route path="/" element={<Articles sortBy={sortBy} setSortBy={setSortBy}/>}/>
            <Route path="/articles" element={<Articles sortBy={sortBy} setSortBy={setSortBy}/>} />
            <Route path="/articles/:topic" element={<Articles sortBy={sortBy} setSortBy={setSortBy}/>} />
            <Route path="/articles/:topic/:id" element={<ArticleById />} />
            <Route path="/articles/:topic/:id/comments" element={<Comments />} />
          </Routes>
      </div>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
