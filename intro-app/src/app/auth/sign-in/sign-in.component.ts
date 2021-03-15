import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {
  SignInData,
  SignInResponse,
} from 'src/app/data/sign-in-form.interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  signInData: SignInData = {
    email: 'eve.holt@reqres.in',
    password: 'cityslicka',
    remember: false,
  };
  constructor(private router: Router, private _authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(signInForm: NgForm) {
    this._authService
      .signIn(this.signInData)
      .subscribe((response: SignInResponse) => {
        console.log(response);
        // this.router.navigate(['/auth/dashboard']);
      });
  }
}
