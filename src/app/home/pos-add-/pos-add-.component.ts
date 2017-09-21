import { Component,  ViewChild, OnInit,Pipe, PipeTransform , NgZone} from '@angular/core';
import {Product_TopService} from '../product-top/product_Top.services';
import {Product_TopInterface} from '../product-top//product-top.interface';
import { ModalComponent } from 'ng2-bs3-modal';
import { StoreTableInterface} from '../store-table-attach/store_table.interface';
import {CustomerInterface} from '../customers/customer-interface';
import {CustomerService} from '../customers/customer-services';
import {Router,ActivatedRoute,Params} from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {WaitersInterface} from '../waiters/waiters-Interface';
import {  Response, Headers, RequestOptions, Http, HttpModule } from '@angular/http';
import {WaiterService} from '../waiters/waiters.services';
import {CategoriesProductInterface} from '../product/product.interface';
import {CategoriesProductService} from '../product/product.services';
import {POSService } from './pos.add.services';
import {PosInterface} from './pos.add.interface';
import {Pos} from './interface';
import {Item} from './interface';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';
import jsPDF from 'jspdf'


@Component({
  selector: 'app-pos-add-',
  templateUrl: './pos-add-.component.html',
  styleUrls: ['./pos-add-.component.css'],
  providers:[Product_TopService, CustomerService, WaiterService,
             CategoriesProductService, POSService]
})
export class PosAddComponent implements OnInit {
  @ViewChild('myModal')
  customermodal: ModalComponent;
  paymentmodal: ModalComponent;
  receiptmodal:  ModalComponent;
  id:any;
  date;
  option: string;
  private sub: any;

  // interface declare
  product_TopInterfaces: Product_TopInterface[];
  customerInterfaces: CustomerInterface[];
  waitersInterfaces: WaitersInterface[];
  posInterfac: PosInterface[];
  posInterfaces: PosInterface[];
  posInterface: PosInterface[];
  posArray: PosInterface[];

  categoriesProductInterfaces: CategoriesProductInterface[];

  // varibale deaclare
   // variable dealcreation
   customerName: string ; customerPhone: string ; customerEmail: string ;
   customerDiscount: string ; customerCreatedAt: string ; customerState: string;
   customerAddress: string; POSquanity: string; dummy: string; count = 0;
   CGST: string; IGST: string; SGST: string; productPriceINR: string; productName: string;
   POScustomerName: string ; total: number; POSproduct_Name: string;
    POSwaiterName: string; POStotalPrize: number; waiterName: string; POSsubtotal= 0;
  Statecontent: string; price; difference; Posid: string;
  POScustomer: string; POSphon: string; POSstate: string;
  checknumber: string; creditcardnumber: string; differentIGST: string;
  creditcardholder: string; differentCGST ; differentSGST; item;  store;
  show_count: string; show_total: string; show_customerName: string; show_waitername: string;
   private POSValue: Array<Pos>; POScustomerState: string; show_id: string; filterName: string = null;
   private data= []; ArrayItem: Array<string>  = [];
   AddCart= [];


  constructor(private http: Http, private product_TopService: Product_TopService,
              private customerService: CustomerService,
              private router: Router,
              private route: ActivatedRoute,
              private waiterService: WaiterService,
              private categoriesProductService: CategoriesProductService,
               private pOSService: POSService, private zone: NgZone) {
                this.POSValue = [];

                this.date = new  Date;
               }
  // cancel function declare
  reject() {
    alert('Are you sure ? You will not be able to recover the Holds later!');

   // apply  for Delete method request


}

