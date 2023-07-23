import axios from 'axios';

axios.defaults.baseURL =
  'https://techno-group-test-task-express-psql-api/api/v1';
// 'http://localhost:5000/api/v1';

export const TechnoApp_API = {
  getClients: () => {
    return axios.get('/clients');
  },
  getProjects: (clientId: string) => {
    return axios.get(`/${clientId}/projects`);
  },
  createProject: (clientId: string, id_project: string) => {
    return axios.post(`/${clientId}/projects`, { id_project });
  },
};
