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
  modelnameatcarreg:string = "Select Model Name";
  varientnameatcarreg:any = "select Car Varient";

  //SUBSCRIBED THE SUBJET AT SERVICE TO AUTO TRIGGER THE FUNCTION AT CAR BRAND COMPONENT
  ngOnInit() {
    this.dbservice.subject$.subscribe(() => this.patchbrandname())
    this.dbservice.subject2$.subscribe(()=> this.patchmodelname())
    this.dbservice.subject3$.subscribe(()=> this.patchvarientname())
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

//TO TRIGGER THE FUNCTION AUTOMATICALLY AVAILABLE IN CAR MODAL COMPONENT 
  triggerfnatcarreg(){
    this.dbservice.triggerfn1()
  }


//TO PATCH THE MODEL NAME AND TRIGGER FROM CAR MODEL COMP 
  patchmodelname(){
    if(this.modelnameatcarreg == undefined){
      this.modelnameatcarreg = "Select Model Name"
    } else {
          this.modelnameatcarreg = this.dbservice.sendmodelname()
          console.log("model name for patch", this.modelnameatcarreg)
    }
  }

  patchvarientname(){
    if(this.varientnameatcarreg == undefined){
      this.varientnameatcarreg = "Select Varient Name"
    } else {
          this.varientnameatcarreg = this.dbservice.sendvarientname()
          console.log("model name for patch", this.varientnameatcarreg)
    }
    
  }
}
