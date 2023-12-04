import React from 'react';

const PostItem = () => {
  return (
    <div className="post">
      <div className="post__content">
        <strong>1. Javascript</strong>
        <div>
          Javascript - programing language
        </div>
        <div className="post__btns">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;