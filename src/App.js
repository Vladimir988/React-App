import React, {useMemo, useState} from 'react';
import './styles/App.css';
import PostForm from "./components/PostForm";
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';
import MyModal from "./components/Ui/modal/MyModal";
import MyButton from "./components/Ui/button/MyButton";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'B Javascript 1', body: 'C Description 1'},
    {id: 2, title: 'A Javascript 2', body: 'B Description 2'},
    {id: 3, title: 'C Javascript 3', body: 'A Description 3'},
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }

    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (postId) => {
    setPosts(posts.filter(p => p.id !== postId));
  };

  return (
    <div className="App">
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
