import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarmodalComponent } from './carmodal.component';

describe('CarmodalComponent', () => {
  let component: CarmodalComponent;
  let fixture: ComponentFixture<CarmodalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarmodalComponent]
    });
    fixture = TestBed.createComponent(CarmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
