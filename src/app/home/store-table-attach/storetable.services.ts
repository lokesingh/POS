import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import { StoreTableInterface} from './store_table.interface';

@Injectable()
export class StoreTableService {
    res: any;
    constructor(private http: Http, private router: Router) {}

   // it is used for Store zone get request method
    getStoreZoneRequest(id) {
      console.log('services get value', id.id)
      let _id =  id.id;

        return this.http.get('http://172.104.42.153:3005/api/store_Zone_get_value/'+_id)
                        .map(res => res.json());
        }

     // apply for get request for single value
     getStoreZoneSingleRequest(id) {
      console.log('services get value', id.id)
      let _id =  id.id;
      console.log(_id);
      return this.http.get('http://172.104.42.153:3005/api/store_Zone_get_single_value/'+_id)
        .map((res) => res.json());

}

    // it is used for Store zone Post request method
     postStoreZoneRequest(newUser) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://172.104.42.153:3005/api/store_Zone_post_value',newUser, { headers: headers})
                          .map(res => res.json());
        }

     // it is used for Store zone Delete request method
     // apply for delete request
     deleteStoreZoneRequest(id) {
             alert('delete value successful');
            return this.http.delete('http://localhost:8000/api/store_Zone_delet/'+id)
                    .map(res => res.json());
          }


// Note:-  we will write for Store Table option
   // it is used for Store Table get request method
    getStoreTableRequest(id) {
        console.log('services get value', id.id)
         let _id =  id.id;
        return this.http.get('http://localhost:8000/api/store_Table_get_value/'+_id)
                        .map(res => res.json());
        }

     // apply for get request for single value
     getStoreTableSingleRequest(id) {
      console.log('services get value', id.id)
      let _id =  id.id;
      console.log(_id);
      return this.http.get('http://localhost:8000/api/store_Table_get_single_value/'+_id)
        .map((res) => res.json());

}
    // it is used for Store zone Post request method
       postStoreTableRequest(newUser) {
            var headers = new Headers();
            headers.append('Content-Type', 'application/json');
                  return this.http.post('http://localhost:8000/api/store_Time_post_value',newUser, { headers: headers})
                          .map(res => res.json());
            }
    // it is used for Store Table Delete request method
        deleteStoreTableRequest(id) {
             alert('delete value successful');
            return this.http.delete('http://localhost:8000/api/store_Time_delet/'+id)
                    .map(res => res.json());
          }
     // it is used for Store Table Update request method
        updateStoreTableRequest(id) {
           var headers = new Headers();
             headers.append('Content-Type', 'application/json');
             return this.http.put('http://localhost:8000/api/store_Time_update/'+id, { headers: headers})
             .map(res => res.json());
         }
}
