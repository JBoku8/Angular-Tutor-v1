import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  title: string = 'Dasboard template string';
  ngOnInit(): void {
    console.log('Dashboard ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('Dashboard ngOnDestroy');
  }
}
