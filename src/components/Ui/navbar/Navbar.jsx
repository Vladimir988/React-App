import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";

const Navbar = () => {
  const {isAuth, setIsAuth} = useContext(AuthContext);

  const logout = event => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  }

  return (
    <div className={classes.navbar}>
      <ul>
        <li className={classes.item}><Link to="/">Home</Link></li>
        <li className={classes.item}><Link to="/about">About</Link></li>
        <li className={classes.item}><Link to="/posts">Posts</Link></li>
        <li className={classes.item}><Link to="/login">Login</Link></li>
      </ul>
      <MyButton onClick={logout}>Logout</MyButton>
    </div>
  );
};

export default Navbar;