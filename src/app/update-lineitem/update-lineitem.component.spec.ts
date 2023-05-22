import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLineitemComponent } from './update-lineitem.component';

describe('UpdateLineitemComponent', () => {
  let component: UpdateLineitemComponent;
  let fixture: ComponentFixture<UpdateLineitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateLineitemComponent]
    });
    fixture = TestBed.createComponent(UpdateLineitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
