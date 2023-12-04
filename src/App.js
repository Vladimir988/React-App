import React from 'react';
import PostItem from './components/PostItem';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'Javascript 1', body: 'Description 1'}}/>
    </div>
  );
}

export default App;
