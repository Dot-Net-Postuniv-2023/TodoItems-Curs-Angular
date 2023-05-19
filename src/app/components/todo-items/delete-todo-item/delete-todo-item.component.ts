import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TodoItemsService } from 'src/app/services/todo-items.service';

@Component({
  selector: 'app-delete-todo-item',
  templateUrl: './delete-todo-item.component.html',
  styleUrls: ['./delete-todo-item.component.scss'],
})
export class DeleteTodoItemComponent {
  todoItemId: number = 0;

  constructor(
    private todoItemsService: TodoItemsService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.todoItemId = params['id'];
    });
  }

  deleteTodoItem(): void {
    this.todoItemsService.deleteTodoItem(this.todoItemId).subscribe((data) => {
      alert('Todo item deleted successfully!');
      this.route.navigate(['/todo-items']);
    });
  }

  cancel(): void {
    this.route.navigate(['/todo-items']);
  }
}
