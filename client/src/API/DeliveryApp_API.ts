import axios from 'axios';

axios.defaults.baseURL =
  'https://delivery-app-express-postgreql-api.vercel.app/api/v1'; //'http://localhost:5000/api/v1';

export const TechnoApp_API = {
  getClients: () => {
    return axios.get('/clients');
  },
  getProjects: () => {
    return axios.get('/projects');
  },
};
