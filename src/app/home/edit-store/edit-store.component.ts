import { Component, OnInit } from '@angular/core';
import { StoreInterface} from '../stores/store-interface';
import {StoreService } from '../stores/store.services';
import {  Response, Headers, RequestOptions, Http,HttpModule } from '@angular/http';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-store',
  templateUrl: './edit-store.component.html',
  styleUrls: ['./edit-store.component.css'],
  providers:[StoreService]
})
export class EditStoreComponent implements OnInit {
  id:any;
  private sub: any;
// interface declare
  storeInterface : StoreInterface[];
// varibale declare
  storeName: string;
  storeEmail: string;
  storePhone: string;
  storecountry: string;
  storeCity: string;
  storeAddress: string;
  storeReceipt: string;
  constructor(private http: Http,
    private router: Router,
    private storeService:StoreService,
    private route : ActivatedRoute) {
     }

     ngOnInit() {
      // params define
      this.route.params.subscribe(params => this.id=params);
      console.log('this is params  id value',this.id);

        // get request call
       this.storeService.getStoreSingleRequest(this.id )
            .subscribe(  storeInterface => {

            this.storeInterface = storeInterface.StoreDetail
            console.log( this.storeInterface)
            this.storeName = storeInterface.StoreDetail.storeName
            this.storeEmail = storeInterface.StoreDetail.storeEmail
            this.storePhone = storeInterface.StoreDetail.storePhone
            this.storecountry = storeInterface.StoreDetail.storecountry
            this.storeCity = storeInterface.StoreDetail.storeCity
            this.storeAddress= storeInterface.StoreDetail.storeAddress
            this.storeReceipt= storeInterface.StoreDetail.storeReceipt
            });
    }

    // update method for attach the method

  // update request
  updateStore() {

        const newUser = {
          storeName: this.storeName,
          storeEmail: this.storeEmail,
          storePhone: this.storePhone,
          storecountry: this.storecountry,
          storeCity: this.storeCity,
          storeAddress: this.storeAddress,
          storeReceipt: this.storeReceipt

    }
        console.log(newUser);
         var headers = new Headers();
         headers.append('Content-Type', 'application/json');
         console.log('show the value',newUser)
         alert('Sucessful Update your Data');
         return this.http.put('http://172.104.42.153:3005/api/store_update/'+this.id.id ,newUser, { headers: headers  })
         .map((res) => res.json())
         .subscribe(
          data => console.log(data))

        }


}
