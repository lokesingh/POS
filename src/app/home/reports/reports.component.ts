import { Component, OnInit, ViewChild } from '@angular/core';
import {CustomerInterface} from '../customers/customer-interface';
import {CustomerService} from '../customers/customer-services';
import {Product_TopService} from '../product-top/product_Top.services';
import {Product_TopInterface} from '../product-top/product-top.interface';
import {CategoriesProductInterface} from '../product/product.interface';
import {CategoriesProductService} from '../product/product.services';
import { ChartsModule } from 'ng2-charts';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { ModalComponent } from 'ng2-bs3-modal';
import { Http, Headers } from '@angular/http';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { StoreInterface} from '../stores/store-interface';
import {StoreService } from '../stores/store.services';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import {Expense_Top_Interface} from '../expense-top-nav/expense-top.Interface';
import {Expense_TopService} from '../expense-top-nav/expense-top.services';
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  providers: [ CustomerService, Product_TopService,
               CategoriesProductService, StoreService, Expense_TopService]
})
export class ReportsComponent implements OnInit {
  customerInterfaces: CustomerInterface[];
  product_TopInterfaces: Product_TopInterface[];
  categoriesProductInterfaces: CategoriesProductInterface[];
  storeInterface:  StoreInterface[];
  ItemInterface: Product_TopInterface[];
  expenseInterface: Expense_Top_Interface[];
  IMyDrpOptions; _id1: string; _id2: string; _id3: string; _id4: string; _id5: string;
  count1: number;
  count2: number;
  count3: number;
  count4: number;
  count5: number;
   // this is used for  // Pie
   pieChartLabels= ["Kachori", "Dosha", "Dal Tadka", "sambhar", "Idli"];
  pieChartData = [];
  // call the model
  @ViewChild('myModal')
  clientstatus: ModalComponent;
  productstatus: ModalComponent;
  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40, 50, 40, 10, 45, 2], label: 'Expense'},
    {data: [10, 48, 40, 19, 86, 27, 90, 25, 35, 45, 85, 85], label: 'Revenue'},

  ];
  storestatus: ModalComponent;
  // variable declare
  customerName: string; datemodel: string; subtotal= 0;
  constructor(private  customerService: CustomerService, private router: Router, private http: Http,
              private product_TopService: Product_TopService, private storeService: StoreService,
              private categoriesProductService: CategoriesProductService, private expense_TopService: Expense_TopService ) { }






       pieChartType:string = 'pie';

      // events
      public chartClicked(e: any): void {
       // console.log(e);
      }

      public chartHovered(e:any):void {
       // console.log(e);
      }

      // this is used for line chart
      public lineChartColors:Array<any> = [];
      public lineChartLegend:boolean = true;
      public lineChartType:string = 'line';
      public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','Octomber','Novmber','December'];
      public lineChartOptions:any = {
        responsive: true
      };



  ngOnInit() {
    // get request call
    this.customerService.getCustomerRequest()
    .subscribe(  customerInterfaces => {

      console.log(customerInterfaces);
       this.customerInterfaces =   customerInterfaces;

      // console.log(this.customerInterfaces);
    });

    // get value from product
    this.product_TopService.getProduct_TopRequest()
    .subscribe(  product_TopInterfaces  => {
      console.log( product_TopInterfaces )
       this.product_TopInterfaces  = product_TopInterfaces;
    });
     // get request call
     this.categoriesProductService.getCategoriesProductRequest()  // get the teacher value
     .subscribe( categoriesProductInterfaces  => {
      // console.log( categoriesProductInterfaces );
        this.categoriesProductInterfaces  = categoriesProductInterfaces;
     });

     // get request for store call
     this.storeService.getStoreRequest()  // get the teacher value
          .subscribe(  storeInterfaces => {
            console.log( storeInterfaces )
             this.storeInterface =  storeInterfaces;
             console.log(this.storeInterface);
          });
    // get item value
    this.http.get('http://172.104.42.153:3005/api/item/' )
    .map((res) => res.json())
    .subscribe( ItemInterface => {
    });


     // This Request  is used for get the value of the Pie Chart
     this.http.get('http://172.104.42.153:3005/api/Chart_Value' )
     .map((res) => res.json())
     .subscribe( ItemInterface => {
      this.count1 = ItemInterface.itemDetail[0].count;
      this.count2 = ItemInterface.itemDetail[1].count;
      this.count3 = ItemInterface.itemDetail[2].count;
      this.count4 = ItemInterface.itemDetail[3].count;
      this.count5 = ItemInterface.itemDetail[4].count;
      this._id1 = ItemInterface.itemDetail[0]._id;
      this._id2 = ItemInterface.itemDetail[1]._id;
      this._id3 = ItemInterface.itemDetail[2]._id;
      this._id4 = ItemInterface.itemDetail[3]._id;
      this._id5 = ItemInterface.itemDetail[4]._id;


      this.pieChartData.push(this.count1, this.count2, this.count3, this.count4, this.count5);
     // this.pieChartLabels.push(this._id1, this._id2, this._id3, this._id4, this._id5);
       console.log('count',   this.pieChartLabels);

});
                          // This request is used for line bar chart to get expense value
                           this.expense_TopService.getExpense_TopsRequest()
                              .subscribe(  expenseInterfaces => {
                                this.expenseInterface = expenseInterfaces.expenseCategory;
                                console.log('expenseInterface', this.expenseInterface);

                        });

  }

  // this is function apply for modal open
  open() {
    this.clientstatus.open();

}




  // get the value
  ClientApi(customerName, datemodel) {
    alert('name');
     let newValue = {
      customerName : customerName,
      datemodel   : datemodel
     };
     var headers = new Headers();
     headers.append('Content-Type', 'application/json');
    this.http.post('http://172.104.42.153:3005/api/item_get_Customer_value ', newValue,  { headers: headers})
        .map((res) => res.json())
        .subscribe( ItemInterface => {
          this.ItemInterface = ItemInterface.itemDetail;
          console.log('Respoanse Value', ItemInterface.itemDetail);
          console.log('newValue', newValue);
         // this.customerName = ItemInterface.itemDetail.customerName;


       });
  }



}
