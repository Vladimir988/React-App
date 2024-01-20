import Home from "../pages/Home";
import About from "../pages/About";
import Posts from "../pages/Posts";
import SinglePost from "../pages/SinglePost";
import NotFound from "../pages/NotFound";

export const routes = [
  {path: '/', element: <Home />, exact: true},
  {path: '/about', element: <About />, exact: true},
  {path: '/posts', element: <Posts />, exact: true},
  {path: '/posts/:id', element: <SinglePost />, exact: true},

  {path: '*', element: <NotFound />, exact: true},
];