import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeessComponent } from './edit-employeess.component';

describe('EditEmployeessComponent', () => {
  let component: EditEmployeessComponent;
  let fixture: ComponentFixture<EditEmployeessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmployeessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEmployeessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
