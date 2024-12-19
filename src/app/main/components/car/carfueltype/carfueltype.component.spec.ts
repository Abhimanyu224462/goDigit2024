import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarfueltypeComponent } from './carfueltype.component';

describe('CarfueltypeComponent', () => {
  let component: CarfueltypeComponent;
  let fixture: ComponentFixture<CarfueltypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarfueltypeComponent]
    });
    fixture = TestBed.createComponent(CarfueltypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
