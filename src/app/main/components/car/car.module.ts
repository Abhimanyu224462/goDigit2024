import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car.component';
import { CarRegComponent } from './car-reg/car-reg.component';
import { CarmodalComponent } from './carmodal/carmodal.component';
import { CarvarientComponent } from './carvarient/carvarient.component';
import { CarfueltypeComponent } from './carfueltype/carfueltype.component';
import { CarpaymentdetailsComponent } from './carpaymentdetails/carpaymentdetails.component';
import { CarbrandsComponent } from './carbrands/carbrands.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CarComponent,
    CarRegComponent,
    CarmodalComponent,
    CarvarientComponent,
    CarfueltypeComponent,
    CarpaymentdetailsComponent,
    CarbrandsComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule,
    FormsModule
  ],
  exports:[
    CarComponent
  ],

  providers:[
    CarbrandsComponent
  ]
})
export class CarModule { }
