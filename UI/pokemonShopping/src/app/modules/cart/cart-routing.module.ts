import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateLayaoutComponent } from '../shared/private-layaout/private-layaout.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateLayaoutComponent,
    children: [
      { path: '', component: CartComponent },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRoutingModule {}
