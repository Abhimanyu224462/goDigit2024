import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {

  
collectunltd(data: number) {

  this.valueunltd = data
  this.compvalue = 235
  
  this.compvalue = this.valueunltd + this.compvalue
  this.compvaluest = 100 + this.compvalue
  console.log("value 2500", this.valueunltd)
}
collect12500(data: number) {
  this.value12500 = data
  this.compvalue = 235
  
  this.compvalue = this.value12500 + this.compvalue
  this.compvaluest = 100 + this.compvalue
  console.log("value 2500", this.value12500)
}
collect10000(data: number) {
  this.value10000 = data
  this.compvalue = 235
  
  this.compvalue = this.value10000 + this.compvalue
  this.compvaluest = 100 + this.compvalue
  console.log("value 2500", this.value10000)
}
collect7500(data: number) {
  this.value7500 = data
  this.compvalue = 235
  
  this.compvalue = this.value7500 + this.compvalue
  this.compvaluest = 100 + this.compvalue
  console.log("value 2500", this.value7500)
}

value2500:any
value5000: any;
value7500: any;
  value10000: any;
  value12500: any;
  valueunltd: any;
compvalue: number = 235;
compvaluest: number = 319;

collect2500(data: number) {
this.value2500 = data
this.compvalue = 235

this.compvalue = this.value2500 + this.compvalue
this.compvaluest = 100 + this.compvalue
console.log("value 2500", this.value2500)
}

collect5000(data: number){
  this.value5000 = data
  this.compvalue = 235
  
  this.compvalue = this.value5000 + this.compvalue
  this.compvaluest = 100 + this.compvalue
  console.log("value 5000", this.value5000)
}

rangeidv:number = 122000;
rangecng:any = 45000
comprehensivecheck: any;
thirdpartycheck:any



comprecheckvalue() {
  this.x = this.compvalue
  console.log("comprehensive check value", this.comprehensivecheck);
  }

  thirdpartycheckvalue(){
    this.y = 215
console.log("third party check value", this.thirdpartycheck)
  }

rangeidvCollect(){
this.z = (this.rangeidv * 320)/98000
  console.log("idv range", this.rangeidv, "and value of z",this.z)
  
}

rangecngCollect(){
  this.b1 = (this.rangecng * 1.6)/10000
  console.log("cng range", this.rangecng,"and value of b is",this.b)
}

pacoverfn() {
  this.e = 8
  this.pacover = 8
  }
  pacover: any;
  
  breakassisfn() {
    this.d = 9
  this.breakassis = 9
  }
  breakassis: any;

  passcoverfn() {
    this.c = 21
  this.passcover = 21
  }
  passcover: any;

  cngfn() {
  if(this.cng){
    this.b = this.b1
  }
  }
  cng: any;

  peraccifn() {
    this.a = 21
 this.personaccid = 21
  }
  personaccid: any;


  //final value

  x:number = 0; y:number = 0; z:number = 0; a:number = 0; b1:number = 0; b:number = 0; c:number = 0; d:number = 0; e:number = 0 ; finalvalue:number = 0
  
  final() {
    this.finalvalue = (this.x+this.y+this.z+this.a+this.b+this.c+this.d+this.e) * 12
    }


}
