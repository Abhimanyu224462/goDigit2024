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
  console.log("comprehensive check value", this.comprehensivecheck);
  }

  thirdpartycheckvalue(){
console.log("third party check value", this.thirdpartycheck)
  }

rangeidvcngCollect(){
  console.log("idv range", this.rangeidv)
  console.log("cng range", this.rangecng)
}

pacoverfn() {
  this.pacover = 8
  }
  pacover: any;
  
  breakassisfn() {
  this.breakassis = 9
  }
  breakassis: any;

  passcoverfn() {
  this.passcover = 21
  }
  passcover: any;

  cngfn() {
  this.cng = this.rangecng
  }
  cng: any;

  peraccifn() {
 this.personaccid = 21
  }
  personaccid: any;

}
