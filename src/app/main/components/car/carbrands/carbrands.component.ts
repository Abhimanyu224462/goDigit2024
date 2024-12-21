import { Component } from '@angular/core';
import { DbserviceService } from 'src/app/service/dbservice.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-carbrands',
  templateUrl: './carbrands.component.html',
  styleUrls: ['./carbrands.component.scss']
})
export class CarbrandsComponent {

  constructor(private http: HttpService, private dbservice: DbserviceService) { }

  //DECLARATION
  dataarray: any = [];
  brandname: any;
  brandsData: any

  ngOnInit() {
    this.getDatainBrand()
  }

  //TO SEND VALUE OF BRAND NAME IN ARRAY FORMAT TO CAR MODEL COMPO
  selectedDatainBrand(data: any) {
    this.dataarray = [data]
    this.dbservice.savecarValue(this.dataarray)
    console.log("new brand selected in brands comp", data)
  }

  //TO SEND NAME OF BRAND TO DBSERVICE/CAR-REG COMPONENT
  nameforpatch(name: any) {
    this.brandname = name
    this.dbservice.savebrandname(this.brandname)
    console.log("brand name selected in car brands compo", this.brandname)
  }

  //TO PATCH THE VALUE OF BRAND IN INPUT OF CAR REG COMPO BY/AND TRIGGER THE FUNCTION IN CAR-REG COMPO
  triggerfnatbrand() {
    this.dbservice.triggerfn()
  }

  //TO GET THE DATA FROM BACKEND/DB.JSON
  getDatainBrand() {
    this.http.getDataFromServer('brands').subscribe({
      next: (res: any) => {
        if (res && res.length > 0) {
          this.brandsData = res
          console.log("Brands Data recieved in car brands component", this.brandsData)
        }
      }
    })
  }
}
