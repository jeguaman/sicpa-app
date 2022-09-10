import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEmployeessComponent } from './list-employeess.component';

describe('ListEmployeessComponent', () => {
  let component: ListEmployeessComponent;
  let fixture: ComponentFixture<ListEmployeessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployeessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmployeessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
