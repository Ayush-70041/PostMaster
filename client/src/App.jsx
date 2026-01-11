import React, { useEffect, useState } from 'react';
import { fetchPosts, createPost } from './api';
import Posts from './components/Posts';
import Form from './components/Form';

const App = () => {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const { data } = await fetchPosts();
    setPosts(data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  const addPost = async (post) => {
    await createPost(post);
    loadPosts();
  };

  return (
    <div className="container">
      <h1>PostMaster</h1>
      <Form addPost={addPost} />
      <Posts posts={posts} refresh={loadPosts} />
    </div>
  );
};

export default App;
