import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
@Injectable()
export class POSService {
    res: any;
    constructor(private http: Http, private router: Router) {}
   // apply for get request
  getPOSRequest() {

        return this.http.get('http://172.104.42.153:3005/api/POS_get_value/')
                        .map(res => res.json());
    }
  // apply for get request for single value
  getPOSSingleRequest(id) {
    //console.log('services get value', id.id)
    let _id =  id.id;
    //console.log(_id);
    return this.http.get('http://172.104.42.153:3005/api/POS_get_single_value/'+_id)
      .map((res) => res.json());

}
   // apply for post request
   postPOSRequest(newUser) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://172.104.42.153:3005/api/POS_post_value',newUser, { headers: headers})
                      .map(res => res.json());
}

// apply for delete request
     deletePOSRequest(id) {
           alert('delete value successful');
          return this.http.delete('http://172.104.42.153:3005/api/POS_delet/'+id)
            .map(res => res.json());
}

// this is used fot delet all the value at the same time
deletePOSALLRequest(id) {
  alert('delete value successful');
 return this.http.delete('http://172.104.42.153:3005/api/POS_all_delet/'+id)
   .map(res => res.json());
}

// apply for update  reques
updatePOSRequest(id) {
  var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put('http://172.104.42.153:3005/api/POS_update/'+id, { headers: headers})
    .map(res => res.json());
}

// add the item value

   // apply for post request
   postItemRequest(newValue) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://172.104.42.153:3005/api/item_post_value', newValue , { headers: headers})
                      .map(res => res.json());
}

// apply for get request for single value
getItemSingleRequest(id) {
 // console.log('services get value', id.id)
  let _id =  id.id;
 // console.log(_id);
  return this.http.get('http://172.104.42.153:3005/api/item_get_single_value/'+_id)
    .map((res) => res.json());

}

// this is used fot delet all the value at the same time
deleteItemRequest(id) {
  alert('delete value successful');
 return this.http.delete('http://172.104.42.153:3005/api/item_delet/'+id)
   .map(res => res.json());
}

getItemRequest() {

          return this.http.get('http://172.104.42.153:3005/api/item/')
                          .map(res => res.json());
      }
  }

