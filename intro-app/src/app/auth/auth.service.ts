import { Injectable } from '@angular/core';
import { SignInData } from '../data/sign-in-form.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  signIn(data: SignInData) {
    return 'Okay';
  }
}
