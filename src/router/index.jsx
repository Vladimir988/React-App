import Home from "../pages/Home";
import About from "../pages/About";
import Posts from "../pages/Posts";
import SinglePost from "../pages/SinglePost";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

export const privateRoutes = [
  {path: '/', element: <Home />, exact: true},
  {path: '/about', element: <About />, exact: true},
  {path: '/posts', element: <Posts />, exact: true},
  {path: '/posts/:id', element: <SinglePost />, exact: true},
];

export const publicRoutes = [
  {path: '/login', element: <Login />, exact: true},

  {path: '*', element: <NotFound />, exact: true},
];