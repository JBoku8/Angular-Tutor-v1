import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth/auth.service';

import { EXP_TIME } from '../shared/constants';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.authService.tokenExpired()) {
        console.log('REFRESH TOKEN');
      }
    }, EXP_TIME);
  }

  onLogOut(event: Event) {
    // console.log(event);
    this.authService.logOut();
    this.router.navigate(['home']);
  }
}
