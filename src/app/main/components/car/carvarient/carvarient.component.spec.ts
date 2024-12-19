import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarvarientComponent } from './carvarient.component';

describe('CarvarientComponent', () => {
  let component: CarvarientComponent;
  let fixture: ComponentFixture<CarvarientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarvarientComponent]
    });
    fixture = TestBed.createComponent(CarvarientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
