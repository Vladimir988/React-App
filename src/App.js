import React, {useEffect, useState} from 'react';
import './styles/App.css';
import PostForm from "./components/PostForm";
import PostFilter from './components/PostFilter';
import PostList from './components/PostList';
import MyModal from "./components/Ui/modal/MyModal";
import MyButton from "./components/Ui/button/MyButton";
import Loader from "./components/Ui/Loader/Loader";
import {usePosts} from "./hooks/usePosts";
import PostService from "./Services/PostService";
import {useFetching} from "./hooks/useFetching";
import getPageCount from "./utils/pages";

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, sePage] = useState(1);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.queryPosts(limit, page);
    setPosts(response.data);
    setTotalPages(getPageCount(response.headers['x-total-count'], limit));
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

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
      {postError &&
        <h1 style={{textAlign:'center', marginTop: '15px'}}>Error hapened!!! <br/> {postError}</h1>
      }
      {isPostsLoading
        ? <Loader />
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts list:' />
      }
    </div>
  );
}

export default App;
