import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";
import MyButton from "../button/MyButton";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <ul>
        <li className={classes.item}><Link to="/">Home</Link></li>
        <li className={classes.item}><Link to="/about">About</Link></li>
        <li className={classes.item}><Link to="/posts">Posts</Link></li>
        <li className={classes.item}><Link to="/login">Login</Link></li>
      </ul>
      <MyButton>
        Logout
      </MyButton>
    </div>
  );
};

export default Navbar;