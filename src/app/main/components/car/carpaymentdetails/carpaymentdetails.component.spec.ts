import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarpaymentdetailsComponent } from './carpaymentdetails.component';

describe('CarpaymentdetailsComponent', () => {
  let component: CarpaymentdetailsComponent;
  let fixture: ComponentFixture<CarpaymentdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarpaymentdetailsComponent]
    });
    fixture = TestBed.createComponent(CarpaymentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
