import axios from 'axios';

const API = axios.create({
  baseURL: 'https://postmaster-5b7h.onrender.com/posts',
});

export const fetchPosts = () => API.get('/');
export const createPost = (post) => API.post('/', post);
export const deletePost = (id) => API.delete(`/${id}`);
export const likePost = (id) => API.patch(`/${id}/likePost`);
