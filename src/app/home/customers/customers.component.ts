import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal';
import { Http, Headers } from '@angular/http';
import { Routes, RouterModule , Router } from '@angular/router';
import {CustomerInterface} from './customer-interface';
import {CustomerService} from './customer-services';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
  providers:[CustomerService]
})
export class CustomersComponent implements OnInit {
   @ViewChild('myModal')
    modal: ModalComponent;
    // interface declare
    customerInterfaces: CustomerInterface[];
    customerInterface: CustomerInterface;

  // variable dealcreation
    customerName: string ;
    customerPhone: string ;
    customerEmail: string ;
    customerDiscount: string ;
    customerCreatedAt: string ;
    customerState: string;
    customerAddress: string ;
constructor(private http: Http, private router: Router, private customerService: CustomerService ) { }

  ngOnInit() {
     // get request call
     this.customerService.getCustomerRequest()
          .subscribe(  customerInterfaces => {
            console.log(customerInterfaces)
             this.customerInterfaces =  customerInterfaces;
             console.log(this.customerInterfaces);
          });
  }
 close() {
        this.modal.close();
    }

    open() {
        this.modal.open();
    }

    // it it used for route
     redirect(_id) {
    this.router.navigate(['home/edit_customers',_id]);
  }


  // apply for post method request
  addCustomer() {
    console.log( this.customerName);
       const newCustomers = {
              customerName: this.customerName,
              customerPhone: this.customerPhone,
              customerEmail: this.customerEmail,
              customerState: this.customerState,
              customerAddress: this.customerAddress,
             customerDiscount: this.customerDiscount,
             customerCreatedAt: new Date
       }
              console.log( newCustomers);
              this.customerService.postCustomerRequest( newCustomers)
                   .subscribe( customerInterface => {
                   this.customerInterfaces.push(customerInterface);
              // get the value

              this.customerService.getCustomerRequest()  // get the teacher value
              .subscribe(  customerInterfaces => {
                console.log(customerInterfaces)
                 this.customerInterfaces =   customerInterfaces
                 console.log(this.customerInterfaces);
              });

   })
}

deleteCustomerRequest(id: any) {
         var customerInterfaces = this.customerInterfaces;
         this.customerService.deleteCustomerRequest(id)
             .subscribe(data => {
              if (data.n == 1) {
                 for ( let i = 0 ; i  < customerInterfaces.length; i++) {
                      if (customerInterfaces[i]._id == id)
                      // tslint:disable-next-line:one-line
                      {
                       customerInterfaces.splice(i, 1);
                      }
                 }
              }
            })
            }
}
