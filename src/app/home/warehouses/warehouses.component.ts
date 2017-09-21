import { Component, ViewChild, OnInit ,  NgModule} from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal';
import {  Response, Headers, RequestOptions, Http } from '@angular/http';
import {Router,ActivatedRoute, Params, Data } from '@angular/router';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import {WarehouseInterface} from './warehouse.interface';
import {WareHouseService} from './warehouse.services';
@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.css'],
  providers:[WareHouseService]
})
export class WarehousesComponent implements OnInit {
  id: number;
  private sub: any;
  /* both are relaetd to modal option */

   @ViewChild('myModal')
   modal: ModalComponent;

  // here declare interface in array form
   warehouseInterfaces :WarehouseInterface[];
   warehouseInterface: WarehouseInterface;

  // variable deaclaration
    warehouseName:  string;
    warehousePhone: string ;
    warehouseEmail:  string;
    warehouseAddress: string ;

  constructor(private http: Http,
              private router: Router,
              private wareHouseService: WareHouseService,
              private route : ActivatedRoute) {
               }

  ngOnInit() {
       // get request call
     this.wareHouseService.getWarehouseRequest()
          .subscribe(  warehouseInterfaces => {
            console.log( warehouseInterfaces)
             this.warehouseInterfaces =  warehouseInterfaces
          });



  }
  // this is for modal option
 close() {
        this.modal.close();
    }
    open() {
        this.modal.open();
    }
      // this is used for routing
       redirect(_id) {
      this.router.navigate(['home/edit_warehouse',_id]);

  }


  // apply for post method request
  addWarehouse() {
    console.log( this.warehouseName);
       const newWarehouse = {
             warehouseName: this.warehouseName,
             warehousePhone:this.warehousePhone,
             warehouseEmail: this.warehouseEmail,
             warehouseAddress: this.warehouseAddress
       }
              console.log(newWarehouse);
              this.wareHouseService.postWarehouseRequest(newWarehouse)
                   .subscribe( warehouseInterface => {
                   this.warehouseInterfaces.push(warehouseInterface);

              //get the value
              this.wareHouseService.getWarehouseRequest()
              .subscribe(  warehouseInterfaces => {
                console.log(warehouseInterfaces)
                 this.warehouseInterfaces =  warehouseInterfaces
              });

   })
}

  // apply  for Delete method request
  deleteWarehouse(id: any) {
         var warehouseInterfaces = this.warehouseInterfaces;
         this.wareHouseService.deleteWarehouseRequest(id)
             .subscribe(data => {
              if (data.n == 1) {
                 for ( let i = 0 ; i  < warehouseInterfaces.length; i++) {
                      if (warehouseInterfaces[i]._id == id)
                      // tslint:disable-next-line:one-line
                      {
                       warehouseInterfaces.splice(i, 1);
                      }
                 }
              }
            })
            }

   // apply for Update method request

}
