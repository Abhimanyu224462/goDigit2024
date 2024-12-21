import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { DbserviceService } from 'src/app/service/dbservice.service';

@Component({
  selector: 'app-carmodal',
  templateUrl: './carmodal.component.html',
  styleUrls: ['./carmodal.component.scss']
})
export class CarmodalComponent {
  carValueRec: any;
  brandselectedSub: any;
  showtable:boolean = true;
  constructor(private http:HttpService, private dbservice:DbserviceService){
  
  }
modalsData!:any





brandselectedfn1(){
  this.carValueRec = this.dbservice.sendcarValue()
  console.log("value in car model recieved from service", this.carValueRec)

  for (let item of this.carValueRec){
this.brandselected = item[0]
console.log("final value", this.brandselected)
  }
  this.getData()
}

//Service use karna hai
ngOnInit() {
  this.dbservice.subject$.subscribe(() => this.brandselectedfn1())

  if(this.modalsData == ""){
    this.showtable=true
  }
}



brandselected:any



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
