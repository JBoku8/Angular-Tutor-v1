import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { SignInData } from 'src/app/data/sign-in-form.interface';
import { TOKEN_KEY } from 'src/app/shared/constants';
import { AuthService } from '../shared/auth.service';
import { FirebaseAuthService } from '../shared/firebase-auth.service';

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
  constructor(private fireAuthService: FirebaseAuthService) {}

  ngOnInit(): void {}

  async onSubmit(signInForm: NgForm) {
    this.fireAuthService.signIn(this.signInData);
  }

  signInWithGoogle() {
    this.fireAuthService.googleSignIn();
  }
}
