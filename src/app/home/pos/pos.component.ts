import { Component, ViewChild, OnInit } from '@angular/core';
import { StoreInterface} from '../stores/store-interface';
import {StoreService } from '../stores/store.services';
import { ModalComponent } from 'ng2-bs3-modal';
import { Http, Headers } from '@angular/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css'],
  providers:[StoreService]
})
export class POSComponent implements OnInit {
  // it is related to bootstrap modal
 @ViewChild('myModal')
    modal: ModalComponent;
  // interface define for store component
  storeInterfaces: StoreInterface[];

  constructor(private storeService: StoreService,private router: Router) { }

  ngOnInit() {
     // get request call
     this.storeService. getStoreRequest()
          .subscribe(  storeInterfaces => {
           // console.log( storeInterfaces)
             this.storeInterfaces =  storeInterfaces
            // console.log(this.storeInterfaces);
          });


  }

  // it is used for modal function
close() {
        this.modal.close();
    }

    open() {
        this.modal.open();
    }
  // it is used for routing and part of the modal    or if we have to add cash so we will use sam function
 cashHand(id) {
    this.router.navigate(['home/pos_next2',id]);
 }
}
