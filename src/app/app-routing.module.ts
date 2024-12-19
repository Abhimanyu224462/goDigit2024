import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'car', loadChildren: () => import('./main/components/car/car.module').then(m => m.CarModule) }, { path: 'bike', loadChildren: () => import('./main/components/bike/bike.module').then(m => m.BikeModule) }, { path: 'personal', loadChildren: () => import('./main/components/personal/personal.module').then(m => m.PersonalModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
