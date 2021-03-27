import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewTodo, Todo } from 'src/app/auth/shared/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent implements OnInit {
  @Input() todo?: NewTodo;
  @Input() isEditing: boolean = false;
  @Output() onFormSubmit = new EventEmitter();
  constructor() {}

  ngOnInit(): void {
    // console.log(this.todo);
  }

  onSubmit(form: NgForm) {
    this.onFormSubmit.emit(this.todo);
  }

  onUpdate(form: NgForm) {
    this.onFormSubmit.emit(this.todo);
  }
}
