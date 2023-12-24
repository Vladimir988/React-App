import React from 'react';
import classes from "./Pagination.module.css";
import {getPagesArray} from "../../../utils/pages";

const Pagination = ({totalPages, page, changePage}) => {
  const pagesArray = getPagesArray(totalPages);
  return (
    <div className={classes.pagination}>
      {pagesArray.map(p =>
        <span key={p} className={page === p ? [classes.btn, classes.active].join(' ') : classes.btn} onClick={() => changePage(p)}>{p}</span>
      )}
    </div>
  );
};

export default Pagination;