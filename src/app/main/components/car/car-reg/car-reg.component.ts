import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { DbserviceService } from 'src/app/service/dbservice.service';

@Component({
  selector: 'app-car-reg',
  templateUrl: './car-reg.component.html',
  styleUrls: ['./car-reg.component.scss']
})
export class CarRegComponent {

  constructor(private dbservice: DbserviceService) { }

  //DECLARATION
  SelectBrand: string = "Select Brand Name";

  //SUBSCRIBED THE SUBJET AT SERVICE TO AUTO TRIGGER THE FUNCTION AT CAR BRAND COMPONENT
  ngOnInit() {
    this.dbservice.subject$.subscribe(() => this.patchbrandname())
  }

  //TO PATCH THE NAME OF THE BRAND SELECTED AT CAR BRAND COMPONENT IN THE INPUT AT CAR-REG
  patchbrandname() {
    if (this.SelectBrand == undefined) {
      this.SelectBrand = "Select Brand Name"
    } else {
      this.SelectBrand = this.dbservice.sendbrandname()
      console.log("brand name recieved at aar reg compo", this.SelectBrand)
    }
  }


  triggerfnatcarreg(){
    this.dbservice.triggerfn1()
  }

}
