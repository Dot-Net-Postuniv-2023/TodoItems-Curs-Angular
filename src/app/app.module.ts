import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoItemComponent } from './components/todo-items/add-todo-item/add-todo-item.component';
import { ShowAllTodoItemsComponent } from './components/todo-items/show-all-todo-items/show-all-todo-items.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DetailsTodoItemComponent } from './components/todo-items/details-todo-item/details-todo-item.component';
import { EditTodoItemComponent } from './components/todo-items/edit-todo-item/edit-todo-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteTodoItemComponent } from './components/todo-items/delete-todo-item/delete-todo-item.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { JwtInterceptor } from './interceptors/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoItemComponent,
    ShowAllTodoItemsComponent,
    DetailsTodoItemComponent,
    EditTodoItemComponent,
    DeleteTodoItemComponent,
    RegisterComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
