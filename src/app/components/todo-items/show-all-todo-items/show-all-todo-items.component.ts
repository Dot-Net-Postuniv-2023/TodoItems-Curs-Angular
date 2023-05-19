import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TodoItem } from 'src/app/models/todo-item';
import { TodoItemsService } from 'src/app/services/todo-items.service';

@Component({
  selector: 'app-show-all-todo-items',
  templateUrl: './show-all-todo-items.component.html',
  styleUrls: ['./show-all-todo-items.component.scss'],
})
export class ShowAllTodoItemsComponent {
  isLoading = false;
  todoItems: TodoItem[] = [];

  constructor(
    private todoItemsService: TodoItemsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.todoItemsService.getTodoItems().subscribe((data: TodoItem[]) => {
      this.todoItems = data;
      this.isLoading = false;
    });
  }

  editTodoItem(todoItem: TodoItem): void {
    this.router.navigate(['/todo-items/edit', todoItem.id]);
  }
}
