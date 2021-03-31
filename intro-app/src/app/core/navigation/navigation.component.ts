import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService } from 'src/app/auth/shared/firebase-auth.service';

import { AuthService } from '../../auth/shared/auth.service';

import { EXP_TIME } from '../../shared/constants';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(
    private authService: AuthService,
    public fireAuthService: FirebaseAuthService
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuthorized()) {
      this.validateToken();
    }
  }

  private validateToken(): void {
    setInterval(() => {
      if (this.authService.tokenExpired()) {
        if (this.authService.getRefreshToken()) {
          const token: string = this.authService.getRefreshToken() as string;
          if (!this.authService.refreshToken(token)) {
            this.notAuthorizedAction();
          }
        } else {
          this.notAuthorizedAction();
        }
      }
    }, EXP_TIME);
  }

  private notAuthorizedAction(): void {
    this.fireAuthService.signOut();
  }

  onLogOut(event: Event) {
    // console.log(event);
    this.notAuthorizedAction();
  }
}
