import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { AuthState } from '../../+state/auth.reducer';
import { Store } from '@ngrx/store';
import { loginWithGoogle } from '../../+state/auth.actions';

declare var google: any;

@Component({
  selector: 'app-google-login',
  template: '<div id="buttonDiv"></div>'
})
export class GoogleLoginComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef, private store: Store<AuthState>) { }

  ngAfterViewInit(): void {
    this.initializeGoogleSignIn();
  }

  initializeGoogleSignIn(): void {
    google.accounts.id.initialize({
      client_id: '647995690455-k62kepvj533andrh9k2j0dp0q1dqne4j.apps.googleusercontent.com',
      callback: this.handleCredentialResponse.bind(this)
    });

    google.accounts.id.renderButton(
      this.elementRef.nativeElement.querySelector("#buttonDiv"),
      { theme: "outline", size: "large" }
    );
  }

  handleCredentialResponse(response: any): void {
    // Tu lógica al recibir la respuesta
    console.log(response);

      this.store.dispatch(loginWithGoogle({
        googleCredentials: response.credential
      }));

  }
}
