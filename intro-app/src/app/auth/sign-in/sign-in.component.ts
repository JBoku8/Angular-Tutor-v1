import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/local-storage.service';
import { SignInData } from 'src/app/data/sign-in-form.interface';
import { TOKEN_KEY } from 'src/app/shared/constants';
import { AuthService } from '../shared/auth.service';

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
  constructor(
    private router: Router,
    private _authService: AuthService,
    private storageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  async onSubmit(signInForm: NgForm) {
    this._authService
      .signIn(this.signInData)
      .subscribe((isAuthorized: boolean) => {
        if (isAuthorized) {
          if (this._authService.redirectUrl !== '') {
            this.router.navigateByUrl(this._authService.redirectUrl);
          } else {
            this.router.navigate(['auth/dashboard']);
          }
        }
      });
    // try {
    //   const result = await this._authService.firebaseSignIn(this.signInData);
    //   const idTokeResult = await result.user?.getIdTokenResult();
    //   if (idTokeResult?.token) {
    //     this.storageService.set(TOKEN_KEY, idTokeResult.token);
    //     if (this._authService.redirectUrl !== '') {
    //       this.router.navigateByUrl(this._authService.redirectUrl);
    //     } else {
    //       this.router.navigate(['auth/dashboard']);
    //     }
    //   }
    // } catch (err) {
    //   console.log(err);
    // }
  }
}
