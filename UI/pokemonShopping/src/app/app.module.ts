import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule } from './modules/api/api.module';
import { environment } from 'src/environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { authReducer, featureKey } from './modules/+state/auth.reducer';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AuthEffects } from './modules/+state/auth.effects';
import { DashboardComponent } from './modules/shared/dashboard/dashboard.component';
import { UserConfigComponent } from './modules/shared/user-config/user-config.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature(featureKey, authReducer),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AuthEffects]),
    ApiModule.forRoot({ rootUrl: environment.apiBasePath}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
