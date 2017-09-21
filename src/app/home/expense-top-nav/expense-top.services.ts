import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import {Expense_Top_Interface} from './expense-top.Interface';
@Injectable()
export class Expense_TopService {
    res: any;
    constructor(private http: Http, private router: Router) {}
   // apply for get request
  getExpense_TopsRequest() {
        return this.http.get('http://172.104.42.153:3005/api/expense_get_value')
                        .map(res => res.json());
    }

  // apply for get request for single value
  getExpenseSingleRequest(id) {
    console.log('services get value', id.id)
    let _id =  id.id;
    console.log(_id);
 return this.http.get('http://172.104.42.153:3005/api/expense_get_single_value/'+_id)

                 .map((res) => res.json());

}
    // apply for post request
   postExpense_TopRequest(newUser) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://172.104.42.153:3005/api/expense_post_value',newUser,{ headers: headers})
                          .map(res => res.json());
    }

    // apply for delete request
     deleteExpense_TopRequest(id) {
             alert('delet value suceeful');
            return this.http.delete('http://172.104.42.153:3005/api/expense_delet/'+id)
                    .map(res => res.json());
          }
      // apply for update  reques
         updateExpense_TopRequest(id) {
           var headers = new Headers();
             headers.append('Content-Type', 'application/json');
             return this.http.put('http://172.104.42.153:3005/api/expense_update/'+id, { headers: headers})
             .map(res => res.json());
         }

}
