import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";
import SinglePost from "../pages/SinglePost";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/posts/:id" element={<SinglePost />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;