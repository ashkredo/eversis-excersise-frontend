import axios from 'axios';
import authTokenHeader from './authTokenHeader';

const instance = axios.create({
  baseURL:
    window.location.hostname === 'localhost'
      ? 'http://localhost:5000/api/'
      : '',
  headers: { ...authTokenHeader(), 'Content-Type': 'application/json' },
});

export const appAPI = {
  сheckAPI: () => {
    return instance
      .get('service/health')
      .then((response) => response.data)
      .catch((e) => {
        console.error(e);
        setTimeout(() => window.location.reload(true), 10000);
      });
  },
};

export const userAPI = {
  updateUserData: () => {
    // TODO
  },
};
