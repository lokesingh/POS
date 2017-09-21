import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal';
import { Http, Headers } from '@angular/http';
import { Routes, RouterModule , Router } from '@angular/router';
import {WaitersInterface} from './waiters-Interface';
import {WaiterService} from './waiters.services';
import {StoreService} from '../stores/store.services';
import { StoreInterface} from '../stores/store-interface';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
@Component({
  selector: 'app-waiters',
  templateUrl: './waiters.component.html',
  styleUrls: ['./waiters.component.css'],
  providers:[WaiterService,StoreService]
})
export class WaitersComponent implements OnInit {
   // it is related to modal
  @ViewChild('myModal')
    modal: ModalComponent;
  // interface define
    waitersInterfaces: WaitersInterface[];
    waitersInterface: WaitersInterface;
    storeInterfaces: StoreInterface[] // this is part of the store interface compnent
  // variable declare
    waiterName: string ;
    waiterPhone: string ;
    waiterEmail:  string ;
    waiterStore: string ;
    waiterCreateAt: string; 

  constructor(private http: Http, private router: Router, private waiterService: WaiterService, private storeService:StoreService ) { }

  ngOnInit() {
    // get request call
     this.waiterService.getWaitersRequest()  
          .subscribe(  waitersInterfaces => {
            console.log( waitersInterfaces)
             this.waitersInterfaces =  waitersInterfaces
          });
            //  it is related to store services because we have to display the store name
     this.storeService. getStoreRequest() 
          .subscribe(  storeInterfaces => {
            console.log( storeInterfaces)
             this.storeInterfaces =  storeInterfaces
             console.log(this.storeInterfaces);
          });
  }
       

  // function used for modal option
 close() {
        this.modal.close();
    }

    open() {
        this.modal.open();
    }

    // it it used for route
     redirect(_id) {
    this.router.navigate(['home/edit_waiter',_id]);
  }

  addWaiters() {
    console.log( this. waiterName);
       const newUser = {
             waiterName:  this.waiterName,
             waiterPhone: this.waiterPhone,
             waiterEmail:  this.waiterEmail,
             waiterStore: this.waiterStore,
             waiterCreateAt: new Date 
       }
              console.log(newUser);
              this.waiterService.postWaitersRequest(newUser)
                   .subscribe(  waitersInterface=> {
                   this.waitersInterfaces.push( waitersInterface);
            // get the value        
                   this.waiterService.getWaitersRequest()  
                   .subscribe(  waitersInterfaces => {
                     console.log( waitersInterfaces)
                      this.waitersInterfaces =  waitersInterfaces
                   });     

   })
}
   // apply  for Delete method request
  deleteWaiters(id: any) {
         var  waitersInterfaces = this.waitersInterfaces;
         this.waiterService.deleteWaitersRequest(id)
             .subscribe(data => {
              if (data.n == 1) {
                 for ( let i = 0 ; i  <  waitersInterfaces.length; i++) {
                      if ( waitersInterfaces[i]._id == id)
                      // tslint:disable-next-line:one-line
                      {
                        waitersInterfaces.splice(i, 1);
                      }
                 }
              }
            })
    }
}
