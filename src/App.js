import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './Components/Header';
import NavBar from './Components/Nav';
import Articles from './Components/Articles';
import ArticleById from './Components/Article_by_id';
import Comments from './Components/Comments';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <NavBar />
          <Routes>
            <Route path="/" element={<Articles />}/>
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:topic" element={<Articles />} />
            <Route path="/articles/:topic/:id" element={<ArticleById />} />
            <Route path="/articles/:topic/:id/comments" element={<Comments />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
