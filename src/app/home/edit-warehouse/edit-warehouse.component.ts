import { Component, OnInit } from '@angular/core';
import {WareHouseService} from '../warehouses/warehouse.services';
import {  Response, Headers, RequestOptions, Http,HttpModule } from '@angular/http';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { FormsModule } from '@angular/forms';

import 'rxjs/add/operator/map';
import {WarehouseInterface} from '../warehouses/warehouse.interface';
@Component({
  moduleId: module.id,
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styleUrls: ['./edit-warehouse.component.css'],
   providers:[WareHouseService]
})
export class EditWarehouseComponent implements OnInit {
   id:any;
  private sub: any;
  warehouseInterface: WarehouseInterface[];

  // variable deaclaration
     warehouseName:  string;
     warehousePhone: string ;
     warehouseEmail:  string;
     warehouseAddress: string ;
  constructor(private http: Http,
              private router: Router,
              private wareHouseService: WareHouseService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    // params define
    this.route.params.subscribe(params => this.id=params);
    console.log('this is params  id value',this.id);

      // get request call
     this.wareHouseService.getWarehouseSingleRequest(this.id )
          .subscribe(  warehouseInterface => {
            console.log( warehouseInterface)
            this.warehouseInterface =  warehouseInterface.warehouseDetail
            this.warehouseName = warehouseInterface.warehouseDetail.warehouseName;
            this.warehousePhone = warehouseInterface.warehouseDetail.warehousePhone;
            this.warehouseEmail = warehouseInterface.warehouseDetail.warehouseEmail;
            this.warehouseAddress = warehouseInterface.warehouseDetail.warehouseAddress;
             console.log(  warehouseInterface.warehouseDetail)
          });
  }

     // update request
        updateWarehouse() {
          const newUser = {
            warehouseName:this.warehouseName,
            warehousePhone: this.warehousePhone,
            warehouseEmail: this.warehouseEmail,
            warehouseAddress: this.warehouseAddress

      }
          console.log(newUser);
          var headers = new Headers();
           headers.append('Content-Type', 'application/json');
           console.log('call the id ',this.id)
           return this.http.put('http://172.104.42.153:3005/api/warehouse_update/'+this.id.id ,newUser, { headers: headers  })
           .map((res) => res.json())
           .subscribe(
            data => console.log(data))
          }


}
