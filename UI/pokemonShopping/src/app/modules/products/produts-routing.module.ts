import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';
import { RegisterComponent } from '../auth/register/register.component';
import { PublicLayaoutComponent } from '../shared/public-layaout/public-layaout.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { PrivateLayaoutComponent } from '../shared/private-layaout/private-layaout.component';

const routes: Routes = [
  {
    path: '',
    component: PrivateLayaoutComponent,
    children: [
      { path: 'products', component: ProductsComponent },
      { path: 'product/:id', component: ProductDetailComponent },
      {
        path: '',
        redirectTo: 'product',
        pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
