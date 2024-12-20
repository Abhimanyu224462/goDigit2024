import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car.component';
import { CarRegComponent } from './car-reg/car-reg.component';

const routes: Routes = [
  { path: '', component: CarComponent },
  { path:'carreg', component:CarRegComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
