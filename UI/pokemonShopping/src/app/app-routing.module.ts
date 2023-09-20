import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/shared/dashboard/dashboard.component';
import { UserConfigComponent } from './modules/shared/user-config/user-config.component';
import { PrivateLayaoutComponent } from './modules/shared/private-layaout/private-layaout.component';
import { AuthenticateGuard } from './authenticate.guard';
import { AdminGuard } from './admin.guard';

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
    path: '',
    component: PrivateLayaoutComponent,
    canActivate: [AuthenticateGuard],
    children: [
      {
        path: 'buy',
        loadChildren: () => import('./modules/products/products.module')
          .then(m => m.ProductsModule),
      },
      {
        path: 'cart',
        loadChildren: () => import('./modules/cart/cart.module')
          .then(m => m.CartModule),
      },
      {
        path: 'dashboard',
        canActivate: [AdminGuard],
        component: DashboardComponent
      },
      {
        path: 'user/config',
        component: UserConfigComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
