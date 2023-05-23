import { IProduct } from './product';

export interface IOrder {
  name: string;
  email: string;
  phone: string;
  customerAddress: string;
  shop: string;
  orderItems: IProduct[];
  totalPrice: number;
}
