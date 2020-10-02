import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchJsonService } from '../../services/fetch-json.service';
import {TranslateService} from '@ngx-translate/core';
import { TranslationConf } from '../../configurations/translation-conf';

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

  translationLanguages: string[];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private fetchJson: FetchJsonService,
    private translate: TranslateService
  ) {
    this.translationLanguages = new TranslationConf().getLanguages();
  }

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

  public changeLanguage(langCode: string): void {
    this.translate.setDefaultLang(langCode);
    localStorage.setItem("language", langCode);
  }

  submitLoginForm(): void {
    this.invalidEmail = (this.loginForm.controls.email.errors != null);
    this.invalidPassword = (this.loginForm.controls.password.errors != null);

    if (this.invalidEmail || this.invalidPassword) return;

    this.fetchJson.getToken().subscribe(token => {
      if (token) {
        localStorage.setItem("token", token);
        this.router.navigate(["/"]);
      } else {
        this.invalidEmail = true;
        this.invalidPassword = true;
      }
    });
  }

}
