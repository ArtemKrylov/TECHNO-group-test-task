import axios from 'axios';
import { IOrder } from 'utils/ts/models/order';

axios.defaults.baseURL = 'http://localhost:5000';

export const DeliveryApp_API = {
  getShops: () => {
    return axios.get('/shops');
  },
  getProducts: (shopId: number) => {
    return axios.get(`/products/${shopId}`);
  },
  postOrder: (order: IOrder) => {
    console.log('order: ', JSON.stringify(order));

    return axios.post('/orders/make-order', order);
  },
};
