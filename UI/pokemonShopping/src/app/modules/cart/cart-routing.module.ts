import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartHistoryComponent } from './cart-history/cart-history.component';

const routes: Routes = [
  { path: '', component: CartComponent },
  { path: 'history', component: CartHistoryComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
