import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import {WaitersInterface} from './waiters-Interface';
@Injectable()
export class WaiterService {
    res: any;
    constructor(private http: Http, private router: Router) {}
   // apply for get request
  getWaitersRequest() {
        return this.http.get('http://172.104.42.153:3005/api/people_waiter_get_value')
                        .map(res => res.json());
    }

    // apply for get request for single value
    getWaitersSingleRequest(id) {
           console.log('services get value', id.id)
           let _id =  id.id;
           console.log(_id);
         return this.http.get('http://172.104.42.153:3005/api/people_waiter_get_single_value/'+_id)
             .map((res) => res.json());

}
    // apply for post request
   postWaitersRequest(newUser) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://172.104.42.153:3005/api/people_waiter_post_value',newUser,{ headers: headers})
                          .map(res => res.json());
    }

    // apply for delete request
     deleteWaitersRequest(id) {
             alert('delet value suceeful');
            return this.http.delete('http://172.104.42.153:3005/api/people_waiter_delet/'+id)
                    .map(res => res.json());
          }
      // apply for update  reques
         updateWaitersRequest(id) {
           var headers = new Headers();
             headers.append('Content-Type', 'application/json');
             return this.http.put('http://172.104.42.153:3005api/people_waiter_update/'+id, { headers: headers})
             .map(res => res.json());
         }

}
