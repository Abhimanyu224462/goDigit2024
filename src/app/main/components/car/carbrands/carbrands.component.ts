import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-carbrands',
  templateUrl: './carbrands.component.html',
  styleUrls: ['./carbrands.component.scss']
})
export class CarbrandsComponent {
brandselectedinbrand: any;
sendbranddata:any
selectedDatainBrand(){
this.sendbranddata = this.brandselectedinbrand
}
  constructor(private http:HttpService){

  }
brandsData!:any



ngOnInit(){
  this.getDatainBrand()
}

  getDatainBrand(){
this.http.getDataFromServer('brands').subscribe({
  next:(res:any)=>{
    if(res && res.length>0){
      this.brandsData = res
      console.log("Brands Data recieved in car brands component", this.brandsData)
    }
  }
})
  }
}
