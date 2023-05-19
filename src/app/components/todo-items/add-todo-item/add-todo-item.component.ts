import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoItem } from 'src/app/models/todo-item';
import { TodoItemsService } from 'src/app/services/todo-items.service';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss'],
})
export class AddTodoItemComponent {
  todoItem = {
    name: '',
    isComplete: false,
  } as TodoItem;

  constructor(
    private todoItemsService: TodoItemsService,
    private route: Router
  ) {}

  ngOnInit(): void {}

  addTodoItem(): void {
    this.todoItemsService
      .addTodoItem(this.todoItem)
      .subscribe((data: TodoItem) => {
        alert('Todo item added successfully!');
        this.route.navigate(['/todo-items']);
      });
  }

  cancel(): void {
    this.route.navigate(['/todo-items']);
  }
}
