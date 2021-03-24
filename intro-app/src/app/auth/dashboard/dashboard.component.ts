import { Component, OnInit, OnDestroy } from '@angular/core';
import { FireStoreService } from 'src/app/core/firestore.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  title: string = 'Dasboard template string';
  list: Array<any> = [];

  constructor(private fireStore: FireStoreService) {}

  ngOnInit(): void {
    console.log('Dashboard ngOnInit');
    this.loadData();
  }

  loadData() {
    this.fireStore.getCollection('todos').subscribe((task) => {
      this.list = task;
    });
  }

  async onAddItem() {
    this.fireStore
      .createItem('todos', {
        completed: false,
        title: 'Super Title',
      })
      .then((task) => {});
  }

  async onRemove(id: string) {
    console.log('ID to remove', id);
    const task = await this.fireStore.removeItemById('todos', id);
    console.log(task);
  }

  ngOnDestroy(): void {
    console.log('Dashboard ngOnDestroy');
  }
}
