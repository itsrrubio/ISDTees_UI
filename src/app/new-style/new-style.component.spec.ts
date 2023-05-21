import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStyleComponent } from './new-style.component';

describe('NewStyleComponent', () => {
  let component: NewStyleComponent;
  let fixture: ComponentFixture<NewStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewStyleComponent]
    });
    fixture = TestBed.createComponent(NewStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
