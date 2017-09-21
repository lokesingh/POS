import { Component, OnInit, Injectable } from '@angular/core';
import {CKEditorModule} from 'ng2-ckeditor';
import { Observable } from 'rxjs/Observable';
import {  HttpModule } from '@angular/http';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { Http, Headers, Request, Response, RequestOptions } from '@angular/http';
import { HttpService} from './image.services';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import {SettingService} from './setting-services'
import { FileUploader } from 'ng2-file-upload';
import { SettingInterface} from './setting-interface';

@Component({
  selector: 'app-setting-demo',
  templateUrl: './setting-demo.component.html',
  styleUrls: ['./setting-demo.component.css'],
  providers:[ HttpService, SettingService]
})
export class SettingDemoComponent implements OnInit {

   // interface is deaclare for storage the value
    settingInterfaces :  SettingInterface[];
    settingInterface:  SettingInterface[];

    // variable deaclration
    id:any;
    private sub: any;
    companyName: string ;
    companyLogo:  string ;
    companyPhone:string ;
    companyCode: string ;
    companyDiscount: string ;
    companyTax: string ;
    companyNumberDecimal: number ;
    companyTimer: string;
    companyHeaderParagraph: string ;
    companyFooterParagraph: string ;
    compnayStripeSecretkey: string ;
    compnayStripePublishedKey: string ;
    CGST: string ;
    SGST: string ;
    IGST: string ;

  ngOnInit() {
     // get request call
     this.settingService.getSettingrRequest()
          .subscribe( settingInterfaces => {
            this.settingInterfaces = settingInterfaces.Setting[0]
            console.log( 'this.settingInterfaces',  this.settingInterfaces);
            this.companyName = settingInterfaces.Setting[0].companyName;
            this.companyPhone = settingInterfaces.Setting[0].companyPhone;
            this.companyCode = settingInterfaces.Setting[0].companyCode;
            this.companyDiscount = settingInterfaces.Setting[0].companyDiscount;
            this.CGST = settingInterfaces.Setting[0].CGST;
            this.IGST = settingInterfaces.Setting[0].IGST;
            this.SGST = settingInterfaces.Setting[0].SGST;
            this.companyNumberDecimal = settingInterfaces.Setting[0].this.companyNumberDecimal;
            this.compnayStripeSecretkey = settingInterfaces.Setting.this.compnayStripeSecretkey ;
            this.companyHeaderParagraph = settingInterfaces.Setting[0].this.companyHeaderParagraph;
            this.companyFooterParagraph = settingInterfaces.Setting[0].this.companyFooterParagraph;
            this.compnayStripeSecretkey = settingInterfaces.Setting[0].this.compnayStripeSecretkey ;
            this.compnayStripePublishedKey = settingInterfaces.Setting[0].this.compnayStripePublishedKey;
            console.log( 'this.settingInterfaces',  this.companyHeaderParagraph);
          });

  }
  addSetting() {
       console.log( this.companyName);
       const newUser = {
              companyName: this.companyName ,
              companyLogo:  this.companyLogo,
              companyPhone: this.companyPhone,
              companyCode: this.companyCode,
              companyDiscount: this.companyDiscount ,
              CGST: this.CGST,
              SGST: this.SGST,
              IGST: this.IGST,
              companyNumberDecimal: this.companyNumberDecimal,
              companyHeaderParagraph: this.companyHeaderParagraph,
              companyFooterParagraph: this.companyFooterParagraph ,
              compnayStripeSecretkey: this.compnayStripeSecretkey ,
              compnayStripePublishedKey: this.compnayStripePublishedKey

       };
              console.log(newUser);
              this.settingService.postSettingRequest(newUser)
                   .subscribe( settingInterface=> {
                   this.settingInterfaces.push(settingInterface);
   });
}

private apiBaseUrl = 'http://172.104.42.153:3005/uploadFile';
  headers: Headers = new Headers();

  constructor(private _http: Http, private settingService: SettingService ,private route : ActivatedRoute) {}

  /**
   * Handles the change event of the input tag,
   * Extracts the image file uploaded and
   * makes an Http request with the image file.
   */
  handleInputChange (event) {

    var image = event.target.files[0];
console.log('event target',event.target);
    var pattern = /image-*/;
    var reader = new FileReader();

    if (!image.type.match(pattern)) {
        console.error('File is not an image');
        //of course you can show an alert message here
        return;
    }


    let headers = new Headers();
    console.log('image name:',image);
    headers.set('Content-Type', 'application/octet-stream');
    headers.set('Upload-Content-Type', image.type)

    this.makeRequest('POST',image, headers).subscribe(
          response  => {this.handleSuccess(response);
            console.log('headers value',headers);
             console.log('post method response',this.handleSuccess(response) )},
          error =>  {this.handleError(error); }
        );

  }

  /**
   * Makes the HTTP request and returns an Observable
   */
  private makeRequest (
                        method: string, body = null,
                        headers: Headers = new Headers()): Observable<any>
  {
      let url = this.apiBaseUrl;
      this.headers = headers;
      if (method == 'GET') {
          let options = new RequestOptions({ headers: this.headers });
          return this._http.get(url, options)
                          .map(this.extractData)
                          .catch(this.extractError);
      } else if (method == 'POST') {
          let options = new RequestOptions({ headers: this.headers });
          return this._http.post(url, body, options)
                          .map(this.extractData)
                          .catch(this.extractError);
      }
  }

  /**
   * Extracts the response from the API response.
   */
  private extractData (res: Response) {
        let body = res.json();
        console.log('API response ',body);
        return body.response || { };
    }

  private extractError (res: Response) {
        let errMsg = 'Error received from the API';
        return errMsg;
    }

  private handleSuccess(response) {
    console.log('Successfully uploaded image',response);
    //provide your own implementation of handling the response from API
  }

  private handleError(errror) {
    console.error('Error uploading image')
    //provide your own implementation of displaying the error message
  }



}
