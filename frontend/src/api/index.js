import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' })

const url = 'http://localhost:5000/events';
// const adminUrl = `${url}/admin`;

export const fetchEvents = () => axios.get(url);
export const createEvent = (newEvent) => API.post('/events', newEvent);
export const attendEvent = (id) => API.patch(`/evnet/${id}/attendEvent`);
export const updateEvent = (id, updatedEvent) => API.patch(`/events/${id}/`, updatedEvent)
export const deleteEvent = (id) => API.delete(`/events/${id}`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);

 