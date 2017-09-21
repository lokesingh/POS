import { Component, OnInit } from '@angular/core';
import { SupplyInterface} from '../suppliers/supplers-interface';
import {SupplyService} from '../suppliers/supplers-services';
import {  Response, Headers, RequestOptions, Http,HttpModule } from '@angular/http';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-suppliers',
  templateUrl: './edit-suppliers.component.html',
  styleUrls: ['./edit-suppliers.component.css'],
  providers:[SupplyService]
})
export class EditSuppliersComponent implements OnInit {
  id:any;
  private sub: any;
  // interface declare
  supplyInterface:SupplyInterface[];
  // variable declare
  suppliersName: string;
  suppliersPhone: string;
  suppliersEmail: string;
  suppliersStore: string;
  supplierDate: string;
  constructor(private http: Http,
    private router: Router,
    private supplyService:SupplyService,
    private route : ActivatedRoute) {
     }

     ngOnInit() {
      // params define
      this.route.params.subscribe(params => this.id=params);
      console.log('this is params  id value',this.id);

        // get request call
       this.supplyService.getSupplierSingleRequest(this.id )
            .subscribe(  supplyInterface => {
              console.log( supplyInterface)
               this.suppliersName =  supplyInterface.SuppliersDetail.suppliersName;
               this.suppliersPhone=  supplyInterface.SuppliersDetail.suppliersPhone;
               this.suppliersEmail =  supplyInterface.SuppliersDetail.suppliersEmail;
               this.supplierDate =  supplyInterface.SuppliersDetail.supplierDate;
               this.suppliersStore =  supplyInterface.SuppliersDetail.suppliersStore;
               console.log('this value',this.suppliersName)

            });
    }

  // update method for attach the method

  // update request
  updateSupplier() {

    const newUser = {
      suppliersName:this.suppliersName,
      suppliersPhone: this.suppliersPhone,
      suppliersEmail: this.suppliersEmail,
      supplierDate: new  Date,
      suppliersStore: this.suppliersStore

}
    console.log(newUser);
     var headers = new Headers();
     headers.append('Content-Type', 'application/json');
     console.log('show the value',newUser)
     alert('Sucessful Update your Data');
     return this.http.put('http://172.104.42.153:3005/api/people_suppliers_update/'+this.id.id ,newUser, { headers: headers  })
     .map((res) => res.json())
     .subscribe(
      data => console.log(data))

    }

}
