import React, {useState} from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from "./components/PostForm";
import MySelect from "./components/Ui/select/MySelect";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'B Javascript 1', body: 'C Description 1'},
    {id: 2, title: 'A Javascript 2', body: 'B Description 2'},
    {id: 3, title: 'C Javascript 3', body: 'A Description 3'},
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (postId) => {
    setPosts(posts.filter(p => p.id !== postId));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin:'20px 0'}} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue='Filter by'
        options={[
          {value: 'title', name: 'Filter by name'},
          {value: 'body', name: 'Filter by description'}
        ]}
      />
      {posts.length
        ? <PostList remove={removePost} posts={posts} title='Posts list 1:' />
        : <h1 style={{textAlign:'center'}}>Posts not found!</h1>
      }
    </div>
  );
}

export default App;
