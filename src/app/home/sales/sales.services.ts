import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
@Injectable()
export class SalesService {
    res: any;
    constructor(private http: Http, private router: Router) {}
   // apply for get request
  getSalesrRequest() {
        return this.http.get('http://172.104.42.153:3005/api/sales_get_value')
                        .map(res => res.json());
    }
  // apply for post request
   postSalesRequest(newUser) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://172.104.42.153:3005/api/sales_post_value',newUser, { headers: headers})
                          .map(res => res.json());
    }

 // apply for delete request

     deleteSalesRequest(id) {
             alert('delete value successful');
            return this.http.delete('http://172.104.42.153:3005/api/sales_delet/'+id)
                    .map(res => res.json());
          }
      // apply for update  reques
         updateStoreRequest(id) {
           var headers = new Headers();
             headers.append('Content-Type', 'application/json');
             return this.http.put('http://172.104.42.153:3005/api/sales_update/'+id, { headers: headers})
             .map(res => res.json());
         }
}
