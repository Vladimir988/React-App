import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import PostService from "../services/PostService";
import {useFetching} from "../hooks/useFetching";
import Loader from "../components/Ui/loader/Loader";

const SinglePost = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.queryPostById(id);
    setPost(response.data);
  });
  const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
    const comments = await PostService.queryCommentsById(id);
    setComments(comments.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h1>Single Post ID: {params.id}</h1><br/>
      {isLoading
        ? <Loader />
        : <div>
            <b>Title:</b> {post.title}<br/>
            <b>Body:</b> {post.body}
          </div>
      }
      <br/><h3>Comments:</h3><br/>
      {isComLoading
        ? <Loader />
        : <div className="comments">
          {comments.map(comment =>
            <div key={comment.id} className="item">
              <p className="name"><b>Name:</b> {comment.name}</p>
              <p className="email"><b>Email:</b> {comment.email}</p>
              <p className="comment"><b>Comment:</b> {comment.body}</p>
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default SinglePost;