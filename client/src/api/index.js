import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3030' });
// const API = axios.create({ baseURL: "https://cz-m-project.herokuapp.com/" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem('profile')).token
    }`;
  }
  return req;
});

// Auth
export const signIn = (formData) => API.post('/signIn', formData);
export const signUp = (formData) => API.post('/signUp', formData);

// Admin - User
export const fetchUsers = () => API.get('/admin/users');
export const createUser = (newUser) => API.post('/admin/users', newUser);
export const updateUser = (id, updatedUser) =>
  API.patch(`/admin/users/${id}`, updatedUser);
export const deleteUser = (id) => API.delete(`/admin/users/${id}`);

// Workspace
export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts', newPost);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
