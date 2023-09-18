/* tslint:disable */
/* eslint-disable */
import { ShoppingCartDto } from './shopping-cart-dto';
export interface UserDto {
  email?: null | string;
  id?: string;
  name?: null | string;
  rol?: null | string;
  shoppingCarts?: null | Array<ShoppingCartDto>;
}
