import { Component, OnInit } from '@angular/core';
import {  Response, Headers, RequestOptions, Http,HttpModule } from '@angular/http';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {CustomerInterface} from '../customers/customer-interface';
import {CustomerService} from '../customers/customer-services';

@Component({
  selector: 'app-edit-customers',
  templateUrl: './edit-customers.component.html',
  styleUrls: ['./edit-customers.component.css'],
  providers:[CustomerService]
})
export class EditCustomersComponent implements OnInit {
  id:any;
  private sub: any;
  customerName: string ;
  customerPhone: string ;
  customerEmail: string ;
  customerState: string ;
  customerAddress: string ;
  customerDiscount: string ;
  customerCreatedAt: string ;
  // interface declare
  customerInterface:CustomerInterface[];
  constructor(private http: Http,
    private router: Router,
    private customerService:CustomerService,
    private route : ActivatedRoute) {
     }

     ngOnInit() {
      // params define
      this.route.params.subscribe(params => this.id=params);
      console.log('this is params  id value',this.id);

        // get request call
       this.customerService.getCustomerSingleRequest(this.id )
            .subscribe(  customerInterface => {

               this.customerInterface =  customerInterface.CustomerDetail;
               this.customerName = customerInterface.CustomerDetail.customerName;
               this.customerPhone = customerInterface.CustomerDetail.customerPhone;
               this.customerEmail = customerInterface.CustomerDetail.customerEmail;
               this.customerState = customerInterface.CustomerDetail.customerState;
               this.customerAddress = customerInterface.CustomerDetail.customerAddress;
               this.customerDiscount = customerInterface.CustomerDetail.customerDiscount;
               console.log(  this.customerInterface);

            });
    }


    // update method for attach the method

  // update request
  updateCustomer() {

        const newUser = {
          customerName: this.customerName,
          customerPhone: this.customerPhone,
          customerEmail: this.customerEmail,
         customerDiscount: this.customerDiscount,
         customerCreatedAt: new Date

    }
        console.log(newUser);
         var headers = new Headers();
         headers.append('Content-Type', 'application/json');
         console.log('show the value',newUser)
         alert('Sucessful Update your Data');
         return this.http.put('http://172.104.42.153:3005/api/people_customer_update/'+this.id.id ,newUser, { headers: headers  })
         .map((res) => res.json())
         .subscribe(
          data => console.log(data))

        }
}
