import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnterprisesComponent } from './add-enterprises.component';

describe('AddEnterprisesComponent', () => {
  let component: AddEnterprisesComponent;
  let fixture: ComponentFixture<AddEnterprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEnterprisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
