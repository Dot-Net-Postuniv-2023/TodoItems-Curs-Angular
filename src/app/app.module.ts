import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoItemComponent } from './components/todo-items/add-todo-item/add-todo-item.component';
import { ShowAllTodoItemsComponent } from './components/todo-items/show-all-todo-items/show-all-todo-items.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsTodoItemComponent } from './components/todo-items/details-todo-item/details-todo-item.component';
import { EditTodoItemComponent } from './components/todo-items/edit-todo-item/edit-todo-item.component';
import { FormsModule } from '@angular/forms';
import { DeleteTodoItemComponent } from './components/todo-items/delete-todo-item/delete-todo-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoItemComponent,
    ShowAllTodoItemsComponent,
    DetailsTodoItemComponent,
    EditTodoItemComponent,
    DeleteTodoItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
