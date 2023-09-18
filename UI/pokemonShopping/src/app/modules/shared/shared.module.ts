import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicLayaoutComponent } from './public-layaout/public-layaout.component';
import { PrivateLayaoutComponent } from './private-layaout/private-layaout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PublicLayaoutComponent,
    PrivateLayaoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
