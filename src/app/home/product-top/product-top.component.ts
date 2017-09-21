import { Injectable,Component, ViewChild, OnInit,  Pipe, PipeTransform,Input, Output, ElementRef, EventEmitter, AfterViewInit } from '@angular/core';
import { ModalComponent } from 'ng2-bs3-modal';
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'
import { Http, Headers ,Response} from '@angular/http';
import {Router} from '@angular/router';
import {Product_TopService} from './product_Top.services';
import {Product_TopInterface}  from './product-top.interface';
import { SupplyInterface} from '../suppliers/supplers-interface';
import {SupplyService} from '../suppliers/supplers-services';
import {CategoriesProductInterface} from '../product/product.interface';
import {CategoriesProductService} from '../product/product.services';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';
import { Observable } from 'rxjs';
import {TypeFilterPipe} from './type-filter.pipe';
import {SupplierFilterPipe} from './supplier-filter.pipe';
import 'rxjs/add/operator/toPromise';
declare var $: any;


@Component({
  selector: 'app-product-top',
  templateUrl: './product-top.component.html',
   styleUrls: ['./product-top.component.css'],
  providers:[Product_TopService,SupplyService, CategoriesProductService ]
})

export class ProductTopComponent implements OnInit  {
  option: string;
  id:any
  csvData: any[] = [];


@ViewChild('myModal')
    modal: ModalComponent;
    modal2:  ModalComponent; // there are related to modal option.
    ViewModal: ModalComponent;
    ImageModal: ModalComponent;


// iterface declare  which is part of the   Product_Top component
   product_TopInterfaces: Product_TopInterface[];
   product_TopInterface :Product_TopInterface;
   product_modelInterface: Product_TopInterface[];
   typeSearch;

// interface declare which is part of the suppliers component
   supplyInterfaces: SupplyInterface[];

// interface declare which is part of the   CategoriesProduct
   categoriesProductInterfaces: CategoriesProductInterface[];

// variable declare
       productType: string ;
       productCode: string ;
       productName: string ;
       productCategory: string;
       productSupplier: string ;
       productPurchasePrice: string ;
       productTax: string ;
       productTaxMethod: string;
       productPriceINR: string;
       productUnit: string ;
       productAlertQuantity: string ;
       productDiscription: string ;
       productImage: string ;
       productParagraph: string ;
       postax:number;
       price:number;
       taxrate:number;
  constructor(private http: Http,
              private router: Router,
              private product_TopService: Product_TopService,
              private supplyService: SupplyService,
              private categoriesProductService: CategoriesProductService,private _rootNode: ElementRef ) { }
   // it is related to modal option


// this is declare for get the View Modal value show
   transferid(id){

     console.log('view the',id);
      // get the id from single value
    this.product_TopService.getProduct_TopmodalRequest(id )
    .subscribe(  product_modelInterface => {

       this.product_modelInterface =  product_modelInterface.ProductDetail
       this.productType = product_modelInterface.ProductDetail.productType
       this.productCode =  product_modelInterface.ProductDetail.productCode
       this.productName = product_modelInterface.ProductDetail.productName
       this.productCategory =  product_modelInterface.ProductDetail.productCategory
       this.productSupplier  =  product_modelInterface.ProductDetail.productSupplier
       this.productPurchasePrice = product_modelInterface.ProductDetail.productPurchasePrice
       this.productTax =  product_modelInterface.ProductDetail.productTax
       this.productTaxMethod = product_modelInterface.ProductDetail.productTaxMethod
       this.productPriceINR =  product_modelInterface.ProductDetail.productPriceINR
       this.productUnit =  product_modelInterface.ProductDetail.productUnit
       this.productAlertQuantity = product_modelInterface.ProductDetail.productAlertQuantity
       this.productDiscription =  product_modelInterface.ProductDetail.productDiscription
       this.productImage = product_modelInterface.ProductDetail.productImage
       this.productParagraph =  product_modelInterface.ProductDetail.productParagraph
       console.log( 'proDuct Value show',product_modelInterface)
    });

   }
  ngOnInit() {
     // get method for product-top component
     this.product_TopService.getProduct_TopRequest()
          .subscribe(  product_TopInterfaces  => {
            console.log( product_TopInterfaces )
             this.product_TopInterfaces  = product_TopInterfaces;
          });


      // get request call for supply get request
     this.supplyService.getSupplyRequest()
          .subscribe(  supplyInterfaces => {
            console.log( supplyInterfaces)
             this.supplyInterfaces =  supplyInterfaces
             console.log(this.supplyInterfaces);
          });
      // get request call
     this.categoriesProductService.getCategoriesProductRequest()
          .subscribe( categoriesProductInterfaces  => {
            console.log( categoriesProductInterfaces )
             this.categoriesProductInterfaces  = categoriesProductInterfaces
          });

  }


