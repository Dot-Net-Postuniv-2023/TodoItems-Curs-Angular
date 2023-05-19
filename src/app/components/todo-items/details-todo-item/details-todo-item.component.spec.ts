import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsTodoItemComponent } from './details-todo-item.component';

describe('DetailsTodoItemComponent', () => {
  let component: DetailsTodoItemComponent;
  let fixture: ComponentFixture<DetailsTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsTodoItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
