import axios from 'axios';

const api = axios.create({ baseURL: 'https://softwaretrapiche.onrender.com' });

export {api}