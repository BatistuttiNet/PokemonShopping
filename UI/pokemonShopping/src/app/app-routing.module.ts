import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module')
      .then(m => m.AuthModule),
  },
  {
    path: 'buy',
    loadChildren: () => import('./modules/products/products.module')
      .then(m => m.ProductsModule),
  },
  {
    path: 'cart',
    loadChildren: () => import('./modules/cart/cart.module')
      .then(m => m.CartModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
