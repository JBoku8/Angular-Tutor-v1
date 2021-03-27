import { Component, OnInit, OnDestroy } from '@angular/core';
import { FireStoreService } from 'src/app/core/firestore.service';
import { NewTodo, Todo } from '../shared/todo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  title: string = 'Dasboard template string';
  list: Todo[] = [];
  isEditing: boolean = false;
  newTodo: NewTodo = {
    userId: '',
    title: '',
    completed: false,
  };

  constructor(private fireStore: FireStoreService) {}

  ngOnInit(): void {
    console.log('Dashboard ngOnInit');
    this.loadData();
  }

  loadData() {
    this.fireStore.getCollection('todos').subscribe((task) => {
      this.list = task;
      // console.log(this.list);
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

  onTodoUpdate(todo: Todo) {
    this.isEditing = true;
    this.newTodo = todo;
  }

  onSubmit(newTodo: Todo) {
    if (this.isEditing) {
      this.fireStore.updateItem('todos', newTodo.id, {
        title: newTodo.title,
        completed: newTodo.completed,
      });
      this.isEditing = false;
      this.newTodo = {
        userId: '',
        title: '',
        completed: false,
      };
    } else {
      this.fireStore.createItem('todos', newTodo).then((task) => {
        console.log(task);
      });
    }
  }

  getClasses(item: Todo) {
    return {
      'list-group-item-primary': item.completed,
      'list-group-item-warning': !item.completed,
      'list-group-item': true,
    };
  }

  ngOnDestroy(): void {
    console.log('Dashboard ngOnDestroy');
  }
}
