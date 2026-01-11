import React from 'react';
import Post from './Post';

const Posts = ({ posts, refresh }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post key={post._id} post={post} refresh={refresh} />
      ))}
    </div>
  );
};

export default Posts;
