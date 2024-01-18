import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <ul className={classes.navbar}>
      <li className={classes.item}><Link to="/about">About</Link></li>
      <li className={classes.item}><Link to="/posts">Posts</Link></li>
    </ul>
  );
};

export default Navbar;