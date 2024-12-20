import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car.component';
import { CarRegComponent } from './car-reg/car-reg.component';
import { CarmodalComponent } from './carmodal/carmodal.component';
import { CarvarientComponent } from './carvarient/carvarient.component';
import { CarfueltypeComponent } from './carfueltype/carfueltype.component';
import { CarpaymentdetailsComponent } from './carpaymentdetails/carpaymentdetails.component';


@NgModule({
  declarations: [
    CarComponent,
    CarRegComponent,
    CarmodalComponent,
    CarvarientComponent,
    CarfueltypeComponent,
    CarpaymentdetailsComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule
  ],
  exports:[
    CarComponent
  ]
})
export class CarModule { }
