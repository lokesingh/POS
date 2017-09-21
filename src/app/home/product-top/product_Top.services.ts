import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Injectable()
export class Product_TopService {
    res: any;
    constructor(private http: Http, private router: Router) {}
   // apply for get request
  getProduct_TopRequest() {
        return this.http.get('http://172.104.42.153:3005/api/product_get_value')
                        .map(res => res.json());
    }
   // apply for get request for single value
   getProduct_TopSingleRequest(id) {
       console.log('services get value', id.id)
             let _id =  id.id;
             console.log(_id);
             return this.http.get('http://172.104.42.153:3005/api/people_get_single_value/'+_id)

           .map((res) => res.json());

}

//apply for get request for modal value
getProduct_TopmodalRequest(id) {
  console.log('services model get value', id)

        return this.http.get('http://172.104.42.153:3005/api/people_get_single_value/'+id)

      .map((res) => res.json());

}

    // apply for post request
   postProduct_TopRequest(newUser) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://172.104.42.153:3005/api/product_post_value',newUser, { headers: headers})
                          .map(res => res.json());
    }

    // apply for delete request
     deleteProduct_TopRequest(id) {
             alert('delete value successful');
            return this.http.delete('http://172.104.42.153:3005/api/product_delet/'+id)
                    .map(res => res.json());
          }
      // apply for update  reques
         updateCategoriesProductRequest(id) {
           var headers = new Headers();
             headers.append('Content-Type', 'application/json');
             return this.http.put('http://172.104.42.153:3005/api/product_update/'+id, { headers: headers})
             .map(res => res.json());
         }

}
