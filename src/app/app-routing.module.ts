import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowAllTodoItemsComponent } from './components/todo-items/show-all-todo-items/show-all-todo-items.component';
import { DetailsTodoItemComponent } from './components/todo-items/details-todo-item/details-todo-item.component';
import { EditTodoItemComponent } from './components/todo-items/edit-todo-item/edit-todo-item.component';
import { AddTodoItemComponent } from './components/todo-items/add-todo-item/add-todo-item.component';
import { DeleteTodoItemComponent } from './components/todo-items/delete-todo-item/delete-todo-item.component';
import { LoginComponent } from './components/authentication/login/login.component';

const routes: Routes = [
  {
    path: 'todo-items',
    component: ShowAllTodoItemsComponent,
  },
  {
    path: 'todo-items/details/:id',
    component: DetailsTodoItemComponent,
  },
  {
    path: 'todo-items/edit/:id',
    component: EditTodoItemComponent,
  },
  {
    path: 'todo-items/add',
    component: AddTodoItemComponent,
  },
  {
    path: 'todo-items/delete/:id',
    component: DeleteTodoItemComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
