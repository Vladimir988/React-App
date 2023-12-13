import React, {useEffect, useState} from 'react';
import axios from "axios";
import './styles/App.css';
import PostForm from "./components/PostForm";
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';
import MyModal from "./components/Ui/modal/MyModal";
import MyButton from "./components/Ui/button/MyButton";
import {usePosts} from "./hooks/usePosts";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data);
  }

  const removePost = (postId) => {
    setPosts(posts.filter(p => p.id !== postId));
  };

  return (
    <div className="App">
      <MyButton style={{margin:'20px 0 0'}} onClick={fetchPosts}>Get Posts</MyButton>
      <hr style={{margin:'20px 0'}} />
      <MyButton style={{margin:'20px 0 0'}} onClick={() => setModal(true)}>Create Post</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{margin:'20px 0'}} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts list:' />
    </div>
  );
}

export default App;
