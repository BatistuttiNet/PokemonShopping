import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;
  message = '';

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.message = 'Iniciando sesión...';

      setTimeout(() => {
        this.isLoading = false;
        this.message = 'Inicio de sesión exitoso';
      }, 2000);
    }
  }
}
