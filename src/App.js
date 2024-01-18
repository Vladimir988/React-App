import React from 'react';
import './styles/App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Navbar from "./components/Ui/navbar/Navbar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path='*' element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;