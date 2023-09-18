import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { CartRoutingModule } from './cart-routing.module';
import { ProductsModule } from '../products/products.module';
import { CartProductComponent } from './cart-product/cart-product.component';



@NgModule({
  declarations: [
    CartComponent,
    CartProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule,
    ProductsModule
  ]
})
export class CartModule { }
