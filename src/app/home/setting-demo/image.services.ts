import { Injectable }     from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {
  extractData: any;
  handleError: any;
  private apiBaseUrl = 'http://172.104.42.153:3005/uploadFile';
  headers: Headers = new Headers();

  constructor (private _http: Http) {}

  makeRequest (method: string, body = null, headers: Headers = new Headers()) {
      let url = this.apiBaseUrl;
      this.headers = headers;
      if (method == 'GET') {
          let options = new RequestOptions({ headers: this.headers });
          return this._http.get(url, options)
                          .map(this.extractData)
                          .catch(this.handleError);
      } else if (method == 'POST') {
          let options = new RequestOptions({ headers: this.headers });
          return this._http.post(url, body, options)
                          .map(this.extractData)
                          .catch(this.handleError);
      }
  }

}
