import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthState } from '../../+state/auth.reducer';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { selectError, selectIsLoading } from '../../+state/auth.selector';
import { login } from '../../+state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  $isLoading: Observable<boolean>;
  error: Subscription;

  message: string | null;

  constructor(private fb: FormBuilder, private store: Store<AuthState>) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });

    this.message = '',
    this.$isLoading = this.store.select(selectIsLoading);
    this.error = this.store.select(selectError).subscribe(x => this.message = x);

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.store.dispatch(login({
        ...this.loginForm.value
      }) )
    } else {
      this.message = "Faltan campos obligatorios"
    }
  }
}
