export interface IOrderItem {
  product_id: number;
  product_number: number;
}

export interface IOrder {
  name: string;
  email: string;
  phone: string;
  customer_address: string;
  shop_id: number;
  order_items: string;
  total_price: number;
}
