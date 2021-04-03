import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { SignUpData } from '../../data/sign-up-form.interface';
import { FirebaseAuthService } from '../shared/firebase-auth.service';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  email: FormControl;
  password: FormControl;
  signUpForm: FormGroup;
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  mouseOverSignUpButton: boolean = false;

  constructor(public fireAuthService: FirebaseAuthService) {
    this.email = new FormControl(
      '',
      Validators.compose([
        Validators.required,
        Validators.email,
        Validators.pattern(this.emailPattern),
      ])
    );

    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);

    this.signUpForm = new FormGroup({
      email: this.email,
      password: this.password,
    });
  }

  ngOnInit(): void {
    // this.email.setValue('superman@yopmail.com');
  }

  validateEmail(): boolean {
    return (
      this.email.invalid && (this.email.touched || this.mouseOverSignUpButton)
    );
  }
  validatePassword(): boolean {
    return (
      this.password.invalid &&
      (this.password.touched || this.mouseOverSignUpButton)
    );
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      console.log('SUCCESS');
      const signUpData: SignUpData = this.signUpForm.value;
      this.fireAuthService.signUp(signUpData);
    } else {
      alert('ERROR');
    }
  }
}
