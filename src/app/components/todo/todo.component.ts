import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo: Todo;
  @Output() deleted = new EventEmitter<string>();
  @Output() updated = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  delete() {
    this.deleted.emit(this.todo.id);
  }

  update() {
    this.todo.completed = true;
    this.updated.emit(this.todo);
  }

}
