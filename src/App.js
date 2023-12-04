import React, {useRef, useState} from 'react';
import PostList from './components/PostList';
import MyButton from './components/Ui/button/MyButton';
import MyInput from "./components/Ui/input/MyInput";
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Description 1'},
    {id: 2, title: 'Javascript 2', body: 'Description 2'},
    {id: 3, title: 'Javascript 3', body: 'Description 3'},
  ]);

  const [title, setTitle] = useState();
  const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    console.log(title);
    console.log(bodyInputRef.current.value);
  }

  return (
    <div className="App">
      <form action="">
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder='Title'
        />
        <MyInput
          ref={bodyInputRef}
          type="text"
          placeholder='Description'
        />
        <MyButton onClick={addNewPost}>Add Post</MyButton>
      </form>

      <PostList posts={posts} title='Posts list 1:'/>
    </div>
  );
}

export default App;
