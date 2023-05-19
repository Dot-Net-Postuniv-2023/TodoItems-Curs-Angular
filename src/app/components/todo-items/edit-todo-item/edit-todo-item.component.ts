import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoItem } from 'src/app/models/todo-item';
import { TodoItemsService } from 'src/app/services/todo-items.service';

@Component({
  selector: 'app-edit-todo-item',
  templateUrl: './edit-todo-item.component.html',
  styleUrls: ['./edit-todo-item.component.scss'],
})
export class EditTodoItemComponent {
  todoItem = {} as TodoItem;

  constructor(
    private todoItemsService: TodoItemsService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.todoItem.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.todoItemsService
      .getTodoItem(this.todoItem.id)
      .subscribe((data: TodoItem) => {
        this.todoItem = data;
      });
  }

  updateTodoItem(): void {
    this.todoItemsService
      .updateTodoItem(this.todoItem)
      .subscribe((data: TodoItem) => {
        alert('Todo item updated successfully!');
        this.route.navigate(['/todo-items']);
      });
  }

  cancel(): void {
    this.route.navigate(['/todo-items']);
  }
}
