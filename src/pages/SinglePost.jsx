import React from "react";
import {useParams} from "react-router-dom";

const SinglePost = () => {
  const params = useParams();
  return (
    <div>
      <h1>Single Post Id: {params.id}</h1>
    </div>
  );
};

export default SinglePost;