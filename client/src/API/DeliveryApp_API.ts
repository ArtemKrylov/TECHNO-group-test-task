import axios from 'axios';
import { IOrder } from 'utils/ts/models/order';

export const DeliveryApp_API = {
  getShops: () => {
    return axios.get('/shops');
  },
  getProducts: (shopName: string) => {
    return axios.get('/shops/id/{id}');
  },
  postOrder: (order: IOrder) => {
    return axios.post('/orders');
  },
};
