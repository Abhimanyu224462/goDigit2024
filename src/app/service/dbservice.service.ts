import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  constructor() { }

  //DECLARATION
  carname: any;
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

}
