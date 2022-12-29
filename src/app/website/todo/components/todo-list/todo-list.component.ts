import { Component, OnInit } from '@angular/core';
import { Todo } from '@todo/models/todo.model';
import { TodoService } from '@todo/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  title: string = "";

  constructor(private todosService: TodoService) { }

  ngOnInit() {
    this.todosService.getAll().subscribe(todos => {
      this.todos = todos
    });
  }

  onCreateTodo() {
    this.todosService.create({
      userId: '1',
      title: this.title,
      completed: false
    } as Todo).subscribe(todo => {
      this.todos.unshift(todo);
      this.title = "";
    })
  }

  onUpdateTodo(todo: Todo, index: number) {
    this.todosService.update(todo).subscribe(updatedTodo => {
      this.todos[index] = updatedTodo;
    })
  }

  onDeleteTodo(id: string, index: number) {
    this.todosService.delete(id).subscribe(() => {
      this.todos.splice(index, 1);
    })
  }
}
