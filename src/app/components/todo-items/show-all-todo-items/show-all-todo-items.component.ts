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

  markedForDeletion: TodoItem | undefined;

  constructor(
    private todoItemsService: TodoItemsService,
    private router: Router
  ) {}

  private loadTodoItems(): void {
    this.isLoading = true;
    this.todoItemsService.getTodoItems().subscribe((data: TodoItem[]) => {
      this.todoItems = data;
      this.isLoading = false;
    });
  }

  ngOnInit(): void {
    this.loadTodoItems();
  }

  editTodoItem(todoItem: TodoItem): void {
    this.router.navigate(['/todo-items/edit', todoItem.id]);
  }

  startDelete(todoItem: TodoItem): void {
    this.markedForDeletion = todoItem;
  }

  confirmDelete(): void {
    if (this.markedForDeletion) {
      this.todoItemsService
        .deleteTodoItem(this.markedForDeletion.id!)
        .subscribe((data) => {
          alert('Todo item deleted successfully!');
          this.markedForDeletion = undefined;
          this.loadTodoItems();
        });
    }
  }

  cancelDelete(): void {
    this.markedForDeletion = undefined;
  }
}
