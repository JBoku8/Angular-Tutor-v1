import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { LocalStorageService } from '../core/local-storage.service';

import {
  TOKEN_KEY,
  AUTH_BASE_API_URL,
  TOKEN_EXP_KEY,
  TOKEN_TTL,
  REFRESH_TOKEN_KEY,
} from '../shared/constants';
import { SignInData, SignInResponse } from '../data/sign-in-form.interface';
import { SignUpData, SignUpResponse } from '../data/sign-up-form.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectUrl: string = '';
  constructor(
    private storageService: LocalStorageService,
    private http: HttpClient
  ) {}

  signIn(data: SignInData): Observable<boolean> {
    return this.http
      .post<SignInResponse>(`${AUTH_BASE_API_URL}/login`, data)
      .pipe(
        tap((result) => {
          this.storageService.set(TOKEN_KEY, result.token);
          this.storageService.set(REFRESH_TOKEN_KEY, 'REFRESH_TOKEN');
          this.setTokenLifeTime();
        }),
        map((result) => {
          if (result.token) {
            return true;
          } else {
            return false;
          }
        })
      );
  }

  signUp(data: SignUpData): Observable<boolean> {
    return this.http
      .post<SignUpResponse>(`${AUTH_BASE_API_URL}/register`, data)
      .pipe(
        tap((result) => {
          this.storageService.set(TOKEN_KEY, result.token);
          this.setTokenLifeTime();
        }),
        map((result) => {
          if (result.token) {
            return true;
          } else {
            return false;
          }
        })
      );
  }

  setTokenLifeTime(): void {
    const time = new Date();
    time.setMinutes(new Date().getMinutes() + TOKEN_TTL);
    this.storageService.set(TOKEN_EXP_KEY, time.toJSON());
  }

  tokenExpired(): boolean {
    const currentTime = new Date().getTime();
    const tokenTime = new Date(this.storageService.get(TOKEN_EXP_KEY));
    return currentTime > tokenTime.getTime();
  }

  getRefreshToken(): string | undefined {
    return this.storageService.get(REFRESH_TOKEN_KEY);
  }

  refreshToken(token: string): boolean {
    if (token === 'REFRESH_TOKEN') {
      this.storageService.set(TOKEN_KEY, 'QpwL5tke4Pnpja7X4');
      this.storageService.set(REFRESH_TOKEN_KEY, 'REFRESH_TOKEN');
      this.setTokenLifeTime();

      return true;
    }
    return false;
  }

  logOut(): void {
    this.storageService.remove(TOKEN_KEY);
    this.storageService.remove(REFRESH_TOKEN_KEY);
    this.storageService.remove(TOKEN_EXP_KEY);
  }
  isAuthorized(): boolean {
    return this.storageService.exists(TOKEN_KEY);
  }
}
