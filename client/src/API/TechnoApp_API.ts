import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api/v1';
// 'https://delivery-app-express-postgreql-api.vercel.app/api/v1'; //'http://localhost:5000/api/v1';

export const TechnoApp_API = {
  getClients: () => {
    return axios.get('/clients');
  },
  getProjects: (clientId: string) => {
    return axios.get(`/${clientId}/projects`);
  },
};
