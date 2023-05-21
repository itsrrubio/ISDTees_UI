import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewSpecComponent } from './new-spec.component';

describe('NewSpecComponent', () => {
  let component: NewSpecComponent;
  let fixture: ComponentFixture<NewSpecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewSpecComponent]
    });
    fixture = TestBed.createComponent(NewSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
