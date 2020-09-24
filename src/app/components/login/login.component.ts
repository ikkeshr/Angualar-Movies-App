import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword: boolean = false;

  loginForm: FormGroup;

  invalidEmail: boolean = false;
  invalidPassword: boolean = false;

  staySignedIn: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$")
      ])],
      password: ['', Validators.required]
    });
  }

  public togglePassword(): void {
    this.showPassword = !this.showPassword;
  }

  public staySignedInCheckBox(value): void {
    this.staySignedIn = value;
  }

  submitLoginForm(): void {
    this.invalidEmail = (this.loginForm.controls.email.errors != null);
    this.invalidPassword = (this.loginForm.controls.password.errors != null);

    if (this.invalidEmail || this.invalidPassword) return;

    this.router.navigate(["/"]);
  }

}
