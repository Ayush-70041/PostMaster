import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5001/posts',
});

export const fetchPosts = () => API.get('/');
export const createPost = (post) => API.post('/', post);
export const deletePost = (id) => API.delete(`/${id}`);
export const likePost = (id) => API.patch(`/${id}/likePost`);
