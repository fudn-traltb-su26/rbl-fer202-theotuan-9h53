import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3001',
  timeout: 5000
});

api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export const getRooms = (params) => api.get('/rooms', { params });
export const getRoomById = (id) => api.get(`/rooms/${id}`);
export const createRoom = (data) => api.post('/rooms', data);
export const updateRoom = (id, data) => api.put(`/rooms/${id}`, data);
export const deleteRoom = (id) => api.delete(`/rooms/${id}`);
