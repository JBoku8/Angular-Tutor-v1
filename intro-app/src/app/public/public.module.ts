import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TodoFormComponent } from './forms/todo-form/todo-form.component';

@NgModule({
  declarations: [TodoFormComponent],
  imports: [CommonModule, FormsModule, RouterModule],
  exports: [TodoFormComponent],
})
export class PublicModule {}
