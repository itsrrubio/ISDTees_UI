import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLineitemComponent } from './new-lineitem.component';

describe('NewLineitemComponent', () => {
  let component: NewLineitemComponent;
  let fixture: ComponentFixture<NewLineitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewLineitemComponent]
    });
    fixture = TestBed.createComponent(NewLineitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
