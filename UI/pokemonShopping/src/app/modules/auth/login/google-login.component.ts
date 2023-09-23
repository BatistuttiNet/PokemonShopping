import { Component, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import { AuthState } from '../../+state/auth.reducer';
import { Store } from '@ngrx/store';
import { loginWithGoogle } from '../../+state/auth.actions';

@Component({
  selector: 'app-google-login',
  template: '<div id="buttonDiv"></div>'
})
export class GoogleLoginComponent implements AfterViewInit {

  constructor(private elementRef: ElementRef, private store: Store<AuthState>, private ngZone: NgZone) { }

  ngAfterViewInit(): void {
    this.initializeGoogleSignIn();
  }

  initializeGoogleSignIn(): void {
    (window as any).google.accounts.id.initialize({
      client_id: '647995690455-k62kepvj533andrh9k2j0dp0q1dqne4j.apps.googleusercontent.com',
      callback: this.handleCredentialResponse.bind(this)
    });

    (window as any).google.accounts.id.renderButton(
      this.elementRef.nativeElement.querySelector("#buttonDiv"),
      { theme: "outline", size: "large" }
    );
  }

  handleCredentialResponse(response: any): void {
    this.ngZone.run(() => {
      console.log(response);
      this.store.dispatch(loginWithGoogle({
        googleCredentials: response.credential
      }));
    });
  }
}
