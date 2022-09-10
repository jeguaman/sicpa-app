import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnterprisesComponent } from './edit-enterprises.component';

describe('EditEnterprisesComponent', () => {
  let component: EditEnterprisesComponent;
  let fixture: ComponentFixture<EditEnterprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEnterprisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditEnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
