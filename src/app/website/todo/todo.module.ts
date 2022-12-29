import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoListComponent } from '@todo/components/todo-list/todo-list.component';
import { TodoComponent } from '@todo/components/todo/todo.component';

import { TodoService } from '@todo/services/todo.service';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule
  ],
  providers: [TodoService]
})
export class TodoModule { }
