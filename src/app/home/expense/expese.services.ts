import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import {CategoriesExpenseInterface} from './expeense.interface';

@Injectable()
export class CategoriesExpenseService {
    res: any;
    constructor(private http: Http, private router: Router) {}
   // apply for get request
  getCategoriesExpenseRequest() {
        return this.http.get('http://172.104.42.153:3005/api/cate_expense_get_value')
                        .map(res => res.json());
    }

    // apply for get request for single value
   getCategoriesExpenseSingleRequest(id) {
          console.log('services get value', id.id)
          let _id =  id.id;
          console.log(_id);
         return this.http.get('http://172.104.42.153:3005/api/cate_expense_get_single_value/'+_id)

                 .map((res) => res.json());

}
    // apply for post request
   postCategoriesExpenseeRequest(newUser) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://172.104.42.153:3005/api/catego_expesne_post_value',newUser, { headers: headers})
                          .map(res => res.json());
    }

    // apply for delete request
     deleteCategoriesExpenseRequest(id) {
             alert('delete value successful');
            return this.http.delete('http://172.104.42.153:3005/api/catego_expense_delet/'+id)
                    .map(res => res.json());
          }
      // apply for update  reques
         updateCategoriesExpenseRequest(id) {
           var headers = new Headers();
             headers.append('Content-Type', 'application/json');
             return this.http.put('http://172.104.42.153:3005/api/catego_expense_update/'+id, { headers: headers})
             .map(res => res.json());
         }

}
