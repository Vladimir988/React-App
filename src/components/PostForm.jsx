import React, {useState} from 'react';
import MyInput from "./Ui/input/MyInput";
import MyButton from "./Ui/button/MyButton";

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', body: ''});

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post, id: Date.now()
    };
    create(newPost);
    setPost({title: '', body: ''});
  }

  return (
    <form action="">
      <MyInput
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}
        type="text"
        placeholder='Title'
      />
      <MyInput
        value={post.body}
        onChange={e => setPost({...post, body: e.target.value})}
        type="text"
        placeholder='Description'
      />
      <MyButton onClick={addNewPost}>Add Post</MyButton>
    </form>
  );
};

export default PostForm;