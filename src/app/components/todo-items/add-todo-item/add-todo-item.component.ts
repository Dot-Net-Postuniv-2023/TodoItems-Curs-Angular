import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { TodoItem } from 'src/app/models/todo-item';
import { TodoSubItem } from 'src/app/models/todo-subitem';
import { TodoItemsService } from 'src/app/services/todo-items.service';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.scss'],
})
export class AddTodoItemComponent {
  // use a reactive form to add a todo item together with dynamic number of subitems
  // https://angular.io/guide/reactive-forms
  todoForm: FormGroup = new FormGroup({});

  constructor(
    private todoItemsService: TodoItemsService,
    private route: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.todoForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      todoSubItems: this.formBuilder.array([]),
    });
  }

  get todoItem(): TodoItem {
    const formValue = this.todoForm.value;
    const subItems: TodoSubItem[] = formValue.todoSubItems as TodoSubItem[];
    return { ...formValue, todoSubItems: subItems };
  }

  get todoSubItems(): FormArray {
    return this.todoForm.get('todoSubItems') as FormArray;
  }

  addSubItem() {
    this.todoSubItems.push(
      this.formBuilder.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        description: ['', [Validators.required, Validators.minLength(3)]],
        priority: 1,
      })
    );
  }

  onSubmit(): void {
    console.log(this.todoItem);
    this.todoItemsService.addTodoItem(this.todoItem).subscribe((_) => {
      alert('Todo item added successfully!');
      this.route.navigate(['/todo-items']);
    });
  }

  cancel(): void {
    this.route.navigate(['/todo-items']);
  }
}
