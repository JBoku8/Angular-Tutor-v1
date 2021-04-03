import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import { SignInData } from 'src/app/data/sign-in-form.interface';
import { SignUpData } from 'src/app/data/sign-up-form.interface';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  currentUser$ = new Observable<firebase.User | null>();
  hasError: string | null;

  constructor(private router: Router, private afAuth: AngularFireAuth) {
    this.currentUser$ = this.afAuth.authState;
    this.hasError = null;
  }

  googleSignIn() {
    this.afAuth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log('[FirebaseAuthService@googleSignIn]', error);
      });
  }

  signIn(data: SignInData) {
    this.afAuth
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log('[FirebaseAuthService@signIn]', error);
        this.hasError = error.message;
      });
  }

  signUp(data: SignUpData) {
    return this.afAuth
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((user) => {
        this.router.navigate(['/home']);
      })
      .catch((error) => {
        console.log('[FirebaseAuthService@signUp]', error);
        this.hasError = error.message;
      });
  }

  signOut() {
    this.afAuth.signOut();
    this.router.navigate(['/home']);
  }
}
