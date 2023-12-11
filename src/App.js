import React, {useMemo, useState} from 'react';
import './styles/App.css';
import PostForm from "./components/PostForm";
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'B Javascript 1', body: 'C Description 1'},
    {id: 2, title: 'A Javascript 2', body: 'B Description 2'},
    {id: 3, title: 'C Javascript 3', body: 'A Description 3'},
  ]);
  const [filter, setFilter] = useState({sort: '', query: ''});

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
  };

  const removePost = (postId) => {
    setPosts(posts.filter(p => p.id !== postId));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin:'20px 0'}} />
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {posts.length
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts list:' />
        : <h1 style={{textAlign:'center', marginTop: '15px'}}>Posts not found!</h1>
      }
    </div>
  );
}

export default App;
