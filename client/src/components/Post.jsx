import React from 'react';
import { deletePost, likePost } from '../api';

const Post = ({ post, refresh }) => {
  const handleLike = async () => {
    await likePost(post._id);
    refresh();
  };

  const handleDelete = async () => {
    await deletePost(post._id);
    refresh();
  };

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.message}</p>
      <small>By {post.creator}</small>

      <div className="tags">
        {post.tags?.map((tag) => `#${tag} `)}
      </div>

      <div className="actions">
        <button onClick={handleLike}>👍 {post.likeCount}</button>
        <button className="danger" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Post;
