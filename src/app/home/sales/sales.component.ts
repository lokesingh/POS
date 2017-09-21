import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal';
import { Http, Headers } from '@angular/http';
import {CustomerInterface} from '../customers/customer-interface';
import {CustomerService} from '../customers/customer-services';
import {UserInterface} from '../users/user.interface';
import {UserService} from '../users/user.services';
import {SettingService} from '../setting-demo/setting-services'
import { SettingInterface} from '../setting-demo/setting-interface';
import {POSService } from '../pos-add-/pos.add.services';
import {PosInterface} from '../pos-add-/pos.add.interface';
@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
  providers:[CustomerService,UserService,SettingService,POSService]
})
export class SalesComponent implements OnInit {
  @ViewChild('myModal')
    Editmodal: ModalComponent;
    Paymentmodal: ModalComponent;
    Invoicemodal: ModalComponent;
    Reciptmodal: ModalComponent;

  // interface define for customer related
  customerInterfaces:CustomerInterface[];
  // interface define for User component Related
  userInterfaces :UserInterface[];
  // interface define for Setting Demo
  settingInterfaces: SettingInterface[];
  posInterfaces: PosInterface[];
    constructor(private customerService: CustomerService,
    private userService: UserService,
    private settingService: SettingService,  private pOSService:POSService) { }

  ngOnInit() {
    // get request call for customer component
     this.customerService.getCustomerRequest()
          .subscribe(   customerInterfaces => {
            console.log(customerInterfaces)
             this.customerInterfaces =   customerInterfaces;
            // console.log(this.customerInterfaces);
          });
    // get request  call for user component
     this.userService.getUserRequest()
          .subscribe(  userInterfaces => {
            // console.log(userInterfaces)
             this.userInterfaces =  userInterfaces;
            // console.log(this.userInterfaces);
          });
            // get request call
     this.settingService.getSettingrRequest()  // get the teacher value
          .subscribe( settingInterfaces => {
            // console.log( settingInterfaces)
             this.settingInterfaces = settingInterfaces;
          });
    // Item the value
    this.pOSService.getItemRequest()
    .subscribe( posInterfaces => {
      console.log(posInterfaces)
       this.posInterfaces = posInterfaces;
       console.log('pos value get', this.posInterfaces);
    });
  }
 close() {
        this.Editmodal.close();
        this.Paymentmodal.close();
        this.Invoicemodal.close();
        this.Reciptmodal.close();

    }

    open() {
        this.Editmodal.open();
        this.Paymentmodal.open();
        this.Invoicemodal.open();
        this.Reciptmodal.open();
    }

}
