/* tslint:disable */
/* eslint-disable */
import { UserDto } from './user-dto';
export interface AuthResponse {
  token?: null | string;
  user?: UserDto;
}
