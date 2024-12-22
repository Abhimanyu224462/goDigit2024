import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './main/components/car/car.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'payment', component:PaymentComponent},
  { path: 'car', loadChildren: () => import('./main/components/car/car.module').then(m => m.CarModule) }, 
  { path: 'bike', loadChildren: () => import('./main/components/bike/bike.module').then(m => m.BikeModule) }, 
  { path: 'personal', loadChildren: () => import('./main/components/personal/personal.module').then(m => m.PersonalModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
