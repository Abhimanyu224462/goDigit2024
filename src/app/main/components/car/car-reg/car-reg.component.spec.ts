import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRegComponent } from './car-reg.component';

describe('CarRegComponent', () => {
  let component: CarRegComponent;
  let fixture: ComponentFixture<CarRegComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarRegComponent]
    });
    fixture = TestBed.createComponent(CarRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
