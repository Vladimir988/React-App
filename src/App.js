import React, {useState} from 'react';
import PostList from './components/PostList';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript 1', body: 'Description 1'},
    {id: 2, title: 'Javascript 2', body: 'Description 2'},
    {id: 3, title: 'Javascript 3', body: 'Description 3'},
  ]);

  const [posts2, setPosts2] = useState([
    {id: 1, title: 'Python 1', body: 'Description 1'},
    {id: 2, title: 'Python 2', body: 'Description 2'},
    {id: 3, title: 'Python 3', body: 'Description 3'},
  ]);

  return (
    <div className="App">
      <PostList posts={posts} title='Posts list 1:'/>
      <PostList posts={posts2} title='Posts list 2:'/>
    </div>
  );
}

export default App;
