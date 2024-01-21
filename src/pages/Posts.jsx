import React, {useEffect, useRef, useState} from 'react';
import PostForm from "../components/PostForm";
import PostFilter from '../components/PostFilter';
import PostList from '../components/PostList';
import MyModal from "../components/Ui/modal/MyModal";
import MyButton from "../components/Ui/button/MyButton";
import Loader from "../components/Ui/loader/Loader";
import {usePosts} from "../hooks/usePosts";
import PostService from "../services/PostService";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import {useObserver} from "../hooks/useObserver";
import MySelect from "../components/Ui/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const lastElement = useRef();
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.queryPosts(limit, page);
    setPosts([...posts, ...response.data]);
    setTotalPages(getPageCount(response.headers['x-total-count'], limit));
  });

  useObserver(page, lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

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
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue='Posts by page'
        options={[
          {value: 5, name: '5'},
          {value: 10, name: '10'},
          {value: 15, name: '15'},
          {value: -1, name: 'All'}
        ]}
      />
      {postError &&
        <h1 style={{textAlign:'center', marginTop: '15px'}}>Error hapened!!! <br/> {postError}</h1>
      }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts list:' lastElement={lastElement} />
      <div ref={lastElement} style={{height:'0',background:'transparent'}}></div>
      {isPostsLoading && <Loader /> }
    </div>
  );
}

export default Posts;