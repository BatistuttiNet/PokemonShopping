import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { GoogleLoginComponent } from './login/google-login.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    GoogleLoginComponent,
  ],
  imports: [
    AuthRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    CommonModule
  ]
})
export class AuthModule { }
