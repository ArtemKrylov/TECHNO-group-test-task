export interface IProduct {
  id: number;
  shop_id: number;
  product_name: string;
  price: number;
  number: number;
  image: string;
  orderedNumber?: number;
}
