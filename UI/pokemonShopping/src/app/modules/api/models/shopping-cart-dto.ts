/* tslint:disable */
/* eslint-disable */
import { ProductInCartDto } from './product-in-cart-dto';
export interface ShoppingCartDto {
  id?: string;
  products?: null | Array<ProductInCartDto>;
  purchaseDate?: null | string;
  transferId?: null | string;
}
