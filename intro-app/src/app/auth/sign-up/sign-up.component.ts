import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

import { SignUpData } from '../../data/sign-up-form.interface';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpData: SignUpData = {
    email: 'eve.holt@reqres.in',
    password: 'pistol',
  };
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  onSubmit(signUpForm: NgForm) {
    this.authService.signUp(this.signUpData).subscribe((registered) => {
      if (registered) {
        this.router.navigate(['auth/dashboard']);
      }
    });
  }
}
