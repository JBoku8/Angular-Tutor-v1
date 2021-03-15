import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SignInData, SignInResponse } from '../data/sign-in-form.interface';
import { LocalStorageService } from '../core/local-storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private storageService: LocalStorageService,
    private http: HttpClient
  ) {}

  signIn(data: SignInData): Observable<SignInResponse> {
    return this.http.post<SignInResponse>('https://reqres.in/api/login', data);
  }
}
