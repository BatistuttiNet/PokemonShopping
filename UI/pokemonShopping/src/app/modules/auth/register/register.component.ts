import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthState } from '../../+state/auth.reducer';
import { Observable, Subscription } from 'rxjs';
import { selectError, selectIsLoading } from '../../+state/auth.selector';
import { ErrorStateMatcher } from '@angular/material/core';
import { createUSer } from '../../+state/auth.actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  message: string | null;
  $isLoading: Observable<boolean>;
  error: Subscription;
  passwordHidden = true;
  passwordConfirmHidden = true;
  matcherEmail = new StateMatcherEmailMismatch();
  matcherPassword = new StateMatcherPasswordMismatch();

  constructor(private fb: FormBuilder, private store: Store<AuthState>) {

    const passwordPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$';

    this.message = '',
    this.registrationForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      emailConfirm: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(passwordPattern)]],
      passwordConfirm: ['', [Validators.required]]
    }, { validators: [this.matchValidator('email', 'emailConfirm', 'emailMismatch'), this.matchValidator('password', 'passwordConfirm', 'passwordMismatch')] });


    this.$isLoading = this.store.select(selectIsLoading);
    this.error = this.store.select(selectError).subscribe(x => this.message = x);
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.registrationForm.valid) {
      this.store.dispatch(createUSer({
        user: {
          ...this.registrationForm.value
        }
      }))
    } else {
      this.message = "Faltan campos obligatorios"
    }
  }

  matchValidator(field1: string, field2: string, errorName: string): (control: AbstractControl) => { [key: string]: boolean } | null {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const firstField = control.get(field1);
      const secondField = control.get(field2);

      if (firstField && secondField && firstField.value !== secondField.value) {
        return { [errorName]: true };
      }
      return null;
    }
  }
}

export class StateMatcherEmailMismatch implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const invalidCtrl = !!(control && control.invalid && (control.dirty || control.touched));
      const invalidParent = !!(control && control.parent && control.parent.hasError('emailMismatch')
          && (control.dirty || control.touched));

      return (invalidCtrl || invalidParent);
  }
}

export class StateMatcherPasswordMismatch implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
      const invalidCtrl = !!(control && control.invalid && (control.dirty || control.touched));
      const invalidParent = !!(control && control.parent && control.parent.hasError('passwordMismatch')
          && (control.dirty || control.touched));

      return (invalidCtrl || invalidParent);
  }
}
