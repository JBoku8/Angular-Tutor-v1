import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './account/account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from '../auth.guard';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PublicModule } from '../public/public.module';

@NgModule({
  declarations: [
    AccountComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PublicModule,
    RouterModule.forChild([
      {
        path: 'auth/sign-in',
        component: SignInComponent,
      },
      {
        path: 'auth/sign-up',
        component: SignUpComponent,
      },
      {
        path: 'auth/dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'auth/account',
        component: AccountComponent,
        canActivate: [AuthGuard],
      },
    ]),
  ],
})
export class AuthModule {}
