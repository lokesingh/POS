import { Component, OnInit } from '@angular/core';
import {  Response, Headers, RequestOptions, Http } from '@angular/http';
import {Router,ActivatedRoute, Params, Data } from '@angular/router';
import { FormsModule } from '@angular/forms';
import 'rxjs/add/operator/map';
import {Product_TopService} from '../product-top/product_Top.services';
import {Product_TopInterface}  from '../product-top/product-top.interface';
import { Ng2FilterPipeModule } from 'ng2-filter-pipe';

@Component({
  selector: 'app-product-top-edit',
  templateUrl: './product-top-edit.component.html',
  styleUrls: ['./product-top-edit.component.css'],
  providers:[Product_TopService]
})
export class ProductTopEditComponent implements OnInit {
   option: string;
  // interface declare
      product_TopInterface: Product_TopInterface[];

  //variable declare
      id:any;
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

      constructor(private http: Http,
        private router: Router,
        private product_TopService: Product_TopService,
        private route : ActivatedRoute) {
         }
  ngOnInit() {
      // params define
      this.route.params.subscribe(params => this.id=params);
      console.log('this is params  id value',this.id);

      // get request call
     this.product_TopService.getProduct_TopSingleRequest(this.id )
     .subscribe(  product_TopInterface => {

        this.product_TopInterface =  product_TopInterface.ProductDetail
        this.productType =  product_TopInterface.ProductDetail.productType
        this.productCode =  product_TopInterface.ProductDetail.productCode
        this.productName =  product_TopInterface.ProductDetail.productName
        this.productCategory =  product_TopInterface.ProductDetail.productCategory
        this.productSupplier  =  product_TopInterface.ProductDetail.productSupplier
        this.productPurchasePrice =  product_TopInterface.ProductDetail.productPurchasePrice
        this.productTax =  product_TopInterface.ProductDetail.productTax
        this.productTaxMethod =  product_TopInterface.ProductDetail.productTaxMethod
        this.productPriceINR =  product_TopInterface.ProductDetail.productPriceINR
        this.productUnit =  product_TopInterface.ProductDetail.productUnit
        this.productAlertQuantity =  product_TopInterface.ProductDetail.productAlertQuantity
        this.productDiscription =  product_TopInterface.ProductDetail.productDiscription
        this.productImage =  product_TopInterface.ProductDetail.productImage
        this.productParagraph =  product_TopInterface.ProductDetail.productParagraph


        console.log( 'proDuct Value show',product_TopInterface)
     });
  }


  updateProduct_Top() {
              const newUser = {
                productType: this.productType,
                productCode: this.productCode,
                productName:  this.productName,
                productCategory:  this.productCategory,
                productSupplier:  this.productSupplier,
                productPurchasePrice:  this.productPurchasePrice,
                productTax:  this.productTax,
                productTaxMethod:  this.productTaxMethod,
                productPriceINR:  this.productPriceINR,
                productUnit:  this.productUnit,
                productAlertQuantity:  this.productAlertQuantity,
                productDiscription:  this.productDiscription,
                productParagraph:  this.productParagraph
          }
              console.log(newUser);
               var headers = new Headers();
               headers.append('Content-Type', 'application/json');
               console.log('show the value',newUser)
               alert('Sucessful Update your Data');
               return this.http.put('http://172.104.42.153:3005/api/product_update/'+this.id.id ,newUser, { headers: headers  })
               .map((res) => res.json())
               .subscribe(
                data => console.log(data))

              }
  // this function is related to show and hide option in modal option
      onSelect(option: string) {
      this.option = option

}

}
