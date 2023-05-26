import axios from 'axios';
import { IOrder } from 'utils/ts/models/order';

axios.defaults.baseURL =
  'https://delivery-app-express-postgreql-api.vercel.app/api/v1'; //'http://localhost:5000/api/v1';

export const DeliveryApp_API = {
  getShops: () => {
    return axios.get('/shops');
  },
  getProducts: (shopId: number) => {
    return axios.get(`/products/${shopId}`);
  },
  postOrder: (order: IOrder) => {
    return axios.post('/orders/make-order', order);
  },
};