    // button click and set routing
     redirect(id) {
    this.router.navigate(['home/product_top_edit',id]);
  }

  // this function is used for add modal value
 addProduct_Top() {

       const newUser = {
              productType: this.productType,
              productCode:this.productCode,
              productName: this.productName,
              productCategory: this.productCategory,
              productSupplier: this.productSupplier,
              productPurchasePrice: this.productPurchasePrice,
              productTax: this.productTax,
              productTaxMethod: this.productTaxMethod,
              productPriceINR: this.productPriceINR,
              productUnit: this.productUnit,
              productAlertQuantity: this.productAlertQuantity,
              productDiscription: this.productDiscription,
              productImage: this.productImage,
              productParagraph: this.productParagraph
       }
              console.log(newUser);

              this.product_TopService. postProduct_TopRequest(newUser)
                   .subscribe( product_TopInterface=> {
                   this.product_TopInterfaces.push(product_TopInterface);
              // get the Value
              this.product_TopService.getProduct_TopRequest()
                   .subscribe(  product_TopInterfaces  => {
                     console.log( product_TopInterfaces )
                      this.product_TopInterfaces  = product_TopInterfaces
                   });
      })

       if(this.productType ==="Standard") {

       } else if(this.productType ==="Combination") {
        alert(' this is Combination part');
       }
}

// apply  for Delete method request
  deleteProduct_Top(id: any) {
         var product_TopInterfaces = this.product_TopInterfaces;
         this.product_TopService. deleteProduct_TopRequest(id)
             .subscribe(data => {
              if (data.n == 1) {
                 for ( let i = 0 ; i  < product_TopInterfaces.length; i++) {
                      if (product_TopInterfaces[i]._id == id)
                      // tslint:disable-next-line:one-line
                      {
                      product_TopInterfaces.splice(i, 1);
                      }
                 }
              }
            })
    }
// this function is related to show and hide option in modal option
 onSelect(option: string) {
    this.option = option

  }

  // download request csv file
 url ='http://172.104.42.153:3005/api/pathToYourDownload';
  sendDownloadRequest(url) {
    console.log('show the url',url);
    let headers = new Headers({
        'Content-Type': 'text/csv'
    });
    return this.http.get('http://172.104.42.153:3005/api/pathToYourDownload', { headers: headers })
        .toPromise()
        .then(res => {
            if(res && res["_body"]){
                this.downloadFile(res["_body"]);
            }
        })
        .catch(this.handleError);
}

handleError(error){
    console.log("error--  "+error);
}

downloadFile(data){
    let blob = new Blob(['\ufeff' + data], { type: 'text/csv;charset=utf-8;' });
    let dwldLink = document.createElement("a");
    let url = URL.createObjectURL(blob);
    let isSafariBrowser = navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1;
    if (isSafariBrowser) {  //if Safari open in new window to save file with random filename.
    dwldLink.setAttribute("target", "_blank");
}
    dwldLink.setAttribute("href", url);
    dwldLink.setAttribute("download", "Product.csv");
    dwldLink.style.visibility = "hidden";
    document.body.appendChild(dwldLink);
    dwldLink.click();
    document.body.removeChild(dwldLink);
}

// function apply for sorting
CustomSearch(filtersupp,filtertype) {
  console.log('filtersupp',filtersupp);
  console.log('filtertype',filtertype);
  this.typeSearch  = filtertype;
  let supplerSearch = filtersupp;

}



}
