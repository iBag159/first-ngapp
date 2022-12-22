import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  path: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Todo[]>(this.path)
  }
  create(todo: Todo) {
    return this.http.post<Todo>(this.path, todo)
  }
  delete(todoId: string) {
    const url = `${this.path}/${todoId}`
    return this.http.delete(url)
  }
  update(todo: Todo) {
    const url = `${this.path}/${todo.id}`
    return this.http.put<Todo>(url, todo);
  }
}