  ngOnInit() {
    // params define
    this.route.params.subscribe(params => this.id=params);
    // console.log('this is params  id value',this.id);


     // get single value  request call ans show the value on display
     this. pOSService.getItemSingleRequest(this.id )
     .subscribe(  PosInterface => {
        this.ArrayItem  = PosInterface.itemDetail;
        this.posInterface = PosInterface.itemDetail;
        this.posInterface.forEach((x: any) => {
          x.products.forEach((y: any) => {

           console.log('value', y.IGST);
          });
        });
        this.show_customerName = PosInterface.itemDetail[0].customerName;
        this.show_id = PosInterface.itemDetail[0].Posid;
        this.show_waitername =   PosInterface.itemDetail[0].WaiterNameName;
        this.customerState =   PosInterface.itemDetail[0].customerState;
        this.count = parseInt(PosInterface.itemDetail[0].count) + this.count;
        this.POSsubtotal= parseFloat(PosInterface.itemDetail[0].subtotal) + this.POSsubtotal;
        this.AddCart = PosInterface.itemDetail[0].products;

        // console.log( 'show the item detail',PosInterface);
       // console.log('show the single value  detail', this.show_count)

     });
   // get method for product-top component
   this.product_TopService.getProduct_TopRequest()
   .subscribe(  product_TopInterfaces  => {
    // console.log('get value single', product_TopInterfaces )
      this.product_TopInterfaces  = product_TopInterfaces;
   });

   // get request method for Customer Component
   this.customerService.getCustomerRequest()  // get the teacher value
   .subscribe(  customerInterfaces => {
    // console.log(customerInterfaces)
      this.customerInterfaces =   customerInterfaces;
     // console.log(this.customerInterfaces);
   });

   // get request method used for Waiter Component
   this.waiterService.getWaitersRequest()
   .subscribe(  waitersInterfaces => {
     // console.log( waitersInterfaces)
      this.waitersInterfaces =  waitersInterfaces;
   });


   // get request  method used for Category Product compoent
   // get request call
   this.categoriesProductService.getCategoriesProductRequest()  // get the teacher value
   .subscribe( categoriesProductInterfaces  => {
     // console.log( 'category value',categoriesProductInterfaces.categoryproductName )
      this.categoriesProductInterfaces  = categoriesProductInterfaces;
   });



}
 // apply the post method request  for Customer Component
 // apply for post method request
 addCustomer() {
  // console.log( this.customerName);
      const newCustomers = {
             customerName: this.customerName,
             customerPhone: this.customerPhone,
             customerState: this.customerState,
             customerAddress: this.customerAddress,
             customerEmail: this.customerEmail,
             customerDiscount: this.customerDiscount,
             customerCreatedAt: new Date
      }
           //  console.log( newCustomers);
             this.customerService.postCustomerRequest( newCustomers)
                  .subscribe( customerInterface => {
                  this.customerInterfaces.push(customerInterface);
             // get the value

             this.customerService.getCustomerRequest()
             .subscribe(  customerInterfaces => {
               // console.log(customerInterfaces)
                this.customerInterfaces =   customerInterfaces;
               // console.log(this.customerInterfaces);
             });

  })
    this.router.navigate(['home/customers']);
}
// this function is used fot filter category
onSelect(dummy: string) {
  this.dummy = dummy
 // console.log('dummy',this.dummy);

}
onclick(valuee: string){
  let clickon;
  this.onSelect(this.dummy)
 // console.log('valuee',this.dummy);
}
// this function is used for call the selectCustomer()
selectCustomer(name){

    this.Statecontent = name;
 // console.log('show the ',name);
}
// value print on button click and save the value
valuepass(productName, productPriceINR, productTax, productTaxMethod) {

  this.productName = productName;
  this.productPriceINR = productPriceINR;
  this.POSquanity = ' 1 ';
  // console.log('tax',this.Statecontent)
    if (this.Statecontent === 'MP' ||  this.customerState === 'MP' ) {
          let Tax = productTax / 2;
          let tax= Tax.toString;
         // this.data.push( productTax);
         // console.log('tax value',  this.data.push( productTax));
          this.CGST = Tax.toString();
          this.SGST = Tax.toString();
          if (productTaxMethod === 'exclusive') {
            // alert('this is exclusive');

           this.differentCGST  =  parseFloat(productPriceINR) / ((parseFloat(this.CGST) / 100) + 1 );
          // console.log(' this.differentCGST', this.differentCGST)
           this.differentSGST  =  parseFloat(productPriceINR) / ((parseFloat(this.SGST) / 100) + 1 );



            this.price =  parseFloat(this.differentCGST ) +  parseFloat(this.differentSGST ) + parseFloat(productPriceINR);

          } else {

            // alert('this is inclusive');

            this.differentCGST  = ( parseFloat(productPriceINR) * parseFloat(this.CGST)) / 100;
            this.differentSGST  =  (parseFloat(productPriceINR) *parseFloat(this.SGST)) / 100;
            this.price =  parseFloat(productPriceINR); //  ((parseFloat(this.CGST) + parseFloat(this.SGST))) /100

           // console.log('console.log',this.price);
           // this.price =   parseFloat(this.difference) //+ parseFloat(productPriceINR)

          }

    } else {
           let numberr =  this.data;

      this.IGST = productTax.toString();
      // console.log('tax', this.IGST);
      if (productTaxMethod === 'exclusive') {

        this.difference  =  parseFloat(productPriceINR) / ((parseFloat(this.IGST)  / 100) + 1 );
        this.differentIGST = this.difference.toString;

                    this.price =   parseFloat(this.difference) + parseFloat(productPriceINR);

      } else {
        // alert('this is inclusive');
        this.difference=  parseFloat(productPriceINR);  // * (parseFloat(this.IGST) ) /100
        this.differentIGST = this.difference.toString;

                   // console.log('console.log',this.price);
                    this.price =   parseFloat(this.difference); // + parseFloat(productPriceINR)
      }
    }
    this.AddCart.push( {
      productName : productName,
      productPriceINR: productPriceINR,
      POSquanity: this.POSquanity,
      CGST: this.CGST,
      SGST: this.SGST,
      IGST: this.IGST,
      price: this.price,
      difference: this.difference,
      differentCGST: this.differentCGST,
      differentSGST : this.differentSGST,
      differentIGST: this.differentIGST

} );
                // functin used for add the value
           /*   var  round = 0;
              if ( !this.ArrayItem.length ) {

                this.AddCart.push( {
                      productName : productName,
                      productPriceINR: productPriceINR,
                      POSquanity: this.POSquanity,
                      CGST: this.CGST,
                      SGST: this.SGST,
                      IGST: this.IGST,
                      price: this.price,
                      difference: this.difference,
                      differentCGST: this.differentCGST,
                      differentSGST : this.differentSGST,
                      differentIGST: this.differentIGST

                } );
                console.log(' this.AddCart', this.AddCart);

              } else {
                this.ArrayItem.forEach((x: any) =>   {
                  x.products.forEach(element => {
                    if (element.productName === this.productName) {
                        round++;
                        console.log('round', round);
                    } else {
                    console.log('round', round);
                    }
                  });
                });

                if (round === 0 ) {

                  this.AddCart.push( {
                    productName : productName,
                    productPriceINR: productPriceINR,
                    POSquanity: this.POSquanity,
                    CGST: this.CGST,
                    SGST: this.SGST,
                    IGST: this.IGST,
                    price: this.price,
                    difference: this.difference,
                    differentCGST: this.differentCGST,
                    differentSGST : this.differentSGST,
                    differentIGST: this.differentIGST

              } );
                } else {
                  this.ArrayItem.forEach((x: any) =>   {
                    x.products.forEach(element => {
                      if (element.productName === this.productName) {
                          round++;
                          console.log('round', round);
                      } else {
                      console.log('round', round);
                      }
                    });
                  });

                }

              }*/









         console.log('finally ADDCart',this.AddCart);




     // let data= this.POSValue.push( this.item)
   this.count = this.count + 1 ;

  this.POSsubtotal = this.POSsubtotal  + this.price;
  // console.log('Array value',this.POSValue);
  // console.log('show the all the value in array form',this.count);
     // add the Item


    if (this.id.id === this.show_id )
     {
       let newUser = {
      products: this.AddCart,
      count: this.count,
      subtotal: this.POSsubtotal,

    }

      // console.log(newUser);
       let  headers = new Headers();
       headers.append('Content-Type', 'application/json');
       // console.log('show the value', newUser);
       alert('Sucessful Update your Data');
       return this.http.put('http://172.104.42.153:3005/api/item_update/' + this.id.id , newUser, { headers: headers  })
       .map((res) => res.json())
       .subscribe(
        data => {  // console.log('update value', data);
        this.pOSService.getItemSingleRequest(this.id )

         // get value
        .subscribe(  PosInterface => {
           this.posInterface = PosInterface;
           this.show_id = PosInterface.itemDetail[0].Posid;
        });
        console.log('update value', newUser)

        });



    } else {
      let newValue = {
        Posid  : this.id.id,
        customerName: this.customerName,
        customerState: this.POScustomerState,
        WaiterName: this.POSwaiterName,
        products:  this.AddCart,
        count: this.count,
        subtotal: this.POSsubtotal
      }
      console.log(' newValue.products', newValue);
      alert('Data Successfully Store ');
    /*  this.pOSService.postItemRequest(newValue).subscribe(posInterface => {
        this.posInterface.push(posInterface);
        console.log('ADD Value', posInterface);
          // get value
        this. pOSService.getItemSingleRequest(this.id ).subscribe(  PosInterface => {
          this.posInterface = PosInterface;
          this.show_id = PosInterface.itemDetail[0].Posid;
        });
      });*/
      let  headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post('http://172.104.42.153:3005/api/item_post_value' , newValue, { headers: headers  })
      .map((res: Response) => console.log('Response', res.json()))
      .subscribe(
       data => {  // console.log('update value', data);

       this.pOSService.getItemSingleRequest(this.id )

        // get value
       .subscribe(  PosInterface => {
          this.posInterface = PosInterface;
          this.show_id = PosInterface.itemDetail[0].Posid;

       });
      });
      console.log( 'newValue' , newValue);
    }
}
 // apply  for Delete method request
 deletePOS(productPriceINR, Poss) {
      let index = this.AddCart.indexOf(productPriceINR);
      this.AddCart.splice(index, 1);
      this.count = this.count - 1 ;
      this.POSsubtotal = this.POSsubtotal - parseInt(productPriceINR) ;
      // console.log('delete value',productPriceINR);
  }
payment(){

}
clearSearch() {
  this.POScustomerName =  '';
  this.POSwaiterName = '';
}
// here we have to add the all the value
submitValue() {
  const newvalueAdd = {
     checknumber: this.checknumber,
     date: this.date,
     creditcardnumber : this.creditcardnumber,
     creditcardholder: this.creditcardholder,
}
// console.log(newvalueAdd);
var headers = new Headers();
headers.append('Content-Type', 'application/json');
// console.log('show the value', newvalueAdd)
alert('Payment Successfully Done ');
return this.http.put('http://172.104.42.153:3005/api/item_Payment_update/' + this.id.id , newvalueAdd, { headers: headers  })
.map((res) => res.json())
.subscribe(
 data =>   console.log('update value', data));


}
// add the all the product save in data base


       // After Payment all the page load
       reset() {
         window.location.reload();
       }

       // This is function used for PDF print Generator
       public download() {

                var doc = new jsPDF();
                doc.text(20, 20, 'Hello world!');
                doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
                doc.addPage();
                doc.text(20, 20, 'Do you like that?');

                // Save the PDF
                doc.save('Product.pdf');
            }
}
