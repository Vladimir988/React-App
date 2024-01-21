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
import Pagination from "../components/Ui/pagination/Pagination";
import {useObserver} from "../hooks/useObserver";

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
  }, [page]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (postId) => {
    setPosts(posts.filter(p => p.id !== postId));
  };

  const changePage = (page) => {
    setPage(page);
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
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Posts list:' />
      <div ref={lastElement} style={{height:'20px',background:'red'}}></div>
      {isPostsLoading && <Loader /> }
      <Pagination
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;