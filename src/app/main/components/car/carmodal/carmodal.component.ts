import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { CarbrandsComponent } from '../carbrands/carbrands.component';

@Component({
  selector: 'app-carmodal',
  templateUrl: './carmodal.component.html',
  styleUrls: ['./carmodal.component.scss']
})
export class CarmodalComponent {
  constructor(private http:HttpService, private carbrand:CarbrandsComponent){}
modalsData!:any

brandselectedfn(){
  this.brandselected = this.carbrand.sendbranddata
  console.log(this.brandselected)
}

//Service use karna hai




brandselected:string = "0"

ngOnInit(){
  this.getData()
}

  getData(){
this.http.getDataFromServer('brands').subscribe({
  next:(res:any)=>{
    if(res && res.length>0){
      this.modalsData = res[this.brandselected].models
      console.log("modals Data recieved in car modal component", this.modalsData)
    }
  }
})
  }

}
