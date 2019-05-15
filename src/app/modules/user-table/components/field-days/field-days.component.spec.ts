import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldDaysComponent } from './field-days.component';

describe('FieldDaysComponent', () => {
  let component: FieldDaysComponent;
  let fixture: ComponentFixture<FieldDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FieldDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
