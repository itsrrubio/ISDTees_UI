import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSpecComponent } from './update-spec.component';

describe('UpdateSpecComponent', () => {
  let component: UpdateSpecComponent;
  let fixture: ComponentFixture<UpdateSpecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSpecComponent]
    });
    fixture = TestBed.createComponent(UpdateSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
