import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllTodoItemsComponent } from './show-all-todo-items.component';

describe('ShowAllTodoItemsComponent', () => {
  let component: ShowAllTodoItemsComponent;
  let fixture: ComponentFixture<ShowAllTodoItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllTodoItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAllTodoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
