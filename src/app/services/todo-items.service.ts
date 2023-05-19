import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../constants';
import { TodoItem } from '../models/todo-item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoItemsService {
  constructor(private httpClient: HttpClient) {}

  getTodoItems(): Observable<TodoItem[]> {
    return this.httpClient.get<TodoItem[]>(`${API_URL}/TodoItems`);
  }

  getTodoItem(id?: number): Observable<TodoItem> {
    return this.httpClient.get<TodoItem>(`${API_URL}/TodoItems/${id}`);
  }

  addTodoItem(todoItem: TodoItem): Observable<TodoItem> {
    return this.httpClient.post<TodoItem>(`${API_URL}/TodoItems`, todoItem);
  }

  updateTodoItem(todoItem: TodoItem): Observable<TodoItem> {
    return this.httpClient.put<TodoItem>(
      `${API_URL}/TodoItems/${todoItem.id}`,
      todoItem
    );
  }

  deleteTodoItem(id: number): Observable<TodoItem> {
    return this.httpClient.delete<TodoItem>(`${API_URL}/TodoItems/${id}`);
  }
}
