import { Component } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { DbserviceService } from 'src/app/service/dbservice.service';

@Component({
  selector: 'app-carmodal',
  templateUrl: './carmodal.component.html',
  styleUrls: ['./carmodal.component.scss']
})
export class CarmodalComponent {


  constructor(private http: HttpService, private dbservice: DbserviceService) { }

  //DECLARATION
  carValueRec: any;
  modalsData!: any
  brandselected: any
  modelnameforpatch:any


  //LINKED SUBJECT TO AUTOMATICALLY TRIGGER THE BRANDSELECTEDFN1 FUNCTION
  ngOnInit() {
    this.dbservice.subject$.subscribe(() => this.brandselectedfn1())
    
  }

  //TO GET THE VALUE IN ARRAY OF CAR SELECTED IN CAR BRAND COMPO 
  brandselectedfn1() {
    this.carValueRec = this.dbservice.sendcarValue()
    console.log("value in car model recieved from service", this.carValueRec)
    //TO CHANGE THE VALUE IN ARRAY INTO INTEGER
    for (let item of this.carValueRec) {
      this.brandselected = item[0]
      console.log("final value", this.brandselected)
    }
    this.getData()
  }

  savemodelnameforpatch(data:any){
this.modelnameforpatch = data
this.dbservice.savemodelname(this.modelnameforpatch)
console.log("model name for patch in car model comp", this.modelnameforpatch)
  }

  sendmodelnamefn() {
   this.dbservice.triggermodelfn()
    }
    
  //TO GET THE DATA FROM BACKEND/DB.JSON
  getData() {
    this.http.getDataFromServer('brands').subscribe({
      next: (res: any) => {
        if (res && res.length > 0) {
          this.modalsData = res[this.brandselected].models
          console.log("modals Data recieved in car modal component", this.modalsData)
        }
      }
    })
  }



  //   import { Component } from '@angular/core';

  // @Component({
  //   selector: 'app-parent',
  //   template: `
  //     <app-car-brands (trigger)="onTrigger()"></app-car-brands>
  //     <app-car-reg [triggerPatch]="triggerPatch"></app-car-reg>
  //   `,
  // })
  // export class ParentComponent {
  //   triggerPatch = false;

  //   onTrigger() {
  //     this.triggerPatch = true;

  //     // Reset the trigger after a short delay to allow re-triggering
  //     setTimeout(() => (this.triggerPatch = false), 0);
  //   }
  // }


}
