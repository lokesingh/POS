import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import {CustomerInterface} from './customer-interface';
@Injectable()
export class CustomerService {
    res: any;
    constructor(private http: Http, private router: Router) {}
   // apply for get request
  getCustomerRequest() {
        return this.http.get('http://172.104.42.153:3005/api/people_customer_get_value')
                        .map(res => res.json());
    }

    getCusterObjectRequest() {
      return this.http.get('http://172.104.42.153:3005/api/people_customer_object_get_value')
                      .map(res => res.json());
  }

    // apply for get request for single value
    getCustomerSingleRequest(id) {
        console.log('services get value', id.id)
        let _id =  id.id;
        console.log(_id);
        return this.http.get('http://172.104.42.153:3005/api//people_customer_get_single_value/'+_id)
          .map((res) => res.json());

}
    // apply for post request
   postCustomerRequest( newCustomers) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://172.104.42.153:3005/api/people_customer_post_value', newCustomers,{ headers: headers})
                          .map(res => res.json());
    }

    // apply for delete request
     deleteCustomerRequest(id) {
             alert('delet value suceeful');
            return this.http.delete('http://172.104.42.153:3005/api/people_customer_delet/'+id)
                    .map(res => res.json());
          }

}
