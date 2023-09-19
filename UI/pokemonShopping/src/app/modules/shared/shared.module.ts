import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicLayaoutComponent } from './public-layaout/public-layaout.component';
import { PrivateLayaoutComponent } from './private-layaout/private-layaout.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from './angularMaterial.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserConfigComponent } from './user-config/user-config.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';



@NgModule({
  declarations: [
    PublicLayaoutComponent,
    PrivateLayaoutComponent,
    SuccessAlertComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
  ],
  exports: [
    AngularMaterialModule
  ]
})
export class SharedModule { }
