import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmployeessComponent } from './add-employeess.component';

describe('AddEmployeessComponent', () => {
  let component: AddEmployeessComponent;
  let fixture: ComponentFixture<AddEmployeessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEmployeessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEmployeessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
