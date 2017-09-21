import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import {WarehouseInterface} from './warehouse.interface';
@Injectable()
export class WareHouseService {
    res: any;
    constructor(private http: Http, private router: Router) {}
   // apply for get request
  getWarehouseRequest() {
        return this.http.get('http://172.104.42.153:3005/api/Warehouse_get_value')
                        .map(res => res.json());
    }

    // apply for get request for single value
   getWarehouseSingleRequest(id) {
       console.log('services get value', id.id)
       let _id =  id.id;
       console.log(_id);
    return this.http.get('http://172.104.42.153:3005/api/warehouse_get_single_value/'+_id)

                    .map((res) => res.json());

}
    // apply for post request
   postWarehouseRequest(newWarehouse) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://172.104.42.153:3005/api/warehouse_insert_value',newWarehouse,{ headers: headers})
                          .map(res => res.json());
    }

    // apply for delete request
     deleteWarehouseRequest(id) {
             alert('delet value suceeful');
            return this.http.delete('http://172.104.42.153:3005/api/warehouse_delet/'+id)
                    .map(res => res.json());
          }
      // apply for update  reques
        /* updateWarehouseRequest(newWarehouse) {
           var headers = new Headers();
             headers.append('Content-Type', 'application/json');
             console.log('services',newWarehouse);
             return this.http.put('http://172.104.42.153:3005/api/warehouse_update/'+newWarehouse._id,newWarehouse,{ headers: headers})
             .map(res => res.json());
         }*/

}
