import { Component } from '@angular/core';
import { DbserviceService } from 'src/app/service/dbservice.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-carvarient',
  templateUrl: './carvarient.component.html',
  styleUrls: ['./carvarient.component.scss']
})
export class CarvarientComponent {


constructor(private http:HttpService, private dbservice:DbserviceService){}

carVariant:any
fuelSelected: any;
carVariantcopy!: any[];
varientnameforpatch:any

ngOnInit(){
  this.GetDataforVarient()
}

fuelfilter(fueltype:any){
  if(fueltype == this.fuelSelected){
    this.carVariant = this.carVariantcopy.filter((el:any)=>el['Fuel Type'] === fueltype)
  }
console.log("fuel type selected",fueltype)
}

savevarientforpatch(name: any) {
  this.varientnameforpatch = name
  this.dbservice.savevarientname(this.varientnameforpatch)
  }

sendvarientnamefn(){
  this.dbservice.triggervarientfn()
}


GetDataforVarient(){
  this.http.getDataFromServer('get-variant').subscribe({
    next:(response:any)=>{
     if(response && response.length>0){
       this.carVariant = response[0].modelList
       this.carVariantcopy = [...this.carVariant]
      console.log("data recieved at car varient compo", this.carVariant)
     }
     
    }
  })
}



}
