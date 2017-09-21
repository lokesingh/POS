import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';
import {SettingInterface} from './setting-interface';
@Injectable()
export class SettingService {
    res: any;
    constructor(private http: Http, private router: Router) {}
   // apply for get request
  getSettingrRequest() {
        return this.http.get('http://172.104.42.153:3005/api/setting_get_value')
                        .map(res => res.json());
    }

   // apply for get request for single value
   getSettingSingleRequest(id) {
    console.log('services get value', id.id)
    let _id =  id.id;
    console.log(_id);
    return this.http.get('http://172.104.42.153:3005/api/setting__get_single_value/'+_id)
      .map((res) => res.json());

}

     // apply for post request
   postSettingRequest(newUser) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://172.104.42.153:3005/api/setting_post_value',newUser, { headers: headers})
                          .map(res => res.json());
    }



}
