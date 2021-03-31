import { Component, OnInit } from '@angular/core';

import { SignUpData } from '../../data/sign-up-form.interface';
import { NgForm } from '@angular/forms';
import { FirebaseAuthService } from '../shared/firebase-auth.service';
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
  constructor(private fireAuthService: FirebaseAuthService) {}

  ngOnInit(): void {}

  onSubmit(signUpForm: NgForm) {
    this.fireAuthService.signUp(this.signUpData);
  }
}
