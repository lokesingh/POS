import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal';
import { Http, Headers } from '@angular/http';
import { StoreInterface} from './store-interface';
import {StoreService } from './store.services';
import {Router,ActivatedRoute, Params, Data } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
@Component({
  selector: 'app-stores',
  templateUrl: './stores.component.html',
  styleUrls: ['./stores.component.css'],
  providers:[StoreService ]
})
export class StoresComponent implements OnInit {

// it is relaetd to modal componenent
  @ViewChild('myModal')
    modal: ModalComponent;

 // interface declare for store the value ;
     storeInterfaces: StoreInterface[];
     storeInterface: StoreInterface;

// variable declaration
       storeName: string;
       storeEmail: string;
       storePhone: string;
       storecountry: string;
       storeCity: string;
       storeAddress: string;
       storeReceipt: string;



  constructor(private http: Http,
              private storeService: StoreService,
              private router: Router, ) { }

  ngOnInit() {
    // get request call
     this.storeService.getStoreRequest()
          .subscribe(  storeInterfaces => {
            console.log( storeInterfaces)
             this.storeInterfaces =  storeInterfaces;
             console.log(this.storeInterfaces);
          });


  }
  // it it used for route
  routing(_id) {
    this.router.navigate(['home/edit_store',_id]);
  }
   // function declare for modal opeation perform
 close() {
        this.modal.close();
    }

    open() {
        this.modal.open();
    }

    addStor() {
    console.log( this.storeName);
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
              this.storeService.postStoreRequest(newUser)
                   .subscribe( storeInterface=> {
                   this.storeInterfaces.push(storeInterface);
               // get request call
              this.storeService.getStoreRequest()  // get the teacher value
                 .subscribe(  storeInterfaces => {
                 console.log( storeInterfaces)
              this.storeInterfaces =  storeInterfaces
              console.log(this.storeInterfaces);
     });

   })
}
   // apply  for Delete method request
  deleteStore(id: any) {
         var storeInterfaces = this.storeInterfaces;
         this.storeService.deleteStoreRequest(id)
             .subscribe(data => {
              if (data.n == 1) {
                 for ( let i = 0 ; i  < storeInterfaces.length; i++) {
                      if (storeInterfaces[i]._id == id)
                      // tslint:disable-next-line:one-line
                      {
                       storeInterfaces.splice(i, 1);
                      }
                 }
              }
            })
    }

     // this is used for routing
       redirect(_id) {
      this.router.navigate(['home/StoreTableAttachComponent',_id]);
      console.log(_id);

  }
}
