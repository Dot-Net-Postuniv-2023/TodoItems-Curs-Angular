import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoItem } from 'src/app/models/todo-item';
import { TodoItemsService } from 'src/app/services/todo-items.service';

@Component({
  selector: 'app-details-todo-item',
  templateUrl: './details-todo-item.component.html',
  styleUrls: ['./details-todo-item.component.scss'],
})
export class DetailsTodoItemComponent {
  todoItemId: number = 0;
  todoItem?: TodoItem;

  constructor(
    private todoItemsService: TodoItemsService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.todoItemId = params['id'];
    });
  }

  ngOnInit(): void {
    this.todoItemsService
      .getTodoItem(this.todoItemId)
      .subscribe((data: TodoItem) => {
        this.todoItem = data;
      });
  }
}
