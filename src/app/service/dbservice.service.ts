import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {
  varientname: any;

  constructor() { }

  //DECLARATION
  carname: any;
  modelname: any
  private carValue: any = []

  //TO SEND THE VALUE OF CAR AS INDEX FROM CAR BRAND COMP TO CAR MODEL COMPO
  savecarValue(car: any) {
    this.carValue.push(car)
  }
  sendcarValue() {
    return this.carValue
  }

  //TO SEND THE BRAND NAME SELECTED IN CAR BRAND COMPO TO CAR-REG COMPO
  savebrandname(name: any) {
    this.carname = name
  }
  sendbrandname() {
    return this.carname
  }

  //SUBJECT TO AUTO TRIGGER THE FUNCTION AVAILABLE IN CAR-REG COMPO FROM CAR BRAND COMPO
  subject$ = new Subject<void>()

  triggerfn() {
    this.subject$.next()
  }

  //SUBJECT TO AUTO TRIGGER THE FUNCTION AVAILABLE IN CAR MODAL COMP FROM CAR-REG COMPO

  subject1$ = new Subject<void>()
  triggerfn1(){
    this.subject1$.next()
  }

  //TO SEND THE NAME OF THE CAR MODE SELECTED AT THE CAR MODEL COMPO

  savemodelname(modelname:any){
this.modelname = modelname
  }

  sendmodelname(){
    return this.modelname
  }

  //SUBJECT TO AUTO TRIGGER FUNCTION AVAILABLE IN CAR-RE COMP FOR CAR MODEL

  subject2$ = new Subject<void>()
  triggermodelfn(){
    this.subject2$.next()
  }


  savevarientname(varientname:any){
    this.varientname = varientname
  }

  sendvarientname(){
    return this.varientname
  }


  subject3$ = new Subject<void>()
  triggervarientfn(){
    this.subject3$.next()
  }
}
